import { motion } from "framer-motion";
import { MapPin, Clock, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { useContactModal } from "@/hooks/useContactModal";
import { PageHero } from "@/components/PageHero";
import { Link } from "wouter";

const events = [
  {
    id: 1,
    month: "JUN",
    day: "15–18",
    year: "2025",
    title: "Carnatic Summer Workshop",
    location: "Main Hall, Academy",
    duration: "4 Days Intensive",
    seats: "24 seats left",
    desc: "A 4-day intensive vocal workshop focusing on rare krithis and devotional compositions seldom performed today. Includes evening satsangs with faculty.",
    tags: ["Vocal", "Beginners Welcome", "Certificate"],
  },
  {
    id: 2,
    month: "JUL",
    day: "20",
    year: "2025",
    title: "Veena Masterclass",
    location: "Studio B, Academy",
    duration: "1 Day",
    seats: "12 seats left",
    desc: "Advanced veena techniques and gamakas by Vidushi Lakshmi Devi — open to intermediate and advanced students with minimum 2 years of veena training.",
    tags: ["Veena", "Advanced", "Live Demo"],
  },
  {
    id: 3,
    month: "AUG",
    day: "10",
    year: "2025",
    title: "Annual Arangetram 2025",
    location: "City Auditorium, Trichy",
    duration: "Full Day Event",
    seats: "Open to public",
    desc: "Debut performances by our senior graduating students — a milestone celebration of years of dedicated training in classical dance and music.",
    tags: ["All Disciplines", "Public Event", "Gala Evening"],
  },
  {
    id: 4,
    month: "SEP",
    day: "05",
    year: "2025",
    title: "Classical Music Festival",
    location: "Open Air Theatre, Trichy",
    duration: "2 Days",
    seats: "Open to public",
    desc: "A grand classical music festival featuring celebrated artists from across India — tabla maestros, vocal legends, and rising stars performing under the open sky.",
    tags: ["All Genres", "Guest Artists", "Open Air"],
  },
];

const benefits = [
  "Certificate of participation from a nationally recognised academy",
  "Direct mentorship from award-winning faculty",
  "Recordings of your session provided after the workshop",
  "Access to the academy's practice studios for 1 week post-workshop",
];

export function Workshops() {
  const { openContact } = useContactModal();

  return (
    <section id="workshops" className="bg-background">

      <PageHero
        eyebrow="Calendar"
        title={<>Workshops & <span className="italic text-accent">Events</span></>}
        description="Immerse yourself in focused intensives, masterclasses with visiting artists, and seasonal celebrations of classical music and dance. Something meaningful, every season."
      />

      {/* ── Upcoming Events ── */}
      <div className="mx-auto max-w-7xl px-6 py-24">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">Upcoming</p>
            <h2 className="text-4xl font-bold text-foreground">
              What's <span className="text-primary italic">On</span> in 2025
            </h2>
          </div>
          <button
            onClick={openContact}
            className="self-start md:self-auto inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 transition-all shadow-lg"
          >
            Register Interest
            <ArrowRight className="h-4 w-4" />
          </button>
        </motion.div>

        <div className="space-y-5">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.55, delay: idx * 0.07 }}
              className="group grid grid-cols-1 md:grid-cols-[160px_1fr] overflow-hidden rounded-2xl border border-border bg-card shadow-sm hover:shadow-lg hover:border-accent/40 transition-all duration-300"
            >
              {/* Date column */}
              <div className="relative bg-primary flex flex-col items-center justify-center p-8 text-primary-foreground">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_right,white,transparent)]" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] opacity-60 mb-1">{event.month}</span>
                <span className="text-5xl font-black leading-none">{event.day}</span>
                <span className="text-sm font-semibold opacity-50 mt-1">{event.year}</span>
                <div className="mt-4 h-px w-8 bg-accent/60" />
                <span className="mt-3 text-[10px] font-bold uppercase tracking-widest text-accent text-center">{event.duration}</span>
                {/* Corner decoration matching other cards */}
                <div className="absolute -bottom-4 -right-4 h-14 w-14 rounded-full border-[8px] border-primary-foreground/10" />
              </div>

              {/* Content column */}
              <div className="relative p-8 flex flex-col justify-between gap-5 overflow-hidden">
                {/* Hover accent top line */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <div>
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    {event.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full px-3 py-0.5 text-xs font-semibold bg-primary/8 text-primary border border-primary/15"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">{event.desc}</p>

                  <div className="flex flex-wrap gap-5 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="h-4 w-4 text-accent shrink-0" strokeWidth={1.5} />
                      {event.location}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4 text-accent shrink-0" strokeWidth={1.5} />
                      {event.duration}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <Users className="h-4 w-4 text-accent shrink-0" strokeWidth={1.5} />
                      {event.seats}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-border">
                  <button
                    onClick={openContact}
                    className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 transition-all shadow"
                  >
                    Register Now
                  </button>
                  <button
                    onClick={openContact}
                    className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors"
                  >
                    Learn more →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Benefits Banner ── */}
      <div className="bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">Why Attend</p>
              <h2 className="text-3xl font-bold text-primary-foreground mb-2">
                What You <span className="italic text-accent">Get</span>
              </h2>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                Every workshop at SRI RAHAMANTARA is designed for deep, immersive learning.
              </p>
            </div>
            <ul className="space-y-4">
              {benefits.map((benefit, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" strokeWidth={1.5} />
                  <span className="text-sm text-primary-foreground/80 leading-relaxed">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="bg-accent px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/60 mb-3">Don't Miss Out</p>
              <h2 className="text-4xl font-bold text-primary leading-tight">
                Seats fill <span className="italic">fast.</span> <br className="hidden md:block" />
                Reserve yours <span className="italic">today.</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col sm:flex-row gap-4 shrink-0"
            >
              <button
                onClick={openContact}
                className="flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-xl hover:bg-primary/90 hover:-translate-y-0.5 transition-all"
              >
                Reserve Your Spot
                <ArrowRight className="h-4 w-4" />
              </button>
              <Link
                href="/contact"
                className="flex items-center justify-center rounded-full border-2 border-primary/30 px-8 py-4 text-sm font-semibold text-primary hover:border-primary hover:bg-primary/10 transition-all"
              >
                Ask a Question
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

    </section>
  );
}
