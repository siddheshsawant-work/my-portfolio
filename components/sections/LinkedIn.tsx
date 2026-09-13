export default function LinkedIn() {
  return (
    <section
      id="linkedin"
      style={{ borderTop: '1px solid var(--line)' }}
      className="py-24 px-8"
    >
      <div
        className="stack-grid max-w-[1180px] mx-auto"
        style={{
          display: 'grid',
          gridTemplateColumns: '.9fr 1.1fr',
          gap: '80px',
          alignItems: 'center',
        }}
      >
        {/* Left */}
        <div>
          <p
            style={{ color: 'var(--gold)' }}
            className="m-0 mb-[14px] text-[12px] font-medium tracking-[.22em] uppercase"
          >
            08 / LinkedIn
          </p>
          <h2
            style={{
              fontFamily: 'var(--font-lora, Lora, Georgia, serif)',
              fontSize: 'clamp(32px,5vw,44px)',
              color: 'var(--navy)',
              letterSpacing: '-.015em',
              margin: 0,
              fontWeight: 600,
            }}
          >
            Let&apos;s Connect.
          </h2>
        </div>

        {/* Right: card */}
        <div
          style={{
            background: 'var(--surface)',
            border: '1px solid var(--line)',
            borderTop: '3px solid var(--gold)',
            padding: '38px 36px',
            display: 'flex',
            flexDirection: 'column',
            gap: '22px',
          }}
        >
          <p
            style={{ color: 'var(--txt)', maxWidth: '52ch', margin: 0 }}
            className="text-[16px] leading-[1.8] font-light"
          >
            Follow my professional journey, posts, and updates on LinkedIn.
          </p>
          <p
            style={{ color: 'var(--navy)', fontFamily: 'ui-monospace, Menlo, monospace', margin: 0, wordBreak: 'break-all' }}
            className="text-[13px]"
          >
            linkedin.com/in/siddhesh-sawant-0283349
          </p>
          <div>
            <a
              href="https://www.linkedin.com/in/siddhesh-sawant-0283349"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-block rounded-[6px] text-[13.5px] font-medium tracking-[.08em] uppercase px-[30px] py-4"
            >
              View LinkedIn Profile
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
