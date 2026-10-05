import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Icon } from '@/components/ui/icon';
import { ImagePlaceholder } from '@/components/ui/image-placeholder';
import { Logomark } from '@/components/logomark';
import { BlogCard } from '@/components/blog-card';
import { CTABanner } from '@/components/cta-banner';
import { ArticleProse, mdxComponents } from '@/components/article-prose';
import { ArticleToc } from '@/components/article-toc';
import { ArticleShare } from '@/components/article-share';
import { getAllBlogPosts, getBlogPost, getHeadings } from '@/lib/content';
import {
  SITE_URL,
  generateMetadata as generateSEOMetadata,
  generateJsonLdGraph,
  breadcrumbSchema,
  articleSchema,
} from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';
import { findTeamMember } from '@/content/team';

export function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

interface PageProps {
  params: Promise<{ slug: string }>;
}

function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
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
    image: post.frontmatter.image,
    imageAlt: post.frontmatter.imageAlt,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();
  const { frontmatter: fm } = post;
  const authorImage = findTeamMember(fm.author ?? '')?.image;
  const headings = getHeadings(post.content);
  const related = getAllBlogPosts()
    .filter((p) => p.slug !== slug)
    .slice(0, 3);
  const url = `${SITE_URL}/blog/${slug}`;
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Blog', href: '/blog' },
    { label: fm.title },
  ];

  return (
    <>
      <JsonLd
        graph={generateJsonLdGraph([
          articleSchema({ title: fm.title, description: fm.excerpt, publishedTime: fm.date }),
          breadcrumbSchema(breadcrumbs),
        ])}
      />

      <article>
        <header className="ds-post-header">
          <Container className="ds-post-header__inner ds-anim-in">
            <Breadcrumbs items={breadcrumbs} />
            <div className="ds-post-meta">
              <span className="small text-text-muted">{fm.category}</span>
              <span className="small text-text-muted">{formatDate(fm.date)}</span>
              <span className="small text-text-muted ds-row" style={{ gap: '6px' }}>
                <Icon name="clock" size={15} />
                {fm.readTime}
              </span>
            </div>
            <h1 className="display ds-post-title">{fm.title}</h1>
            <p className="lead text-text-muted ds-post-standfirst">{fm.excerpt}</p>
            <div className="ds-post-byline">
              <span className="ds-post-byline__avatar" aria-hidden="true">
                {authorImage ? (
                  <Image
                    src={authorImage}
                    alt=""
                    width={44}
                    height={44}
                    className="ds-post-byline__photo"
                  />
                ) : (
                  <Logomark size={22} />
                )}
              </span>
              <span className="ds-stack" style={{ gap: '2px' }}>
                <span className="label">{fm.author}</span>
                {fm.authorRole && <span className="small text-text-muted">{fm.authorRole}</span>}
              </span>
            </div>
          </Container>
        </header>

        <Container className="ds-post-cover ds-anim-in" style={{ animationDelay: '120ms' }}>
          {fm.image ? (
            <ImagePlaceholder
              ratio="16x9"
              src={fm.image}
              alt={fm.imageAlt ?? ''}
              priority
              sizes="(min-width: 1280px) 1200px, 100vw"
            />
          ) : (
            <div className="ds-post-cover__art" aria-hidden="true">
              <span className="ds-post-cover__label">{fm.category}</span>
              <Logomark size={120} mono />
            </div>
          )}
        </Container>

        <Container className="ds-post-layout">
          <aside className="ds-post-aside">
            <div className="ds-post-aside__sticky">
              <ArticleToc headings={headings} />
              <div className="ds-post-aside__share">
                <p className="ds-toc__title">Share</p>
                <ArticleShare url={url} title={fm.title} />
              </div>
            </div>
          </aside>

          <div className="ds-post-body">
            <ArticleProse>
              <MDXRemote source={post.content} components={mdxComponents} />
            </ArticleProse>

            <footer className="ds-post-footer">
              <div className="ds-post-footer__share">
                <span className="label">Found this useful? Share it.</span>
                <ArticleShare url={url} title={fm.title} />
              </div>
              <div className="ds-post-author">
                <span
                  className="ds-post-byline__avatar ds-post-byline__avatar--lg"
                  aria-hidden="true"
                >
                  {authorImage ? (
                    <Image
                      src={authorImage}
                      alt=""
                      width={56}
                      height={56}
                      className="ds-post-byline__photo"
                    />
                  ) : (
                    <Logomark size={30} />
                  )}
                </span>
                <div className="ds-stack" style={{ gap: '6px' }}>
                  <span className="label">Written by {fm.author}</span>
                  <p className="body text-text-muted">
                    TELDEV Technologies makes technology, AI and automation accessible, practical
                    and useful for businesses, institutions and individuals, starting in Nigeria.
                  </p>
                </div>
              </div>
            </footer>
          </div>
        </Container>
      </article>

      {related.length > 0 && (
        <Section subtle>
          <SectionHeader heading="Keep reading" />
          <div className="ds-blog-grid">
            {related.map((p) => (
              <BlogCard
                key={p.slug}
                href={`/blog/${p.slug}`}
                category={p.frontmatter.category}
                title={p.frontmatter.title}
                excerpt={p.frontmatter.excerpt}
                date={`${formatDate(p.frontmatter.date)} · ${p.frontmatter.readTime}`}
                image={p.frontmatter.image}
              />
            ))}
          </div>
        </Section>
      )}

      <Section>
        <CTABanner
          heading="Have a process that eats your team's time?"
          body="Tell us about it. We'll tell you plainly whether technology can fix it, and what it would take."
          cta="Talk to us"
        />
      </Section>
    </>
  );
}
