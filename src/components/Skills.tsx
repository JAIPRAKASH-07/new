import { Badge } from "@/components/ui/badge";

type Skill = {
  name: string;
  icon: string;
};

type SkillCategory = {
  title: string;
  skills: Skill[];
  color: "primary" | "accent";
};

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    color: "primary",
    skills: [
      { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
      { name: "CSS3", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
      { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
      { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
      { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
      { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" },
      { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    ],
  },
  {
    title: "Backend Development",
    color: "accent",
    skills: [
      { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" },
      { name: "REST API", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
      { name: "JWT Auth", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/json/json-original.svg" },
    ],
  },
  {
    title: "Database",
    color: "primary",
    skills: [
      { name: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
      { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
      { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
      { name: "CRUD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/database/database-original.svg" },
    ],
  },
  {
    title: "Testing & QA",
    color: "accent",
    skills: [
      { name: "Manual Testing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "STLC", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" },
      { name: "Functional Testing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/testinglibrary/testinglibrary-original.svg" },
      { name: "Integration Testing", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" },
    ],
  },
  {
    title: "Tools & Technologies",
    color: "primary",
    skills: [
      { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
      { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
      { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    ],
  },
  {
    title: "Methodologies",
    color: "accent",
    skills: [
      { name: "Agile", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg" },
      { name: "Scrum", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/confluence/confluence-original.svg" },
      { name: "Sprint Planning", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain.svg" },
      { name: "Daily Standups", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/slack/slack-original.svg" },
    ],
  },
];

const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Adaptability",
  "Analytical Thinking",
  "Time Management",
  "Attention to Detail",
  "Continuous Learning",
];

const Skills = () => {
  return (
    <section id="skills" className=" relative">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <p className="text-primary font-medium mb-2">What I Know</p>
          <h2 className="text-3xl md:text-5xl font-bold text-gradient">
            Technical Skills
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gradient-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all"
            >
              <h3 className="text-lg font-semibold mb-4">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill.name}
                    variant="secondary"
                    className={`flex items-center gap-2 px-3 py-2 bg-${category.color}/10 hover:bg-${category.color}/20 border-none`}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-5 h-5"
                      loading="lazy"
                    />
                    <span>{skill.name}</span>
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Soft Skills */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-card rounded-2xl p-8 border border-border">
            <h3 className="text-xl font-semibold mb-6 text-center">
              Soft Skills
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="px-4 py-2 hover:bg-primary/10"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
