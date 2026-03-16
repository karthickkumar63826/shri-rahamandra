import { motion } from "framer-motion";

const gurus = [
  {
    name: "Vidushi Lakshmi Devi",
    instrument: "Saraswati Veena",
    experience: "25+ Years",
    awards: "Sangeet Natak Akademi Award",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80" // mature female portrait
  },
  {
    name: "Pandit Raghunath Sharma",
    instrument: "Vocal (Carnatic)",
    experience: "30+ Years",
    awards: "Padma Shri Nominee",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" // mature male portrait
  },
  {
    name: "Vidwan Suresh Kumar",
    instrument: "Violin",
    experience: "20+ Years",
    awards: "State Best Artist Award",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" // male portrait
  },
  {
    name: "Guru Krishnamurthy",
    instrument: "Mridangam",
    experience: "22+ Years",
    awards: "Laya Vadhya Ratna",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80" // mature male portrait
  }
];

export function Gurus() {
  return (
    <section id="gurus" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold uppercase tracking-widest text-accent mb-3"
          >
            Mentors
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="  text-4xl font-bold text-primary md:text-5xl"
          >
            Meet Our Gurus
          </motion.h3>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto mt-6 h-1 w-24 bg-accent"
          />
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {gurus.map((guru, index) => (
            <motion.div
              key={guru.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex flex-col rounded-3xl bg-card border-2 border-border p-6 shadow-md hover:border-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-2 text-center items-center"
            >
              <div className="relative mb-6 h-32 w-32 overflow-hidden rounded-full border-4 border-accent/20 group-hover:border-accent transition-colors duration-300">
                {/* using unsplash portrait as placeholder */}
                <img
                  src={guru.image}
                  alt={guru.name}
                  className="h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0"
                />
              </div>

              <h4 className="  text-xl font-bold text-foreground mb-1">{guru.name}</h4>
              <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-4">
                {guru.instrument}
              </span>

              <div className="w-full space-y-2 text-sm text-muted-foreground pt-4 border-t border-border">
                <p><strong className="text-foreground">Exp:</strong> {guru.experience}</p>
                <p className="italic">{guru.awards}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
