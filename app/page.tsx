import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Credentials from '@/components/sections/Credentials';
import Resume from '@/components/sections/Resume';
import LinkedIn from '@/components/sections/LinkedIn';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Credentials />
        <Resume />
        <LinkedIn />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
