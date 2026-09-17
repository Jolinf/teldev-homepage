import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Section } from '@/components/section';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { ArticleProse, mdxComponents } from '@/components/article-prose';
import { getAllBlogPosts, getBlogPost } from '@/lib/content';
import { generateMetadata as generateSEOMetadata, generateJsonLdGraph, breadcrumbSchema, articleSchema } from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return generateSEOMetadata({
    title: post.frontmatter.title,
    description: post.frontmatter.excerpt,
    path: `/blog/${slug}`,
    type: 'article',
    publishedTime: post.frontmatter.date,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Blog', href: '/blog' }, { label: post.frontmatter.title }];

  return (
    <Section>
      <JsonLd
        graph={generateJsonLdGraph([
          articleSchema({ title: post.frontmatter.title, description: post.frontmatter.excerpt, publishedTime: post.frontmatter.date }),
          breadcrumbSchema(breadcrumbs),
        ])}
      />
      <Breadcrumbs items={breadcrumbs} />
      <div className="ds-stack" style={{ gap: '12px', alignItems: 'flex-start' }}>
        <Badge tone="neutral">{post.frontmatter.category}</Badge>
        <h1 className="h1">{post.frontmatter.title}</h1>
        <span className="caption text-text-muted">
          {new Date(post.frontmatter.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })} ·{' '}
          {post.frontmatter.readTime}
        </span>
      </div>
      <ArticleProse>
        <MDXRemote source={post.content} components={mdxComponents} />
      </ArticleProse>
    </Section>
  );
}
