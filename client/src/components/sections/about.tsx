import { Code, Smartphone, Database, PenTool } from "lucide-react";

const skills = [
  { icon: Code, label: "Full-Stack Development" },
  { icon: Smartphone, label: "Responsive Design" },
  { icon: Database, label: "Database Design" },
  { icon: PenTool, label: "Technical Writing" },
];

export function About() {
  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-100">About Me</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Passionate about creating seamless digital experiences and sharing knowledge through writing
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Developer working on code" 
              className="rounded-xl shadow-2xl"
            />
          </div>
          
          <div className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I'm a passionate Full-Stack MERN Developer with <span className="font-semibold">5+ years</span> of experience 
              building scalable web applications. I specialize in creating user-centric solutions that solve real-world problems.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Beyond coding, I'm an avid technical writer who loves sharing knowledge and helping others in the developer community. 
              I've published <span className="font-semibold">50+</span> articles on various platforms, covering topics from React best practices to backend architecture.
            </p>
            
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">What I Do</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <div key={skill.label} className="flex items-center space-x-3">
                      <Icon className="h-5 w-5 text-primary" />
                      <span className="text-slate-700 dark:text-slate-300">{skill.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
