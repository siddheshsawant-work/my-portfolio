import { projects } from '@/content/projects';

export default function Projects() {
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
            margin: '0 0 56px',
            fontWeight: 600,
          }}
        >
          Things I&apos;ve Built
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit,minmax(300px,1fr))',
            gap: '28px',
          }}
        >
          {projects.map((project) => (
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

              {/* Lead */}
              <p
                style={{ color: 'var(--gold-on-deep)', margin: 0 }}
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
