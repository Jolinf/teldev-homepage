import axios, { type AxiosError } from 'axios';

/**
 * Contact form -> Microsoft Graph mailer. Ported from the pre-redesign api/contact.ts
 * (see docs/redesign/AUDIT.md) — the brief's own stack table specifies Resend, but the
 * live deployment already sends through Microsoft Graph with real, working credentials,
 * so per the brief's ground rule 2 ("if it conflicts, keep the old behaviour working and
 * flag it") this keeps Graph rather than introducing a second provider.
 *
 * Required env vars (Vercel project settings): GRAPH_TENANT_ID, GRAPH_CLIENT_ID,
 * GRAPH_CLIENT_SECRET. Optional: GRAPH_TIMEOUT_MS, CONTACT_SENDER_EMAIL (default
 * noreply@teldev.org), CONTACT_RECIPIENT_EMAIL (default contact@teldev.org),
 * CONTACT_EMAIL_LOGO_URL.
 */

const graphTenantId = process.env.GRAPH_TENANT_ID;
const graphClientId = process.env.GRAPH_CLIENT_ID;
const graphClientSecret = process.env.GRAPH_CLIENT_SECRET;
const graphTimeout = Number(process.env.GRAPH_TIMEOUT_MS || 30000);

const CONTACT_SENDER_EMAIL = process.env.CONTACT_SENDER_EMAIL || 'noreply@teldev.org';
const CONTACT_RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL || 'contact@teldev.org';

const BRAND_NAME = 'TELDEV Technologies';
const BRAND_ACCENT = '#1C6CFE';
const BRAND_ACCENT_SOFT = '#eaf1ff';
const BRAND_DARK = '#0F1729';
const BRAND_TAGLINE = 'Bringing technology to you.';

export function isGraphConfigured() {
  return Boolean(graphTenantId && graphClientId && graphClientSecret);
}

const escapeHtml = (value: unknown) =>
  String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');

const formatValue = (value?: string | null) => {
  const trimmed = String(value ?? '').trim();
  return trimmed ? trimmed : 'Not provided';
};

async function getGraphAccessToken(): Promise<string> {
  if (!graphTenantId || !graphClientId || !graphClientSecret) {
    throw new Error('Microsoft Graph email credentials are not configured');
  }
  const tokenBody = new URLSearchParams({
    client_id: graphClientId,
    scope: 'https://graph.microsoft.com/.default',
    client_secret: graphClientSecret,
    grant_type: 'client_credentials',
  });
  const response = await axios.post(
    `https://login.microsoftonline.com/${graphTenantId}/oauth2/v2.0/token`,
    tokenBody,
    { headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, timeout: graphTimeout }
  );
  return response.data.access_token as string;
}

async function sendGraphEmail(params: { sender: string; subject: string; text: string; html: string; to: string[]; replyTo: string[] }) {
  const { sender, subject, text, html, to, replyTo } = params;
  const accessToken = await getGraphAccessToken();
  const body = {
    message: {
      subject,
      body: { contentType: 'HTML', content: html || text },
      toRecipients: to.map((address) => ({ emailAddress: { address } })),
      replyTo: replyTo.map((address) => ({ emailAddress: { address } })),
    },
    saveToSentItems: true,
  };
  return axios.post(`https://graph.microsoft.com/v1.0/users/${encodeURIComponent(sender)}/sendMail`, body, {
    headers: { Authorization: `Bearer ${accessToken}`, 'Content-Type': 'application/json' },
    timeout: graphTimeout,
  });
}

export interface ContactFields {
  name: string;
  email: string;
  enquiryType: string;
  service: string;
  message: string;
}

