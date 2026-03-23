import { motion } from "framer-motion";
import { Link } from "wouter";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6 relative overflow-hidden">

      {/* Decorative rings — same as PageHero */}
      <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full border border-accent/10 pointer-events-none" />
      <div className="absolute -top-16 -right-16 h-80 w-80 rounded-full border border-accent/15 pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-primary/10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-1/3 bg-accent/20 pointer-events-none" />

      <div className="relative text-center max-w-xl mx-auto">

        {/* 404 number */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative mb-6 inline-block"
        >
          <span className="text-[120px] md:text-[160px] font-bold leading-none text-primary/8 select-none">
            404
          </span>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="absolute inset-0 flex items-center justify-center text-[120px] md:text-[160px] font-bold leading-none text-primary/10 blur-sm select-none"
          >
            404
          </motion.span>
        </motion.div>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4"
        >
          Page Not Found
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-5"
        >
          This note is <span className="italic text-accent">out of tune</span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="text-muted-foreground text-base leading-relaxed mb-10"
        >
          The page you're looking for doesn't exist or may have been moved.
          Let's guide you back to the right raga.
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center gap-4 mb-10"
        >
          <div className="flex-1 h-px bg-border" />
          <span className="text-accent text-lg">✦</span>
          <div className="flex-1 h-px bg-border" />
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-xl hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Home className="h-4 w-4" strokeWidth={1.5} />
            Back to Home
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground hover:border-accent hover:text-accent transition-all duration-200"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.5} />
            Go Back
          </button>
        </motion.div>

      </div>
    </div>
  );
}
