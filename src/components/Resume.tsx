import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileText, Eye } from "lucide-react";
import { containerVariants, itemVariants } from "@/utils/animations";

const Resume = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDownload = () => {
    // In a real implementation, this would link to your actual resume PDF
    const link = document.createElement('a');
    link.href = '/MervinJosephL-Resume.pdf'; // You would upload this to public folder
    link.download = 'MervinJosephL-Resume.pdf';
    link.click();
  };

  return (
    <section id="resume" className="py-20 bg-gradient-to-br from-purple-50/30 via-pink-50/20 to-blue-50/30">
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
              Resume
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download or view my complete professional experience and qualifications
            </p>
          </motion.div>

          {/* Resume Actions */}
          <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-12">
            <Button 
              onClick={handleDownload}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>
            <Button 
              variant="outline"
              className="border-2 border-primary/20 bg-white/80 backdrop-blur-sm px-8 py-3 rounded-full hover:bg-primary/5 transition-all duration-300"
            >
              <Eye className="w-5 h-5 mr-2" />
              View Online
            </Button>
          </motion.div>

          {/* Resume Preview */}
          <motion.div variants={itemVariants}>
            <Card className="glass-card shadow-2xl overflow-hidden">
              <CardContent className="p-0">
                {/* Resume Header */}
                <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8 border-b border-border/20">
                  <div className="flex items-center justify-center gap-4">
                    <div className="p-4 bg-white/60 rounded-full">
                      <FileText className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-center">
                      <h3 className="text-2xl font-bold text-foreground">Mervin Joseph L</h3>
                      <p className="text-muted-foreground">Software Engineer & AI Enthusiast</p>
                    </div>
                  </div>
                </div>

                {/* Resume Preview Content */}
                <div className="p-8 bg-white/40 backdrop-blur-sm min-h-[600px]">
                  <div className="space-y-8">
                    {/* Quick Summary */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4">Professional Summary</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        Passionate Software Engineer with 1.8+ years of experience in GenAI, Python development, 
                        and full-stack solutions. Proven track record in developing innovative AI-powered applications, 
                        backend systems, and user-centric frontend interfaces.
                      </p>
                    </div>

                    {/* Key Skills Preview */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4">Core Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {[
                          "Python", "React", "TypeScript", "GenAI", "Machine Learning", 
                          "Flask", "FastAPI", "PostgreSQL", "AWS", "Docker"
                        ].map((skill) => (
                          <span 
                            key={skill}
                            className="px-3 py-1 bg-gradient-to-r from-primary/20 to-accent/20 text-foreground rounded-full text-sm font-medium"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Experience Preview */}
                    <div>
                      <h4 className="text-lg font-semibold text-foreground mb-4">Recent Experience</h4>
                      <div className="space-y-4">
                        <div className="p-4 bg-white/60 rounded-lg border border-border/20">
                          <h5 className="font-semibold text-foreground">Software Engineer</h5>
                          <p className="text-primary text-sm">Current Role • 2023 - Present</p>
                          <p className="text-muted-foreground text-sm mt-2">
                            Leading development of AI-powered applications and full-stack solutions...
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Download prompt */}
                    <div className="text-center p-6 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-border/20">
                      <p className="text-muted-foreground mb-4">
                        View the complete resume with detailed experience, projects, and achievements
                      </p>
                      <Button 
                        onClick={handleDownload}
                        size="sm"
                        className="bg-primary hover:bg-primary/90"
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Download Full Resume
                      </Button>
                    </div>
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

export default Resume;