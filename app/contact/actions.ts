'use server';

import { z } from 'zod';
import { sendContactNotification } from '@/lib/mailer';

const contactSchema = z.object({
  name: z.string().trim().min(1, 'Enter your full name.'),
  email: z.string().trim().email('Enter a valid email address.'),
  enquiryType: z.enum(['hire', 'partner', 'other']),
  service: z.string().trim().optional().default(''),
  message: z.string().trim().min(1, 'Tell us a bit about what you need.'),
  agreed: z.literal('on', { message: 'Agree to be contacted to send this enquiry.' }),
  // Honeypot: real users never fill this in — bots that fill every field do.
  company: z.string().max(0).optional().or(z.literal('')),
});

export interface ContactFormState {
  status: 'idle' | 'success' | 'error';
  message?: string;
  fieldErrors?: Partial<Record<'name' | 'email' | 'enquiryType' | 'message' | 'agreed', string>>;
}

export async function submitContactForm(_prevState: ContactFormState, formData: FormData): Promise<ContactFormState> {
  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    enquiryType: formData.get('enquiryType'),
    service: formData.get('service'),
    message: formData.get('message'),
    agreed: formData.get('agreed'),
    company: formData.get('company'),
  };

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    const fieldErrors: ContactFormState['fieldErrors'] = {};
    for (const issue of parsed.error.issues) {
      const key = issue.path[0];
      if (key === 'name' || key === 'email' || key === 'enquiryType' || key === 'message' || key === 'agreed') {
        fieldErrors[key] = issue.message;
      }
    }
    return { status: 'error', message: 'Check the highlighted fields and try again.', fieldErrors };
  }

  if (parsed.data.company) {
    // Honeypot tripped — pretend success so the bot moves on, send nothing.
    return { status: 'success' };
  }

  const result = await sendContactNotification({
    name: parsed.data.name,
    email: parsed.data.email,
    enquiryType: parsed.data.enquiryType,
    service: parsed.data.service ?? '',
    message: parsed.data.message,
  });

  if (!result.ok) {
    return { status: 'error', message: result.error };
  }

  return { status: 'success' };
}
