import { motion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

const FinalCTA = () => {
  return (
    <section
      id="contact"
      aria-label="Contact RR Swift Solutions"
      className="py-20 bg-foreground relative overflow-hidden"
    >
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
            Need IT Job Support or Training? Connect with Our Experts Today.
          </h2>
          <p className="text-background/70 max-w-2xl mx-auto mb-10">
            RR Swift Solutions provides real-time, project-specific Online Job Support, IT
            Training, Staffing, and Outsourcing from Hyderabad, India. Available to IT
            professionals across the USA, UK, Canada, Australia, and worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://wa.me/919000964005"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Talk to an IT expert on WhatsApp"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm green-glow-hover transition-all duration-300 hover:brightness-110"
            >
              <MessageCircle className="w-4 h-4" aria-hidden="true" />
              Talk to an IT Expert
            </a>
            <a
              href="tel:+919000964005"
              aria-label="Submit your enquiry by phone"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-background/20 text-background font-semibold text-sm hover:bg-background/10 transition-all duration-300"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Submit Your Enquiry
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTA;
