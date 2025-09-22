import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger, DialogClose } from "@/components/ui/dialog";
import { Download, Eye, X } from "lucide-react";
import { containerVariants, itemVariants } from "@/utils/animations";
import heroBg from "@/assets/hero-bg.jpg";

const Resume = () => {
  const [isOpen, setIsOpen] = useState(false);
  const FILE_ID = "1288KBLl5UCNJOEGmQg9H-86N0Y3kbtiy";
  const previewUrl = `https://drive.google.com/file/d/${FILE_ID}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${FILE_ID}`;

  return (
    <section id="resume" className="py-20 bg-muted/20">
      {/* Background image */}
    
     <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold gradient-text mb-4">
              Resume
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Preview or download my complete professional experience and qualifications
            </p>
          </motion.div>

          {/* Resume Actions */}
          <motion.div variants={itemVariants} className="flex justify-center gap-4 mb-12">
            <Button
              onClick={() => window.open(downloadUrl, "_blank")}
              className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </Button>

            {/* View Online Button */}
            <Dialog open={isOpen} onOpenChange={setIsOpen}>
              <DialogTrigger asChild>
                <Button
                  className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Eye className="w-5 h-5 mr-2" />
                  View Online
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] bg-gray-800 p-6 rounded-lg">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-semibold text-white">Resume Preview</h3>
               
                </div>
                {/* PDF Preview */}
                {isOpen && (
                  <iframe
                    src={previewUrl}
                    className="w-full h-[70vh] border border-gray-600 rounded"
                    frameBorder="0"
                    allow="autoplay"
                    title="Resume Preview"
                  />
                )}
                {/* Download Button Inside Modal */}
                <div className="flex justify-center mt-4">
                  <Button
                    onClick={() => window.open(downloadUrl, "_blank")}
                    className="bg-primary hover:bg-primary/90 px-8 py-3 rounded-full shadow-lg text-white"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Full Resume
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;