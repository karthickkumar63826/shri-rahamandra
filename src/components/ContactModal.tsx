import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { X } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import * as Dialog from "@radix-ui/react-dialog";

const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbw3GDGjsnz1Ma7sNW3byPm4jIsQb9RbafHUwQDv1eBsD9UHLcet1uHG3xOyy3AAj5g-/exec";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  age: z.coerce
    .number()
    .min(4, "Must be at least 4 years old")
    .max(99, "Invalid age"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  instrument: z.string().min(1, "Please select an instrument"),
  experience: z.string().min(1, "Please select your level"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

interface ContactModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
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
      setTimeout(() => {
        setIsSuccess(false);
        onOpenChange(false);
      }, 3500);
    } catch {
      alert("Failed to submit. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay asChild>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm"
          />
        </Dialog.Overlay>

        <Dialog.Content asChild>
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => e.target === e.currentTarget && onOpenChange(false)}
          >
            <div className="relative w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl ">

              {/* Close button */}
              <Dialog.Close className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/10 ">
                <X className="text-gray-900 h-5 w-5" />
              </Dialog.Close>

              {/* Right form panel */}
              <div className="bg-card p-8 md:p-10   rounded-b-3xl md:rounded-r-3xl md:rounded-bl-none">
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0 }}
                      className="absolute inset-0 flex flex-col items-center justify-center p-10 text-center"
                    >
                      <FaCheckCircle className="text-5xl text-accent mb-4" />
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        Application Received!
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        Thank you! Our team will reach out to you within 24 hours to discuss next steps.
                      </p>
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
                      <h3 className="text-xl font-bold text-foreground mb-2">
                        Your Details
                      </h3>

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
                          {errors.name && (
                            <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>
                          )}
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
                          {errors.age && (
                            <p className="mt-1 text-xs text-red-500">{errors.age.message}</p>
                          )}
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
                          {errors.phone && (
                            <p className="mt-1 text-xs text-red-500">{errors.phone.message}</p>
                          )}
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
                          {errors.email && (
                            <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>
                          )}
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
                          {errors.instrument && (
                            <p className="mt-1 text-xs text-red-500">{errors.instrument.message}</p>
                          )}
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
                          {errors.experience && (
                            <p className="mt-1 text-xs text-red-500">{errors.experience.message}</p>
                          )}
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

            </div>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
