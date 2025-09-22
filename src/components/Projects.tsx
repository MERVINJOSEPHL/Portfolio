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
      image: "/certifications/raptor-chatbot.jpg",
      icon: Brain,
      tech: ["Python", "Transformers", "NLP", "Azure OpenAI", "Flask"],
      github: "#",
      demo: "#",
      category: "AI/ML"
    },
    {
      title: "Advinci Voice Platform",
      description: "Enhanced voice-over-telecommunication efficiency through language model optimization and sentiment analysis.",
      image: "/certifications/advinci.png",
      icon: Database,
      tech: ["Voice Processing", "LLM","Sentiment Analysis","Servem AI","FastAPI"],
      github: "#",
      demo: "#",
      category: "AI/ML"
    },
    {
      title: "Asami",
      description: "Full-stack AI chat bot application using Azure OpenAI and Amazon Claude models. To increase productivity and efficiency of SEO.",
      image: "/certifications/chatbot.jpg",
      icon: Code,
      tech: ["React", "Flask", "PostgreSQL", "Azure OpenAI", "Claude"],
      github: "#",
      demo: "#",
      category: "AI/ML"
    },
    {
"title": "Synthetic Contract Generator",
"description": "Python-based system generating synthetic 'Scope of Work' clauses for construction contracts, ensuring privacy preservation while mimicking real contract structures using LLM and anonymization techniques.",
"image": "/certifications/contract.png",
"icon": "FileText",
"tech": ["GEO Fence", "Streamlit", "Google Gemini API", "Faker", "Pandas"],
"github": "https://github.com/MERVINJOSEPHL/synthetic-contract-generator",
"demo": "https://synthetic-contract-generator.onrender.com/",
"category": "AI"
},
{
"title": "Student Management Application",
"description": "Full-stack application for collecting and organizing student data in a file-based manner, supporting features like viewing, filtering, searching, updating, and deleting student records with performance analytics.",
"image": "/certifications/OIP.webp",
"icon": "Users",
"tech": ["Python", "Flask", "SQLite", "Jinja2", "Bootstrap"],
"github": "https://github.com/MERVINJOSEPHL/Student-Management-Application",
"demo": "#",
"category": "Full-Stack"
}, {
"title": "HouseHoldService",
"description": "Multi-user application serving as a platform for comprehensive home servicing and solutions, featuring roles for admin, service providers, and customers with functionalities like service management, booking, and reporting.",
"image": "/certifications/householdservice.webp",
"icon": "Home",
"tech": ["Flask", "VueJS", "SQLite", "Redis", "Celery", "Bootstrap"],
"github": "https://github.com/MERVINJOSEPHL/HouseHoldService",
"demo": "https://drive.google.com/file/d/1VtJtcfYBeCBCh40OpnR2Kiv4NIGwF5bn/view",
"category": "Full-Stack"
},

  ];


  return (
    <section id="projects" className="py-20 bg-muted/20">
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
            onClick={() => window.location.href = "https://github.com/MERVINJOSEPHL/"}
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