export default function Hero() {
  return (
    <section
      id="top"
      className="px-8 pb-[110px]"
      style={{ paddingTop: 'calc(var(--hdr-h, 92px) + 78px)' }}
    >
      <div className="max-w-[1180px] mx-auto">
        <div
          className="stack-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1fr) auto',
            gap: '56px',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          {/* Left: text */}
          <div>
            <p
              style={{ color: 'var(--gold)' }}
              className="m-0 mb-[22px] text-[12px] font-medium tracking-[.22em] uppercase"
            >
              Technical Program Management
            </p>

            <h1
              style={{
                fontFamily: 'var(--font-lora, Lora, Georgia, serif)',
                fontSize: 'clamp(44px,7.4vw,76px)',
                lineHeight: 1.04,
                color: 'var(--navy)',
                letterSpacing: '-.02em',
                margin: 0,
                whiteSpace: 'nowrap',
                fontWeight: 600,
              }}
            >
              Siddhesh Sawant
            </h1>

            {/* Gold rule */}
            <div
              style={{ background: 'var(--gold)' }}
              className="w-16 h-[3px] mt-8 mb-[26px]"
            />

            <p
              style={{ color: 'var(--txt)', opacity: 0.7 }}
              className="m-0 mb-[18px] text-[15px] leading-[1.7] font-normal tracking-[.02em]"
            >
              Program Manager (Technical) &nbsp;·&nbsp; SaaS &amp; Platform Delivery &nbsp;·&nbsp; Salesforce Programs
              <br />
              AI-Augmented Development &nbsp;·&nbsp; QA Leadership
            </p>

            <p
              style={{
                fontFamily: 'var(--font-lora, Lora, Georgia, serif)',
                fontSize: 'clamp(20px,2.4vw,24px)',
                color: 'var(--navy)',
                fontStyle: 'italic',
                textWrap: 'pretty',
              } as React.CSSProperties}
              className="m-0 mb-10 leading-[1.5] font-normal"
            >
              I manage the programs and build the tools that make my team faster at running them.
            </p>

            {/* CTAs */}
            <div className="flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="btn-gold rounded-[6px] text-[13.5px] font-medium tracking-[.08em] uppercase px-[34px] py-[17px]"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="btn-navy-outline rounded-[6px] text-[13.5px] font-medium tracking-[.08em] uppercase px-[34px] py-[15.5px]"
              >
                Contact Me
              </a>
            </div>

            {/* Divider + tagline */}
            <p
              style={{
                borderTop: '1px solid var(--line)',
                color: 'var(--txt)',
                opacity: 0.75,
                textWrap: 'pretty',
              } as React.CSSProperties}
              className="m-0 mt-[34px] pt-[26px] text-[14px] leading-[1.8] font-light"
            >
              Based in Mumbai, India. 13+ years across SaaS, QA leadership, and technical program
              delivery. Open to new opportunities.
            </p>
          </div>

          {/* Right: headshot */}
          <div className="flex justify-center">
            <div
              style={{
                maxWidth: '340px',
                width: '100%',
                aspectRatio: '1',
                borderRadius: '50%',
                border: '1px solid var(--line)',
                padding: '10px',
                background: 'var(--surface)',
              }}
            >
              <div
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2px solid var(--gold)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/headshot.jpeg"
                  alt="Siddhesh Sawant"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: '50% 22%',
                    display: 'block',
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
