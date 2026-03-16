import { motion } from "framer-motion";
import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description: string;
}

export function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <div className="relative bg-primary overflow-hidden py-28 px-6">
      {/* Decorative rings */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full border border-accent/20 opacity-60 pointer-events-none" />
      <div className="absolute -top-12 -right-12 h-64 w-64 rounded-full border border-accent/30 opacity-40 pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-8 h-44 w-44 rounded-full border border-accent/10 pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full border border-white/10 pointer-events-none" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-px w-1/3 bg-accent/20 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-5"
        >
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-6xl font-bold text-primary-foreground leading-tight mb-6"
        >
          {title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-primary-foreground/65 text-lg max-w-2xl mx-auto"
        >
          {description}
        </motion.p>
      </div>
    </div>
  );
}
