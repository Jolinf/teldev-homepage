import { isValidElement, type ComponentProps, type ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { slugify } from '@/lib/content';

/** Plain text of a React node tree, used to give headings a stable id. */
function textOf(node: ReactNode): string {
  if (typeof node === 'string' || typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(textOf).join('');
  if (isValidElement<{ children?: ReactNode }>(node)) return textOf(node.props.children);
  return '';
}

/** A row of large numbers inside a post: <KeyFigures><Figure value="140M" label="..." /></KeyFigures> */
export function KeyFigures({ children }: { children: ReactNode }) {
  return <div className="ds-keyfigures not-prose">{children}</div>;
}

export function Figure({
  value,
  label,
  source,
}: {
  value: string;
  label: string;
  source?: string;
}) {
  return (
    <div className="ds-keyfigure">
      <span className="ds-keyfigure__value">{value}</span>
      <span className="ds-keyfigure__label">{label}</span>
      {source && <span className="ds-keyfigure__source">{source}</span>}
    </div>
  );
}

/** A highlighted aside inside a post: <Callout title="...">text</Callout> */
export function Callout({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <aside className="ds-callout">
      {title && <p className="ds-callout__title">{title}</p>}
      <div className="ds-callout__body">{children}</div>
    </aside>
  );
}

/** MDX component overrides; wrap the rendered MDX in `<div className="ds-prose">`. */
export const mdxComponents = {
  p: (props: ComponentProps<'p'>) => <p className="body" {...props} />,
  h2: ({ children, ...props }: ComponentProps<'h2'>) => (
    <h2 className="h3" id={slugify(textOf(children))} {...props}>
      {children}
    </h2>
  ),
  h3: (props: ComponentProps<'h3'>) => <h3 className="h4" {...props} />,
  blockquote: (props: ComponentProps<'blockquote'>) => <blockquote {...props} />,
  code: (props: ComponentProps<'code'>) => <code {...props} />,
  a: ({ href, children, ...rest }: ComponentProps<'a'>) =>
    href?.startsWith('/') ? (
      <Link href={href} {...rest}>
        {children}
      </Link>
    ) : (
      <a
        href={href}
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    ),
  img: (props: ComponentProps<'img'>) =>
    typeof props.src === 'string' ? (
      <figure className="ds-prose__figure">
        <Image src={props.src} alt={props.alt ?? ''} width={1200} height={675} />
        {props.title && <figcaption>{props.title}</figcaption>}
      </figure>
    ) : null,
  KeyFigures,
  Figure,
  Callout,
};

export function ArticleProse({ children }: { children: ReactNode }) {
  return <div className="ds-prose">{children}</div>;
}
