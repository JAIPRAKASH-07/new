import { Briefcase, MapPin, Calendar } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// 👉 import images
import aforvLogo from "@/assets/aforv.png";
import podbicLogo from "@/assets/podbic.png";
import qspidersLogo from "@/assets/qspiders.png";

const experiences = [
  {
    title: "Software Engineer",
    company: "AFORV Private Limited",
    location: "Bengaluru",
    period: "Aug 2024 – Present",
    type: "Full-time",
    current: true,
    image: aforvLogo,
    skills: [  
      
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  
    ],
    
    description: [
      "Building scalable React-based web applications",

      "Writing clean, secure, and maintainable code",
    ],
  },
  {
    title: "Frontend Developer Intern",
    company: "Podbic Institute",
    location: "Bengaluru",
    period: "Dec 2023 – July 2024",
    type: "Internship",
    current: false,
    image: podbicLogo,
    skills: [ { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      
     ],
    description: [
    
      "Worked on API integration and state management",
      "Collaborated on live industry projects",
    ],
  },
  {
    title: "SDET Intern",
    company: "QSpiders",
    location: "Gurugram",
    period: "Oct 2022 – Dec 2023",
    type: "Internship",
    current: false,
    image: qspidersLogo,
    skills: [
      { name: "Manual Testing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "STLC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" },
      { name: "Functional Testing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/testinglibrary/testinglibrary-original.svg" },
      { name: "Integration Testing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
       { name: "Agile", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "Scrum", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" },
      { name: "Sprint Planning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
      { name: "Daily Standups", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
   
    ],
    description: [
      "Created and executed test cases",
      "Performed bug tracking and reporting",
     
    ],
  },
];

const Experience = () => {
  return (
    <section id="experience" className=" relative">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">My Journey</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gradient">
            Professional Experience
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp) => (
            <Card
              key={exp.title + exp.company}
              className="p-6 bg-gradient-card border-border hover:border-primary/50 transition-all duration-300 relative"
            >
              {/* Current Badge */}
              {exp.current && (
                <Badge className="absolute top-4 right-4 bg-primary/20 text-primary border-none">
                  Current
                </Badge>
              )}

              <div className="flex flex-col md:flex-row gap-6">
                {/* Left: Image */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-xl overflow-hidden border bg-background flex items-center justify-center">
                    <img
                      src={exp.image}
                      alt={exp.company}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                {/* Right: Content */}
                <div className="flex-1">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-primary font-medium mb-2">
                    {exp.company}
                  </p>

                  {/* Meta Info */}
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                    <Badge variant="outline">{exp.type}</Badge>
                  </div>

                  {/* Skills */}
                 <div className="flex flex-wrap gap-3 mb-4">
  {exp.skills.map((skill) => (
    <div
      key={skill.name}
      className="flex items-center gap-2 px-3 py-1.5 rounded-full border bg-muted/40"
    >
      <img
        src={skill.icon}
        alt={skill.name}
        className="w-4 h-4 object-contain"
      />
      <span className="text-xs font-medium">{skill.name}</span>
    </div>
  ))}
</div>


                  {/* Short Description */}
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

