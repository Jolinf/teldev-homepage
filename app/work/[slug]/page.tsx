import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Section } from '@/components/section';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { ArticleProse, mdxComponents } from '@/components/article-prose';
import { getAllWorkEntries, getWorkEntry } from '@/lib/content';

export function generateStaticParams() {
  return getAllWorkEntries().map((entry) => ({ slug: entry.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const entry = getWorkEntry(slug);
  if (!entry) return {};
  return { title: entry.frontmatter.title, description: entry.frontmatter.summary };
}

export default async function WorkEntryPage({ params }: PageProps) {
  const { slug } = await params;
  const entry = getWorkEntry(slug);
  if (!entry) notFound();

  return (
    <Section>
      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Work', href: '/work' }, { label: entry.frontmatter.title }]} />
      <div className="ds-stack" style={{ gap: '12px', alignItems: 'flex-start' }}>
        {entry.frontmatter.placeholder && <Badge tone="warning">Placeholder case study</Badge>}
        <h1 className="h1">{entry.frontmatter.title}</h1>
        <p className="lead text-text-muted">{entry.frontmatter.summary}</p>
      </div>
      <ArticleProse>
        <MDXRemote source={entry.content} components={mdxComponents} />
      </ArticleProse>
    </Section>
  );
}
