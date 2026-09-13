import type { Metadata } from 'next';
import { Lora, Poppins } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import './globals.css';

const lora = Lora({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-lora',
  display: 'swap',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Siddhesh Sawant | Technical Program Manager',
  description:
    '13+ years across SaaS, QA leadership, and technical program delivery. Technical Program Manager based in Mumbai, India. Open to new opportunities.',
  keywords: [
    'Technical Program Manager',
    'Program Manager',
    'SaaS',
    'QA Leadership',
    'Salesforce',
    'Mumbai',
  ],
};

// Runs before first paint to avoid flash of wrong theme/palette
const THEME_SCRIPT = `(function(){var r=document.documentElement;var t='dark';var p='ink';try{t=localStorage.getItem('ss-site-theme')||'dark';p=localStorage.getItem('ss-site-palette')||'ink';}catch(e){}if(t==='light')r.setAttribute('data-theme','light');else r.removeAttribute('data-theme');if(p)r.setAttribute('data-palette',p);else r.removeAttribute('data-palette');})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-palette="ink" className={`${lora.variable} ${poppins.variable}`}>
      <head>
        {/* Must run synchronously before any paint to prevent FOUC */}
        <script dangerouslySetInnerHTML={{ __html: THEME_SCRIPT }} />
      </head>
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
