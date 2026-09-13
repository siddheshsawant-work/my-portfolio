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
              I run the room — and build what the room needs.
            </h2>

            {[
              "I'm a Technical Program Manager based in Mumbai with over 13 years of experience that spans quality engineering, team leadership, and end-to-end technical program delivery.",
              'My career started in software testing — building test strategies, leading automation efforts, and eventually managing QA teams across some of the most demanding product environments in SaaS. Over time I grew into owning programs, managing customer relationships, and driving cross-functional initiatives that touched product, engineering, sales and field teams simultaneously.',
              'What makes me a little different is that I don\'t just manage programs — I build things. Using a vibe coding workflow with Claude and MCP, I\'ve designed, built and shipped production-grade internal applications from scratch: full-stack platforms with React, Next.js and PostgreSQL, deployed on GCP, integrated with Salesforce and Snowflake APIs, and used daily by hundreds of people.',
              'I hold an MBA in Information Technology and Systems Management from NMIMS alongside my engineering degree, and I\'ve kept building on that foundation with certifications in Generative AI, ISTQB AI Testing, Salesforce and program management.',
              "I'm open to Technical Program Manager, Program Manager and Product/Technical Leadership roles at product-driven companies — especially in SaaS, where I feel most at home.",
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
