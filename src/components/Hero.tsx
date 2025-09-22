import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import { containerVariants, slideUpVariants } from "@/utils/animations";

const Hero = () => {

  const floatingIcons = [
    { icon: "⚡", delay: 0 },
    { icon: "🧠", delay: 0.5 },
    { icon: "💻", delay: 1 },
    { icon: "🚀", delay: 1.5 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="home" >
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-background/80" />
      
      {/* Floating Background Elements */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-4xl opacity-20"
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 4 + index,
            repeat: Infinity,
            delay: item.delay,
          }}
        >
          {item.icon}
        </motion.div>
      ))}

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.div variants={slideUpVariants} className="mb-4">
            <span className="text-accent text-lg font-medium">Hello, I'm</span>
          </motion.div>

          {/* Name with Gradient */}
          <motion.h1
            variants={slideUpVariants}
            className="text-6xl md:text-8xl font-bold mb-6 gradient-text"
          >
            Mervin Joseph L
          </motion.h1>

          {/* Animated Title */}
          <motion.div variants={slideUpVariants} className="mb-8">
            <h2 className="text-2xl md:text-4xl font-semibold text-muted-foreground mb-4">
              Software Engineer & AI Enthusiast
            </h2>
            <div className="flex flex-wrap justify-center gap-3 text-sm md:text-base">
             {["Python", "React", "AI/ML", "Cloud", "Full-Stack","NLP"].map((skill, index) => (
              <motion.span
                key={skill}
                className="px-3 py-1 bg-blue-600 border border-blue-400 rounded-full text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                {skill}
              </motion.span>
            ))}
            </div>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={slideUpVariants}
            className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            1.8 years of experience crafting AI-powered applications and scalable web solutions. 
            Passionate about turning complex problems into elegant digital experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={slideUpVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold pulse-glow"
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-lg font-semibold"
            >
              Get In Touch
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={slideUpVariants}
            className="flex justify-center gap-6 mb-16"
          >
            {[
              { icon: Github, href: "https://github.com/MERVINJOSEPHL", label: "GitHub" },
              { icon: Linkedin, href: "https://linkedin.com/in/mervin-joseph10", label: "LinkedIn" },
              { icon: Mail, href: "mailto:mervinjoseph2002@gmail.com", label: "Email" },
            ].map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border hover:border-primary transition-colors group"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1 }}
              >
                <social.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </motion.a>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="w-8 h-8 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;