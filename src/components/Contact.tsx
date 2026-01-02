import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  Instagram,
  Facebook,
} from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const contactInfo = [
  {
    icon: Mail,
    value: 'sjaiprakash682@gmail.com',
    href: 'mailto:sjaiprakash682@gmail.com',
  },
  {
    icon: Phone,
    value: '+91 9587073793',
    href: 'tel:+919587073793',
  },
  {
    icon: MapPin,
    value: 'Bengaluru, India',
    href: '#',
  },
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/JAIPRAKASH-07' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/jai-prakash-b111b2192/' },
  { icon: Twitter, href: 'https://x.com/vistabuzzjp' },
  { icon: Youtube, href: 'https://www.youtube.com/@vistabuzztechfacts' },
  { icon: Instagram, href: 'https://instagram.com/vistabuzzjp' },
  { icon: Facebook, href: 'https://www.facebook.com/share/17eANHbhQw/' },
];

const Contact = () => {
  return (
    <section id="contact" className="relative ">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Get In Touch</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gradient">
            Contact Me
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((item, index) => (
              <Card
                key={index}
                className="bg-gradient-card border-border p-6 text-center hover:border-primary/50 transition-all duration-300"
              >
                <a href={item.href} className="block">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-foreground font-medium break-words">
                    {item.value}
                  </p>
                </a>
              </Card>
            ))}
          </div>

          {/* Social Links */}
          <Card className="bg-gradient-card border-border p-8">
            <h3 className="text-xl font-semibold text-foreground text-center mb-6">
              Connect With Me
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                </a>
              ))}
            </div>
          </Card>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
              size="lg"
             className="bg-gradient-primary hover:opacity-90 glow-effect mt-4 md:mt-6"
            >
              <a
                href="mailto:sjaiprakash682@gmail.com"
                className="flex items-center gap-2"
              >
                <Mail className="w-4 h-4" />
                Send Me an Email
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
