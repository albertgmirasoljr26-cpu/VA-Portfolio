import { motion } from "framer-motion";
import { Video, FileText, CheckSquare, Headphones, Linkedin, Mail, Facebook } from "lucide-react";

const contact = [
  {
    icon: Linkedin,
    title: "LinkedIn",
    desc: "Connect with me professionally and see my work experience. Here is the Link: www.linkedin.com/in/albert-mirasol",
    url: "www.linkedin.com/in/albert-mirasol",
  },
  {
    icon: Mail,
    title: "Gmail",
    desc: "Send me an email and I'll get back to you within 24 hours: albertgmirasoljr26@gmail.com",
    url: "albertgmirasoljr26@gmail.com",
  },
  {
    icon: Facebook,
    title: "Facebook / Messenger",
    desc: "Reach out via Facebook Messenger for a quick chat.",
    url: "https://www.facebook.com/AlbertGamesIsLife/",
  },
];

const container = {
  hidden: { opacity: 1 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Contact = () => (
  <section id="contact" className="py-24 md:py-32">
    <div className="max-w-6xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <p className="text-primary text-sm tracking-widest uppercase font-medium mb-3">Get In Touch</p>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">Let's connect</h2>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto"
      >
        {contact.map((s) => (
          <motion.a
            key={s.title}
            variants={item}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-background border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors cursor-pointer text-left"
          >
            <s.icon className="w-8 h-8 text-primary mb-5" strokeWidth={1.5} />
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </motion.a>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Contact;
