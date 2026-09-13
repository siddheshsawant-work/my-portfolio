import { programs, roles, history } from '@/content/experience';

function Bullet({ text }: { text: string }) {
  return (
    <span
      style={{ color: 'var(--txt)', opacity: 0.72 }}
      className="flex items-baseline gap-[10px] text-[13.5px] leading-[1.65] font-light"
    >
      <span
        style={{ background: 'var(--gold)', transform: 'translateY(-3px)', flexShrink: 0 }}
        className="w-1 h-1"
      />
      {text}
    </span>
  );
}

export default function Experience() {
  return (
    <section
      id="experience"
      style={{ borderTop: '1px solid var(--line)' }}
      className="py-24 px-8"
    >
      <div className="max-w-[1180px] mx-auto">
        <p
          style={{ color: 'var(--gold)' }}
          className="m-0 mb-[14px] text-[12px] font-medium tracking-[.22em] uppercase"
        >
          03 / Experience
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-lora, Lora, Georgia, serif)',
            fontSize: 'clamp(28px,4.4vw,38px)',
            color: 'var(--navy)',
            letterSpacing: '-.01em',
            margin: '0 0 64px',
            fontWeight: 600,
          }}
        >
          Career Timeline
        </h2>

        {/* Contentstack block */}
        <div
          className="stack-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '.28fr .72fr',
            gap: '56px',
            alignItems: 'start',
            paddingBottom: '20px',
            borderTop: '2px solid var(--gold)',
            paddingTop: '34px',
          }}
        >
          {/* Sticky left: company info */}
          <div
            className="unstick"
            style={{ position: 'sticky', top: 'calc(var(--hdr-h, 92px) + 32px)' }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-lora, Lora, Georgia, serif)',
                color: 'var(--navy)',
                fontSize: '30px',
                fontWeight: 600,
                margin: '0 0 10px',
              }}
            >
              Contentstack
            </h3>
            <p
              style={{ color: 'var(--gold)', margin: '0 0 6px' }}
              className="text-[13px] tracking-[.06em] uppercase"
            >
              Oct 2021 – Aug 2026
            </p>
            <p
              style={{ color: 'var(--txt)', opacity: 0.7, margin: 0 }}
              className="text-[13.5px] leading-[1.7] font-light"
            >
              Mumbai, India · SaaS CMS platform, one of the leading headless CMS providers globally.
              Four roles over five years.
            </p>
          </div>

          {/* Right: timeline entries */}
          <div>
            {/* PM role - first entry */}
            <div className="timeline-first">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h4
                  style={{
                    fontFamily: 'var(--font-lora, Lora, Georgia, serif)',
                    color: 'var(--navy)',
                    fontSize: '23px',
                    fontWeight: 600,
                    margin: 0,
                  }}
                >
                  Program Manager, TSO Technical Operations
                </h4>
                <span
                  style={{ color: 'var(--gold)', fontFamily: 'ui-monospace, Menlo, monospace' }}
                  className="text-[12px]"
                >
                  Aug 2025 – Aug 2026
                </span>
              </div>

              <p
                style={{ color: 'var(--txt)', maxWidth: '66ch', margin: '16px 0 0' }}
                className="text-[15px] leading-[1.85] font-light"
              >
                After leading QA at Contentstack for nearly four years I moved into a newly created
                technical program management role inside TSO Operations, owning and running eight
                distinct programs simultaneously, a mix of hands-on building and structured program
                delivery.
              </p>

              {/* Programs sub-section */}
              <p
                style={{ color: 'var(--gold)', margin: '26px 0 18px' }}
                className="text-[11.5px] font-medium tracking-[.16em] uppercase"
              >
                Programs I ran
              </p>

              <div className="flex flex-col gap-[2px]">
                {programs.map((prog) => (
                  <div
                    key={prog.name}
                    style={{ borderTop: '1px solid var(--line)' }}
                    className="py-[22px]"
                  >
                    <h5
                      style={{ color: 'var(--navy)', margin: '0 0 12px' }}
                      className="text-[15px] font-medium tracking-[.01em]"
                    >
                      {prog.name}
                    </h5>
                    <p
                      style={{ color: 'var(--txt)', opacity: 0.85, maxWidth: '66ch', margin: 0 }}
                      className="text-[14.5px] leading-[1.85] font-light"
                    >
                      {prog.body}
                    </p>
                    {prog.bullets.length > 0 && (
                      <div className="flex flex-col gap-[7px] mt-[14px]">
                        {prog.bullets.map((b) => (
                          <Bullet key={b} text={b} />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Subsequent Contentstack roles */}
            {roles.map((role) => (
              <div
                key={role.title}
                className="timeline-role"
                style={{ borderTop: '1px solid var(--line)' }}
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h4
                    style={{
                      fontFamily: 'var(--font-lora, Lora, Georgia, serif)',
                      color: 'var(--navy)',
                      fontSize: '23px',
                      fontWeight: 600,
                      margin: 0,
                    }}
                  >
                    {role.title}
                  </h4>
                  <span
                    style={{ color: 'var(--gold)', fontFamily: 'ui-monospace, Menlo, monospace' }}
                    className="text-[12px]"
                  >
                    {role.period}
                  </span>
                </div>
                <p
                  style={{ color: 'var(--txt)', maxWidth: '66ch', margin: '16px 0 0' }}
                  className="text-[15px] leading-[1.85] font-light"
                >
                  {role.body}
                </p>
                {role.bullets.length > 0 && (
                  <div className="flex flex-col gap-2 mt-4">
                    {role.bullets.map((b) => (
                      <span
                        key={b}
                        style={{ color: 'var(--txt)', opacity: 0.75 }}
                        className="flex items-baseline gap-[10px] text-[13.5px] leading-[1.7] font-light"
                      >
                        <span
                          style={{ background: 'var(--gold)', transform: 'translateY(-3px)', flexShrink: 0 }}
                          className="w-1 h-1"
                        />
                        <span style={{ maxWidth: '64ch' }}>{b}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Before Contentstack */}
        <div className="mt-[70px]">
          <p
            style={{ color: 'var(--gold)', margin: '0 0 26px' }}
            className="text-[11.5px] font-medium tracking-[.16em] uppercase"
          >
            Before Contentstack
          </p>

          {history.map((entry) => (
            <div
              key={entry.period}
              className="timeline-hist stack-grid"
              style={{
                display: 'grid',
                gridTemplateColumns: '.28fr .72fr',
                gap: '56px',
                alignItems: 'start',
                borderTop: '1px solid var(--line)',
                padding: '28px 0 28px 34px',
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-lora, Lora, Georgia, serif)',
                    color: 'var(--navy)',
                    fontSize: '21px',
                    fontWeight: 600,
                    lineHeight: 1.3,
                    margin: '0 0 8px',
                  }}
                >
                  {entry.company}
                </h3>
                <p
                  style={{ color: 'var(--gold)', fontFamily: 'ui-monospace, Menlo, monospace', margin: 0 }}
                  className="text-[12px]"
                >
                  {entry.period}
                </p>
              </div>
              <div>
                <h4
                  style={{ color: 'var(--navy)', margin: '0 0 12px' }}
                  className="text-[15px] font-medium"
                >
                  {entry.title}
                </h4>
                <p
                  style={{ color: 'var(--txt)', opacity: 0.85, maxWidth: '66ch', margin: 0 }}
                  className="text-[14.5px] leading-[1.85] font-light"
                >
                  {entry.body}
                </p>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--line)' }} />
        </div>
      </div>
    </section>
  );
}
