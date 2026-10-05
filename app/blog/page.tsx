import type { Metadata } from 'next';
import Link from 'next/link';
import { TitleHero } from '@/components/page-heroes';
import { Container } from '@/components/container';
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';
import { BlogCard } from '@/components/blog-card';
import { Pagination } from '@/components/ui/pagination';
import { ImagePlaceholder } from '@/components/ui/image-placeholder';
import { Reveal } from '@/components/reveal';
import { EmptyState } from '@/components/empty-state';
import { getAllBlogPosts } from '@/lib/content';
import {
  generateMetadata as generateSEOMetadata,
  generateJsonLdGraph,
  breadcrumbSchema,
} from '@/lib/seo';
import { JsonLd } from '@/components/json-ld';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Blog',
  description: 'Practical advice on websites, IT, cloud and automation for Nigerian businesses.',
  path: '/blog',
});

const breadcrumbs = [{ label: 'Home', href: '/' }, { label: 'Blog' }];

const PAGE_SIZE = 9;

type Post = ReturnType<typeof getAllBlogPosts>[number];

function formatDate(post: Post) {
  const date = new Date(post.frontmatter.date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  return `${date} · ${post.frontmatter.readTime}`;
}

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const { page: pageParam } = await searchParams;
  const posts = getAllBlogPosts();
  const page = Math.max(1, Number(pageParam) || 1);

  // The pinned post (or else the newest) is the page's hero on page 1; the grid lists the rest.
  const lead = posts.find((p) => p.frontmatter.featured) ?? posts[0];
  const featured = page === 1 ? lead : undefined;
  const rest = posts.filter((p) => p !== lead);
  const count = Math.max(1, Math.ceil(rest.length / PAGE_SIZE));
  const pagePosts = rest.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <>
      <JsonLd graph={generateJsonLdGraph([breadcrumbSchema(breadcrumbs)])} />
      <TitleHero
        breadcrumbs={breadcrumbs}
        title="Plain-English guides to business technology."
        lead={
          featured
            ? undefined
            : 'Practical advice on websites, IT, cloud and automation for Nigerian businesses.'
        }
      />

      {featured && (
        <section className="ds-hero-title-content">
          <Container>
            <article className="ds-featured ds-anim-in" style={{ animationDelay: '120ms' }}>
              <div className="ds-media">
                <ImagePlaceholder
                  ratio="16x9"
                  src={featured.frontmatter.image}
                  alt={featured.frontmatter.title}
                  label="Article image"
                  priority
                />
              </div>
              <div className="ds-stack" style={{ gap: '16px', alignItems: 'flex-start' }}>
                <h2 className="h2 ds-featured__title">
                  <Link href={`/blog/${featured.slug}`}>{featured.frontmatter.title}</Link>
                </h2>
                <p className="lead text-text-muted">{featured.frontmatter.excerpt}</p>
                <span className="caption text-text-muted">
                  {featured.frontmatter.category} · {formatDate(featured)}
                </span>
              </div>
            </article>
          </Container>
        </section>
      )}

      {!featured || pagePosts.length > 0 ? (
        <Section subtle>
          {featured && <SectionHeader heading="More articles" />}
          {pagePosts.length === 0 ? (
            <EmptyState
              icon="file-question"
              title="No articles yet"
              description="Check back soon for plain-English guides on websites, IT, cloud and automation."
              action="Explore our services"
              actionHref="/services"
            />
          ) : (
            <>
              <div className="ds-blog-grid">
                {pagePosts.map((post, i) => (
                  <Reveal key={post.slug} delay={i * 100}>
                    <BlogCard
                      href={`/blog/${post.slug}`}
                      category={post.frontmatter.category}
                      title={post.frontmatter.title}
                      excerpt={post.frontmatter.excerpt}
                      date={formatDate(post)}
                      image={post.frontmatter.image}
                    />
                  </Reveal>
                ))}
              </div>
              <Pagination page={page} count={count} basePath="/blog" />
            </>
          )}
        </Section>
      ) : null}
    </>
  );
}
