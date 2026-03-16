import { motion } from "framer-motion";
import { FaUserTie, FaCalendarAlt, FaTrophy, FaMusic, FaGraduationCap } from "react-icons/fa";

export function BentoGrid() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-background py-20 px-6">
      <div className="mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[220px]"
        >
          {/* Card 1: Our Gurus (Large) */}
          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-3xl bg-primary p-8 shadow-xl md:col-span-2 md:row-span-2 text-primary-foreground hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
          >
            <div className="absolute -right-12 -top-12 h-64 w-64 rounded-full bg-accent/20 blur-3xl transition-all group-hover:bg-accent/30" />
            <FaUserTie className="h-12 w-12 text-accent mb-6" />
            <h3 className="  text-3xl md:text-4xl font-bold mb-4">Our Eminent Gurus</h3>
            <p className="text-primary-foreground/80 text-lg max-w-md">
              Learn directly from legendary maestros and award-winning artists who have dedicated their lives to preserving classical traditions.
            </p>
            <a href="#gurus" className="inline-block mt-8 text-accent font-semibold hover:underline">
              Meet the Masters →
            </a>
          </motion.div>

          {/* Card 2: Admissions */}
          <motion.div
            variants={itemVariants}
            className="group rounded-3xl bg-card border border-border p-8 shadow-lg hover:border-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <FaCalendarAlt className="h-8 w-8 text-primary mb-4" />
            <h3 className="  text-xl font-bold text-foreground mb-2">New Admissions</h3>
            <p className="text-muted-foreground text-sm">
              Registrations open for the upcoming Fall batch. Limited seats available for beginners.
            </p>
          </motion.div>

          {/* Card 3: Achievements */}
          <motion.div
            variants={itemVariants}
            className="group rounded-3xl bg-card border border-border p-8 shadow-lg hover:border-accent hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <FaTrophy className="h-8 w-8 text-accent mb-4" />
            <h3 className="  text-xl font-bold text-foreground mb-2">100+ Awards</h3>
            <p className="text-muted-foreground text-sm">
              Our students consistently secure top honors in state and national level competitions.
            </p>
          </motion.div>

          {/* Card 4: Workshops */}
          <motion.div
            variants={itemVariants}
            className="group rounded-3xl bg-accent p-8 shadow-lg text-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-1"
          >
            <FaMusic className="h-8 w-8 mb-4 opacity-80" />
            <h3 className="  text-xl font-bold mb-2">Masterclasses</h3>
            <p className="text-primary/80 text-sm font-medium">
              Join weekend intensive workshops with visiting international artists.
            </p>
          </motion.div>

          {/* Card 5: Exam Results */}
          <motion.div
            variants={itemVariants}
            className="group relative overflow-hidden rounded-3xl bg-card border border-border p-8 shadow-lg hover:border-primary hover:shadow-xl transition-all duration-300 hover:-translate-y-1 md:col-span-2 flex items-center justify-between"
          >
            <div>
              <FaGraduationCap className="h-8 w-8 text-primary mb-4" />
              <h3 className="  text-2xl font-bold text-foreground mb-2">100% Passing Rate</h3>
              <p className="text-muted-foreground max-w-sm">
                Excellence in university grade examinations with distinction honors year after year.
              </p>
            </div>
            {/* Decorative background circle */}
            <div className="absolute -right-8 -bottom-8 h-40 w-40 rounded-full border-[16px] border-primary/5 group-hover:border-primary/10 transition-colors" />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
