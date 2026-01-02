import { Github, Linkedin, Twitter, Youtube, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import vistabuzz from '@/assets/wvistabuzz-main.png';

const socialLinks = [
  { icon: Github, href: 'https://github.com/JAIPRAKASH-07', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/jai-prakash-b111b2192/', label: 'LinkedIn' },
  { icon: Twitter, href: 'https://x.com/vistabuzzjp', label: 'Twitter' },
  { icon: Youtube, href: 'https://www.youtube.com/@vistabuzztechfacts', label: 'YouTube' },
];

const Hero = () => {
  return (
    <section id="home" className="flex items-center justify-center relative overflow-hidden  pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse animation-delay-400" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <p className="text-primary font-medium mb-4 animate-slide-up">Hello, I'm</p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 animate-slide-up animation-delay-200">
              <span className="text-foreground">Jai</span>{' '}
              <span className="text-gradient">Prakash</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 animate-slide-up animation-delay-400">
              Software Engineer & Content Creator
            </p>
            <p className="text-muted-foreground max-w-xl mb-8 animate-slide-up animation-delay-600">
             Building modern web applications with the MERN stack (MongoDB, Express, React, Node.js) and TypeScript—focused on scalability, performance, and clean architecture.
              Founder of <span className="text-primary font-semibold">VistaBuzz</span> – Educate. Entertain. Empower.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in animation-delay-600">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 glow-effect">
                <a href="#projects">View Projects</a>
              </Button>
              <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10">
                <a href="#contact">Get In Touch</a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start animate-fade-in animation-delay-600">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-72 h-72 md:w-96 md:h-96 rounded-full bg-gradient-primary p-1 animate-float">
                <div className="w-full h-full rounded-full bg-card overflow-hidden">
                  <img
                    src={vistabuzz}
                    alt="Jai Prakash"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about">
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
