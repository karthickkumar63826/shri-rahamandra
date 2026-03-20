import { useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "./ui/Modal";
import { ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const photos = [
  { src: "/images/banner.avif", alt: "" },
  { src: "/images/award.avif", alt: "Academy stage during annual celebration" },
  { src: "/images/award3.webp", alt: "Award presentation moment with dignitaries" },
  { src: "/images/award2.webp", alt: "Students receiving recognition on stage" },
  { src: "/images/award 4.avif", alt: "Guru honoured for outstanding contribution to music" },
  { src: "/images/piano-class.avif", alt: "Piano class in session" },
  { src: "/images/musical-class.avif", alt: "Students during a music learning session" },
  { src: "/images/musical-class-2.avif", alt: "Students during a music learning session" },

];


export function VideoGallery() {
  const [photoIndex, setPhotoIndex] = useState<number | null>(null);

  const openPhoto = (idx: number) => setPhotoIndex(idx);
  const closePhoto = () => setPhotoIndex(null);
  const prevPhoto = (e: React.MouseEvent) => { e.stopPropagation(); setPhotoIndex((i) => (i! - 1 + photos.length) % photos.length); };
  const nextPhoto = (e: React.MouseEvent) => { e.stopPropagation(); setPhotoIndex((i) => (i! + 1) % photos.length); };

  return (
    <section id="gallery" className="bg-background">
      <PageHero
        eyebrow="Performances"
        title={<>Concerts & <span className="italic text-accent">Recitals</span></>}
        description="Witness the mastery of our students and faculty through live performances, annual concerts, and intimate recitals — every note a testament to years of dedicated practice."
      />

      {/* ── Photo Gallery ──────────────────────── */}
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8"
        >
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-1">Moments</p>
            <h2 className="text-3xl font-bold text-foreground">
              Photo <span className="text-accent italic">Gallery</span>
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
            Glimpses of performances, celebrations, and everyday musical life at our academy.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px]">
          {photos.map((photo, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
              onClick={() => openPhoto(idx)}
              className={`group cursor-pointer overflow-hidden rounded-2xl border border-border shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300 ${idx === 0 ? "col-span-2 row-span-2" : idx === 2 ? "row-span-2" : ""
                }`}
            >
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-primary shadow-lg">
                    <ZoomIn className="h-5 w-5" strokeWidth={1.5} />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white text-xs font-semibold truncate">{photo.alt}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Divider ────────────────────────────── */}
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center gap-4 mb-16">
          <div className="flex-1 h-px bg-border" />
          <span className="text-accent text-lg">✦</span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </div>

      {/* Photo Modal */}
      <Modal isOpen={photoIndex !== null} onClose={closePhoto}>
        {photoIndex !== null && (
          <div className="relative bg-black">
            <img
              src={photos[photoIndex].src}
              alt={photos[photoIndex].alt}
              className="w-full max-h-[80vh] object-contain"
            />
            <button
              onClick={prevPhoto}
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-accent hover:text-primary transition-colors backdrop-blur-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextPhoto}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white hover:bg-accent hover:text-primary transition-colors backdrop-blur-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/60 text-xs">
              {photoIndex + 1} / {photos.length}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
