import { VercelRequest, VercelResponse } from '@vercel/node';
import {
  CONTACT_RECIPIENT_EMAIL,
  CONTACT_SENDER_EMAIL,
  getGraphErrorDetails,
  isGraphConfigured,
  sendGraphEmail,
} from './_lib/graphMailer';
import { buildContactNotificationEmail } from './_lib/contactEmailTemplate';

// CORS middleware helper — same pattern as api/posts.ts
function setCorsHeaders(res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Access-Control-Max-Age', '86400');
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
      return res.status(400).json({
        success: false,
        error: `Missing or invalid: ${missing.join(', ')}`,
      });
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
    await sendGraphEmail({
      sender: CONTACT_SENDER_EMAIL,
      to: [CONTACT_RECIPIENT_EMAIL],
      replyTo: [email],
      subject: `New consultation request from ${name}`,
      text,
      html,
    });

    console.log('[contact] sent', {
      to: CONTACT_RECIPIENT_EMAIL,
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
