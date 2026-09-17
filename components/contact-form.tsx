'use client';

import { useActionState } from 'react';
import { submitContactForm, type ContactFormState } from '@/app/contact/actions';
import { RadioSegmented } from './ui/radio-segmented';
import { Input } from './ui/input';
import { Select } from './ui/select';
import { Textarea } from './ui/textarea';
import { Checkbox } from './ui/checkbox';
import { Button } from './ui/button';
import { SERVICES } from '@/content/services';

const initialState: ContactFormState = { status: 'idle' };

export function ContactForm({ defaultEnquiryType = 'hire' }: { defaultEnquiryType?: 'hire' | 'partner' | 'other' }) {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  if (state.status === 'success') {
    return (
      <div className="ds-card" style={{ maxWidth: '560px' }}>
        <h2 className="h4">Message sent</h2>
        <p className="small text-text-muted" style={{ marginTop: '8px' }}>
          Thanks — we reply within one working day.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="ds-card ds-stack" style={{ gap: '20px', maxWidth: '560px' }}>
      <div>
        <h2 className="h4">Tell us what you need</h2>
        <p className="small text-text-muted">We reply within one working day.</p>
      </div>

      {/* Honeypot — hidden from sighted users, real bots fill every field. */}
      <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', overflow: 'hidden' }}>
        <label htmlFor="company">Company</label>
        <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <RadioSegmented
        label="I'm getting in touch about"
        name="enquiryType"
        options={[
          { value: 'hire', label: 'Hire us' },
          { value: 'partner', label: 'Partnership' },
          { value: 'other', label: 'Other' },
        ]}
        defaultValue={defaultEnquiryType}
      />
      {state.fieldErrors?.enquiryType && <p className="small ds-error-text">{state.fieldErrors.enquiryType}</p>}

      <Input id="name" name="name" label="Full name" placeholder="Ada Okafor" required error={state.fieldErrors?.name} />
      <Input
        id="email"
        name="email"
        label="Email address"
        type="email"
        placeholder="ada@company.com"
        required
        error={state.fieldErrors?.email}
      />
      <Select
        id="service"
        name="service"
        label="Service of interest"
        options={[{ value: '', label: 'Choose a service' }, ...SERVICES.map((s) => ({ value: s.name, label: s.name }))]}
      />
      <Textarea
        id="message"
        name="message"
        label="Message"
        placeholder="Tell us a bit about what you need…"
        required
        error={state.fieldErrors?.message}
      />
      <Checkbox id="agreed" name="agreed" defaultChecked>
        I agree to be contacted about this enquiry.
      </Checkbox>
      {state.fieldErrors?.agreed && <p className="small ds-error-text">{state.fieldErrors.agreed}</p>}

      {state.status === 'error' && state.message && <p className="small ds-error-text">{state.message}</p>}

      <Button variant="primary" size="lg" type="submit" loading={pending}>
        Send message
      </Button>
    </form>
  );
}
