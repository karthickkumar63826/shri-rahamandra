import { motion } from "framer-motion";
import { Trophy, Clock, Star } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const gurus = [
  {
    name: "Vidushi Lakshmi Devi",
    role: "Senior Faculty — Bharathanatiyam",
    instrument: "Bharathanatiyam",
    experience: "25+ Years",
    awards: "Sangeet Natak Akademi Award",
    description:
      "A torchbearer of the Veena tradition, Vidushi Lakshmi Devi trained under the legendary Vidushi Jayammal of the Karaikudi school. Her teaching blends rigorous classical technique with deep spiritual understanding, guiding students from basic swaras to complex ragam-tanam-pallavi.",
    image: "/images/gurus/bharatham.jpeg",
  },
  {
    name: "Vidushi Lakshmi Devi",
    role: "Senior Faculty — Saraswati Veena",
    instrument: "Saraswati Veena",
    experience: "25+ Years",
    awards: "Sangeet Natak Akademi Award",
    description:
      "A torchbearer of the Veena tradition, Vidushi Lakshmi Devi trained under the legendary Vidushi Jayammal of the Karaikudi school. Her teaching blends rigorous classical technique with deep spiritual understanding, guiding students from basic swaras to complex ragam-tanam-pallavi.",
    image: "/images/gurus/abacus.jpeg",
  },
  {
    name: "Vidushi Meenakshi Narayanan",
    role: "Head of Vocal — Carnatic Music",
    instrument: "Vocal (Carnatic)",
    experience: "30+ Years",
    awards: "Padma Shri Nominee",
    description:
      "With over three decades of distinguished performance and teaching experience, Vidushi Meenakshi Narayanan brings profound artistry to Carnatic vocal training. A dedicated disciple of the Semmangudi lineage, she excels in krithis, manodharma sangeetham, and mentoring students for professional arangetrams, nurturing both technical excellence and soulful expression.",
    image: "/images/gurus/drawing.webp",
  },
  {
    name: "Vidwan Suresh Kumar",
    role: "Faculty — Carnatic Violin",
    instrument: "Violin",
    experience: "20+ Years",
    awards: "State Best Artist Award",
    description:
      "Vidwan Suresh Kumar is celebrated for his silky bowing technique and impeccable sruti alignment. Having accompanied stalwarts on the concert circuit, he brings real-world performance insight into every lesson, nurturing students from beginner bowing to full concert accompaniment.",
    image: "/images/gurus/violin.jpeg",
  },
  {
    name: "Guru Krishnamurthy",
    role: "Faculty — Mridangam & Percussion",
    instrument: "Mridangam",
    experience: "22+ Years",
    awards: "Laya Vadhya Ratna",
    description:
      "Guru Krishnamurthy is a master of laya and talam, trained in the Pudukkottai bani of Mridangam. His structured curriculum takes students through fundamental strokes, korvais, and advanced tani avartanam, producing percussionists who have won state and national competitions.",
    image: "/images/gurus/keyboard.jpeg",
  },
];

export function Gurus() {
  return (
    <section id="gurus" className="bg-background">
      <PageHero
        eyebrow="Our Faculty"
        title={<>Meet Our <span className="italic text-accent">Gurus</span></>}
        description="Masters of their craft with decades of devotion to preserving and teaching India's classical arts tradition — each a living lineage of the ancient guru-shishya parampara."
      />

      <div className="mx-auto max-w-6xl px-6 py-24 space-y-28">
        {gurus.map((guru, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <motion.div
              key={guru.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className={`flex flex-col gap-12 items-center ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
            >
              {/* Image */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="relative w-full lg:w-2/5 shrink-0"
              >
                {/* Offset decorative border */}
                <div className={`absolute -top-4 h-full w-full rounded-3xl border-2 border-accent/30 ${isEven ? "-left-4" : "-right-4"
                  }`} />
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src={guru.image}
                    alt={guru.name}
                    className="w-full h-[420px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
                  {/* Instrument badge */}
                  <div className="absolute bottom-5 left-5 rounded-full bg-accent px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-primary shadow-lg">
                    {guru.instrument}
                  </div>
                </div>
              </motion.div>

              {/* Details */}
              <motion.div
                initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                className="flex-1 space-y-5"
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-2">{guru.role}</p>
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">{guru.name}</h2>
                </div>

                <p className="text-base text-muted-foreground leading-relaxed">{guru.description}</p>

                <div className="flex flex-wrap gap-4 pt-2">
                  <div className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3 shadow-sm">
                    <Clock className="h-4 w-4 text-accent shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Experience</p>
                      <p className="text-sm font-semibold text-foreground">{guru.experience}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3 shadow-sm">
                    <Trophy className="h-4 w-4 text-accent shrink-0" strokeWidth={1.5} />
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Recognition</p>
                      <p className="text-sm font-semibold text-foreground">{guru.awards}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1 pt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" strokeWidth={0} />
                  ))}
                  <span className="ml-2 text-xs text-muted-foreground font-medium">Master Educator</span>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
