import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Ananya S.",
    course: "Vocal Intermediate",
    text: "The dedication of the gurus here is unparalleled. I've seen massive improvement in my gamakas and sruti alignment within just 6 months."
  },
  {
    id: 2,
    name: "Vikram R.",
    course: "Mridangam Beginner",
    text: "Starting from scratch was intimidating, but the structured curriculum and patient teaching made it incredibly rewarding. Highly recommend!"
  },
  {
    id: 3,
    name: "Meera K.",
    course: "Veena Advanced",
    text: "The masterclasses with visiting artists provide such deep insights into advanced techniques. This academy is truly a temple of learning."
  },
  {
    id: 4,
    name: "Rahul T.",
    course: "Violin",
    text: "Excellent ambiance, traditional yet modern teaching methods. The annual performances give students great exposure and confidence."
  },
  {
    id: 5,
    name: "Deepa N.",
    course: "Vocal Beginner",
    text: "I joined as an adult beginner. The supportive environment and the focus on strong fundamentals have made my journey beautiful."
  }
];

export function Reviews() {
  return (
    <section className="bg-primary py-24 overflow-hidden relative">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 h-64 w-64 rounded-full bg-background/5 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 relative z-10 mb-12">
        <div className="text-center">
          <h2 className="  text-4xl font-bold text-primary-foreground md:text-5xl mb-4">
            What Our Students Say
          </h2>
          <div className="flex justify-center gap-1 text-accent text-2xl mb-6">
            {[...Array(5)].map((_, i) => <FaStar key={i} />)}
          </div>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative flex w-full overflow-hidden group">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex flex-nowrap gap-6 px-3 pause-on-hover"
        >
          {/* Duplicate array for seamless infinite scroll */}
          {[...reviews, ...reviews].map((review, idx) => (
            <div
              key={`${review.id}-${idx}`}
              className="w-[350px] shrink-0 rounded-2xl bg-card p-8 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex gap-1 text-accent mb-4 text-sm">
                  {[...Array(5)].map((_, i) => <FaStar key={i} />)}
                </div>
                <p className="text-foreground/80 italic mb-6">"{review.text}"</p>
              </div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold  ">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-foreground text-sm">{review.name}</h4>
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
