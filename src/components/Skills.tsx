import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { containerVariants, itemVariants } from "@/utils/animations";

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const skillCategories = [
    {
      title: "AI/ML",
      icon: "🧠",
      skills: [
        { name: "Python", level: 95 },
        { name: "Machine Learning", level: 85 },
        { name: "NLP", level: 90 },
        { name: "LLM Integration", level: 88 },
      ],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Flask/FastAPI", level: 92 },
        { name: "PostgreSQL", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "Microservices", level: 80 },
      ],
    },
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "Vue.js", level: 75 },
        { name: "TailwindCSS", level: 90 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: [
        { name: "AWS", level: 85 },
        { name: "Azure", level: 80 },
        { name: "Docker", level: 82 },
        { name: "CI/CD", level: 78 },
      ],
    },
  ];

  const radarData = [
    { subject: "Python", A: 95, fullMark: 100 },
    { subject: "React", A: 85, fullMark: 100 },
    { subject: "AI/ML", A: 88, fullMark: 100 },
    { subject: "Cloud", A: 82, fullMark: 100 },
    { subject: "APIs", A: 90, fullMark: 100 },
    { subject: "Databases", A: 85, fullMark: 100 },
  ];

  const experienceData = [
    { name: "2023", projects: 5, technologies: 8 },
    { name: "2024", projects: 12, technologies: 15 },
    { name: "2025", projects: 8, technologies: 18 },
  ];


  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50/40 via-pink-50/30 to-blue-50/40">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
              Skills Dashboard
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Interactive visualization of my technical expertise and experience growth
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants}>
            <Card className="glass-card p-8 shadow-xl">
              <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {skillCategories.map((category) => (
                  <div key={category.title} className="space-y-6">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-3xl">{category.icon}</span>
                      <h4 className="text-lg font-semibold">{category.title}</h4>
                    </div>
                    {category.skills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span 
                            className="font-medium"
                            style={{
                              color: skill.name === 'Python' ? 'hsl(var(--keyword-python))' :
                                     skill.name === 'React' ? 'hsl(var(--keyword-react))' :
                                     skill.name === 'Machine Learning' || skill.name === 'NLP' || skill.name === 'LLM Integration' ? 'hsl(var(--keyword-ai))' :
                                     skill.name === 'TypeScript' || skill.name === 'Flask/FastAPI' ? 'hsl(var(--keyword-js))' :
                                     skill.name === 'AWS' || skill.name === 'Azure' || skill.name === 'Docker' || skill.name === 'CI/CD' ? 'hsl(var(--keyword-cloud))' :
                                     'hsl(var(--keyword-fullstack))'
                            }}
                          >
                            {skill.name}
                          </span>
                          <span className="text-primary font-medium">{skill.level}%</span>
                        </div>
                        <Progress
                          value={skill.level}
                          className="h-2"
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </Card>
          </motion.div>

          {/* Key Achievements */}
          <motion.div variants={itemVariants} className="mt-12">
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { number: "1.8+", label: "Years Experience", icon: "🚀" },
                { number: "25+", label: "Projects Completed", icon: "💼" },
                { number: "15+", label: "Technologies Mastered", icon: "⚡" },
              ].map((stat, index) => (
                <Card key={stat.label} className="glass-card p-6 text-center card-hover">
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;