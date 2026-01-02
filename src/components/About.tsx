
import { Code2, Users, Lightbulb, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

type Highlight = {
  icon: React.ElementType;
  title: string;
  description: string;
};

type Stat = {
  label: string;
  value: string;
};

const highlights: Highlight[] = [
  {
    icon: Code2,
    title: "Full Stack Developer",
    description: "Building scalable, responsive web applications using modern technologies.",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Collaborating effectively with cross-functional teams to achieve shared goals.",
  },
  {
    icon: Lightbulb,
    title: "Continuous Learner",
    description: "Constantly exploring new tools, frameworks, and best development practices.",
  },
  {
    icon: Target,
    title: "Goal Oriented",
    description: "Focused on delivering high-quality solutions within timelines.",
  },
];

const stats: Stat[] = [
  { label: "Years Experience", value: "2+" },
  { label: "Projects Completed", value: "10+" },
  { label: "Technologies Used", value: "15+" },
  { label: "Happy Clients", value: "5+" },
];

const About = () => {
  return (
    <section id="about" className="relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">Get To Know Me</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gradient">
            About Me
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Career Objective */}
          <div className="bg-gradient-card rounded-2xl p-8 border border-border mb-12">
            <h3 className="text-xl font-semibold text-foreground mb-4">
              Career Objective
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              To leverage my engineering knowledge and gain industrial exposure
              in cutting-edge technologies, contributing to innovation and
              long-term organizational growth. I am committed to continuous
              learning, skill enhancement, and delivering value-driven solutions
              that support both personal and company success.
            </p>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <Card
                key={item.title}
                className="group bg-gradient-card border-border p-6 hover:border-primary/50 transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 rounded-xl hover:bg-primary/5 transition-colors"
              >
                <p className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </p>
                <p className="text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

