import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    role: "E-commerce Founder",
    text: "Hiring her was the best decision I made. My inbox is finally manageable and my calendar runs like clockwork.",
  },
  {
    name: "James R.",
    role: "Real Estate Agent",
    text: "She handles all my admin so I can focus on closing deals. Incredibly organized and always one step ahead.",
  },
  {
    name: "Priya K.",
    role: "Digital Coach",
    text: "Professional, proactive, and an absolute lifesaver. I've reclaimed at least 15 hours a week since we started working together.",
  },
];

const Testimonials = () => (
  <section id="testimonials" className="py-24 md:py-32">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm tracking-widest uppercase font-medium mb-3">Testimonials</p>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">Kind words from clients</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card border border-border rounded-2xl p-8 flex flex-col"
          >
            <div className="flex gap-1 mb-5">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground text-sm leading-relaxed flex-1 mb-6">"{t.text}"</p>
            <div>
              <p className="text-foreground font-semibold text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