function buildContactNotificationEmail(fields: ContactFields, submittedAt: Date) {
  const safeName = escapeHtml(fields.name);
  const submittedAtLabel = `${submittedAt.toLocaleString('en-GB', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'UTC' })} UTC`;

  const details: Array<{ label: string; value: string }> = [
    { label: 'Name', value: formatValue(fields.name) },
    { label: 'Email', value: formatValue(fields.email) },
    { label: "I'm getting in touch about", value: formatValue(fields.enquiryType) },
    { label: 'Service of interest', value: formatValue(fields.service) },
    { label: 'Message', value: formatValue(fields.message) },
    { label: 'Submitted at', value: submittedAtLabel },
  ];

  const logoUrl = process.env.CONTACT_EMAIL_LOGO_URL || '';
  const logoMarkup = logoUrl
    ? `<img src="${escapeHtml(logoUrl)}" alt="${escapeHtml(BRAND_NAME)}" style="width:128px;max-width:160px;height:auto;display:block;margin:0 auto 22px;" />`
    : `<div style="text-align:center;font-size:24px;font-weight:800;letter-spacing:.02em;color:${BRAND_DARK};margin-bottom:22px;">${escapeHtml(BRAND_NAME)}</div>`;

  const detailMarkup = `
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin:22px 0;background:#f8fafc;border:1px solid #d9e2e7;">
      ${details
        .map(
          (detail) => `
        <tr>
          <td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;color:#64748b;font-size:12px;text-transform:uppercase;letter-spacing:.06em;font-weight:700;width:42%;vertical-align:top;">${escapeHtml(detail.label)}</td>
          <td style="padding:12px 14px;border-bottom:1px solid #e2e8f0;color:${BRAND_DARK};font-size:14px;font-weight:700;">${escapeHtml(detail.value)}</td>
        </tr>
      `
        )
        .join('')}
    </table>
  `;

  const text = [
    `${BRAND_NAME}: New enquiry`,
    '',
    `${fields.name} submitted the contact form on teldev.org. Details below.`,
    '',
    ...details.map((detail) => `${detail.label}: ${detail.value}`),
    '',
    'Reply directly to this email to reach the sender.',
    '',
    'The TELDEV Technologies website',
    BRAND_TAGLINE,
  ].join('\n');

  const html = `
    <!doctype html>
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New enquiry</title>
      </head>
      <body style="margin:0;padding:0;background:#f4f7f8;font-family:Arial,Helvetica,sans-serif;color:#111827;">
        <div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent;">${safeName} submitted the contact form on teldev.org.</div>
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f4f7f8;padding:28px 12px;">
          <tr>
            <td align="center">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:620px;background:#ffffff;border:1px solid #d9e2e7;border-radius:8px;overflow:hidden;">
                <tr>
                  <td style="padding:34px 34px 26px;border-top:5px solid ${BRAND_ACCENT};">
                    ${logoMarkup}
                    <div style="background:${BRAND_ACCENT_SOFT};border-left:4px solid ${BRAND_ACCENT};padding:14px 16px;margin-bottom:24px;">
                      <h1 style="margin:0;color:${BRAND_DARK};font-size:22px;line-height:1.25;">New enquiry</h1>
                    </div>
                    <p style="margin:0 0 14px;color:#334155;font-size:15px;line-height:1.65;">
                      <strong>${safeName}</strong> submitted the contact form on teldev.org. Details are below — reply to this email to write back directly to them.
                    </p>
                    ${detailMarkup}
                    <div style="margin-top:28px;padding-top:22px;border-top:1px solid #e2e8f0;color:#475569;font-size:14px;line-height:1.6;">
                      <p style="margin:0 0 4px;">Warm regards,</p>
                      <p style="margin:0;font-weight:800;color:${BRAND_DARK};">The TELDEV Technologies website</p>
                      <p style="margin:4px 0 0;color:#64748b;">${escapeHtml(BRAND_TAGLINE)}</p>
                    </div>
                  </td>
                </tr>
                <tr>
                  <td style="background:#f8fafc;border-top:1px solid #e2e8f0;padding:18px 34px;color:#64748b;font-size:12px;line-height:1.6;text-align:center;">
                    This message was generated automatically by the teldev.org contact form. Reply to this email to reach ${safeName} directly.
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  return { text, html };
}

function getGraphErrorDetails(error: unknown) {
  const axiosError = error as AxiosError<unknown>;
  return {
    status: axiosError.response?.status,
    code: axiosError.code,
    response: axiosError.response?.data,
    message: error instanceof Error ? error.message : String(error),
  };
}

export async function sendContactNotification(fields: ContactFields) {
  if (!isGraphConfigured()) {
    console.error('Microsoft Graph credentials are not configured — refusing to send.');
    return { ok: false as const, error: 'The contact form is not configured on this deployment.' };
  }

  const submittedAt = new Date();
  const { text, html } = buildContactNotificationEmail(fields, submittedAt);

  try {
    const startedAt = Date.now();
    const response = await sendGraphEmail({
      sender: CONTACT_SENDER_EMAIL,
      to: [CONTACT_RECIPIENT_EMAIL],
      replyTo: [fields.email],
      subject: `New enquiry from ${fields.name}`,
      text,
      html,
    });
    console.log('[contact] sent', { to: CONTACT_RECIPIENT_EMAIL, status: response.status, elapsedMs: Date.now() - startedAt });
    return { ok: true as const };
  } catch (err) {
    console.error('[contact] failed', getGraphErrorDetails(err));
    return { ok: false as const, error: 'Could not send your message right now. Please try again shortly.' };
  }
}
