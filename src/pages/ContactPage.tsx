import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import { PageLayout } from "@/components/PageLayout";
import { PageHero } from "@/components/PageHero";
import { useSEO } from "@/hooks/useSEO";

const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbw3GDGjsnz1Ma7sNW3byPm4jIsQb9RbafHUwQDv1eBsD9UHLcet1uHG3xOyy3AAj5g-/exec";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  age: z.coerce.number().min(2, "Must be at least 2 years old").max(99, "Invalid age"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  instrument: z.string().min(1, "Please select an instrument"),
  experience: z.string().min(1, "Please select your level"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

const contactInfo = [
  {
    Icon: MapPin,
    label: "Address",
    value: "Building No.108/4, Near Akilandeshwari Kovil,\nNorth Car Street, Thiruvanaikoil,\nTrichy - 620005, Tamil Nadu",
  },
  { Icon: Phone, label: "Phone", value: "+91 90479 53210" },
  { Icon: Phone, label: "Phone", value: "+91 96556 53201" },
  { Icon: Mail, label: "Email", value: "info@srirahamandaramusic.com" },
  { Icon: Clock, label: "Class Hours", value: "Mon – Sun: 7:00 AM – 9:00 PM" },
];

export default function ContactPage() {
  useSEO({
    title: "Contact Us — Admissions & Enquiries",
    description: "Get in touch with Sri Rahamandara Music Academy for admissions, course enquiries, or to schedule a trial class. Located in Thiruvanaikoil, Trichy.",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setIsSuccess(true);
      reset();
    } catch {
      alert("Failed to submit. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <PageLayout>
      <PageHero
        eyebrow="Get in Touch"
        title={<>Contact <span className="italic text-accent">Us</span></>}
        description="Have a question about our courses, fees, or schedule? We'd love to hear from you. Fill out the form or reach us directly."
      />

      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* ── Contact Info ── */}
          <div className="lg:col-span-2 space-y-6">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-2">Details</p>
              <h2 className="text-3xl font-bold text-foreground">
                Find <span className="text-primary italic">Us</span>
              </h2>
            </div>

            {contactInfo.map(({ Icon, label, value }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 group"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-accent transition-colors duration-300">
                  <Icon className="h-5 w-5" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5">{label}</p>
                  <p className="text-sm text-foreground leading-relaxed whitespace-pre-line">{value}</p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 overflow-hidden rounded-2xl border border-border shadow-sm"
            >
              <iframe
                title="Academy Location"
                src="https://maps.google.com/maps?q=Building+No+108/4+North+Car+Street+Thiruvanaikoil+Trichy+620005&output=embed"
                width="100%"
                height="220"
                className="border-0 block"
                loading="lazy"
              />
            </motion.div>
          </div>

          {/* ── Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="relative rounded-3xl border border-border bg-card p-8 md:p-10 shadow-sm min-h-[520px]">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="flex flex-col items-center justify-center py-16 text-center"
                  >
                    <div className="relative mb-6">
                      <div className="h-20 w-20 rounded-full bg-accent/10 flex items-center justify-center">
                        <div className="h-14 w-14 rounded-full bg-accent/20 flex items-center justify-center">
                          <FaCheckCircle className="text-3xl text-accent" />
                        </div>
                      </div>
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0.6 }}
                        animate={{ scale: 1.5, opacity: 0 }}
                        transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
                        className="absolute inset-0 rounded-full border-2 border-accent/40"
                      />
                    </div>
                    <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-3">Success</p>
                    <h3 className="text-2xl font-bold text-foreground mb-3">Application Received!</h3>
                    <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
                      Thank you! Our team will reach out to you within 24 hours to discuss next steps.
                    </p>
                    <div className="mt-6 flex items-center gap-3">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent animate-bounce [animation-delay:0ms]" />
                      <div className="h-1.5 w-1.5 rounded-full bg-accent animate-bounce [animation-delay:150ms]" />
                      <div className="h-1.5 w-1.5 rounded-full bg-accent animate-bounce [animation-delay:300ms]" />
                    </div>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-8 text-sm font-semibold text-primary hover:text-accent transition-colors"
                    >
                      Send another message →
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit(onSubmit)}
                    className="space-y-4"
                  >
                    <div className="mb-6">
                      <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-1">Enquire</p>
                      <h3 className="text-2xl font-bold text-foreground">
                        Your <span className="text-primary italic">Details</span>
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wide">
                          Full Name *
                        </label>
                        <input
                          {...register("name")}
                          placeholder="Your full name"
                          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition"
                        />
                        {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wide">
                          Age *
                        </label>
                        <input
                          {...register("age")}
                          type="number"
                          placeholder="Your age"
                          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition"
                        />
                        {errors.age && <p className="mt-1 text-xs text-red-500">{errors.age.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wide">
                          Phone *
                        </label>
                        <input
                          {...register("phone")}
                          type="tel"
                          placeholder="+91 XXXXX XXXXX"
                          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition"
                        />
                        {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wide">
                          Email *
                        </label>
                        <input
                          {...register("email")}
                          type="email"
                          placeholder="you@example.com"
                          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition"
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wide">
                          Instrument *
                        </label>
                        <select
                          {...register("instrument")}
                          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition"
                        >
                          <option value="">Select instrument</option>
                          <option>Saraswati Veena</option>
                          <option>Carnatic Vocal</option>
                          <option>Violin</option>
                          <option>Mridangam</option>
                          <option>Flute</option>
                          <option>Ghatam</option>
                          <option>Other</option>
                        </select>
                        {errors.instrument && <p className="mt-1 text-xs text-red-500">{errors.instrument.message}</p>}
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wide">
                          Experience Level *
                        </label>
                        <select
                          {...register("experience")}
                          className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition"
                        >
                          <option value="">Select level</option>
                          <option>Beginner</option>
                          <option>Intermediate</option>
                          <option>Advanced</option>
                        </select>
                        {errors.experience && <p className="mt-1 text-xs text-red-500">{errors.experience.message}</p>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-muted-foreground mb-1 uppercase tracking-wide">
                        Message (optional)
                      </label>
                      <textarea
                        {...register("message")}
                        rows={3}
                        placeholder="Any questions or special requests..."
                        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0 disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Submitting…" : "Submit Application"}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </PageLayout>
  );
}
