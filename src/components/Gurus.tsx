import { motion } from "framer-motion";
import { Trophy, Clock, Star } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const gurus = [
  {
    name: "Guru Srividhya",
    role: "Proprietor — Vocal & Veena",
    instrument: "Vocal & Veena",
    experience: "15+ Years",
    awards: "Sangeetha Kala Rathna",
    description:
      "A versatile maestro in both Vocal and Veena, Guru Srividhya is dedicated to preserving the 'Intellectual Purity' of the Carnatic tradition. Her teaching style focuses on precise Sruti alignment and the fluid Gamakas unique to the Thiruvanaikoil lineage, guiding students through the spiritual depth of every Raaga.",
    image: "/images/gurus/srividhya.jpeg",
  },
  {
    name: "Master Vijay Krishna Kanth",
    role: "Lead Faculty — Keyboard",
    instrument: "Keyboard & Western Instruments",
    experience: "5+ Years",
    awards: "Best Instrumentalist Award — State Level",
    description:
      "Driven by a lifelong passion that began in early childhood, Master Vijay Krishna Kanth has spent over a decade mastering the keyboard and various musical instruments. He specializes in bridging the gap between classical scales and contemporary cinema music, making complex music theory accessible and exciting for the next generation.",
    image: "/images/gurus/keyboard.jpeg",
  },
  {
    name: "Swaminathan",
    role: "Senior Faculty — Mridangam",
    instrument: "Mridangam",
    experience: "",
    awards: "",
    description: "",
    image: "/images/gurus/mridangam.webp"
  },


  {
    name: "Thivahar",
    role: "Faculty — Carnatic Violin",
    instrument: "Violin",
    experience: "",
    awards: "",
    description: "",
    image: "/images/gurus/violin.jpeg",
  },
  {
    name: "Pavithra",
    role: "Senior Faculty — Bharathanatiyam",
    instrument: "Bharathanatiyam",
    experience: "",
    awards: "",
    description: "",
    image: "/images/gurus/bharatham.jpeg",
  },
  {
    name: "Rajesh",
    role: "Senior Faculty — Saraswati Veena",
    instrument: "Saraswati Veena",
    experience: "",
    awards: "",
    description: "",
    image: "/images/gurus/veenai.jpeg",
  },

  {
    name: "Mahalakshmi",
    role: "Drawing & Illustration Mentor",
    instrument: "Drawing",
    experience: "",
    awards: "",
    description: "",
    image: "/images/gurus/drawing.webp"
  },
  {
    name: "Rajasudha venkat",
    role: "Senior Faculty — Abacus",
    instrument: "Abacus",
    experience: "",
    awards: "",
    description: "",
    image: "/images/gurus/abacus.jpeg",
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
                  {guru.experience && (
                    <div className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3 shadow-sm">
                      <Clock className="h-4 w-4 text-accent shrink-0" strokeWidth={1.5} />
                      <div>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Experience</p>
                        <p className="text-sm font-semibold text-foreground">{guru.experience}</p>
                      </div>
                    </div>
                  )}
                  {
                    guru.awards && (
                      <div className="flex items-center gap-2.5 rounded-xl border border-border bg-card px-4 py-3 shadow-sm">
                        <Trophy className="h-4 w-4 text-accent shrink-0" strokeWidth={1.5} />
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">Recognition</p>
                          <p className="text-sm font-semibold text-foreground">{guru.awards}</p>
                        </div>
                      </div>
                    )
                  }
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
