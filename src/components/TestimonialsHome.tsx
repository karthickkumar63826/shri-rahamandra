import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const featured = [
  {
    name: "Dr Divya Peds",
    course: "Harmonious Learning Experience",
    avatar: "D",
    text: "A very dedicated and sincere teacher. Madam takes care that kids learn music and enjoy the classes as well.. homely environment and a friendly teacher.. I highly recommend.",
  },
  {
    name: "Aruna Dhanasekar",
    course: "Saraswati Veena",
    avatar: "A",
    text: "I have been learning veenai under srividhya mam. It feels so nice to learn because of her patience and clear teaching. It is such a great place to learn veenai under srividhya mam.",
  },
  {
    name: "Sri Sudha",
    course: "Violin, Intermediate",
    avatar: "S",
    text: "I had an amazing experience in this Music Academy! The vocal coach, Mrs. Srividhya, is incredibly patient and knowledgeable. I've seen significant improvement in my singing skills, and the supportive atmosphere in class makes learning so much fun. Highly recommend this Music Academy to anyone looking to learn music or enhance their skills! 🎶",
  },
];

const StarRow = () => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star key={i} className="h-3.5 w-3.5 fill-accent text-accent" strokeWidth={0} />
    ))}
  </div>
);

export function TestimonialsHome() {
  return (
    <section className="bg-card border-t border-border px-6 py-24">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">Testimonials</p>
            <h2 className="text-4xl font-bold text-foreground">
              Student <span className="text-primary italic">Stories</span>
            </h2>
          </div>

        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featured.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl bg-background border border-border p-7 shadow-sm hover:shadow-lg hover:border-accent/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <div>
                <div className="flex items-start justify-between mb-5">
                  <StarRow />
                  <Quote className="h-5 w-5 text-accent/30 shrink-0" strokeWidth={1} />
                </div>
                <p className="text-sm text-foreground/80 italic leading-relaxed mb-6">"{review.text}"</p>
              </div>
              <div className="flex items-center gap-3 pt-5 border-t border-border">
                <div className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-accent text-sm font-bold shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <p className="font-bold text-foreground text-sm">{review.name}</p>
                  <p className="text-xs text-muted-foreground">{review.course}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
