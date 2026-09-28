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

function RoleTitle({ children }: { children: React.ReactNode }) {
  return (
    <h4
      style={{
        fontFamily: 'var(--font-lora, Lora, Georgia, serif)',
        color: 'var(--navy)',
        fontSize: '20px',
        fontWeight: 600,
        margin: 0,
        lineHeight: 1.25,
      }}
    >
      {children}
    </h4>
  );
}

function RolePeriod({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{ color: 'var(--gold)', fontFamily: 'ui-monospace, Menlo, monospace', fontSize: '12px', display: 'block', marginTop: '6px', marginBottom: '14px' }}
    >
      {children}
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
            gridTemplateColumns: '.20fr .80fr',
            gap: '48px',
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
              Four roles over five years, two running in parallel.
            </p>
          </div>

          {/* Right: parallel two-track timeline */}
          <div>
            {/* Track labels */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '0.44fr 0.56fr',
                marginBottom: '10px',
              }}
            >
              <p
                style={{
                  color: 'var(--gold)',
                  margin: 0,
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '.18em',
                  textTransform: 'uppercase',
                  paddingRight: '28px',
                  textAlign: 'right',
                }}
              >
                QA Leadership
              </p>
              <p
                style={{
                  color: 'var(--gold)',
                  margin: 0,
                  fontSize: '11px',
                  fontWeight: 600,
                  letterSpacing: '.18em',
                  textTransform: 'uppercase',
                  paddingLeft: '28px',
                }}
              >
                Program Management
              </p>
            </div>

            {/* Spine + two columns */}
            <div
              style={{
                position: 'relative',
                display: 'grid',
                gridTemplateColumns: '0.44fr 0.56fr',
                alignItems: 'start',
                borderTop: '2px solid var(--gold)',
              }}
            >
              {/* Vertical center spine — position matches 0.44fr / 0.56fr split */}
              <div
                style={{
                  position: 'absolute',
                  left: '44%',
                  top: 0,
                  bottom: 0,
                  width: '1px',
                  background: 'var(--line)',
                  transform: 'translateX(-50%)',
                  zIndex: 0,
                }}
              />

              {/* Left column: QA roles (newest first) */}
              <div style={{ paddingRight: '28px', position: 'relative', zIndex: 1 }}>

                {/* Associate Manager, QA */}
                <div style={{ paddingTop: '30px', paddingBottom: '36px' }}>
                  <div className="flex items-start gap-[10px]">
                    <span
                      style={{
                        width: '10px', height: '10px', borderRadius: '50%',
                        background: 'var(--gold)', flexShrink: 0, marginTop: '6px',
                      }}
                    />
                    <RoleTitle>{roles[0].title}</RoleTitle>
                  </div>
                  <RolePeriod>{roles[0].period}</RolePeriod>
                  <p
                    style={{ color: 'var(--txt)', margin: '0 0 16px' }}
                    className="text-[13.5px] leading-[1.85] font-light"
                  >
                    {roles[0].body}
                  </p>
                  <div className="flex flex-col gap-[7px]">
                    {roles[0].bullets.map((b) => (
                      <Bullet key={b} text={b} />
                    ))}
                  </div>
                </div>

                {/* Team Lead, QA */}
                <div style={{ borderTop: '1px solid var(--line)', paddingTop: '30px', paddingBottom: '36px' }}>
                  <div className="flex items-start gap-[10px]">
                    <span
                      style={{
                        width: '10px', height: '10px', borderRadius: '50%',
                        background: 'var(--gold)', flexShrink: 0, marginTop: '6px',
                      }}
                    />
                    <RoleTitle>{roles[1].title}</RoleTitle>
                  </div>
                  <RolePeriod>{roles[1].period}</RolePeriod>
                  <p
                    style={{ color: 'var(--txt)', margin: '0 0 16px' }}
                    className="text-[13.5px] leading-[1.85] font-light"
                  >
                    {roles[1].body}
                  </p>
                  {roles[1].bullets.length > 0 && (
                    <div className="flex flex-col gap-[7px]">
                      {roles[1].bullets.map((b) => (
                        <Bullet key={b} text={b} />
                      ))}
                    </div>
                  )}
                </div>

                {/* Senior Engineer II, QA */}
                <div style={{ borderTop: '1px solid var(--line)', paddingTop: '30px' }}>
                  <div className="flex items-start gap-[10px]">
                    <span
                      style={{
                        width: '10px', height: '10px', borderRadius: '50%',
                        background: 'var(--gold)', flexShrink: 0, marginTop: '6px', opacity: 0.5,
                      }}
                    />
                    <RoleTitle>{roles[2].title}</RoleTitle>
                  </div>
                  <RolePeriod>{roles[2].period}</RolePeriod>
                  <p
                    style={{ color: 'var(--txt)', margin: 0 }}
                    className="text-[13.5px] leading-[1.85] font-light"
                  >
                    {roles[2].body}
                  </p>
                </div>
              </div>

              {/* Right column: PM role */}
              <div style={{ paddingLeft: '28px', position: 'relative', zIndex: 1 }}>
                <div style={{ paddingTop: '30px' }}>
                  <div className="flex items-start gap-[10px]">
                    <span
                      style={{
                        width: '10px', height: '10px', borderRadius: '50%',
                        background: 'var(--gold)', flexShrink: 0, marginTop: '6px',
                      }}
                    />
                    <RoleTitle>Program Manager (Technical)</RoleTitle>
                  </div>
                  <RolePeriod>Jul 2023 – Aug 2026</RolePeriod>
                  <p
                    style={{ color: 'var(--txt)', margin: '0 0 24px' }}
                    className="text-[13.5px] leading-[1.85] font-light"
                  >
                    From July 2023, running as Program Manager (Technical) in parallel with QA
                    leadership. Owned and ran eight distinct programs simultaneously inside TSO
                    Operations: a mix of hands-on building and structured program delivery across
                    product, engineering, sales and customer teams.
                  </p>

                  <p
                    style={{ color: 'var(--gold)', margin: '0 0 16px' }}
                    className="text-[11px] font-medium tracking-[.16em] uppercase"
                  >
                    Programs I ran
                  </p>

                  <div className="flex flex-col">
                    {programs.map((prog) => (
                      <div
                        key={prog.name}
                        style={{ borderTop: '1px solid var(--line)', paddingTop: '18px', paddingBottom: '18px' }}
                      >
                        <h5
                          style={{ color: 'var(--navy)', margin: '0 0 10px', fontSize: '13.5px', fontWeight: 500 }}
                        >
                          {prog.name}
                        </h5>
                        <p
                          style={{ color: 'var(--txt)', opacity: 0.85, margin: 0 }}
                          className="text-[13px] leading-[1.85] font-light"
                        >
                          {prog.body}
                        </p>
                        {prog.bullets.length > 0 && (
                          <div className="flex flex-col gap-[6px] mt-[12px]">
                            {prog.bullets.map((b) => (
                              <Bullet key={b} text={b} />
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
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
                gridTemplateColumns: '.20fr .80fr',
                gap: '48px',
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
