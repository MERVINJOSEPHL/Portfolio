import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Calendar, Award, ExternalLink } from "lucide-react";
import { containerVariants, itemVariants } from "@/utils/animations";

const Certifications = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      date: "2024",
      status: "Valid",
      category: "Cloud Computing",
      description: "Foundational understanding of AWS Cloud services, pricing, and architecture principles.",
      skills: ["AWS", "Cloud Architecture", "Security", "Pricing Models"],
      credentialId: "AWS-CCP-2024-001",
      image: "/certifications/aws-cloud-practitioner.png", // You would add actual certificate images
    },
    {
      title: "Google AI Fundamentals",
      issuer: "Google Cloud",
      date: "2024",
      status: "Valid",
      category: "Artificial Intelligence",
      description: "Comprehensive understanding of AI/ML concepts and Google Cloud AI services.",
      skills: ["Machine Learning", "TensorFlow", "Google Cloud AI", "Data Analysis"],
      credentialId: "GCP-AI-2024-002",
      image: "/certifications/google-ai-fundamentals.png",
    },
    {
      title: "React Professional Developer",
      issuer: "Meta",
      date: "2023",
      status: "Valid",
      category: "Frontend Development",
      description: "Advanced React concepts including hooks, context, performance optimization.",
      skills: ["React", "JavaScript", "TypeScript", "Frontend Architecture"],
      credentialId: "META-REACT-2023-003",
      image: "/certifications/meta-react-developer.png",
    },
    {
      title: "Python Data Science Certification",
      issuer: "IBM",
      date: "2023",
      status: "Valid",
      category: "Data Science",
      description: "Python programming for data science, analytics, and machine learning applications.",
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Data Visualization"],
      credentialId: "IBM-DS-2023-004",
      image: "/certifications/ibm-python-data-science.png",
    },
    {
      title: "Docker Certified Associate",
      issuer: "Docker Inc.",
      date: "2023",
      status: "Valid",
      category: "DevOps",
      description: "Container orchestration, Docker fundamentals, and containerization best practices.",
      skills: ["Docker", "Containerization", "DevOps", "Kubernetes"],
      credentialId: "DOCKER-DCA-2023-005",
      image: "/certifications/docker-certified-associate.png",
    },
    {
      title: "Full Stack Web Development",
      issuer: "freeCodeCamp",
      date: "2022",
      status: "Valid",
      category: "Web Development",
      description: "Comprehensive full-stack development including frontend, backend, and databases.",
      skills: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB", "React"],
      credentialId: "FCC-FSWD-2022-006",
      image: "/certifications/freecodecamp-fullstack.png",
    },
  ];

  const categories = [...new Set(certifications.map(cert => cert.category))];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-blue-50/30 via-purple-50/20 to-pink-50/30">
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
              Certifications
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional certifications validating my expertise across multiple technologies
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Badge 
                key={category}
                variant="outline"
                className="px-4 py-2 bg-white/60 backdrop-blur-sm border-primary/20 text-foreground hover:bg-primary/10 transition-all duration-300 cursor-pointer"
              >
                {category}
              </Badge>
            ))}
          </motion.div>

          {/* Certifications Grid */}
          <motion.div variants={itemVariants}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certifications.map((cert, index) => (
                <Dialog key={cert.credentialId}>
                  <DialogTrigger asChild>
                    <motion.div
                      initial={{ opacity: 0, y: 50 }}
                      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                      transition={{ delay: index * 0.1 }}
                      className="cursor-pointer"
                    >
                      <Card className="glass-card card-hover group overflow-hidden">
                        <CardContent className="p-6">
                          {/* Certificate Preview */}
                          <div className="relative mb-4 h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center overflow-hidden">
                            <Award className="w-12 h-12 text-primary/60" />
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 group-hover:to-primary/10 transition-all duration-300" />
                          </div>

                          {/* Certificate Info */}
                          <div className="space-y-3">
                            <div>
                              <h3 className="font-bold text-foreground group-hover:text-primary transition-colors">
                                {cert.title}
                              </h3>
                              <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="w-4 h-4" />
                              {cert.date}
                              <Badge 
                                variant="outline" 
                                className="ml-auto bg-green-50 text-green-700 border-green-200"
                              >
                                {cert.status}
                              </Badge>
                            </div>

                            <div className="flex flex-wrap gap-1">
                              {cert.skills.slice(0, 3).map((skill) => (
                                <span 
                                  key={skill}
                                  className="px-2 py-1 bg-gradient-to-r from-primary/20 to-accent/20 text-xs text-foreground rounded-full"
                                >
                                  {skill}
                                </span>
                              ))}
                              {cert.skills.length > 3 && (
                                <span className="px-2 py-1 bg-muted text-xs text-muted-foreground rounded-full">
                                  +{cert.skills.length - 3} more
                                </span>
                              )}
                            </div>

                            <div className="flex items-center text-primary text-sm font-medium group-hover:underline">
                              View Certificate 
                              <ExternalLink className="w-4 h-4 ml-1" />
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </DialogTrigger>

                  {/* Certificate Modal */}
                  <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                    <div className="space-y-6">
                      {/* Certificate Header */}
                      <div className="text-center space-y-4">
                        <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto">
                          <Award className="w-10 h-10 text-white" />
                        </div>
                        <div>
                          <h2 className="text-2xl font-bold gradient-text">{cert.title}</h2>
                          <p className="text-lg text-muted-foreground">{cert.issuer}</p>
                        </div>
                      </div>

                      {/* Certificate Details */}
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-4">
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">Description</h3>
                            <p className="text-muted-foreground">{cert.description}</p>
                          </div>
                          
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">Skills Validated</h3>
                            <div className="flex flex-wrap gap-2">
                              {cert.skills.map((skill) => (
                                <Badge 
                                  key={skill}
                                  className="bg-gradient-to-r from-primary/20 to-accent/20 text-foreground"
                                >
                                  {skill}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h3 className="font-semibold text-foreground mb-2">Certificate Details</h3>
                            <div className="space-y-2 text-sm">
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Issue Date:</span>
                                <span className="text-foreground">{cert.date}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Status:</span>
                                <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
                                  {cert.status}
                                </Badge>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Credential ID:</span>
                                <span className="text-foreground font-mono text-xs">{cert.credentialId}</span>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-muted-foreground">Category:</span>
                                <span className="text-foreground">{cert.category}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Certificate Image Placeholder */}
                      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-8 text-center">
                        <Award className="w-16 h-16 text-primary/60 mx-auto mb-4" />
                        <p className="text-muted-foreground">
                          Certificate image would be displayed here
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">
                          In production, this would show the actual certificate image or PDF
                        </p>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </motion.div>

          {/* Achievement Summary */}
          <motion.div variants={itemVariants} className="mt-16">
            <Card className="glass-card bg-gradient-to-r from-primary/10 to-accent/10">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold gradient-text mb-4">Certification Journey</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <div className="text-3xl font-bold text-primary">{certifications.length}</div>
                    <div className="text-muted-foreground">Total Certifications</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-accent">{categories.length}</div>
                    <div className="text-muted-foreground">Technology Areas</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <div className="text-muted-foreground">Valid & Current</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;