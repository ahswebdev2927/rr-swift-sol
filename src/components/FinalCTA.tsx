import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="contact" className="py-20 bg-foreground relative overflow-hidden">
      {/* Green glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-primary/20 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-background mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-background/70 max-w-lg mx-auto mb-10">
            Connect with our experts today and get the IT support you need to
            excel in your career abroad.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm green-glow-hover transition-all duration-300 hover:brightness-110"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp Us
            </a>
            <a
              href="tel:+919999999999"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-background/20 text-background font-semibold text-sm hover:bg-background/10 transition-all duration-300"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
