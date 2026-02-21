import { motion } from "framer-motion";
import heroImage from "@/assets/hero-workspace.jpg";

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-16">
    {/* Background image with overlay */}
    <div className="absolute inset-0">
      <img src={heroImage} alt="Professional workspace" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-background/85" />
    </div>

    <div className="relative max-w-6xl mx-auto px-6 py-24 md:py-32 w-full">
      <div className="max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-medium text-sm tracking-widest uppercase mb-4"
        >
          Virtual Assistant
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl font-semibold text-foreground leading-[1.1] mb-6"
        >
          Your time is
          <br />
          <span className="italic text-primary">valuable</span>.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-10 max-w-lg"
        >
          I help busy entrepreneurs reclaim their schedule by handling the tasks that keep them from doing what they love.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#contact"
            className="bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Let's Work Together
          </a>
          <a
            href="#services"
            className="border border-foreground/20 text-foreground px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-foreground/5 transition-colors"
          >
            View Services
          </a>
        </motion.div>
      </div>
    </div>
  </section>
);

export default Hero;
