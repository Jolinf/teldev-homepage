import type { ComponentProps, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

/** MDX component overrides — wrap the rendered MDX in `<div className="ds-prose">`. */
export const mdxComponents = {
  p: (props: ComponentProps<'p'>) => <p className="body" {...props} />,
  h2: (props: ComponentProps<'h2'>) => <h2 className="h3" {...props} />,
  h3: (props: ComponentProps<'h3'>) => <h3 className="h4" {...props} />,
  blockquote: (props: ComponentProps<'blockquote'>) => (
    <blockquote {...props}>
      <p className="body">{props.children}</p>
    </blockquote>
  ),
  code: (props: ComponentProps<'code'>) => <code {...props} />,
  a: ({ href, children, ...rest }: ComponentProps<'a'>) =>
    href?.startsWith('/') ? (
      <Link href={href} {...rest}>
        {children}
      </Link>
    ) : (
      <a href={href} {...rest}>
        {children}
      </a>
    ),
  img: (props: ComponentProps<'img'>) =>
    typeof props.src === 'string' ? <Image src={props.src} alt={props.alt ?? ''} width={1200} height={675} /> : null,
};

export function ArticleProse({ children }: { children: ReactNode }) {
  return <div className="ds-prose">{children}</div>;
}
