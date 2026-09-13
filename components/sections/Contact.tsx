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
          09 / Contact
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
          I&apos;m open to new opportunities and happy to connect — whether you have a role to
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
                  Thanks — I&apos;ll be in touch shortly.
                </span>
              )}
              {status === 'error' && (
                <span style={{ color: '#c0392b' }} className="text-[13.5px] font-normal">
                  Something went wrong — please email me directly.
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
              <p
                style={{ color: 'var(--gold)', margin: '0 0 10px' }}
                className="text-[11.5px] font-medium tracking-[.14em] uppercase"
              >
                Email
              </p>
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
              <p
                style={{ color: 'var(--gold)', margin: '0 0 10px' }}
                className="text-[11.5px] font-medium tracking-[.14em] uppercase"
              >
                LinkedIn
              </p>
              <a
                href="https://linkedin.com/in/siddhesh-sawant-0283349"
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
              <p
                style={{ color: 'var(--gold)', margin: '0 0 10px' }}
                className="text-[11.5px] font-medium tracking-[.14em] uppercase"
              >
                Open to
              </p>
              <p style={{ color: 'var(--txt)', margin: 0 }} className="text-[15px] leading-[1.8] font-light">
                Technical Program Manager · Program Manager · Product / Technical Leadership
              </p>
            </div>

            <div>
              <p
                style={{ color: 'var(--gold)', margin: '0 0 10px' }}
                className="text-[11.5px] font-medium tracking-[.14em] uppercase"
              >
                Location
              </p>
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
