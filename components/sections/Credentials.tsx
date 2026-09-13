import { education, certifications } from '@/content/credentials';

export default function Credentials() {
  return (
    <section
      id="credentials"
      style={{ borderTop: '1px solid var(--line)' }}
      className="py-24 px-8"
    >
      <div className="max-w-[1180px] mx-auto">
        <p
          style={{ color: 'var(--gold)' }}
          className="m-0 mb-[14px] text-[12px] font-medium tracking-[.22em] uppercase"
        >
          06 / Credentials
        </p>
        <h2
          style={{
            fontFamily: 'var(--font-lora, Lora, Georgia, serif)',
            fontSize: 'clamp(28px,4.4vw,38px)',
            color: 'var(--navy)',
            letterSpacing: '-.01em',
            margin: '0 0 60px',
            fontWeight: 600,
          }}
        >
          Education &amp; Certifications
        </h2>

        <div
          className="stack-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '.9fr 1.1fr',
            gap: '76px',
            alignItems: 'start',
          }}
        >
          {/* Education */}
          <div className="flex flex-col gap-[30px]">
            {education.map((edu) => (
              <div
                key={edu.degree}
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--line-soft)',
                  borderTop: '3px solid var(--gold)',
                  padding: '32px 30px',
                }}
              >
                <p
                  style={{ color: 'var(--gold)', fontFamily: 'ui-monospace, Menlo, monospace', margin: '0 0 12px' }}
                  className="text-[12px]"
                >
                  {edu.period}
                </p>
                <h3
                  style={{
                    fontFamily: 'var(--font-lora, Lora, Georgia, serif)',
                    color: 'var(--navy)',
                    fontSize: '24px',
                    lineHeight: 1.3,
                    fontWeight: 600,
                    margin: '0 0 8px',
                  }}
                >
                  {edu.degree}
                </h3>
                <p
                  style={{ color: 'var(--txt)', opacity: 0.8, margin: edu.description ? '0 0 14px' : 0 }}
                  className="text-[14px] font-medium"
                >
                  {edu.institution}
                </p>
                {edu.description && (
                  <p
                    style={{ color: 'var(--txt)', opacity: 0.85, margin: 0 }}
                    className="text-[14.5px] leading-[1.8] font-light"
                  >
                    {edu.description}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <p
              style={{ color: 'var(--gold)', margin: '0 0 8px' }}
              className="text-[11.5px] font-medium tracking-[.16em] uppercase"
            >
              Certifications
            </p>
            {certifications.map((cert) => (
              <div
                key={cert.name}
                style={{ borderTop: '1px solid var(--line)' }}
                className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-3 py-5"
              >
                <div>
                  <h4
                    style={{ color: 'var(--navy)', margin: '0 0 5px' }}
                    className="text-[15.5px] font-medium"
                  >
                    {cert.name}
                  </h4>
                  <p
                    style={{ color: 'var(--txt)', opacity: 0.7, margin: 0 }}
                    className="text-[13.5px] font-light"
                  >
                    {cert.issuer}
                  </p>
                </div>
                <span
                  style={{ color: 'var(--gold)', fontFamily: 'ui-monospace, Menlo, monospace' }}
                  className="text-[12px]"
                >
                  {cert.date}
                </span>
              </div>
            ))}
            <div style={{ borderTop: '1px solid var(--line)' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
