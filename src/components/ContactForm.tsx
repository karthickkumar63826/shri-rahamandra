import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FaCheckCircle } from "react-icons/fa";

const WEBHOOK_URL = "https://script.google.com/macros/s/AKfycbzZFyqd_EUDwtHGIlC_gzhqHpejnYXcr3Y7Cuz-dEDJ0l-g9hTAWHIDs-ciiIjgIZGH/exec";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  age: z.coerce.number().min(4, "Must be at least 4 years old").max(99, "Invalid age"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  instrument: z.string().min(1, "Please select an instrument"),
  experience: z.string().min(1, "Please select your level"),
  message: z.string().optional(),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm() {
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
      // Send as POST using no-cors mode for Google Apps Script
      await fetch(WEBHOOK_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      // no-cors doesn't return readable success state, but if it didn't throw, we assume success
      setIsSuccess(true);
      reset();
      setTimeout(() => setIsSuccess(false), 5000); // Reset success state after 5s
    } catch (error) {
      console.error("Submission failed:", error);
      alert("Failed to submit. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-background py-24">
      {/* Decorative split background */}
      <div className="absolute inset-0 hidden md:block">
        <div className="absolute left-0 top-0 bottom-0 w-1/3 bg-primary" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 rounded-3xl overflow-hidden shadow-2xl">

          {/* Info Side */}
          <div className="bg-primary p-10 md:p-12 md:col-span-5 text-primary-foreground flex flex-col justify-center">
            <h2 className="  text-4xl font-bold mb-4">Enroll Now</h2>
            <p className="text-primary-foreground/80 mb-8 leading-relaxed">
              Take the first step towards mastering classical music. Fill out the form, and our admissions team will contact you shortly to schedule an orientation.
            </p>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-accent">Audition Requirements</h4>
                <p className="text-sm text-primary-foreground/80 mt-1">Beginners do not require an audition. Intermediate and advanced students will have a brief assessment.</p>
              </div>
              <div>
                <h4 className="font-bold text-accent">Term Details</h4>
                <p className="text-sm text-primary-foreground/80 mt-1">Next academic term begins in exactly 3 weeks. Classes are held bi-weekly.</p>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-card p-10 md:p-12 md:col-span-7 relative min-h-[500px]">
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex flex-col items-center justify-center bg-card z-10 text-center p-8"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", bounce: 0.5, delay: 0.2 }}
                  >
                    <FaCheckCircle className="h-24 w-24 text-green-500 mb-6 mx-auto" />
                  </motion.div>
                  <h3 className="  text-3xl font-bold text-primary mb-2">Request Received!</h3>
                  <p className="text-muted-foreground text-lg">
                    Thank you for your interest. We will get back to you within 24-48 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1">Student Name</label>
                      <input
                        {...register("name")}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1">Age</label>
                      <input
                        type="number"
                        {...register("age")}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                        placeholder="12"
                      />
                      {errors.age && <p className="mt-1 text-xs text-destructive">{errors.age.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1">Phone Number</label>
                      <input
                        type="tel"
                        {...register("phone")}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                        placeholder="+91 98765 43210"
                      />
                      {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1">Email Address</label>
                      <input
                        type="email"
                        {...register("email")}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email.message}</p>}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1">Instrument / Course</label>
                      <select
                        {...register("instrument")}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                      >
                        <option value="">Select an option...</option>
                        <option value="Vocal (Carnatic)">Vocal (Carnatic)</option>
                        <option value="Vocal (Hindustani)">Vocal (Hindustani)</option>
                        <option value="Saraswati Veena">Saraswati Veena</option>
                        <option value="Violin">Violin</option>
                        <option value="Mridangam">Mridangam</option>
                        <option value="Flute">Flute</option>
                        <option value="Other">Other</option>
                      </select>
                      {errors.instrument && <p className="mt-1 text-xs text-destructive">{errors.instrument.message}</p>}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-foreground mb-1">Experience Level</label>
                      <select
                        {...register("experience")}
                        className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                      >
                        <option value="">Select an option...</option>
                        <option value="Beginner">Beginner (No prior training)</option>
                        <option value="Intermediate">Intermediate (1-3 years)</option>
                        <option value="Advanced">Advanced (3+ years)</option>
                      </select>
                      {errors.experience && <p className="mt-1 text-xs text-destructive">{errors.experience.message}</p>}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-1">Message (Optional)</label>
                    <textarea
                      {...register("message")}
                      rows={4}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all resize-none"
                      placeholder="Any specific goals or questions?"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-xl bg-primary px-6 py-4 font-bold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed hover:-translate-y-0.5 active:translate-y-0"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Enquiry"}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
