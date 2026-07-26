import { VercelRequest, VercelResponse } from '@vercel/node';
import axios, { AxiosError } from 'axios';

/**
 * Contact form -> Microsoft Graph mailer, ported from artisan-app's
 * Backend/src/config/mailer.ts (same client-credentials + POST
 * /users/{sender}/sendMail approach), scoped down to one sender and one
 * recipient instead of Wrklo's multi-channel setup.
 *
 * Deliberately self-contained (no local relative imports) to match the
 * only other function in this project known to work in production
 * (api/posts.ts) — this repo has "type": "module" in package.json, and a
 * cross-file relative import without an explicit extension is a known
 * cause of "Cannot find module" crashes at cold start on Vercel's Node
 * runtime depending on whether it bundles or just transpiles. Splitting
 * this into api/_lib/*.ts previously caused exactly that: a raw
 * FUNCTION_INVOCATION_FAILED with no details reaching our own try/catch.
 *
 * Required env vars (Vercel project settings):
 *   GRAPH_TENANT_ID
 *   GRAPH_CLIENT_ID
 *   GRAPH_CLIENT_SECRET
 * Optional (both already default to the right addresses):
 *   CONTACT_SENDER_EMAIL     (default: noreply@teldev.org)
 *   CONTACT_RECIPIENT_EMAIL  (default: contact@teldev.org)
 *   CONTACT_EMAIL_LOGO_URL   (absolute URL; falls back to a text logo)
 *
 * The Azure AD app registration needs the Mail.Send APPLICATION permission
 * (admin-consented), and noreply@teldev.org must be a real, licensed
 * mailbox in the same tenant — Graph sends AS that mailbox.
 */

const graphTenantId = process.env.GRAPH_TENANT_ID;
const graphClientId = process.env.GRAPH_CLIENT_ID;
const graphClientSecret = process.env.GRAPH_CLIENT_SECRET;
const graphTimeout = Number(process.env.GRAPH_TIMEOUT_MS || 30000);

const CONTACT_SENDER_EMAIL = process.env.CONTACT_SENDER_EMAIL || 'noreply@teldev.org';
const CONTACT_RECIPIENT_EMAIL = process.env.CONTACT_RECIPIENT_EMAIL || 'contact@teldev.org';

const BRAND_NAME = 'TelDev Technologies';
const BRAND_ACCENT = '#1C6CFE';
const BRAND_ACCENT_SOFT = '#eaf1ff';
const BRAND_DARK = '#0F1729';
const BRAND_TAGLINE = 'Bringing Technology to You';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function setCorsHeaders(res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Max-Age', '86400');
}

const isGraphConfigured = () => Boolean(graphTenantId && graphClientId && graphClientSecret);

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
    {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      timeout: graphTimeout,
    }
  );

  return response.data.access_token as string;
}

