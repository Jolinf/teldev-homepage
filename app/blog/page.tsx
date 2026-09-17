import type { Metadata } from 'next';
import { PageHero } from '@/components/page-hero';
import { LayeredVisual } from '@/components/layered-visual';
import { TicketCard } from '@/components/visual-cards';
import { Section } from '@/components/section';
import { SectionHeader } from '@/components/section-header';
import { BlogCard } from '@/components/blog-card';
import { Pagination } from '@/components/ui/pagination';
import { Reveal } from '@/components/reveal';
import { EmptyState } from '@/components/empty-state';
import { getAllBlogPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Practical advice on websites, IT, cloud and automation for Nigerian businesses.',
};

const PAGE_SIZE = 9;

function formatDate(post: ReturnType<typeof getAllBlogPosts>[number]) {
  const date = new Date(post.frontmatter.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
  return `${date} · ${post.frontmatter.readTime}`;
}

export default async function BlogPage({ searchParams }: { searchParams: Promise<{ page?: string }> }) {
  const { page: pageParam } = await searchParams;
  const posts = getAllBlogPosts();
  const page = Math.max(1, Number(pageParam) || 1);
  const count = Math.max(1, Math.ceil(posts.length / PAGE_SIZE));
  const pagePosts = posts.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const featured = posts[0];

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Blog' }]}
        title="Plain-English guides to"
        accent="business technology."
        lead="Practical advice on websites, IT, cloud and automation for Nigerian businesses."
        visual={
          <LayeredVisual
            photo={{ ratio: '16x9', label: 'Featured article image', note: 'Photo for the featured guide.' }}
            cards={
              featured
                ? [
                    {
                      pos: 'bl',
                      width: '300px',
                      content: (
                        <TicketCard
                          code={`Featured · ${featured.frontmatter.readTime}`}
                          status={featured.frontmatter.category}
                          tone="brand"
                          statusIcon="info"
                          title={featured.frontmatter.title}
                          sub={featured.frontmatter.excerpt}
                        />
                      ),
                    },
                  ]
                : []
            }
          />
        }
      />

      <Section subtle>
        <SectionHeader overline="Latest" heading="Recent articles" />
        {pagePosts.length === 0 ? (
          <EmptyState icon="file-question" title="No articles yet" description="Check back soon for plain-English guides on websites, IT, cloud and automation." />
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
                  />
                </Reveal>
              ))}
            </div>
            <Pagination page={page} count={count} basePath="/blog" />
          </>
        )}
      </Section>
    </>
  );
}
