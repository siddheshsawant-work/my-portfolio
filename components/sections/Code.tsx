import { codeGroups, githubUrl } from '@/content/code';

const codeRowStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'minmax(0,.34fr) minmax(0,.44fr) auto auto',
  gap: '12px 22px',
  alignItems: 'baseline',
  padding: '20px 0',
  color: 'var(--txt)',
  borderTop: '1px solid var(--line)',
};

export default function Code() {
  return (
    <section
      id="code"
      style={{ borderTop: '1px solid var(--line)' }}
      className="py-24 px-8"
    >
      <div className="max-w-[1180px] mx-auto">
        <p
          style={{ color: 'var(--gold)' }}
          className="m-0 mb-[14px] text-[12px] font-medium tracking-[.22em] uppercase"
        >
          05 / Code
        </p>

        {/* Header row */}
        <div className="flex flex-wrap items-end justify-between gap-7 mb-14">
          <h2
            style={{
              fontFamily: 'var(--font-lora, Lora, Georgia, serif)',
              fontSize: 'clamp(28px,4.4vw,38px)',
              color: 'var(--navy)',
              letterSpacing: '-.01em',
              margin: 0,
              fontWeight: 600,
            }}
          >
            Repos &amp; Claude Skills
          </h2>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold rounded-[6px] text-[13.5px] font-medium tracking-[.08em] uppercase px-7 py-[15px] whitespace-nowrap"
          >
            View GitHub Profile
          </a>
        </div>

        <div className="flex flex-col gap-[52px]">
          {codeGroups.map((group) => (
            <div key={group.label}>
              <p
                style={{ color: 'var(--gold)', margin: '0 0 6px' }}
                className="text-[11.5px] font-medium tracking-[.16em] uppercase"
              >
                {group.label}
              </p>
              <p
                style={{ color: 'var(--txt)', opacity: 0.7, margin: '0 0 8px', maxWidth: '62ch' }}
                className="text-[14px] leading-[1.7] font-light"
              >
                {group.blurb}
              </p>

              {group.items.map((item, i) => (
                <a
                  key={i}
                  href={item.href}
                  style={codeRowStyle}
                  className="hover:text-[var(--gold)] hover:[&_span:first-child]:text-[var(--gold)] transition-colors duration-200"
                >
                  <span
                    style={{ color: 'var(--navy)', fontFamily: 'ui-monospace, Menlo, monospace' }}
                    className="text-[14.5px] font-medium"
                  >
                    {item.name}
                  </span>
                  <span className="text-[13.5px] leading-[1.6] font-light opacity-75">
                    {item.purpose}
                  </span>
                  <span
                    style={{ border: '1px solid var(--line)', borderRadius: '4px' }}
                    className="text-[11px] tracking-[.08em] uppercase px-[9px] py-[5px] opacity-80 whitespace-nowrap"
                  >
                    {item.tag}
                  </span>
                  <span
                    style={{ color: 'var(--gold)' }}
                    className="text-[13px] whitespace-nowrap"
                  >
                    {item.marker}
                  </span>
                </a>
              ))}
              <div style={{ borderTop: '1px solid var(--line)' }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
