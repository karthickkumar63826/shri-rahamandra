import { motion } from "framer-motion";
import { Link } from "wouter";

interface HeroProps {
  onOpenContact: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {

  return (
    <section id="home" className="relative min-h-screen overflow-hidden bg-background pt-20 flex items-center">
      {/* Background Texture */}
      <motion.div
        className="absolute inset-0 opacity-40 z-0"
      >
        <img
          src={`/images/hero-bg.png`}
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background"></div>
      </motion.div>

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-12 px-6 py-12 lg:flex-row relative z-10">

        {/* Text Content */}
        <motion.div
          className="flex-1 text-center lg:text-left max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-accent">
              Welcome to the Divine Sound
            </h2>
            <h1 className="mb-6 text-5xl leading-tight text-primary md:text-7xl">
              Preserving <br />
              Classical<br />
              <span className="italic text-accent">  Excellence.</span>
            </h1>
            <p className="mb-10 max-w-lg text-lg text-muted-foreground mx-auto md:mx-0">
              Join SRI RAHAMANDARA Music Academy to embark on a spiritual journey of classical music. Learn from renowned gurus and master your craft.
            </p>

            <div className="flex flex-col items-center gap-4 sm:flex-row justify-center lg:justify-start">
              <button
                onClick={onOpenContact}
                className="group relative overflow-hidden rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-xl shadow-primary/20 transition-all hover:scale-105 hover:shadow-2xl active:scale-95"
              >
                <span className="relative z-10">Start Your Journey</span>
                <div className="absolute inset-0 z-0 bg-gradient-to-r from-primary via-accent to-primary opacity-0 transition-opacity group-hover:opacity-20" />
              </button>
              <Link
                href="/about"
                className="rounded-full border-2 border-border bg-transparent px-8 py-4 text-sm font-semibold text-foreground transition-all hover:border-accent hover:text-accent"
              >
                Discover More
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* Visual Element */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="relative flex-1 flex justify-center items-center"
        >
          <div className="relative h-[340px] w-[340px] md:h-[480px] md:w-[480px] flex items-center justify-center">

            {/* Glow */}
            <div className="absolute inset-0 rounded-full bg-accent/15 blur-3xl animate-pulse" />

            {/* Rotating outer ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-accent/20"
              style={{ borderStyle: "dashed" }}
            />

            {/* Rotating middle ring (counter) */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
              className="absolute inset-8 md:inset-12 rounded-full border border-primary/20"
              style={{ borderStyle: "dashed" }}
            />

            {/* Static decorative ring */}
            <div className="absolute inset-16 md:inset-24 rounded-full border border-accent/30" />

            {/* Orbiting dot */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute inset-0"
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-accent shadow-lg shadow-accent/50" />
            </motion.div>

            {/* Orbiting dot 2 */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ repeat: Infinity, duration: 14, ease: "linear" }}
              className="absolute inset-8 md:inset-12"
            >
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 h-2 w-2 rounded-full bg-primary/60" />
            </motion.div>

            {/* Centre card */}
            <motion.div
              animate={{ y: [-6, 6, -6] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
              className="relative z-10 flex flex-col items-center justify-center h-48 w-48 md:h-60 md:w-60 rounded-full bg-primary shadow-2xl border border-accent/30"
            >
              <img
                src="/images/veena-ornament.png"
                alt="Veena"
                className="h-20 w-20 md:h-28 md:w-28 object-contain drop-shadow-xl"
              />
              <span className="mt-2 text-[10px] font-bold uppercase tracking-[0.25em] text-accent">SRI Rahamandara</span>
            </motion.div>

          </div>
        </motion.div>

      </div>
    </section >
  );
}
