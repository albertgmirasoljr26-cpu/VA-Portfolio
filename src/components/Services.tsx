import { motion } from "framer-motion";
import { Video, FileText, CheckSquare, Headphones } from "lucide-react";

const services = [
  { icon: Video, title: "Video Editing", desc: "Professional video editing using CapCut — cuts, transitions, effects, and polished final output." },
  { icon: Headphones, title: "Encoding", desc: "Media encoding and file conversion to ensure optimal quality and compatibility across platforms." },
  { icon: FileText, title: "Transcription", desc: "Accurate audio and video transcription with attention to detail and fast turnaround." },
  { icon: CheckSquare, title: "Website QA", desc: "Thorough website quality assurance — bug testing, UI checks, and cross-browser compatibility." },
];

const container = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services = () => (
  <section id="services" className="py-24 md:py-32">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm tracking-widest uppercase font-medium mb-3">What I Do</p>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">Services</h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {services.map((s) => (
          <motion.div
            key={s.title}
            variants={item}
            className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors"
          >
            <s.icon className="w-8 h-8 text-primary mb-5" strokeWidth={1.5} />
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Services;
