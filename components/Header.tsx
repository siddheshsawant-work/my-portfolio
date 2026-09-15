'use client';

import { useState, useEffect, useRef } from 'react';

const NAV_LINKS = [
  { href: '#about', label: 'About', id: 'about' },
  { href: '#skills', label: 'Skills', id: 'skills' },
  { href: '#experience', label: 'Experience', id: 'experience' },
  { href: '#projects', label: 'Projects', id: 'projects' },
  { href: '#credentials', label: 'Credentials', id: 'credentials' },
  { href: '#resume', label: 'Resume', id: 'resume' },
  { href: '#contact', label: 'Contact', id: 'contact' },
];

const SECTION_IDS = ['top', 'about', 'skills', 'experience', 'projects', 'credentials', 'resume', 'linkedin', 'contact'];

export default function Header() {
  const [active, setActive] = useState('top');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const t = document.documentElement.getAttribute('data-theme') === 'light' ? 'light' : 'dark';
    setTheme(t);
  }, []);

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

  // Close menu when user starts scrolling
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    window.addEventListener('scroll', close, { passive: true, once: true });
    return () => window.removeEventListener('scroll', close);
  }, [menuOpen]);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    if (next === 'light') document.documentElement.setAttribute('data-theme', 'light');
    else document.documentElement.removeAttribute('data-theme');
    try { localStorage.setItem('ss-site-theme', next); } catch {}
  };

  const isActive = (id: string) => {
    if (id === 'contact') return active === 'contact' || active === 'linkedin';
    return active === id;
  };

  // Scroll so the section's first <p> (the "01 / About" label) sits 10px below the header
  const scrollToSection = (id: string) => {
    if (id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const section = document.getElementById(id);
    if (!section) return;
    const hdrH = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--hdr-h')) || 76;
    const first = section.querySelector('p') as HTMLElement | null;
    const anchor = first ?? section;
    const top = window.scrollY + anchor.getBoundingClientRect().top - hdrH - 10;
    window.scrollTo({ top: Math.max(0, top), behavior: 'smooth' });
  };

  return (
    <header
      ref={headerRef}
      style={{ background: 'var(--bg-blur)', borderBottom: '1px solid var(--line)' }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-[8px] px-4 md:px-8"
    >
      <nav className="nav-inner max-w-[1180px] mx-auto w-full h-[76px] flex items-center justify-between gap-6">
        {/* Wordmark */}
        <a
          href="#top"
          onClick={(e) => { e.preventDefault(); scrollToSection('top'); }}
          style={{ color: 'var(--navy)', fontFamily: 'var(--font-lora, Lora, Georgia, serif)' }}
          className="text-[21px] font-semibold tracking-[.01em] whitespace-nowrap"
        >
          Siddhesh Sawant
        </a>

        {/* Desktop: links + toggle + CTA */}
        <div className="nav-group flex items-center gap-[34px]">
          <div className="nav-links flex items-center gap-[22px]">
            {NAV_LINKS.map(({ href, label, id }) => (
              <a
                key={id}
                href={href}
                onClick={(e) => { e.preventDefault(); scrollToSection(id); }}
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

          <a
            href="#resume"
            onClick={(e) => { e.preventDefault(); scrollToSection('resume'); }}
            className="btn-gold rounded-[6px] text-[13px] font-medium tracking-[.06em] uppercase px-[22px] py-[13px] whitespace-nowrap"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile: theme toggle + hamburger */}
        <div className="mobile-nav-controls hidden items-center gap-[10px]">
          <button
            type="button"
            onClick={toggleTheme}
            title={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
            className="btn-toggle flex-none w-9 h-9 rounded-full flex items-center justify-center cursor-pointer p-0"
          >
            <span
              style={{ border: '1.5px solid currentColor' }}
              className="w-[16px] h-[16px] rounded-full overflow-hidden block relative"
            >
              <span className="absolute top-0 bottom-0 left-0 w-1/2 bg-current" />
            </span>
          </button>

          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="btn-toggle w-9 h-9 rounded-[6px] flex flex-col items-center justify-center gap-[5px] cursor-pointer p-0"
          >
            <span style={{ width: '18px', height: '1.5px', background: 'currentColor', transition: 'transform 200ms, opacity 200ms', transform: menuOpen ? 'translateY(6.5px) rotate(45deg)' : 'none', display: 'block' }} />
            <span style={{ width: '18px', height: '1.5px', background: 'currentColor', transition: 'opacity 200ms', opacity: menuOpen ? 0 : 1, display: 'block' }} />
            <span style={{ width: '18px', height: '1.5px', background: 'currentColor', transition: 'transform 200ms, opacity 200ms', transform: menuOpen ? 'translateY(-6.5px) rotate(-45deg)' : 'none', display: 'block' }} />
          </button>
        </div>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          style={{ background: 'var(--bg-blur)', borderTop: '1px solid var(--line)' }}
          className="mobile-menu"
        >
          <div className="max-w-[1180px] mx-auto w-full py-2 flex flex-col">
            {NAV_LINKS.map(({ href, label, id }) => (
              <a
                key={id}
                href={href}
                onClick={(e) => { e.preventDefault(); setMenuOpen(false); setTimeout(() => scrollToSection(id), 50); }}
                style={{
                  borderBottom: '1px solid var(--line)',
                  color: isActive(id) ? 'var(--gold)' : 'var(--txt)',
                }}
                className="text-[13px] font-normal tracking-[.08em] uppercase py-[14px] block"
              >
                {label}
              </a>
            ))}
            <div className="py-5">
              <a
                href="#resume"
                onClick={(e) => { e.preventDefault(); setMenuOpen(false); setTimeout(() => scrollToSection('resume'), 50); }}
                className="btn-gold rounded-[6px] text-[13px] font-medium tracking-[.06em] uppercase px-[22px] py-[13px] inline-block"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
