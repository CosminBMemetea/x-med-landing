import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ReactNode, useEffect, useState } from 'react';
import { basePath } from '@/lib/basePath';
import { NAV, REPO_URL, SITE_URL } from '@/lib/site';
import { IconClose, IconGithub, IconMenu } from './Icons';

type Props = {
  title: string;
  description: string;
  path: string;
  children: ReactNode;
};

export default function Layout({ title, description, path, children }: Props) {
  const [open, setOpen] = useState(false);
  const router = useRouter();
  useEffect(() => setOpen(false), [router.asPath]);

  const fullTitle = path === '/' ? 'XΞDΞUM · X-MED: healthcare, without the maze' : `${title} · XΞDΞUM`;
  const url = `${SITE_URL}${path}`;

  return (
    <>
      <Head>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#050816" />
        <link rel="icon" type="image/svg+xml" href={`${basePath}/logo.svg`} />
        <link rel="canonical" href={url} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="XΞDΞUM" />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={`${SITE_URL}/og.png`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <a className="skip" href="#main">Skip to content</a>

      <header className="nav">
        <div className="container nav__inner">
          <Link href="/" className="brand" aria-label="XΞDΞUM home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`${basePath}/logo.svg`} alt="" width={32} height={32} />
            <span>XΞDΞUM</span>
          </Link>
          <nav aria-label="Main" className={`nav__links ${open ? 'is-open' : ''}`}>
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={router.pathname === item.href.replace(/\/$/, '') ? 'is-active' : ''}
              >
                {item.label}
              </Link>
            ))}
            <a className="btn btn--ghost btn--sm" href={REPO_URL} target="_blank" rel="noopener noreferrer">
              <IconGithub size={16} /> Source
            </a>
          </nav>
          <button
            className="nav__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <IconClose /> : <IconMenu />}
          </button>
        </div>
      </header>

      <main id="main">{children}</main>

      <footer className="footer">
        <div className="container footer__inner">
          <div className="footer__brand">
            <Link href="/" className="brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`${basePath}/logo.svg`} alt="" width={28} height={28} />
              <span>XΞDΞUM</span>
            </Link>
            <p>Effortless medical system navigation and care. A concept project.</p>
          </div>
          <nav aria-label="Footer" className="footer__links">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href}>{item.label}</Link>
            ))}
          </nav>
          <div className="footer__meta">
            <p>No cookies. No tracking. No data collected.</p>
            <a href={REPO_URL} target="_blank" rel="noopener noreferrer"><IconGithub size={14} /> View source on GitHub</a>
          </div>
        </div>
      </footer>
    </>
  );
}

export function PageHero({ eyebrow, title, lead }: { eyebrow: string; title: ReactNode; lead: string }) {
  return (
    <section className="page-hero">
      <div className="container">
        <p className="eyebrow reveal">{eyebrow}</p>
        <h1 className="reveal" style={{ animationDelay: '60ms' }}>{title}</h1>
        <p className="lead reveal" style={{ animationDelay: '120ms' }}>{lead}</p>
      </div>
    </section>
  );
}
