'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const NAV_LINKS = [
  { href: '#about', label: 'About', id: 'about' },
  { href: '#skills', label: 'Skills', id: 'skills' },
  { href: '#experience', label: 'Experience', id: 'experience' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#code', label: 'Code', id: 'code' },
  { href: '#credentials', label: 'Credentials', id: 'credentials' },
  { href: '#resume', label: 'Resume', id: 'resume' },
  { href: '#contact', label: 'Contact', id: 'contact' },
];

const SECTION_IDS = ['top', 'about', 'skills', 'experience', 'projects', 'code', 'credentials', 'resume', 'linkedin', 'contact'];

export default function Header() {
  const [active, setActive] = useState('top');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const headerRef = useRef<HTMLElement>(null);

  // Sync theme state from DOM (pre-paint script may have already set it)
  useEffect(() => {
    const t = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    setTheme(t);
  }, []);

  // Measure header height → --hdr-h CSS variable
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    const measure = () => {
      const h = Math.round(header.getBoundingClientRect().height);
      if (h) document.documentElement.style.setProperty('--hdr-h', `${h}px`);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(header);
    return () => ro.disconnect();
  }, []);

  // Scroll spy — last section whose top is ≤ 140px
  useEffect(() => {
    const onScroll = () => {
      let cur = 'top';
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 140) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    if (next === 'light') document.documentElement.setAttribute('data-theme', 'light');
    else document.documentElement.removeAttribute('data-theme');
    try { localStorage.setItem('ss-site-theme', next); } catch {}
  };

  // contact nav item also lights up for the linkedin section
  const isActive = (id: string) => {
    if (id === 'contact') return active === 'contact' || active === 'linkedin';
    return active === id;
  };

  return (
    <header
      ref={headerRef}
      style={{ background: 'var(--bg-blur)', borderBottom: '1px solid var(--line)' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[8px]"
    >
      <nav
        className="nav-inner max-w-[1180px] mx-auto px-8 h-[76px] flex items-center justify-between gap-6"
      >
        {/* Wordmark */}
        <a
          href="#top"
          style={{ color: 'var(--navy)', fontFamily: 'var(--font-lora, Lora, Georgia, serif)' }}
          className="text-[21px] font-semibold tracking-[.01em] whitespace-nowrap"
        >
          Siddhesh Sawant
        </a>

        {/* Right group: links + toggle + CTA */}
        <div className="nav-group flex items-center gap-[34px]">
          <div className="nav-links flex items-center gap-[22px]">
            {NAV_LINKS.map(({ href, label, id }) => (
              <a
                key={id}
                href={href}
                className="relative text-[12.5px] font-normal tracking-[.07em] uppercase py-[6px] block text-[var(--txt)] hover:text-[var(--navy)] transition-colors duration-200"
              >
                {label}
                <span
                  style={{ background: 'var(--gold)', opacity: isActive(id) ? 1 : 0 }}
                  className="absolute left-0 right-0 bottom-0 h-[2px] transition-opacity duration-200"
                />
              </a>
            ))}
          </div>

          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="btn-toggle flex-none w-10 h-10 rounded-full flex items-center justify-center cursor-pointer p-0"
          >
            <span
              style={{ border: '1.5px solid currentColor' }}
              className="w-[19px] h-[19px] rounded-full overflow-hidden block relative"
            >
              <span className="absolute top-0 bottom-0 left-0 w-1/2 bg-current" />
            </span>
          </button>

          {/* Download Resume CTA */}
          <a
            href="#resume"
            className="btn-gold rounded-[6px] text-[13px] font-medium tracking-[.06em] uppercase px-[22px] py-[13px] whitespace-nowrap"
          >
            Download Resume
          </a>
        </div>
      </nav>
    </header>
  );
}
