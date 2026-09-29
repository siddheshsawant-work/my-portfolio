'use client';

import { useState, FormEvent } from 'react';

const WEBHOOK_URL = process.env.NEXT_PUBLIC_CONTACT_WEBHOOK_URL ?? '';

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{ color: 'var(--navy)' }}
      className="text-[11.5px] font-medium tracking-[.14em] uppercase"
    >
      {children}
    </span>
  );
}

export default function Contact() {
  const [fields, setFields] = useState({ name: '', email: '', subject: 'Job Opportunity', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const set = (k: keyof typeof fields) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setFields((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!fields.name || !fields.email || !fields.message) return;
    setStatus('sending');
    try {
      const params = new URLSearchParams(fields as Record<string, string>);
      await fetch(`${WEBHOOK_URL}?${params.toString()}`, { mode: 'no-cors' });
      setStatus('sent');
      setFields({ name: '', email: '', subject: 'Job Opportunity', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  return (
    <section
      id="contact"
      style={{ borderTop: '1px solid var(--line)' }}
      className="py-24 px-8 pb-[104px]"
    >
      <div className="max-w-[1180px] mx-auto">
        <p
          style={{ color: 'var(--gold)' }}
          className="m-0 mb-[14px] text-[12px] font-medium tracking-[.22em] uppercase"
        >
          07 / Contact
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-lora, Lora, Georgia, serif)',
            fontSize: 'clamp(28px,4.4vw,38px)',
            color: 'var(--navy)',
            letterSpacing: '-.01em',
            margin: '0 0 22px',
            fontWeight: 600,
          }}
        >
          Get in Touch
        </h2>
        <p
          style={{ color: 'var(--txt)', opacity: 0.85, maxWidth: '64ch', margin: '0 0 56px' }}
          className="text-[15.5px] leading-[1.85] font-light"
        >
          I&apos;m open to new opportunities and happy to connect, whether you have a role to
          discuss, a project in mind, or just want to say hello.
        </p>

        <div
          className="stack-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr .9fr',
            gap: '80px',
            alignItems: 'start',
          }}
        >
          {/* Form */}
          <form onSubmit={onSubmit} className="flex flex-col gap-[26px]">
            {/* Name + Email row */}
            <div
              className="fields-grid"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '26px' }}
            >
              <label className="flex flex-col gap-[9px]">
                <FieldLabel>Name</FieldLabel>
                <input
                  type="text"
                  required
                  placeholder="Your name"
                  value={fields.name}
                  onChange={set('name')}
                  style={{
                    border: 0,
                    borderBottom: '1.5px solid var(--field-line)',
                    background: 'transparent',
                    padding: '11px 2px',
                    fontSize: '15px',
                    color: 'var(--txt)',
                  }}
                  className="field-underline outline-none"
                />
              </label>
              <label className="flex flex-col gap-[9px]">
                <FieldLabel>Email</FieldLabel>
                <input
                  type="email"
                  required
                  placeholder="you@company.com"
                  value={fields.email}
                  onChange={set('email')}
                  style={{
                    border: 0,
                    borderBottom: '1.5px solid var(--field-line)',
                    background: 'transparent',
                    padding: '11px 2px',
                    fontSize: '15px',
                    color: 'var(--txt)',
                  }}
                  className="field-underline outline-none"
                />
              </label>
            </div>

            {/* Subject */}
            <label className="flex flex-col gap-[9px]">
              <FieldLabel>Subject</FieldLabel>
              <select
                value={fields.subject}
                onChange={set('subject')}
                style={{
                  border: 0,
                  borderBottom: '1.5px solid var(--field-line)',
                  background: 'transparent',
                  padding: '11px 2px',
                  fontSize: '15px',
                  color: 'var(--txt)',
                  borderRadius: 0,
                  appearance: 'none',
                }}
                className="field-underline outline-none"
              >
                <option>Job Opportunity</option>
                <option>Collaboration</option>
                <option>General Enquiry</option>
              </select>
            </label>

            {/* Message */}
            <label className="flex flex-col gap-[9px]">
              <FieldLabel>Message</FieldLabel>
              <textarea
                rows={5}
                required
                placeholder="A few lines about the role or idea"
                value={fields.message}
                onChange={set('message')}
                style={{
                  border: '1.5px solid var(--field-line)',
                  background: 'var(--surface)',
                  padding: '14px',
                  fontSize: '15px',
                  lineHeight: 1.7,
                  color: 'var(--txt)',
                  resize: 'vertical',
                }}
                className="field-border outline-none"
              />
            </label>

            {/* Submit */}
            <div className="flex items-center gap-5 flex-wrap">
              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="btn-gold rounded-[6px] text-[13.5px] font-medium tracking-[.08em] uppercase px-[38px] py-[17px] cursor-pointer disabled:opacity-60 disabled:cursor-default"
              >
                {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent ✓' : 'Send Message'}
              </button>
              {status === 'sent' && (
                <span style={{ color: 'var(--navy)' }} className="text-[13.5px] font-normal">
                  Thanks, I&apos;ll be in touch shortly.
                </span>
              )}
              {status === 'error' && (
                <span style={{ color: '#c0392b' }} className="text-[13.5px] font-normal">
                  Something went wrong. Please email me directly.
                </span>
              )}
            </div>
          </form>

          {/* Sidebar */}
          <div
            className="contact-side"
            style={{
              borderLeft: '1px solid var(--line)',
              paddingLeft: '44px',
              display: 'flex',
              flexDirection: 'column',
              gap: '30px',
            }}
          >
            <div>
              <div style={{ color: 'var(--gold)', margin: '0 0 10px', display: 'flex', alignItems: 'center', gap: '7px' }}>
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <rect x="1" y="2.5" width="12" height="9" rx="1.2"/>
                  <polyline points="1,4 7,8.5 13,4"/>
                </svg>
                <span className="text-[11.5px] font-medium tracking-[.14em] uppercase">Email</span>
              </div>
              <a
                href="mailto:siddheshsawant5789@gmail.com"
                style={{ color: 'var(--navy)', fontFamily: 'ui-monospace, Menlo, monospace', wordBreak: 'break-all', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                className="text-[13px] leading-[1.7] hover:text-[var(--gold)] transition-colors duration-200"
              >
                siddheshsawant5789@gmail.com
                <span style={{ fontSize: '15px', lineHeight: 1 }}>↗</span>
              </a>
            </div>

            <div>
              <div style={{ color: 'var(--gold)', margin: '0 0 10px', display: 'flex', alignItems: 'center', gap: '7px' }}>
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <rect x="1" y="1" width="12" height="12" rx="2"/>
                  <rect x="3.4" y="5.5" width="1.5" height="5" fill="currentColor" stroke="none"/>
                  <circle cx="4.15" cy="3.7" r=".85" fill="currentColor" stroke="none"/>
                  <path d="M7 10.5V7.75a1.75 1.75 0 013.5 0v2.75" strokeLinecap="round"/>
                </svg>
                <span className="text-[11.5px] font-medium tracking-[.14em] uppercase">LinkedIn</span>
              </div>
              <a
                href="https://in.linkedin.com/in/siddhesh-sawant-0283349"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--navy)', fontFamily: 'ui-monospace, Menlo, monospace', wordBreak: 'break-all', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                className="text-[13px] leading-[1.7] hover:text-[var(--gold)] transition-colors duration-200"
              >
                linkedin.com/in/siddhesh-sawant-0283349
                <span style={{ fontSize: '15px', lineHeight: 1, flexShrink: 0 }}>↗</span>
              </a>
            </div>

            <div>
              <div style={{ color: 'var(--gold)', margin: '0 0 10px', display: 'flex', alignItems: 'center', gap: '7px' }}>
                <svg width="13" height="13" viewBox="0 0 16 16" fill="currentColor" style={{ flexShrink: 0 }}>
                  <path d="M8 1C4.13 1 1 4.13 1 8c0 3.09 2.01 5.72 4.79 6.65.35.06.48-.15.48-.34v-1.2c-1.95.42-2.36-.94-2.36-.94-.32-.81-.78-1.02-.78-1.02-.64-.44.05-.43.05-.43.7.05 1.07.72 1.07.72.62 1.07 1.63.76 2.03.58.06-.45.24-.76.44-.93-1.56-.18-3.2-.78-3.2-3.47 0-.77.27-1.4.72-1.89-.07-.18-.31-.9.07-1.87 0 0 .59-.19 1.93.72a6.7 6.7 0 011.76-.24c.6 0 1.2.08 1.76.24 1.34-.91 1.93-.72 1.93-.72.38.97.14 1.69.07 1.87.45.49.72 1.12.72 1.89 0 2.7-1.64 3.29-3.21 3.46.25.22.48.65.48 1.31v1.94c0 .19.13.41.48.34A7.001 7.001 0 0015 8c0-3.87-3.13-7-7-7z"/>
                </svg>
                <span className="text-[11.5px] font-medium tracking-[.14em] uppercase">GitHub</span>
              </div>
              <a
                href="https://github.com/siddheshsawant-work"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'var(--navy)', fontFamily: 'ui-monospace, Menlo, monospace', wordBreak: 'break-all', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
                className="text-[13px] leading-[1.7] hover:text-[var(--gold)] transition-colors duration-200"
              >
                github.com/siddheshsawant-work
                <span style={{ fontSize: '15px', lineHeight: 1, flexShrink: 0 }}>↗</span>
              </a>
            </div>

            <div>
              <div style={{ color: 'var(--gold)', margin: '0 0 10px', display: 'flex', alignItems: 'center', gap: '7px' }}>
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <rect x="1" y="4" width="12" height="8.5" rx="1.2"/>
                  <path d="M4.5 4V2.8a.8.8 0 01.8-.8h3.4a.8.8 0 01.8.8V4"/>
                  <line x1="1" y1="7" x2="13" y2="7"/>
                </svg>
                <span className="text-[11.5px] font-medium tracking-[.14em] uppercase">Open to</span>
              </div>
              <p style={{ color: 'var(--txt)', margin: 0 }} className="text-[15px] leading-[1.8] font-light">
                QA Lead/Manager, Program/Product Manager
              </p>
            </div>

            <div>
              <div style={{ color: 'var(--gold)', margin: '0 0 10px', display: 'flex', alignItems: 'center', gap: '7px' }}>
                <svg width="13" height="13" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                  <path d="M7 1.5A3.5 3.5 0 003.5 5c0 2.8 3.5 7.5 3.5 7.5S10.5 7.8 10.5 5A3.5 3.5 0 007 1.5z"/>
                  <circle cx="7" cy="5" r="1.3"/>
                </svg>
                <span className="text-[11.5px] font-medium tracking-[.14em] uppercase">Location</span>
              </div>
              <p style={{ color: 'var(--txt)', margin: 0 }} className="text-[15px] leading-[1.8] font-light">
                Mumbai, India and open to remote
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
