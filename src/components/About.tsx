import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building, Award } from "lucide-react";
import { containerVariants, itemVariants, timelineVariants } from "@/utils/animations";

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const timeline = [
    {
      date: "July 2025 - Present",
      title: "Senior Software Engineer",
      company: "NeuranX.AI",
      location: "Chennai, India",
      description: "Leading dynamic teams on client-facing AI projects including ContractX and Advinci. Specializing in sentiment analysis, model training, and NLP using transformer architectures.",
      achievements: [
        "Led team development on ContractX AI platform",
        "Enhanced voice-telecommunication efficiency",
        "Implemented intelligent document parsing",
        "Optimized language models for production"
      ],
      type: "current"
    },
    {
      date: "June 2024 - May 2025",
      title: "Software Engineer",
      company: "Avasoft",
      location: "Chennai, India",
      description: "Designed and built scalable microservices architecture using Python and Flask, enabling seamless handling of high-volume data processing.",
      achievements: [
        "Built scalable microservices architecture",
        "Developed comprehensive RESTful APIs",
        "Implemented authentication and rate limiting",
        "Improved cross-team collaboration through documentation"
      ],
      type: "experience"
    },
    {
      date: "December 2023 - May 2024",
      title: "Trainee Engineer (Internship)",
      company: "Avasoft",
      location: "Chennai, India",
      description: "Built AI products similar to ChatGPT and Claude, leveraging Azure OpenAI and Amazon's Claude models for design and coding task automation.",
      achievements: [
        "Developed full-stack AI chat application",
        "Integrated Azure OpenAI and Claude models",
        "Built with Flask, React.js, and PostgreSQL",
        "Streamlined design and coding workflows"
      ],
      type: "internship"
    }
  ];


  return (
    <section id="about" className="py-20 bg-muted/20">
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
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A passionate Software Engineer with expertise in AI/ML, full-stack development, and cloud technologies. 
              Driven by innovation and committed to creating impactful digital solutions.
            </p>
          </motion.div>

          {/* Personal Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {[
              { icon: MapPin, label: "Location", value: "Chennai, India" },
              { icon: Building, label: "Current Role", value: "Senior Software Engineer" },
              { icon: Award, label: "Experience", value: "1.8+ Years" },
              { icon: Calendar, label: "Available", value: "Open to Opportunities" },
            ].map((info, index) => (
              <motion.div
                key={info.label}
                variants={itemVariants}
                className="group"
              >
                <Card className="bg-card border-border p-6 text-center card-hover">
                  <info.icon className="w-8 h-8 text-primary mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <h3 className="font-semibold text-foreground mb-1">{info.label}</h3>
                  <p className="text-sm text-muted-foreground">{info.value}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Career Timeline */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-center mb-12">Career Journey</h3>
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border" />
              
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    variants={timelineVariants}
                    className="relative flex items-start gap-6"
                  >
                    {/* Timeline Dot */}
                    <div className={`relative z-10 w-16 h-16 rounded-full border-4 flex items-center justify-center ${
                      item.type === 'current' 
                        ? 'bg-primary border-primary pulse-glow' 
                        : item.type === 'experience'
                        ? 'bg-accent border-accent'
                        : 'bg-secondary border-secondary'
                    }`}>
                      <div className="w-2 h-2 bg-background rounded-full" />
                    </div>

                    {/* Content Card */}
                    <Card className="flex-1 bg-card border-border">
                      <CardContent className="p-6">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <Badge 
                            variant={item.type === 'current' ? 'default' : 'secondary'}
                            className={`${
                              item.type === 'current' 
                                ? 'bg-primary text-primary-foreground' 
                                : 'bg-secondary text-secondary-foreground'
                            }`}
                          >
                            {item.date}
                          </Badge>
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            {item.location}
                          </div>
                        </div>

                        <h4 className="text-xl font-bold text-foreground mb-1">
                          {item.title}
                        </h4>
                        <p className="text-lg text-primary font-medium mb-3">
                          {item.company}
                        </p>
                        <p className="text-muted-foreground mb-4 leading-relaxed">
                          {item.description}
                        </p>

                        {/* Achievements */}
                        <div className="grid md:grid-cols-2 gap-2">
                          {item.achievements.map((achievement, achIndex) => (
                            <div key={achIndex} className="flex items-start gap-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                              <span className="text-sm text-muted-foreground">
                                {achievement}
                              </span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Personal Philosophy */}
          <motion.div variants={itemVariants} className="mt-16">
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold gradient-text mb-4">
                  "Transforming Ideas into Intelligent Solutions"
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  I believe in the power of technology to solve complex problems and create meaningful impact. 
                  My journey in software engineering is driven by curiosity, continuous learning, and a passion 
                  for building systems that make a difference. Whether it's developing AI-powered applications 
                  or architecting scalable cloud solutions, I strive to deliver excellence in every project.
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;