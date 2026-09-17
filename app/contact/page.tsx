import type { Metadata } from 'next';
import { ContactSection } from '@/components/contact-section';

export const metadata: Metadata = {
  title: 'Contact',
  description: "Tell us what you're trying to do, and we'll tell you plainly whether we can help.",
};

const VALID_TYPES = new Set(['hire', 'partner', 'other']);

export default async function ContactPage({ searchParams }: { searchParams: Promise<{ type?: string }> }) {
  const { type } = await searchParams;
  const defaultEnquiryType = VALID_TYPES.has(type ?? '') ? (type as 'hire' | 'partner' | 'other') : 'hire';

  return <ContactSection defaultEnquiryType={defaultEnquiryType} />;
}
