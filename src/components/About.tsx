import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "5+ years of virtual assistant experience",
  "Trusted by 50+ clients worldwide",
  "Proficient in 20+ productivity tools",
  "Reliable, detail-oriented, and proactive",
];

const About = () => (
  <section id="about" className="py-24 md:py-32 bg-card">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary text-sm tracking-widest uppercase font-medium mb-3">About Me</p>
          <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
            Dedicated to making your life easier
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            I'm a professional virtual assistant passionate about helping entrepreneurs and small business owners streamline their operations. With a keen eye for detail and a commitment to excellence, I deliver results that free you to focus on growth.
          </p>
          <ul className="space-y-3">
            {highlights.map((h) => (
              <li key={h} className="flex items-center gap-3 text-foreground text-sm">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                {h}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { num: "50+", label: "Happy Clients" },
            { num: "5+", label: "Years Experience" },
            { num: "1K+", label: "Tasks Completed" },
            { num: "100%", label: "Satisfaction" },
          ].map((s) => (
            <div key={s.label} className="bg-background rounded-2xl p-6 text-center border border-border">
              <p className="font-serif text-3xl font-bold text-primary mb-1">{s.num}</p>
              <p className="text-muted-foreground text-xs font-medium">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default About;
