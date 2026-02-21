import { motion } from "framer-motion";
import { Mail, Calendar, FileText, Users, BarChart3, Globe } from "lucide-react";

const services = [
  { icon: Mail, title: "Email Management", desc: "Inbox zero strategy, filtering, and professional responses." },
  { icon: Calendar, title: "Calendar & Scheduling", desc: "Appointment setting, reminders, and time-zone coordination." },
  { icon: FileText, title: "Document Preparation", desc: "Reports, presentations, and data entry with precision." },
  { icon: Users, title: "Client Relations", desc: "Follow-ups, onboarding, and maintaining client databases." },
  { icon: BarChart3, title: "Project Management", desc: "Task tracking, team coordination, and deadline management." },
  { icon: Globe, title: "Social Media", desc: "Content scheduling, engagement, and analytics reporting." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
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
        viewport={{ once: true }}
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
