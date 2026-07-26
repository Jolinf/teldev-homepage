import axios, { AxiosError } from 'axios';

/**
 * Microsoft Graph mail sender, ported from artisan-app's Backend/src/config/mailer.ts
 * (same client-credentials + /users/{sender}/sendMail approach), scoped down to
 * what the TelDev contact form needs: one sender, one recipient, no channels.
 *
 * Required env vars (Vercel project settings):
 *   GRAPH_TENANT_ID
 *   GRAPH_CLIENT_ID
 *   GRAPH_CLIENT_SECRET
 * Optional (both already default to the right addresses):
 *   CONTACT_SENDER_EMAIL     (default: noreply@teldev.org)
 *   CONTACT_RECIPIENT_EMAIL  (default: contact@teldev.org)
 *
 * The Azure AD app registration needs the Mail.Send APPLICATION permission
 * (admin-consented), and noreply@teldev.org must be a real, licensed mailbox
 * in the same tenant — Graph sends AS that mailbox, it doesn't need its own
 * password. See the summary delivered alongside this change for the full
 * app-registration checklist; none of that can be done from code.
 */

const graphTenantId = process.env.GRAPH_TENANT_ID;
const graphClientId = process.env.GRAPH_CLIENT_ID;
const graphClientSecret = process.env.GRAPH_CLIENT_SECRET;
const graphTimeout = Number(process.env.GRAPH_TIMEOUT_MS || 30000);

export const CONTACT_SENDER_EMAIL = process.env.CONTACT_SENDER_EMAIL || 'noreply@teldev.org';
export const CONTACT_RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL || 'contact@teldev.org';

const graphTokenUrl = graphTenantId
  ? `https://login.microsoftonline.com/${graphTenantId}/oauth2/v2.0/token`
  : '';

type GraphRecipient = {
  emailAddress: { address: string };
};

type GraphMailPayload = {
  sender: string;
  subject: string;
  text: string;
  html: string;
  to: string[];
  replyTo?: string[];
};

export const isGraphConfigured = () =>
  Boolean(graphTenantId && graphClientId && graphClientSecret);

const getGraphAccessToken = async () => {
  if (!graphTenantId || !graphClientId || !graphClientSecret) {
    throw new Error('Microsoft Graph email credentials are not configured');
  }

  const tokenBody = new URLSearchParams({
    client_id: graphClientId,
    scope: 'https://graph.microsoft.com/.default',
    client_secret: graphClientSecret,
    grant_type: 'client_credentials',
  });

  const response = await axios.post(graphTokenUrl, tokenBody, {
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    timeout: graphTimeout,
  });

  return response.data.access_token as string;
};

export const sendGraphEmail = async ({ sender, subject, text, html, to, replyTo }: GraphMailPayload) => {
  if (!isGraphConfigured()) {
    throw new Error('Microsoft Graph email credentials are not configured');
  }

  const accessToken = await getGraphAccessToken();
  const toRecipients: GraphRecipient[] = to.map((address) => ({
    emailAddress: { address },
  }));

  const body = {
    message: {
      subject,
      body: {
        contentType: 'HTML',
        content: html || text,
      },
      toRecipients,
      replyTo: replyTo?.map((address) => ({ emailAddress: { address } })),
    },
    saveToSentItems: true,
  };

  const response = await axios.post(
    `https://graph.microsoft.com/v1.0/users/${encodeURIComponent(sender)}/sendMail`,
    body,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },
      timeout: graphTimeout,
    }
  );

  return { status: response.status };
};

export const getGraphErrorDetails = (error: unknown) => {
  const axiosError = error as AxiosError<any>;
  return {
    status: axiosError.response?.status,
    code: axiosError.code,
    response: axiosError.response?.data,
    message: error instanceof Error ? error.message : String(error),
  };
};

export const escapeHtml = (value: string) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
