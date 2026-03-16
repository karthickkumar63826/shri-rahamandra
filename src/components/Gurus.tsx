import { motion } from "framer-motion";
import { Trophy, Clock } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const gurus = [
  {
    name: "Vidushi Lakshmi Devi",
    instrument: "Saraswati Veena",
    experience: "25+ Years",
    awards: "Sangeet Natak Akademi Award",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
  },
  {
    name: "Pandit Raghunath Sharma",
    instrument: "Vocal (Carnatic)",
    experience: "30+ Years",
    awards: "Padma Shri Nominee",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80",
  },
  {
    name: "Vidwan Suresh Kumar",
    instrument: "Violin",
    experience: "20+ Years",
    awards: "State Best Artist Award",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    name: "Guru Krishnamurthy",
    instrument: "Mridangam",
    experience: "22+ Years",
    awards: "Laya Vadhya Ratna",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
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

      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {gurus.map((guru, index) => (
            <motion.div
              key={guru.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col rounded-3xl bg-card border border-border p-6 shadow-sm hover:border-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center items-center overflow-hidden"
            >
              {/* Hover accent top line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Portrait */}
              <div className="relative mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-border group-hover:border-accent transition-colors duration-300 shadow-md">
                <img
                  src={guru.image}
                  alt={guru.name}
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>

              <h4 className="text-lg font-bold text-foreground mb-1">{guru.name}</h4>
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-5">
                {guru.instrument}
              </span>

              <div className="w-full space-y-2 pt-4 border-t border-border">
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 text-accent shrink-0" strokeWidth={1.5} />
                  <span>{guru.experience} Experience</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                  <Trophy className="h-3.5 w-3.5 text-accent shrink-0" strokeWidth={1.5} />
                  <span className="italic">{guru.awards}</span>
                </div>
              </div>

              {/* Corner decoration */}
              <div className="absolute -bottom-5 -right-5 h-16 w-16 rounded-full border-[10px] border-border/40 group-hover:border-accent/20 transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
