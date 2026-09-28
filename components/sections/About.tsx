import { stats } from '@/content/stats';

export default function About() {
  return (
    <section
      id="about"
      style={{ borderTop: '1px solid var(--line)' }}
      className="py-24 px-8"
    >
      <div className="max-w-[1180px] mx-auto">
        <p style={{ color: 'var(--gold)' }} className="m-0 mb-5 text-[12px] font-medium tracking-[.22em] uppercase">
          01 / About Me
        </p>

        <div
          className="stack-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr .8fr',
            gap: '76px',
            alignItems: 'start',
          }}
        >
          {/* Bio */}
          <div>
            <h2
              style={{
                fontFamily: 'var(--font-lora, Lora, Georgia, serif)',
                fontSize: 'clamp(28px,4.4vw,38px)',
                color: 'var(--navy)',
                letterSpacing: '-.01em',
                maxWidth: '24ch',
                textWrap: 'pretty',
              } as React.CSSProperties}
              className="m-0 mb-[30px] leading-[1.25] font-semibold"
            >
              I lead quality, run the programs and build what the team needs.
            </h2>

            {[
              "I'm a QA Manager and Technical Program Manager based in Mumbai with 13+ years across SaaS and e-commerce platforms. I combine hands-on quality leadership with cross-functional program delivery, using AI tooling to give leadership real confidence in what ships.",
              'I led a QA team of 11 engineers across 50+ customer-facing releases, owning test strategy, release gating and sign-off from planning through production. That spans manual best practices, SEO, load and performance testing, and automation frameworks including Playwright and Robot Framework.',
              'In parallel, I owned internal technical programs, Salesforce reporting and dashboards, and structured stakeholder programs. I also managed external client accounts, coordinating across product and engineering teams to drive delivery from kickoff through go-live.',
              'What makes me a little different is how I use AI. Using Claude and MCP, I unlock data workflows beyond what standard platforms allow and have shipped production-grade internal tools from scratch: full-stack platforms on React, Next.js and PostgreSQL, deployed on GCP. I also built a model-agnostic AI image-generation engine with a custom prompt framework and built-in IP-safety constraints.',
              "I hold an MBA in Information Technology and Systems Management alongside my engineering degree, and I've kept building on that with certifications in Generative AI, ISTQB AI Testing and program management. I'm open to QA Leadership and Program Management roles at product-driven companies, especially in SaaS and e-commerce.",
            ].map((para, i) => (
              <p
                key={i}
                style={{ color: 'var(--txt)', maxWidth: '64ch', textWrap: 'pretty' } as React.CSSProperties}
                className="m-0 mb-5 text-[16px] leading-[1.9] font-light last:mb-0"
              >
                {para}
              </p>
            ))}
          </div>

          {/* Stats grid */}
          <div
            className="stats-grid unstick"
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '14px',
              position: 'sticky',
              top: 'calc(var(--hdr-h, 92px) + 32px)',
            }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                style={{
                  borderLeft: '3px solid var(--gold)',
                  background: 'var(--surface)',
                  borderTop: '1px solid var(--line-soft)',
                  borderRight: '1px solid var(--line-soft)',
                  borderBottom: '1px solid var(--line-soft)',
                  padding: '20px 18px',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-lora, Lora, Georgia, serif)',
                    color: 'var(--navy)',
                    fontSize: '32px',
                    fontWeight: 600,
                    lineHeight: 1.05,
                  }}
                >
                  {stat.value}
                </div>
                <div
                  style={{ color: 'var(--txt)', opacity: 0.65 }}
                  className="mt-[10px] text-[11px] leading-[1.5] tracking-[.1em] uppercase"
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
