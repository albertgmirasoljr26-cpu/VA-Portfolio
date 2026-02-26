import { motion } from "framer-motion";
import { Star } from "lucide-react";
import sampleImage from '../assets/achive.jpg';
import sampleVideo from '../assets/Day1_Manila_Tour.mp4';

const testimonials = [
  {
    name: "Foundever",
    role: "Certificate",
    text: "You have reached the peak by going above and beyond for our customers and our people",
    image: sampleImage,
    video: null,
  },
  {
    name: "Manila Tour",
    role: "Video Sample",
    text: "This is a sample video of my work, showcasing my skills in video editing and storytelling.",
    image: null,
    video: sampleVideo,
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
        
        <p className="text-primary text-sm tracking-widest uppercase font-medium mb-3">Sample's</p>
        <h2 className="font-serif text-4xl md:text-5xl font-semibold text-foreground">Here is a few sample of my work</h2>
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
            
            {/* Media section */}
            {t.image && (
              <div className="flex justify-center mb-6">
                <img src={t.image} alt={t.name + " picture"} className="w-88 h-50  shadow-lg object-cover border-4 border-white" />
              </div>
            )}
            {t.video && (
              <div className="flex justify-center mb-6">
                <video src={t.video} controls className="w-full max-w-xs h-48 rounded-xl shadow-lg border-2 border-white bg-black" />
              </div>
            )}
            <div className="flex gap-1 mb-4 justify-center">
              {[...Array(5)].map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-foreground text-base leading-relaxed flex-1 mb-6 text-center">"{t.text}"</p>
            <div className="text-center mt-auto">
              <p className="text-foreground font-semibold text-lg mb-1">{t.name}</p>
              <p className="text-muted-foreground text-sm">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
