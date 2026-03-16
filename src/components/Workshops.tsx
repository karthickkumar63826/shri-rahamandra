import { motion } from "framer-motion";
import { MapPin, CalendarDays } from "lucide-react";
import { useContactModal } from "@/hooks/useContactModal";
import { PageHero } from "@/components/PageHero";

const events = [
  {
    id: 1,
    title: "Carnatic Summer Workshop",
    date: "Jun 15 – Jun 18, 2025",
    location: "Main Hall, Academy",
    desc: "A 3-day intensive vocal workshop focusing on rare krithis and devotional compositions rarely performed today.",
    gradient: "from-blue-500/20 to-primary/80",
  },
  {
    id: 2,
    title: "Veena Masterclass",
    date: "July 20, 2025",
    location: "Studio B",
    desc: "Advanced veena techniques and gamakas by Vidushi Lakshmi Devi — open to intermediate and advanced students.",
    gradient: "from-accent/40 to-primary/80",
  },
  {
    id: 3,
    title: "Annual Arangetram 2025",
    date: "August 10, 2025",
    location: "City Auditorium",
    desc: "Debut performances by our senior graduating students — a milestone celebration of years of dedicated training.",
    gradient: "from-purple-500/20 to-primary/80",
  },
  {
    id: 4,
    title: "Classical Music Festival",
    date: "September 5, 2025",
    location: "Open Air Theatre",
    desc: "A grand classical music festival featuring celebrated artists from across India performing under the open sky.",
    gradient: "from-orange-500/20 to-primary/80",
  },
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

      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="mb-14">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-2">Upcoming</p>
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-3xl font-bold text-foreground">
              What's <span className="text-primary italic">On</span>
            </h2>
            <div className="hidden md:block h-px flex-1 bg-border mx-6" />
            <button
              onClick={openContact}
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors shrink-0"
            >
              Register for an event →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {events.map((event, idx) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: idx * 0.08 }}
              className="group flex flex-col sm:flex-row overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300"
            >
              {/* Date panel */}
              <div className={`relative sm:w-2/5 p-6 flex flex-col justify-center items-center text-center bg-gradient-to-br ${event.gradient} shrink-0`}>
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent/40" />
                <div className="bg-background/90 backdrop-blur rounded-xl p-4 w-full shadow-md group-hover:scale-105 transition-transform duration-300">
                  <CalendarDays className="h-4 w-4 text-accent mx-auto mb-2" strokeWidth={1.5} />
                  <span className="block text-primary font-bold text-sm">{event.date.split('–')[0].trim()}</span>
                  {event.date.includes('–') && (
                    <span className="block text-xs text-muted-foreground mt-0.5">– {event.date.split('–')[1].trim()}</span>
                  )}
                </div>
              </div>

              {/* Content panel */}
              <div className="p-7 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-200">
                    {event.title}
                  </h4>
                  <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground mb-4 uppercase tracking-wide">
                    <MapPin className="h-3.5 w-3.5 text-accent shrink-0" strokeWidth={1.5} />
                    <span>{event.location}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {event.desc}
                  </p>
                </div>
                <button
                  onClick={openContact}
                  className="mt-6 self-start text-sm font-semibold text-primary hover:text-accent transition-colors"
                >
                  Register Now →
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
