import { Github, Calendar } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'Learning Management System (LMS)',
    company: 'AFORV',
    duration: 'Aug 2025 – Present',
    description:
      'Currently working on a Learning Management System to manage online classes, study notes, and learning resources with role-based access for students, instructors, and administrators.',
    skills: ['React.js', 'Node.js', 'MongoDB', 'Role-Based Access'],
    current: true,
  },
  {
    title: 'Route Tracking System (HPCL)',
    company: 'AFORV',
    duration: 'Jan 2025 – Aug 2025',
    description:
      'Contributed to the Route Tracking project for HPCL to improve operational efficiency and logistics monitoring.',
    skills: ['Manual Testing', 'SQL', 'Test Planning', 'Microsoft Office'],
    current: false,
  },
  {
    title: 'Hospital Management System',
    company: 'AFORV',
    duration: 'Dec 2024 – Mar 2025',
    description:
      'Developed a comprehensive Hospital Management System to automate hospital operations.',
    skills: ['TypeScript', 'React.js'],
    current: false,
  },
  {
    title: 'Distributed Management System (DMS)',
    company: 'AFORV',
    duration: 'Mar 2024 – Jan 2025',
    description:
      'Tracking-based system for monitoring devices, personnel, and assets.',
    skills: ['JavaScript', 'React.js', 'Node.js'],
    current: false,
  },
  {
    title: 'Zoho CRM Project',
    company: 'QSpiders',
    duration: 'Dec 2022 – Jan 2024',
    description:
      'CRM solution with centralized customer data and automated workflows.',
    skills: ['Manual Testing', 'SQL', 'Test Planning', 'Microsoft Office'],
    current: false,
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Work</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gradient">
            Featured Projects
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="bg-gradient-card border-border p-6 flex flex-col
                         transition-all duration-300 hover:scale-[1.03]
                         hover:border-primary/50"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {project.company}
                  </p>
                </div>

                {project.current && (
                  <Badge className="bg-primary/20 text-primary border-none">
                    Current
                  </Badge>
                )}
              </div>

              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                <Calendar className="w-3 h-3" />
                {project.duration}
              </div>

              <p className="text-sm text-muted-foreground mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="bg-secondary text-foreground text-xs"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            className="border-primary/50 hover:bg-primary/10"
          >
            <a
              href="https://github.com/JAIPRAKASH-07"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github className="w-4 h-4" />
              View All on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
