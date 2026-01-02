import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Experience from '@/components/Experience';
import VistaBuzz from '@/components/VistaBuzz';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Content Container */}
      <main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 space-y-16 py-16">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <VistaBuzz />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
