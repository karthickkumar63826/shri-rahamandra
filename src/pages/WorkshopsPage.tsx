import { motion } from "framer-motion";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { useSEO } from "@/hooks/useSEO";
import { Clock, Users, CalendarDays, Sparkles, Music, Palette, BrainCircuit, Star, CheckCircle2, Zap, ArrowRight } from "lucide-react";
import { useContactModal } from "@/hooks/useContactModal";
import { Rupee } from "@/components/ui/Rupee";

const workshops = [
  {
    icon: Sparkles,
    name: "Bharatanatyam",
    days: "10 Days",
    dates: "Apr 25 – May 5",
    timing: "11:00 AM – 12:00 PM",
    target: "Beginners",
    price: "1,499",
    info: "Master the fundamentals of classical Indian dance — Adavus, basic footwork, hand gestures, and a final-day stage performance.",
    tag: "Dance",
    image: "/workshop/bharatham.jpg",
  },
  {
    icon: Music,
    name: "Violin",
    days: "10 Days",
    dates: "Apr 25 – May 5",
    timing: "1:30 PM – 3:00 PM",
    target: "All Levels",
    price: "1,999",
    info: "Build strong finger positions, bowing technique, and classical melody sense. For beginners and those refining existing skills.",
    tag: "Strings",
    image: "/workshop/violin.jpg",
  },
  {
    icon: Music,
    name: "Keyboard",
    days: "7 Days",
    dates: "May 3 – May 9",
    timing: "10:30 AM – 11:30 AM",
    target: "Teens",
    price: "2,499",
    info: "Learn Major & Minor scales, chord progressions, and walk away playing 6 popular Cinema Songs.",
    tag: "Keys",
    image: "/workshop/keyboard.webp",
  },
  {
    icon: Palette,
    name: "Pot Painting",
    days: "3 Days",
    dates: "May (TBA)",
    timing: "10:30 AM – 12:30 PM",
    target: "Creative",
    price: "1,299",
    info: "Clay & glass painting with pearl colors, mirror pieces, stone work and varnishing. All materials provided.",
    tag: "Art",
    image: "/workshop/pot-painging.webp",
  },
  {
    icon: BrainCircuit,
    name: "Abacus Basics",
    days: "2 Days",
    dates: "April (TBA)",
    timing: "2 Hours / Day",
    target: "Kids 6–12",
    price: "999",
    info: "Sharpen mental arithmetic and logical thinking through bead visualization and speed drills.",
    tag: "Academic",
    image: "/workshop/abacus.webp",
  },
  {
    icon: Music,
    name: "Vocals",
    days: "10 Days",
    dates: "May (TBA)",
    timing: "1 Hour / Day",
    target: "All Ages",
    price: "1,199",
    info: "10 days, 10 Keerthanais. Carnatic vocal basics, sruti alignment, and classical compositions.",
    tag: "Voice",
    image: "/workshop/vocals.webp",
  },
];

const combos = [
  {
    badge: "Traditional",
    name: "Cultural Foundation",
    includes: ["Bharatanatyam", "Vocals"],
    duration: "10 + 10 Days",
    original: "2,698",
    price: "2,199",
    saving: "499",
    target: "Complete Classical summer for children.",
    featured: false,
  },
  {
    badge: "Instrumental",
    name: "Modern Maestro",
    includes: ["Keyboard", "Violin"],
    duration: "7 + 10 Days",
    original: "4,498",
    price: "3,799",
    saving: "699",
    target: "Master Western & Classical instruments together.",
    featured: false,
  },
  {
    badge: "Skill Based",
    name: "Creative Genius",
    includes: ["Abacus Basics", "Pot Painting"],
    duration: "2 + 3 Days",
    original: "2,298",
    price: "1,899",
    saving: "399",
    target: "Brain development + artistic fun for kids 6–12.",
    featured: false,
  },
  {
    badge: "Best Value",
    name: "Full Summer Immersion",
    includes: ["Any 3 Workshops"],
    duration: "Your Choice",
    original: null,
    price: "1,000 Off",
    saving: null,
    target: "Flat ₹1,000 off any 3 workshops + Premium Gold Member Certificate + Honours feature on website.",
    featured: true,
  },
];

const provided = ["Clay pots / Glass", "Pearl colors", "Acrylic paints", "Mirror pieces", "Stone works", "Brushes", "Varnishing"];
const studentBring = ["Your creativity!", "Old newspaper", "Waste cloth", "Small water bowl"];

