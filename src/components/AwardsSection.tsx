import { motion } from "framer-motion";
import { Trophy, MapPin, CalendarDays } from "lucide-react";

const awards = [
  {
    date: "01 May 2022",
    location: "Tiruvanaikovil Temple, Trichy",
    title: "Mass Group Performance of Ho Shambho",
    subtitle: "Vrisha Book of World Record",
    org: "Sivasakthi Academy",
  },
  {
    date: "25 Dec 2022",
    location: "Trichy",
    title: "Pancha Rathna Bhajan Mala",
    subtitle: "World Record Event",
    org: "Isai Arangam Music School",
  },
  {
    date: "25 Dec 2022",
    location: "Trichy",
    title: "Kalai Chudar",
    subtitle: "World Record Event",
    org: "Isai Arangam Music School",
  },
  {
    date: "24 Dec 2025 – 04 Jan 2026",
    location: "Mylapore, Chennai",
    title: "Margazhi Maha Utsavam 2025–26",
    subtitle: "Dance and Music Festival",
    org: "Rasika Ranjani Sabha — Sri Shankara Natya Vidyalaya",
  },
  {
    date: "03 Sep 2023",
    location: "Arulmigu Mariamma Temple, Samayapuram, Trichy",
    title: "3rd World Record Event — Bakthiyum Kalaiyum",
    subtitle: "World Record Achievement",
    org: "Sivasakthi Academy",
  },
  {
    date: "26 Dec 2025",
    location: "Mylapore, Chennai",
    title: "Special Title of \"Isai Aacharya\"",
    subtitle: "Margazhi Maha Utsavam 2025–26",
    org: "Sri Shankara Natya Vidyalaya",
  },
  {
    date: "01 May 2024",
    location: "Kalaiarangam Hall",
    title: "Artist Welfare Association Award",
    subtitle: "International Sevviyal Artist Conference 2025",
    org: "Artist Welfare Association",
  },
];

export function AwardsSection() {
  return (
    <section className="bg-primary overflow-hidden relative">

      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 -mr-20 -mt-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 h-64 w-64 rounded-full bg-background/5 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 text-center z-10">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4"
        >
          Achievements
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
        >
          Awards & <span className="italic text-accent">Recognitions</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-primary-foreground/60 text-sm max-w-xl mx-auto"
        >
          A legacy of excellence recognised across world record events, cultural festivals, and prestigious institutions.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mx-auto mt-5 h-px w-24 bg-accent/60"
        />
      </div>

      {/* Marquee row 1 — left to right */}
      <div className="relative flex w-full overflow-hidden mb-5 pb-24">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex flex-nowrap gap-5 px-3"
        >
          {[...awards, ...awards].map((award, idx) => (
            <AwardCard key={idx} award={award} />
          ))}
        </motion.div>
      </div>

    </section>
  );
}

function AwardCard({ award }: { award: typeof awards[0]; }) {
  return (
    <div className="w-[380px] shrink-0 rounded-2xl bg-card border border-border/60 p-6 shadow-xl flex flex-col gap-4">
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
          <Trophy className="h-5 w-5" strokeWidth={1.5} />
        </div>
        <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-accent/80 mt-1">
          <CalendarDays className="h-3 w-3" strokeWidth={1.5} />
          {award.date}
        </span>
      </div>

      <div>
        <h4 className="font-bold text-foreground text-sm leading-snug mb-1">{award.title}</h4>
        <p className="text-xs text-accent font-semibold mb-2">{award.subtitle}</p>
        <div className="flex items-start gap-1.5 text-xs text-muted-foreground">
          <MapPin className="h-3 w-3 shrink-0 mt-0.5 text-accent/60" strokeWidth={1.5} />
          <span>{award.location}</span>
        </div>
      </div>

      <div className="pt-3 border-t border-border/50">
        <p className="text-xs text-muted-foreground italic">{award.org}</p>
      </div>
    </div>
  );
}
