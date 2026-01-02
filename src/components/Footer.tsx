import { Heart } from 'lucide-react';
import vistabuzzLogo from '@/assets/vistabuzz-main.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src={vistabuzzLogo} alt="VistaBuzz" className="h-8 w-8 rounded-lg object-cover" />
            <span className="text-foreground font-semibold">Founder: Jaiprakash</span>
          </div>
          
          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} Made with <Heart className="w-4 h-4 text-destructive fill-destructive" /> by Vista Buzz
          </p>
          
          <a
            href="https://www.instagram.com/vistabuzzjp/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 text-sm font-medium transition-colors"
          >
            VistaBuzzJP 
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
