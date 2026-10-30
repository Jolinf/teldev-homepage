/**
 * TELDEV Spotlight: digital storefronts for businesses that sell through social media.
 * Shown on /work and on its own page at /work/spotlight (the address on the printed flier's QR code,
 * so keep this route stable).
 *
 * Pricing is deliberately not on the page. Only promise a Google Business Profile "where eligible":
 * Google requires in-person customer contact, which many online-only vendors do not have.
 */

export interface SpotlightDemo {
  name: string;
  what: string;
  body: string;
  href: string;
}

export const SPOTLIGHT = {
  slug: 'spotlight',
  name: 'TELDEV Spotlight',
  status: 'Now taking on businesses',
  /** The featured live demo: the hero button and the /work card link here. */
  demoUrl: 'https://jolinf.github.io/jis-shoes/',
  tagline: 'Your business deserves its own space.',
  aim: 'TELDEV Spotlight gives businesses that sell on Instagram, TikTok, WhatsApp and Telegram a storefront of their own: your best products on display at your own address, with every customer one tap away from the channels you already sell on.',

  facts: [
    { label: 'Who it\'s for', value: 'Businesses that sell through social media' },
    { label: 'What you get', value: 'A storefront, a business profile and your own domain' },
    { label: 'How you sell', value: 'Exactly as you do now: WhatsApp, Instagram, TikTok, Telegram' },
    { label: 'Updates', value: 'Pay only in the months you want changes' },
  ],

  whyLead: 'Social media is where your customers find you. It is not built to show them everything you sell.',
  why: [
    {
      title: 'Your best products get buried',
      body: 'A new customer has to scroll through months of posts to see what you sell. Most stop long before they reach your best pieces.',
    },
    {
      title: 'One link that looks established',
      body: 'A storefront at your own address tells customers you are a real business. Put it in your bio, your WhatsApp status and on your packaging.',
    },
    {
      title: 'No new system to learn',
      body: 'You do not need a website, a checkout or an inventory system. Customers browse the storefront and message you to order, the way they already do.',
    },
  ],

  includedLead: 'Spotlight brings your business into the light with three things working together.',
  included: [
    {
      title: 'Your digital storefront',
      body: 'A mobile-first storefront designed around your brand and your products: your collections, your best sellers, and a button to order on WhatsApp, Instagram, TikTok or Telegram.',
    },
    {
      title: 'Your business profile',
      body: 'Your business details, story and contact channels presented consistently, and a Google Business Profile set up where your business is eligible.',
    },
    {
      title: 'Your own domain',
      body: 'A web address with your business name in it, so customers can find you and share you without searching.',
    },
  ],
  updatesNote: 'After launch, we manage the storefront for you. When you have a new collection or want changes, we update it; you pay only for the months you ask for changes. The storefront stays online either way.',

  demosLead: 'Two storefronts we have built, for two different kinds of business. Open them on your phone: that is where your customers will see yours.',
  demos: [
    {
      name: 'JIS SHOES NG',
      what: 'Footwear',
      body: 'A wide catalogue organised by category, with WhatsApp ordering and a link to the full collection on Telegram.',
      href: 'https://jolinf.github.io/jis-shoes/',
    },
    {
      name: 'BRIMMUP',
      what: 'Caps',
      body: 'A focused collection shown in detail, with colours, product descriptions and an enquiry button on every item.',
      href: 'https://jolinf.github.io/brim/',
    },
  ] as SpotlightDemo[],

  steps: [
    { title: 'Show us your business', body: 'Send us your social pages and tell us what you sell best. One short call is enough to start.' },
    { title: 'We design and build', body: 'We design a storefront around your brand and products, and set up your profile and domain.' },
    { title: 'You launch', body: 'Your storefront goes live at your own address. Share the link everywhere you sell.' },
    { title: 'Updates when you need them', body: 'New stock or a new collection? Tell us and we update it. You only pay in the months you ask.' },
  ],

  faq: [
    {
      q: 'Is this a website?',
      a: 'Not in the usual sense. A website is built for companies that sell on their own site. Spotlight is built for businesses that sell through social media: it displays your products and sends customers to you on the channels you already use.',
    },
    {
      q: 'Can customers pay on the storefront?',
      a: 'No, and that is deliberate. Customers browse, then message you on WhatsApp, Instagram, TikTok or Telegram to order, so you keep selling, negotiating and confirming the way you do now.',
    },
    {
      q: 'Do I have to pay every month?',
      a: 'No. You pay for management only in the months you want changes made. Your storefront stays online whether or not you request changes. Your domain renews once a year.',
    },
    {
      q: 'Will my business get a Google listing?',
      a: 'If your business is eligible. Google Business Profiles require in-person contact with customers, at a location or in a service area. If your business is online only, your storefront becomes your professional profile instead.',
    },
    {
      q: 'Will my storefront look like everyone else\'s?',
      a: 'No. Each storefront is designed around the business it shows: its products, its colours and the way it sells.',
    },
  ],
};
