'use client';

import { useState } from 'react';
import { Icon } from './ui/icon';

/** Share links for a post. WhatsApp first: it's how most Nigerian readers pass things on. */
export function ArticleShare({ url, title }: { url: string; title: string }) {
  const [copied, setCopied] = useState(false);
  const u = encodeURIComponent(url);
  const t = encodeURIComponent(title);
  const links = [
    {
      label: 'Share on WhatsApp',
      icon: 'message-circle' as const,
      href: `https://wa.me/?text=${t}%20${u}`,
    },
    {
      label: 'Share on LinkedIn',
      icon: 'linkedin' as const,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${u}`,
    },
    {
      label: 'Share on X',
      icon: 'twitter' as const,
      href: `https://twitter.com/intent/tweet?text=${t}&url=${u}`,
    },
  ];

  async function copy() {
    try {
      await navigator.clipboard.writeText(url);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable; the address bar still works */
    }
  }

  return (
    <div className="ds-share">
      {links.map((l) => (
        <a
          key={l.label}
          href={l.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={l.label}
          className="ds-social"
        >
          <Icon name={l.icon} size={18} />
        </a>
      ))}
      <button
        type="button"
        onClick={copy}
        className="ds-social"
        aria-label={copied ? 'Link copied' : 'Copy link'}
      >
        <Icon name={copied ? 'check' : 'link'} size={18} />
      </button>
      <span className="caption text-text-muted" aria-live="polite">
        {copied ? 'Link copied' : ''}
      </span>
    </div>
  );
}
