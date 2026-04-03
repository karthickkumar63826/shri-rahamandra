import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Sparkles, Music, Palette, BrainCircuit } from "lucide-react";

const highlights = [
  { icon: Sparkles, label: "Bharatanatyam", days: "10 Days" },
  { icon: Music, label: "Violin & Vocals", days: "10 Days" },
  { icon: Music, label: "Keyboard", days: "7 Days" },
  { icon: Palette, label: "Pot Painting", days: "3 Days" },
  { icon: BrainCircuit, label: "Abacus", days: "2 Days" },
];

export function WorkshopBanner() {
  return (
    <section className="bg-card border-t border-border px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl bg-primary px-8 py-14 md:px-14">

          {/* Decorative rings */}
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full border border-accent/20 pointer-events-none" />
          <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full border border-accent/10 pointer-events-none" />
          <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full border border-white/5 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-10">

            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <span className="inline-block rounded-full bg-accent/20 border border-accent/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-accent mb-5">
                Summer 2026
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground leading-tight mb-4">
                Summer <span className="italic text-accent">Mastery</span> 2026
              </h2>
              <p className="text-primary-foreground/60 text-sm leading-relaxed mb-8">
                Six immersive workshops across music, dance, art and academics — starting April 25. Limited seats available.
              </p>

              {/* Workshop pills */}
              <div className="flex flex-wrap gap-2">
                {highlights.map((h) => (
                  <div key={h.label} className="flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-3 py-1.5">
                    <h.icon className="h-3.5 w-3.5 text-accent shrink-0" strokeWidth={1.5} />
                    <span className="text-xs font-semibold text-primary-foreground/80">{h.label}</span>
                    <span className="text-[10px] text-primary-foreground/40">{h.days}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex flex-col gap-4 shrink-0"
            >
              <Link
                href="/workshops"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-semibold text-primary shadow-xl hover:bg-accent/90 hover:-translate-y-0.5 transition-all duration-200"
              >
                View All Workshops
                <ArrowRight className="h-4 w-4" strokeWidth={2} />
              </Link>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
