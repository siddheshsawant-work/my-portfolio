export default function Footer() {
  return (
    <footer style={{ background: 'var(--deep)' }} className="py-[34px] px-8">
      <div className="max-w-[1180px] mx-auto flex flex-wrap items-center justify-between gap-[18px]">
        <span className="text-[13.5px] font-light" style={{ color: 'rgba(250,250,249,.75)' }}>
          © 2026 Siddhesh Sawant
        </span>
        <span
          className="text-[12.5px] font-light tracking-[.05em]"
          style={{ color: 'rgba(250,250,249,.5)' }}
        >
          Built with React · Hosted on GCP
        </span>
        <div className="flex gap-[26px]">
          <a
            href="https://linkedin.com/in/siddhesh-sawant-0283349"
            style={{ color: 'var(--gold-on-deep)' }}
            className="text-[12.5px] tracking-[.1em] uppercase hover:text-white transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href="mailto:siddheshsawant5789@gmail.com"
            style={{ color: 'var(--gold-on-deep)' }}
            className="text-[12.5px] tracking-[.1em] uppercase hover:text-white transition-colors duration-200"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