async function sendGraphEmail(params: {
  sender: string;
  subject: string;
  text: string;
  html: string;
  to: string[];
  replyTo: string[];
}) {
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

  return axios.post(
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
}

function getGraphErrorDetails(error: unknown) {
  const axiosError = error as AxiosError<any>;
  return {
    status: axiosError.response?.status,
    code: axiosError.code,
    response: axiosError.response?.data,
    message: error instanceof Error ? error.message : String(error),
  };
}

interface ContactFields {
  name: string;
  email: string;
  topic: string;
  timezone: string;
  preferredTime: string;
  referralSource: string;
  notes: string;
  termsAgreed: boolean;
}

function buildContactNotificationEmail(fields: ContactFields, submittedAt: Date) {
  const safeName = escapeHtml(fields.name);
  const submittedAtLabel =
    submittedAt.toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short', timeZone: 'UTC' }) + ' UTC';

  const details: Array<{ label: string; value: string }> = [
    { label: 'Name', value: formatValue(fields.name) },
    { label: 'Email', value: formatValue(fields.email) },
    { label: 'Session Topic', value: formatValue(fields.topic) },
    { label: 'Time Zone', value: formatValue(fields.timezone) },
    { label: 'Preferred Time', value: formatValue(fields.preferredTime) },
    { label: 'How They Heard About Us', value: formatValue(fields.referralSource) },
    { label: 'Additional Notes', value: formatValue(fields.notes) },
    { label: 'Terms & Conditions Accepted', value: fields.termsAgreed ? 'Yes' : 'No' },
    { label: 'Submitted At', value: submittedAtLabel },
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
    `${BRAND_NAME}: New consultation request`,
    '',
    `${fields.name} submitted the contact form on teldev.org. Details below.`,
    '',
    ...details.map((detail) => `${detail.label}: ${detail.value}`),
    '',
    'Reply directly to this email to reach the sender.',
    '',
    'The TelDev Technologies Website',
    BRAND_TAGLINE,
  ].join('\n');

  const html = `
    <!doctype html>
    <html>
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New consultation request</title>
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
                      <h1 style="margin:0;color:${BRAND_DARK};font-size:22px;line-height:1.25;">New consultation request</h1>
                    </div>
                    <p style="margin:0 0 14px;color:#334155;font-size:15px;line-height:1.65;">
                      <strong>${safeName}</strong> submitted the contact form on teldev.org. Details are below — reply to this email to write back directly to them.
                    </p>
                    ${detailMarkup}
                    <div style="margin-top:28px;padding-top:22px;border-top:1px solid #e2e8f0;color:#475569;font-size:14px;line-height:1.6;">
                      <p style="margin:0 0 4px;">Warm regards,</p>
                      <p style="margin:0;font-weight:800;color:${BRAND_DARK};">The TelDev Technologies Website</p>
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
  setCorsHeaders(res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    setCorsHeaders(res);
    return res.status(405).json({ success: false, error: 'Method not allowed' });
  }

  try {
    if (!isGraphConfigured()) {
      console.error('Microsoft Graph credentials are not configured — refusing to send.');
      setCorsHeaders(res);
      return res.status(503).json({
        success: false,
        error: 'The contact form is not configured on this deployment.',
      });
    }

    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};

    const name = String(body.user_name || '').trim();
    const email = String(body.user_email || '').trim();
    const topic = String(body.topic || '').trim();
    const timezone = String(body.timezone || '').trim();
    const preferredTime = String(body.preferred_time || '').trim();
    const referralSource = String(body.referral_source || '').trim();
    const notes = String(body.notes || '').trim();
    const termsAgreed = body.terms_agreed === true || body.terms_agreed === 'on' || body.terms_agreed === 'true';

    const missing: string[] = [];
    if (!name) missing.push('name');
    if (!email) missing.push('email');
    if (!timezone) missing.push('timezone');
    if (!preferredTime) missing.push('preferred time');
    if (!referralSource) missing.push('referral source');
    if (!termsAgreed) missing.push('terms agreement');

    if (missing.length > 0) {
      setCorsHeaders(res);
      return res.status(400).json({ success: false, error: `Missing or invalid: ${missing.join(', ')}` });
    }

    if (!EMAIL_PATTERN.test(email)) {
      setCorsHeaders(res);
      return res.status(400).json({ success: false, error: 'Please provide a valid email address.' });
    }

    const submittedAt = new Date();
    const { text, html } = buildContactNotificationEmail(
      { name, email, topic, timezone, preferredTime, referralSource, notes, termsAgreed },
      submittedAt
    );

    console.log('[contact] sending', {
      to: CONTACT_RECIPIENT_EMAIL,
      from: CONTACT_SENDER_EMAIL,
      provider: 'microsoft-graph',
      submitterEmail: email,
    });

    const startedAt = Date.now();
    const graphResponse = await sendGraphEmail({
      sender: CONTACT_SENDER_EMAIL,
      to: [CONTACT_RECIPIENT_EMAIL],
      replyTo: [email],
      subject: `New consultation request from ${name}`,
      text,
      html,
    });

    console.log('[contact] sent', {
      to: CONTACT_RECIPIENT_EMAIL,
      status: graphResponse.status,
      elapsedMs: Date.now() - startedAt,
    });

    setCorsHeaders(res);
    return res.status(200).json({ success: true });
  } catch (err: unknown) {
    const details = getGraphErrorDetails(err);
    console.error('[contact] failed', details);

    setCorsHeaders(res);
    return res.status(502).json({
      success: false,
      error: 'Could not send your message right now. Please try again shortly.',
      ...(process.env.NODE_ENV === 'development' && { details }),
    });
  }
}
