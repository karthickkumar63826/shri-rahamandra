import { motion } from "framer-motion";

const courses = [
  {
    icon: "🎵",
    title: "Vocal & Veena: The Resonance of Water",
    desc: 'Just as water flows beneath the sanctum of Jambukeswarar, we train students in "Sruti Purity" and "Gamakas" that mimic the fluid, life-giving nature of water—soulful resonance echoing through temple festivals for generations.',
  },
  {
    icon: "💃",
    title: "Dance (Bharatanatyam): The Frozen Music of Stone",
    desc: 'Our Bharatanatyam curriculum, led by masters in the Kalakshetra style, draws direct inspiration from the 108 Karanas and exquisite sculptures of the temple\'s gopurams. Every Adavu taught here brings the "frozen music" of stone carvings to life.',
  },
  {
    icon: "🥁",
    title: "Mridangam & Keyboard: The Rhythm of the Chants",
    desc: "The mathematical precision of the Mridangam and melodic versatility of the Keyboard are inspired by the Laya of the temple's daily rituals and ancient Vedic chants.",
  },
  {
    icon: "🎨",
    title: "Visual Arts & Heritage Crafts",
    desc: "Our Drawing and Art modules (Pichwai, Bhil, and Pot Painting) encourage students to observe intricate iconography and temple murals—teaching that art is a visual form of prayer.",
  },
  {
    icon: "🧮",
    title: "Intellectual Mastery (Abacus & Vedic Maths)",
    desc: 'Following ancient Indian scholars who used the temple as a center for higher learning, we integrate Abacus and Vedic Maths to sharpen "Intellectual Purity"—balancing creative soul with logical mind.',
  },
];

export function About() {
  return (
    <section id="about" className="overflow-hidden bg-card py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-3">About Us</h2>
          <h3 className="text-4xl font-bold text-foreground md:text-5xl mb-4">
            A Heritage <span className="text-primary italic">Beyond Time</span>
          </h3>
          <p className="text-lg text-accent font-semibold mb-6">Where the Five Elements Meet Fine Arts</p>
          <div className="w-20 h-1 bg-accent mx-auto mb-8" />
        </motion.div>

        {/* Intro Grid */}
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 items-center mb-20">

          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -left-6 -top-6 h-full w-full rounded-3xl border-2 border-accent/50 z-0" />
            <div className="relative z-10 overflow-hidden rounded-3xl shadow-2xl">
              <img
                src="https://pixabay.com/get/g3fd38336b7fdf2b554c9d94dd3a016b30b68c421feaf8b3a605ee7af4dc6f7d10998d41caa488e290008c51b45fda6e1c6e6756559f187cee8c4af5b40ad41b0_1280.jpg"
                alt="Classical Music Performance"
                className="w-full h-[500px] object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </div>
            <div className="absolute -right-8 -bottom-8 bg-background p-6 rounded-2xl shadow-xl z-20 border border-border">
              <p className="text-5xl font-bold text-accent mb-1">2008</p>
              <p className="text-sm font-semibold uppercase tracking-wider text-foreground">Est. in<br />Thiruvanaikoil</p>
            </div>
          </motion.div>

          {/* Text Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              Nestled in the shadows of the magnificent <strong className="text-foreground">Thiruvanaikovil Temple</strong>—one of the five Pancha Bhoota Stalam representing the element of Water (Appu Lingam)—<strong className="text-foreground">Sri Rahamandara Music Academy</strong> is a sanctuary where tradition flows like the sacred springs of the Kaveri.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Established in 2008, our academy is not just a school; it is a cultural extension of the spiritual vibrations that have echoed through the corridors of Thiruvanaikoil for centuries. We believe that the discipline of music and the grace of dance are deeply connected to the divine geometry and rhythmic stone carvings of the Akilandeshwari Kovil.
            </p>

            {/* Promise */}
            <div className="bg-primary/5 border border-accent/30 rounded-2xl p-6">
              <h4 className="text-lg font-bold text-foreground mb-2">🌍 Our Promise: Global Reach, Local Roots</h4>
              <p className="text-muted-foreground leading-relaxed">
                While we embrace modern technology—offering Global Online Classes and a high-tech Parent Portal—our heart remains firmly rooted in Thiruvanaikoil. We don't just teach music; we preserve a lineage as eternal as the temple itself.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Temple-Academy Connection */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mb-10 text-center"
        >
          <h3 className="text-3xl font-bold text-foreground mb-2">The Temple–Academy Connection</h3>
          <p className="text-muted-foreground">Every course we offer is a tribute to the heritage that surrounds us.</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl border border-border bg-background p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-3xl mb-4 block">{course.icon}</span>
              <h4 className="text-base font-bold text-foreground mb-3">{course.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">{course.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
