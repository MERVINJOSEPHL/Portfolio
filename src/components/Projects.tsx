import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Brain, Database, Cloud, Code } from "lucide-react";
import projectAi from "@/assets/project-ai.jpg";
import { containerVariants, itemVariants } from "@/utils/animations";

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const projects = [
    {
      title: "ContractX AI",
      description: "AI-powered contract analysis platform using transformer models for extracting contractual obligations and compliance workflows.",
      image: projectAi,
      icon: Brain,
      tech: ["Python", "Transformers", "NLP", "Azure OpenAI", "Flask"],
      github: "#",
      demo: "#",
      category: "AI/ML"
    },
    {
      title: "Advinci Voice Platform",
      description: "Enhanced voice-over-telecommunication efficiency through language model optimization and sentiment analysis.",
      image: projectAi,
      icon: Database,
      tech: ["Python", "Claude Models", "Voice Processing", "LLM"],
      github: "#",
      demo: "#",
      category: "AI/ML"
    },
    {
      title: "Microservices Architecture",
      description: "Scalable microservices system handling high-volume data processing with comprehensive RESTful APIs.",
      image: projectAi,
      icon: Cloud,
      tech: ["Python", "Flask", "PostgreSQL", "Docker", "Kubernetes"],
      github: "#",
      demo: "#",
      category: "Backend"
    },
    {
      title: "ChatGPT Clone",
      description: "Full-stack AI chat application similar to ChatGPT using Azure OpenAI and Amazon Claude models.",
      image: projectAi,
      icon: Code,
      tech: ["React", "Flask", "PostgreSQL", "Azure OpenAI", "Claude"],
      github: "#",
      demo: "#",
      category: "Full-Stack"
    }
  ];


  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions in AI, cloud architecture, and full-stack development
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              
              return (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  className="group"
                >
                  <Card className="bg-card border-border overflow-hidden card-hover h-full">
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                      <div className="absolute top-4 left-4">
                        <div className="p-2 bg-primary/20 backdrop-blur-sm rounded-lg">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                      </div>
                      <div className="absolute top-4 right-4">
                        <Badge variant="secondary" className="bg-accent/20 text-accent border-accent/30">
                          {project.category}
                        </Badge>
                      </div>
                    </div>

                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Tech Stack */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs border-primary/20 text-primary bg-primary/5"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="flex gap-3">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </Button>
                        <Button
                          size="sm"
                          className="flex-1 bg-primary hover:bg-primary/90"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Demo
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* View More Button */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-12"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8"
            >
              View All Projects
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;