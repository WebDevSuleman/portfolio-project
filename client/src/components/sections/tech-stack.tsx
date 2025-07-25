import { Code, Server, Database, Wrench } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const techStacks = [
  {
    title: "Frontend",
    icon: Code,
    color: "blue",
    technologies: [
      { name: "React.js", icon: "⚛️" },
      { name: "JavaScript (ES6+)", icon: "🟨" },
      { name: "HTML5 & CSS3", icon: "🧡" },
      { name: "Tailwind CSS", icon: "💜" },
      { name: "Next.js", icon: "⚫" },
    ]
  },
  {
    title: "Backend",
    icon: Server,
    color: "green",
    technologies: [
      { name: "Node.js", icon: "🟢" },
      { name: "Express.js", icon: "⚫" },
      { name: "RESTful APIs", icon: "🌐" },
      { name: "GraphQL", icon: "💜" },
      { name: "JWT & Auth", icon: "🔒" },
    ]
  },
  {
    title: "Database",
    icon: Database,
    color: "purple",
    technologies: [
      { name: "MongoDB", icon: "🍃" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "Firebase", icon: "🔥" },
      { name: "Redis", icon: "🟠" },
      { name: "Prisma", icon: "⚫" },
    ]
  },
  {
    title: "Tools & Others",
    icon: Wrench,
    color: "orange",
    technologies: [
      { name: "Git & GitHub", icon: "🟠" },
      { name: "Docker", icon: "🔵" },
      { name: "AWS", icon: "🟡" },
      { name: "Vercel", icon: "⚫" },
      { name: "Jest & Testing", icon: "🟢" },
    ]
  },
];

const colorClasses = {
  blue: "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400",
  green: "bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400",
  purple: "bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400",
  orange: "bg-orange-100 dark:bg-orange-900 text-orange-600 dark:text-orange-400",
};

export function TechStack() {
  return (
    <section id="tech-stack" className="py-20 bg-slate-50 dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-100">Tech Stack</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStacks.map((stack) => {
            const Icon = stack.icon;
            const colorClass = colorClasses[stack.color as keyof typeof colorClasses];
            
            return (
              <Card key={stack.title} className="bg-white dark:bg-slate-900 p-6 shadow-lg">
                <CardContent className="p-0">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 ${colorClass} rounded-full flex items-center justify-center mx-auto mb-4`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">{stack.title}</h3>
                  </div>
                  
                  <div className="space-y-4">
                    {stack.technologies.map((tech) => (
                      <div key={tech.name} className="flex items-center space-x-3">
                        <span className="text-lg">{tech.icon}</span>
                        <span className="text-slate-700 dark:text-slate-300">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
