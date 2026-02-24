import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background pt-16">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full bg-green-subtle opacity-60 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-green-subtle opacity-40 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-subtle text-sm font-medium text-green-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Trusted by 500+ IT Professionals Worldwide
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground">
            Real-Time IT Job Support for{" "}
            <span className="text-gradient-green">Working Professionals</span>{" "}
            Abroad
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            Expert live project support, online training, and mentorship tailored
            for IT professionals in USA, Canada, UK, Australia, and Europe —
            across all time zones.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm green-glow-hover transition-all duration-300 hover:brightness-110"
            >
              <MessageCircle className="w-4 h-4" />
              Talk to an Expert
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-green-subtle transition-all duration-300 group"
            >
              View Job Support Services
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="mt-14 flex items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-2xl text-foreground">10+</span>
              <span>Years<br />Experience</span>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-2xl text-foreground">50+</span>
              <span>Technologies<br />Covered</span>
            </div>
            <div className="w-px h-10 bg-border" />
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-2xl text-foreground">24/7</span>
              <span>Global<br />Support</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
