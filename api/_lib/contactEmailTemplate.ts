import { escapeHtml } from './graphMailer';

/**
 * Same card-with-accent-bar layout as artisan-app's buildWrkloEmail
 * (api/_lib/graphMailer.ts's sibling on the artisan-app side is
 * Backend/src/config/mailer.ts), re-skinned in TelDev's own brand instead
 * of Wrklo's: #1C6CFE accent instead of #06475a, dark navy detail-table
 * text instead of teal, and TelDev's actual homepage tagline in the
 * signature instead of Wrklo's.
 */

const BRAND_NAME = 'TelDev Technologies';
const BRAND_ACCENT = '#1C6CFE';
const BRAND_ACCENT_SOFT = '#eaf1ff';
const BRAND_DARK = '#0F1729';
const BRAND_TAGLINE = 'Bringing Technology to You';
const LOGO_URL = process.env.CONTACT_EMAIL_LOGO_URL || '';

export interface ContactFormFields {
  name: string;
  email: string;
  topic?: string;
  timezone: string;
  preferredTime: string;
  referralSource: string;
  notes?: string;
  termsAgreed: boolean;
}

const formatValue = (value?: string | null) => {
  const trimmed = String(value ?? '').trim();
  return trimmed ? trimmed : 'Not provided';
};

export function buildContactNotificationEmail(fields: ContactFormFields, submittedAt: Date) {
  const safeName = escapeHtml(fields.name);
  const submittedAtLabel = submittedAt.toLocaleString('en-US', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'UTC',
  }) + ' UTC';

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

  const logoMarkup = LOGO_URL
    ? `<img src="${escapeHtml(LOGO_URL)}" alt="${escapeHtml(BRAND_NAME)}" style="width:128px;max-width:160px;height:auto;display:block;margin:0 auto 22px;" />`
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
    `${safeName} submitted the contact form on teldev.org. Details below.`,
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
