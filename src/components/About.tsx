import { motion } from "framer-motion";
import { Music, Sparkles, Drum, Palette, BrainCircuit, Globe, Award, Users, GraduationCap, CalendarDays } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const courses = [
  {
    Icon: Music,
    title: "Vocal & Veena",
    subtitle: "The Resonance of Water",
    desc: 'We train students in Sruti Purity and Gamakas that mimic the fluid, life-giving nature of water—soulful resonance echoing through temple festivals for generations.',
  },
  {
    Icon: Sparkles,
    title: "Dance — Bharatanatyam",
    subtitle: "The Frozen Music of Stone",
    desc: "Our Bharatanatyam curriculum draws direct inspiration from the 108 Karanas and exquisite sculptures of the temple's gopurams. Every Adavu brings the frozen music of stone carvings to life.",
  },
  {
    Icon: Drum,
    title: "Mridangam & Keyboard",
    subtitle: "The Rhythm of the Chants",
    desc: "The mathematical precision of the Mridangam and melodic versatility of the Keyboard are inspired by the Laya of the temple's daily rituals and ancient Vedic chants.",
  },
  {
    Icon: Palette,
    title: "Visual Arts & Heritage Crafts",
    subtitle: "Sacred Geometry as Art",
    desc: "Our Drawing and Art modules—Pichwai, Bhil, and Pot Painting—encourage students to observe intricate iconography and temple murals, teaching that art is a visual form of prayer.",
  },
  {
    Icon: BrainCircuit,
    title: "Intellectual Mastery",
    subtitle: "Abacus & Vedic Mathematics",
    desc: "Following ancient Indian scholars who used the temple as a center for higher learning, we integrate Abacus and Vedic Maths to balance creative soul with logical mind.",
  },
];

const stats = [
  { Icon: CalendarDays, value: "17+", label: "Years of Excellence" },
  { Icon: Users, value: "2,400+", label: "Students Trained" },
  { Icon: Award, value: "100+", label: "Awards Won" },
  { Icon: GraduationCap, value: "100%", label: "Exam Pass Rate" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function About() {
  return (
    <section id="about" className="overflow-hidden bg-background">

      <PageHero
        eyebrow="Our Story"
        title={<>A Heritage <span className="italic text-accent">Beyond Time</span></>}
        description="Where the Five Elements meet Fine Arts — a sanctuary where tradition flows like the sacred springs of the Kaveri."
      />

      {/* ── Stats Row ────────────────────────────────────────── */}
      <div className="bg-accent">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-primary/20">
            {stats.map(({ Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex flex-col items-center gap-2 py-8 px-4 text-primary"
              >
                <Icon className="h-5 w-5 opacity-70 mb-1" strokeWidth={1.5} />
                <span className="text-3xl font-bold">{value}</span>
                <span className="text-xs font-semibold uppercase tracking-widest opacity-70">{label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Story Section ─────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Offset border frame */}
            <div className="absolute -left-5 -top-5 h-full w-full rounded-3xl border-2 border-accent/40 z-0" />
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://pixabay.com/get/g3fd38336b7fdf2b554c9d94dd3a016b30b68c421feaf8b3a605ee7af4dc6f7d10998d41caa488e290008c51b45fda6e1c6e6756559f187cee8c4af5b40ad41b0_1280.jpg"
                alt="Classical Music Performance"
                className="w-full h-[480px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
            </div>
            {/* Floating badge */}
            <div className="absolute -right-6 -bottom-6 bg-background border border-border rounded-2xl shadow-xl z-20 px-7 py-5">
              <p className="text-4xl font-bold text-accent leading-none mb-1">2008</p>
              <p className="text-xs font-bold uppercase tracking-widest text-foreground/60">
                Est. in<br />Thiruvanaikoil
              </p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="space-y-7"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent mb-3">Our Foundation</p>
              <h2 className="text-3xl font-bold text-foreground leading-snug">
                Rooted in the Shadow of the <span className="text-primary italic">Thiruvanaikovil Temple</span>
              </h2>
            </div>

            <p className="text-base text-muted-foreground leading-relaxed">
              Nestled beside one of the five Pancha Bhoota Stalam—representing the element of Water (Appu Lingam)—
              <strong className="text-foreground"> Sri Rahamandara Music Academy</strong> is a sanctuary where tradition
              flows like the sacred springs of the Kaveri.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed">
              Established in 2008, our academy is not merely a school. It is a cultural extension of spiritual vibrations
              that have echoed through the corridors of Thiruvanaikoil for centuries. We believe that the discipline of
              music and the grace of dance are inseparable from the divine geometry of the Akilandeshwari Kovil.
            </p>

            {/* Promise card */}
            <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-primary/5 p-6">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full" />
              <div className="flex items-start gap-4 relative z-10">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary text-accent">
                  <Globe className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground mb-1 uppercase tracking-wide">
                    Global Reach, Local Roots
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We embrace modern technology—Global Online Classes and a high-tech Parent Portal—while our heart
                    remains firmly rooted in Thiruvanaikoil. We don't just teach music; we preserve a lineage as eternal as the temple itself.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Divider ─────────────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>

      {/* ── Courses Section ──────────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 py-24">

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">Curriculum</p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <h2 className="text-4xl font-bold text-foreground">
              The Temple–Academy <span className="text-primary italic">Connection</span>
            </h2>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Every discipline we teach is a tribute to the sacred heritage that surrounds us — each note a prayer, each movement an offering.
            </p>
          </div>
          <div className="mt-6 h-px bg-gradient-to-r from-accent/60 via-accent/20 to-transparent" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {courses.map((course, i) => (
            <motion.div
              key={i}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-7 shadow-sm hover:shadow-lg hover:border-accent/50 transition-all duration-300"
            >
              {/* Top accent line on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Icon container */}
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-accent transition-colors duration-300">
                <course.Icon className="h-6 w-6" strokeWidth={1.5} />
              </div>

              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-1">{course.subtitle}</p>
              <h4 className="text-lg font-bold text-foreground mb-3">{course.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{course.desc}</p>

              {/* Corner decoration */}
              <div className="absolute -bottom-6 -right-6 h-20 w-20 rounded-full border-[12px] border-border/40 group-hover:border-accent/20 transition-colors duration-300" />
            </motion.div>
          ))}

          {/* CTA card — spans remaining column on large screens */}
          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-2xl bg-primary p-7 shadow-lg flex flex-col justify-between"
          >
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-accent/10" />
            <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full bg-white/5" />

            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-widest text-accent mb-3">Begin Today</p>
              <h4 className="text-2xl font-bold text-primary-foreground mb-4 leading-snug">
                Ready to walk the path of classical mastery?
              </h4>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                Our next academic term begins soon. Limited seats available for all disciplines.
              </p>
            </div>
            <div className="relative z-10 mt-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-primary">
                Explore All Courses
                <span className="text-base leading-none">→</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

    </section>
  );
}
