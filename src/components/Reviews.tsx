import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    id: 1,
    name: "Praha Sri",
    course: "Harmonious Learning Experience",
    text: "This academy is the perfect place to learn music, offering a conducive environment and expert guidance to nurture your musical talents.",
  },
  {
    id: 2,
    name: "Aruna Dhanasekar",
    course: "Veenai Learning",
    text: "I have been learning veenai under srividhya mam. It feels so nice to learn because of her patience and clear teaching. It is such a great place to learn veenai under srividhya mam.",
  },
  {
    id: 3,
    name: "Dr Divya Peds",
    course: "Musical Class",
    text: "A very dedicated and sincere teacher. Madam takes care that kids learn music and enjoy the classes as well.. homely environment and a friendly teacher.. I highly recommend",
  },
  {
    id: 4,
    name: "Sharmila Rajendran",
    course: "Violin",
    text: "A place with homely look, mentors feel like friends and finnally students can learn and enjoy the classes very much.",
  },
  {
    id: 5,
    name: "Akila Muthuvelu",
    course: "Classic Music",
    text: "Learnt and gained musical knowledge from the reputed Sri Vidya mam who has great musical knowledge and she is trainer of passionate singers. Thankyou mam for the knowledge that you gave and dedication towards classical music",
  },
];

const StarRow = () => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" strokeWidth={0} />
    ))}
  </div>
);

export function Reviews() {
  return (
    <section className="bg-primary overflow-hidden relative">

      {/* Header */}
      <div className="relative mx-auto max-w-7xl px-6 pt-24 pb-16 text-center z-10">
        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-10 h-64 w-64 rounded-full bg-accent/10 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 h-64 w-64 rounded-full bg-background/5 blur-3xl pointer-events-none" />

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-4"
        >
          Testimonials
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4"
        >
          What Our <span className="italic text-accent">Students Say</span>
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-4 h-px w-24 bg-accent/60"
        />
      </div>

      {/* Marquee */}
      <div className="relative flex w-full overflow-hidden pb-24">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 35, repeat: Infinity }}
          className="flex flex-nowrap gap-5 px-3"
        >
          {[...reviews, ...reviews].map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="w-[440px] shrink-0 rounded-2xl bg-card border border-border/60 p-7 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between mb-4">
                  <StarRow />
                  <Quote className="h-5 w-5 text-accent/40 shrink-0" strokeWidth={1} />
                </div>
                <p className="text-sm text-foreground/80 italic leading-relaxed">
                  "{review.text}"
                </p>
              </div>
              <div className="flex items-center gap-3 mt-6 pt-5 border-t border-border/50">
                <div className="h-9 w-9 rounded-full bg-primary flex items-center justify-center text-accent text-sm font-bold shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm leading-tight">{review.name}</h4>
                  <span className="text-xs text-muted-foreground">{review.course}</span>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

    </section>
  );
}
