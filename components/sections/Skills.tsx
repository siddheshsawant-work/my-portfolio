import { skills } from '@/content/skills';

const rowStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: '.34fr .66fr',
  gap: '48px',
  alignItems: 'baseline',
  padding: '26px 0',
  borderTop: '1px solid var(--line)',
};

export default function Skills() {
  return (
    <section
      id="skills"
      style={{ borderTop: '1px solid var(--line)' }}
      className="py-24 px-8"
    >
      <div className="max-w-[1180px] mx-auto">
        <p
          style={{ color: 'var(--gold)' }}
          className="m-0 mb-14 text-[12px] font-medium tracking-[.22em] uppercase"
        >
          02 / What I Bring
        </p>

        <div className="flex flex-col">
          {skills.map((skill) => (
            <div key={skill.num} style={rowStyle}>
              {/* Left: index + category name */}
              <div className="flex items-baseline gap-[14px]">
                <span
                  style={{ color: 'var(--gold)', fontFamily: 'ui-monospace, Menlo, monospace' }}
                  className="text-[11px] tracking-[.05em]"
                >
                  {skill.num}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-lora, Lora, Georgia, serif)',
                    color: 'var(--navy)',
                    fontSize: '23px',
                    fontWeight: 600,
                    lineHeight: 1.3,
                    margin: 0,
                  }}
                >
                  {skill.name}
                </h3>
              </div>

              {/* Right: detail + bullets */}
              <div>
                <p
                  style={{
                    color: 'var(--txt)',
                    opacity: 0.85,
                    maxWidth: '64ch',
                    margin: '0 0 16px',
                  }}
                  className="text-[14.5px] leading-[1.85] font-light"
                >
                  {skill.detail}
                </p>
                <div className="flex flex-wrap gap-x-[26px] gap-y-2">
                  {skill.bullets.map((b) => (
                    <span
                      key={b}
                      style={{ color: 'var(--txt)', opacity: 0.72 }}
                      className="flex items-baseline gap-[9px] text-[13.5px] leading-[1.6] font-light"
                    >
                      <span
                        style={{ background: 'var(--gold)', transform: 'translateY(-3px)', flexShrink: 0 }}
                        className="w-1 h-1"
                      />
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          <div style={{ borderTop: '1px solid var(--line)' }} />
        </div>
      </div>
    </section>
  );
}
