'use client';

import { useState } from 'react';
import { projects, FILTER_TABS } from '@/content/projects';

export default function Projects() {
  const [active, setActive] = useState<string>('All');

  const filtered = active === 'All'
    ? projects
    : projects.filter((p) => p.category.includes(active));

  return (
    <section
      id="projects"
      style={{ background: 'var(--deep)' }}
      className="py-24 px-8"
    >
      <div className="max-w-[1180px] mx-auto">
        <p
          style={{ color: 'var(--gold-on-deep)' }}
          className="m-0 mb-[14px] text-[12px] font-medium tracking-[.22em] uppercase"
        >
          04 / Projects
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-lora, Lora, Georgia, serif)',
            fontSize: 'clamp(28px,4.4vw,38px)',
            color: '#FAFAF9',
            letterSpacing: '-.01em',
            margin: '0 0 16px',
            fontWeight: 600,
          }}
        >
          Work &amp; Initiatives
        </h2>
        <p
          style={{ color: 'rgba(250,250,249,.6)', margin: '0 0 40px', maxWidth: '58ch' }}
          className="text-[15px] leading-[1.8] font-light"
        >
          Selected work and initiatives from recent times.
        </p>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-[10px]" style={{ marginBottom: '40px' }}>
          {FILTER_TABS.map((tab) => {
            const isActive = active === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActive(tab)}
                style={{
                  background: isActive ? 'var(--gold-on-deep)' : 'transparent',
                  color: isActive ? 'var(--deep)' : 'rgba(250,250,249,.65)',
                  border: isActive ? '1px solid var(--gold-on-deep)' : '1px solid rgba(200,155,60,.4)',
                  padding: '8px 18px',
                  borderRadius: '100px',
                  cursor: 'pointer',
                  transition: 'all 150ms ease',
                  fontWeight: isActive ? 500 : 400,
                }}
                className="text-[12px] tracking-[.08em] uppercase"
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
            gap: '28px',
          }}
        >
          {filtered.map((project) => (
            <article
              key={project.index}
              style={{
                background: 'var(--deep-card)',
                border: '1px solid rgba(200,155,60,.35)',
                padding: '38px 34px 34px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}
            >
              {/* Title + index */}
              <div className="flex items-baseline justify-between gap-3">
                <h3
                  style={{
                    fontFamily: 'var(--font-lora, Lora, Georgia, serif)',
                    color: '#FAFAF9',
                    fontSize: project.index === '01' ? '28px' : '26px',
                    fontWeight: 600,
                    lineHeight: 1.2,
                    margin: 0,
                  }}
                >
                  {project.title}
                </h3>
                <span
                  style={{ color: 'var(--gold-on-deep)', fontFamily: 'ui-monospace, Menlo, monospace' }}
                  className="text-[11px]"
                >
                  {project.index}
                </span>
              </div>

              {/* Accent rule */}
              <div style={{ background: 'var(--gold-on-deep)', width: '40px', height: '2px' }} />

              {/* Category badges */}
              <div className="flex flex-wrap gap-[8px]">
                {project.category.map((cat) => (
                  <span
                    key={cat}
                    style={{
                      color: 'var(--gold-on-deep)',
                      border: '1px solid rgba(200,155,60,.5)',
                      background: 'rgba(200,155,60,.08)',
                      padding: '4px 10px',
                      borderRadius: '4px',
                    }}
                    className="text-[11px] font-medium tracking-[.08em] uppercase"
                  >
                    {cat}
                  </span>
                ))}
              </div>

              {/* Lead */}
              <p
                style={{ color: 'rgba(250,250,249,.85)', margin: 0 }}
                className="text-[14.5px] font-medium tracking-[.02em]"
              >
                {project.lead}
              </p>

              {/* Body */}
              <p
                style={{ color: 'rgba(250,250,249,.78)', margin: 0 }}
                className="text-[14.5px] leading-[1.8] font-light"
              >
                {project.body}
              </p>

              {/* Tags + status */}
              <div className="mt-auto pt-[14px] flex flex-col gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      style={{ color: 'rgba(250,250,249,.7)', border: '1px solid rgba(250,250,249,.22)' }}
                      className="text-[11.5px] tracking-[.06em] uppercase px-[11px] py-[6px]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <p
                  style={{ color: 'var(--gold-on-deep)', margin: 0 }}
                  className="flex items-center gap-[9px] text-[12px] tracking-[.08em] uppercase"
                >
                  <span
                    style={{ background: 'var(--gold-on-deep)', borderRadius: '50%' }}
                    className="w-[5px] h-[5px]"
                  />
                  {project.status}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