export default function WorkshopsPage() {
  const { openContact } = useContactModal();
  useSEO({
    title: "Summer Mastery 2026 — Workshops & Events",
    description: "Join Sri Rahamandara Summer Mastery 2026 — workshops in Bharatanatyam, Violin, Keyboard, Pot Painting, Abacus & Vocals. Special combo packs available.",
  });

  return (
    <PageLayout>
      <PageHero
        eyebrow="Summer 2026"
        title={<>Summer <span className="italic text-accent">Mastery</span> 2026</>}
        description="Six immersive workshops across music, dance, art and academics — designed to ignite passion and build real skill over the summer break."
      />

      {/* ── Section Header ── */}
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-2">Master Plan</p>
            <h2 className="text-4xl font-bold text-foreground">
              All <span className="italic text-accent">Workshops</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
            Each workshop is crafted for focused learning — small batches, expert guidance, real results.
          </p>
        </motion.div>
      </div>

      {/* ── Workshop Cards ── */}
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {workshops.map((w, i) => (
            <motion.div
              key={w.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.55, delay: i * 0.07 }}
              className="group flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-md hover:shadow-2xl hover:border-accent/40 hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Image — taller, name+price inside */}
              <div className="relative h-64 shrink-0 overflow-hidden">
                <img
                  src={w.image}
                  alt={w.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

                {/* Top: tag + days */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="rounded-full bg-accent px-3 py-1 text-[10px] font-black uppercase tracking-widest text-primary shadow-md">
                    {w.tag}
                  </span>
                  <span className="rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1 text-[10px] font-bold text-white">
                    {w.days}
                  </span>
                </div>

                {/* Bottom: name + price */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-2xl font-bold text-white mb-2 leading-tight">{w.name}</h3>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <CalendarDays className="h-3.5 w-3.5 text-white/90" strokeWidth={1.5} />
                      <span className="text-xs text-white/90 font-medium">{w.dates}</span>
                    </div>
                    <div className="flex items-baseline gap-0.5">
                      <Rupee className="text-base font-bold text-accent" />
                      <span className="text-3xl font-black text-accent leading-none">{w.price}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5 gap-4">
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">{w.info}</p>

                {/* Timing + target */}
                <div className="flex flex-col gap-2 py-3 border-t border-border">
                  <div className="flex items-center gap-2">
                    <Clock className="h-3.5 w-3.5 text-accent shrink-0" strokeWidth={1.5} />
                    <span className="text-xs font-medium text-muted-foreground">{w.timing}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-3.5 w-3.5 text-accent shrink-0" strokeWidth={1.5} />
                    <span className="text-xs text-muted-foreground">For <span className="font-semibold text-foreground">{w.target}</span></span>
                  </div>
                </div>

                <button
                  onClick={openContact}
                  className="w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200 shadow-sm flex items-center justify-center gap-2"
                >
                  Enrol Now <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Pot Painting Toolkit ── */}
      <div className="bg-primary">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">Pot Painting Workshop</p>
              <h2 className="text-4xl font-bold text-primary-foreground mb-4">
                The Artist's <span className="italic text-accent">Toolkit</span>
              </h2>
              <p className="text-primary-foreground/60 text-sm leading-relaxed mb-8">
                Everything is arranged for a premium hands-on experience. Students just walk in with their creativity — we handle the rest.
              </p>
              <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                <Palette className="h-8 w-8 text-accent shrink-0" strokeWidth={1.5} />
                <div>
                  <p className="text-sm font-bold text-primary-foreground"><Rupee />1,299 · 3 Days</p>
                  <p className="text-xs text-primary-foreground/50">10:30 AM – 12:30 PM · May (TBA)</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="h-4 w-4 text-accent" strokeWidth={1.5} />
                  <h3 className="text-sm font-bold text-primary-foreground">We Provide</h3>
                </div>
                <ul className="space-y-2.5">
                  {provided.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-primary-foreground/70">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" strokeWidth={1.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white/5 border border-white/10 p-5">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="h-4 w-4 text-accent" strokeWidth={1.5} />
                  <h3 className="text-sm font-bold text-primary-foreground">You Bring</h3>
                </div>
                <ul className="space-y-2.5">
                  {studentBring.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-xs text-primary-foreground/70">
                      <CheckCircle2 className="h-3.5 w-3.5 text-accent shrink-0" strokeWidth={1.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Combo Packs ── */}
      <div className="mx-auto max-w-7xl px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-14 flex flex-col md:flex-row md:items-end justify-between gap-4"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-2">Save More</p>
            <h2 className="text-4xl font-bold text-foreground">
              Combo <span className="italic text-accent">Packs</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-sm leading-relaxed">
            Bundle workshops and save — designed for every kind of learner.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {combos.map((combo, i) => (
            <motion.div
              key={combo.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative overflow-hidden rounded-3xl border transition-all duration-300 ${combo.featured
                ? "border-accent/50 bg-primary shadow-2xl"
                : "border-border bg-card hover:border-accent/40 hover:shadow-lg"
                }`}
            >
              {combo.featured && <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-accent/60 to-accent" />}

              <div className="p-7">
                <div className="flex items-start justify-between mb-5">
                  <div>
                    <span className={`inline-block text-[10px] font-bold uppercase tracking-[0.2em] px-2.5 py-1 rounded-full mb-3 ${combo.featured ? "bg-accent/20 text-accent" : "bg-muted text-muted-foreground"}`}>
                      {combo.badge}
                    </span>
                    <h3 className={`text-xl font-bold ${combo.featured ? "text-primary-foreground" : "text-foreground"}`}>
                      {combo.name}
                    </h3>
                  </div>
                  {combo.featured && (
                    <div className="h-11 w-11 rounded-2xl bg-accent/20 flex items-center justify-center shrink-0">
                      <Zap className="h-5 w-5 text-accent" strokeWidth={1.5} />
                    </div>
                  )}
                </div>

                <div className={`rounded-2xl p-4 mb-5 ${combo.featured ? "bg-white/5" : "bg-background"}`}>
                  <p className={`text-[10px] font-bold uppercase tracking-widest mb-3 ${combo.featured ? "text-primary-foreground/40" : "text-muted-foreground"}`}>
                    Includes
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {combo.includes.map((w) => (
                      <span key={w} className={`inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full border ${combo.featured
                        ? "border-white/10 bg-white/10 text-primary-foreground"
                        : "border-border text-foreground"
                        }`}>
                        <CheckCircle2 className="h-3 w-3 text-accent" strokeWidth={2} />
                        {w}
                      </span>
                    ))}
                  </div>
                  <p className={`text-xs mt-3 ${combo.featured ? "text-primary-foreground/40" : "text-muted-foreground"}`}>
                    {combo.duration}
                  </p>
                </div>

                <div className={`flex items-end justify-between pt-4 border-t ${combo.featured ? "border-white/10" : "border-border"}`}>
                  <div>
                    {combo.original && (
                      <p className={`text-sm line-through mb-1 ${combo.featured ? "text-primary-foreground/30" : "text-muted-foreground"}`}>
                        <Rupee />{combo.original}
                      </p>
                    )}
                    <p className={`text-4xl font-bold leading-none ${combo.featured ? "text-accent" : "text-foreground"}`}>
                      <Rupee className={`text-2xl ${combo.featured ? "text-accent/70" : "text-muted-foreground"}`} />
                      {combo.price}
                    </p>
                    {combo.saving && (
                      <p className="text-xs font-bold text-accent mt-1.5">Save <Rupee />{combo.saving}</p>
                    )}
                  </div>
                  <button
                    onClick={openContact}
                    className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 ${combo.featured
                      ? "bg-accent text-primary hover:bg-accent/90 shadow-lg"
                      : "bg-primary text-primary-foreground hover:bg-primary/90"
                      }`}
                  >
                    Claim Pack <ArrowRight className="h-4 w-4" strokeWidth={1.5} />
                  </button>
                </div>

                <p className={`text-xs mt-4 leading-relaxed ${combo.featured ? "text-primary-foreground/50" : "text-muted-foreground"}`}>
                  {combo.target}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div className="bg-accent">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary/50 mb-3">Limited Seats</p>
              <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
                Reserve your spot <br className="hidden md:block" />
                before it's <span className="italic">gone.</span>
              </h2>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="shrink-0"
            >
              <button
                onClick={openContact}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-10 py-4 text-base font-semibold text-primary-foreground shadow-xl hover:bg-primary/90 hover:-translate-y-0.5 transition-all duration-200"
              >
                Reserve My Spot <ArrowRight className="h-5 w-5" strokeWidth={1.5} />
              </button>
            </motion.div>
          </div>
        </div>
      </div>

    </PageLayout>
  );
}
