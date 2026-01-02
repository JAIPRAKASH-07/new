import { Youtube, ExternalLink } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import techfactsLogo from '@/assets/vistabuzz-techfacts.png';
import entertainmentLogo from '@/assets/vistabuzz-entertainment.png';

const channels = [
  {
    name: 'VistaBuzz TechFacts',
    tagline: 'Technology, Facts & Developer Hub',
    subtitle: 'Learn • Build • Innovate',
    description: 'A learning-focused technology channel designed to simplify complex tech concepts and empower learners. From beginner-friendly coding tutorials to advanced development insights and AI tool reviews.',
    features: [
      'Programming tutorials (beginner to advanced)',
      'Web & app development guides',
      'AI tools, SaaS platforms, and software reviews',
      'Career guidance for developers',
    ],
    logo: techfactsLogo,
    youtube: 'https://www.youtube.com/@vistabuzztechfacts',
    color: 'primary',
  },
  {
    name: 'VistaBuzz Entertainment',
    tagline: 'Comedy • Motivation • Fun',
    subtitle: 'Making People Smile Daily',
    description: 'Delivering quick laughter and light-hearted moments through relatable comedy, short skits, and humorous observations inspired by everyday life.',
    features: [
      'Comedy shorts & reels',
      'Relatable everyday humor',
      'Family-friendly entertainment',
      'Trending meme-based content',
    ],
    logo: entertainmentLogo,
    youtube: 'https://www.youtube.com/@vistabuzzentertainment',
    color: 'accent',
  },
];

const VistaBuzz = () => {
  return (
    <section id="vistabuzz" className=" relative">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Content Creation</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gradient mb-4">VistaBuzz</h2>
          <p className="text-xl text-muted-foreground">Educate. Entertain. Empower.</p>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="bg-gradient-card rounded-2xl p-8 border border-border text-center">
            <h3 className="text-xl font-semibold text-foreground mb-4">Our Vision</h3>
            <p className="text-muted-foreground leading-relaxed">
              To build a trusted and recognizable digital content ecosystem that educates, entertains, 
              and empowers audiences worldwide through high-quality, consistent, and meaningful media.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {channels.map((channel) => (
            <Card
              key={channel.name}
              className="bg-gradient-card border-border p-8 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-32 h-32 rounded-2xl overflow-hidden mb-6 glow-effect">
                  <img
                    src={channel.logo}
                    alt={channel.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-foreground mb-2">{channel.name}</h3>
                <p className="text-primary font-medium mb-1">{channel.tagline}</p>
                <p className="text-sm text-muted-foreground mb-4">{channel.subtitle}</p>
                
               
                
                <p className="text-muted-foreground mb-4">{channel.description}</p>
                
                <Button className="w-full bg-gradient-primary hover:opacity-90">
                  <a
                    href={channel.youtube}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <Youtube className="w-4 h-4" />
                    Subscribe on YouTube
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VistaBuzz;
