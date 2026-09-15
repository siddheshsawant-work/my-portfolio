'use client';

import { useState } from 'react';

const DOC_ID = '11M65mvsef81kSHxvrwvVWKxpvwpFwwQYNFxam05tB5w';
const PDF_URL = `https://docs.google.com/document/d/${DOC_ID}/export?format=pdf`;
const WORD_URL = `https://docs.google.com/document/d/${DOC_ID}/export?format=docx`;
const PREVIEW_URL = `https://docs.google.com/document/d/${DOC_ID}/preview`;

export default function Resume() {
  const [previewOpen, setPreviewOpen] = useState(false);

  return (
    <section id="resume" className="py-24 px-8">
      <div className="max-w-[1180px] mx-auto">
        <p
          style={{ color: 'var(--gold)' }}
          className="m-0 mb-[14px] text-[12px] font-medium tracking-[.22em] uppercase"
        >
          06 / Resume &amp; Profiles
        </p>

        {/* Header row */}
        <div
          style={{ borderBottom: '1px solid var(--line)' }}
          className="flex flex-wrap items-end justify-between gap-8 pb-9"
        >
          <div style={{ maxWidth: '46ch' }}>
            <h2
              style={{
                fontFamily: 'var(--font-lora, Lora, Georgia, serif)',
                fontSize: 'clamp(28px,4.4vw,38px)',
                color: 'var(--navy)',
                letterSpacing: '-.01em',
                margin: '0 0 18px',
                fontWeight: 600,
              }}
            >
              Two formats, one story.
            </h2>
            <p
              style={{ color: 'var(--txt)', opacity: 0.85, margin: 0 }}
              className="text-[15.5px] leading-[1.85] font-light"
            >
              A clean ATS-optimised Word version for applications, and a designed PDF for sharing
              directly. My LinkedIn profile carries more detail on work history, recommendations and
              activity.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 flex-wrap">
            <a
              href={PDF_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold rounded-[6px] text-[13.5px] font-medium tracking-[.08em] uppercase px-[30px] py-[17px]"
            >
              Download PDF
            </a>
            <a
              href={WORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-navy-outline rounded-[6px] text-[13.5px] font-medium tracking-[.08em] uppercase px-[30px] py-[15.5px]"
            >
              Download Word
            </a>
            <button
              type="button"
              onClick={() => setPreviewOpen((o) => !o)}
              className="btn-subtle-outline rounded-[6px] text-[13.5px] font-medium tracking-[.08em] uppercase px-[30px] py-[15.5px] cursor-pointer"
            >
              {previewOpen ? 'Hide Preview' : 'Preview Resume'}
            </button>
          </div>
        </div>

        {previewOpen && (
          <div className="mt-12 flex justify-center">
            <div
              style={{
                width: '100%',
                maxWidth: '760px',
                aspectRatio: '8.5/11',
                border: '1px solid var(--line)',
                boxShadow: '0 18px 44px var(--shadow)',
                overflow: 'hidden',
              }}
            >
              <iframe
                src={PREVIEW_URL}
                title="Resume preview"
                style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
