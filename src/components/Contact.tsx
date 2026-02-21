import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Contact = () => (
  <section id="contact" className="py-24 md:py-32 bg-card">
    <div className="max-w-3xl mx-auto px-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-primary text-sm tracking-widest uppercase font-medium mb-3">Get In Touch</p>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground mb-6">
          Ready to delegate?
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          Let's chat about how I can support your business. Send me a message and I'll get back to you within 24 hours.
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="space-y-4 text-left"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-background border border-border rounded-xl px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full bg-background border border-border rounded-xl px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition"
          />
        </div>
        <textarea
          rows={5}
          placeholder="Tell me about your project..."
          className="w-full bg-background border border-border rounded-xl px-5 py-3.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 transition resize-none"
        />
        <div className="text-center pt-2">
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Send Message
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </motion.form>
    </div>
  </section>
);

export default Contact;
