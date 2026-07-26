import { Code2, AppWindow, Palette, Gauge, FileText } from 'lucide-react';
import ServicePageLayout from '../components/ServicePageLayout';

export default function WebdevPage() {
  return (
    <ServicePageLayout
      icon={Code2}
      eyebrow="What we offer"
      title="Application and Website Development"
      intro={[
        "Your website or app is usually the first impression someone forms of your business, before a call, before a meeting, before they've spoken to anyone. It needs to be fast, functional, and built around whoever's actually using it, not just good-looking in a screenshot.",
        "We don't just build and walk away. We manage, optimize, and keep improving alongside you.",
      ]}
      features={[
        {
          icon: AppWindow,
          title: 'Custom Application Development',
          paragraphs: [
            'Have an idea? We can build it, from internal tools that cut out manual work to customer-facing apps your clients actually use. We design with you, not just for you, so what you end up with is intuitive, scalable, and built to hold up.',
          ],
        },
        {
          icon: Palette,
          title: 'Website Design and Development',
          paragraphs: [
            'A website needs to look right and work right. We pair clean, modern design with backend that actually holds up. Landing page or full e-commerce platform, tailored either way, and built to look right on every screen size, not just the one it was designed on.',
          ],
        },
        {
          icon: Gauge,
          title: 'Performance Monitoring and Optimization',
          paragraphs: [
            "A good-looking site that's slow or unreliable isn't doing its job. We monitor performance, find the actual bottlenecks, and keep optimizing for speed and uptime, so visitors get a smooth experience and you're not the one finding out something broke.",
          ],
        },
        {
          icon: FileText,
          title: 'CMS Support',
          paragraphs: [
            'Your team should be able to update content without calling a developer every time. We set up and support content management systems that make routine changes, a new page, a blog post, a product update, something you can do yourself, quickly and without breaking anything.',
          ],
        },
      ]}
      highlight={{
        title: 'Why this matters',
        paragraphs: [
          "People don't wait around for a slow page to load. If your site or app doesn't work well, they leave, and they often don't come back. That's the entire reason this exists: to make sure it never comes to that.",
        ],
      }}
      closing={{
        title: 'Build something that works as hard as you do',
        paragraphs: [
          "A website or app isn't a one-time project. It's a working part of the business. Let's build and maintain one that keeps performing as your needs change, not just on launch day.",
        ],
      }}
    />
  );
}
