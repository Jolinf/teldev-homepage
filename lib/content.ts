import { readdirSync, readFileSync } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import { z } from 'zod';

const blogFrontmatterSchema = z.object({
  title: z.string(),
  excerpt: z.string(),
  category: z.string(),
  date: z.string(),
  readTime: z.string(),
  draft: z.boolean().optional().default(false),
  image: z.string().optional(),
});

const workFrontmatterSchema = z.object({
  title: z.string(),
  summary: z.string(),
  note: z.string().optional(),
  metricLabel: z.string().optional(),
  metricValue: z.string().optional(),
  placeholder: z.boolean().optional().default(false),
});

export type BlogFrontmatter = z.infer<typeof blogFrontmatterSchema>;
export type WorkFrontmatter = z.infer<typeof workFrontmatterSchema>;

const BLOG_DIR = path.join(process.cwd(), 'content/blog');
const WORK_DIR = path.join(process.cwd(), 'content/work');

function readMdxDir<T>(dir: string, schema: z.ZodType<T>) {
  const files = readdirSync(dir).filter((f) => f.endsWith('.mdx'));
  return files.map((file) => {
    const slug = file.replace(/\.mdx$/, '');
    const raw = readFileSync(path.join(dir, file), 'utf-8');
    const { data, content } = matter(raw);
    return { slug, frontmatter: schema.parse(data), content };
  });
}

const isProd = process.env.NODE_ENV === 'production';

export function getAllBlogPosts() {
  return readMdxDir(BLOG_DIR, blogFrontmatterSchema)
    .filter((post) => !(isProd && post.frontmatter.draft))
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}

export function getBlogPost(slug: string) {
  return getAllBlogPosts().find((post) => post.slug === slug);
}

export function getAllWorkEntries() {
  return readMdxDir(WORK_DIR, workFrontmatterSchema);
}

export function getWorkEntry(slug: string) {
  return getAllWorkEntries().find((entry) => entry.slug === slug);
}
