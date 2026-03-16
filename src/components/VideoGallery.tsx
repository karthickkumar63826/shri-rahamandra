import { useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "./ui/Modal";
import { PlayCircle, Clock3 } from "lucide-react";
import { PageHero } from "@/components/PageHero";

const videos = [
  { id: "dQw4w9WgXcQ", title: "Annual Arangetram 2024 — Vocal Recital", duration: "12:45" },
  { id: "jNQXAC9IVRw", title: "Veena Masterclass Highlights", duration: "08:20" },
  { id: "_OBlgSz8sSM", title: "Mridangam Solo by Guru Krishnamurthy", duration: "15:10" },
  { id: "9bZkp7q19f0", title: "Violin Duet — State Level Winners", duration: "06:30" },
  { id: "kJQP7kiw5Fk", title: "Thyagaraja Aradhana Celebration", duration: "45:00" },
  { id: "OPf0YbXqDm0", title: "Beginners Batch First Performance", duration: "04:15" },
];

export function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-background">

      <PageHero
        eyebrow="Performances"
        title={<>Concerts & <span className="italic text-accent">Recitals</span></>}
        description="Witness the mastery of our students and faculty through live performances, annual concerts, and intimate recitals — every note a testament to years of dedicated practice."
      />

      <div className="mx-auto max-w-7xl px-6 py-24">

        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-accent mb-2">Video Archive</p>
            <h2 className="text-3xl font-bold text-foreground">
              Our <span className="text-primary italic">Collection</span>
            </h2>
          </div>
          <a
            href="#"
            className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
          >
            Subscribe to Channel →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-card border border-border shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300"
              onClick={() => setSelectedVideo(video.id)}
            >
              {/* Thumbnail */}
              <div className="aspect-video w-full overflow-hidden relative">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <motion.div
                    initial={false}
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-primary shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300"
                  >
                    <PlayCircle className="h-8 w-8" strokeWidth={1.5} />
                  </motion.div>
                </div>
                {/* Duration badge */}
                <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-md bg-black/70 px-2 py-0.5 text-xs text-white backdrop-blur-sm">
                  <Clock3 className="h-3 w-3" strokeWidth={1.5} />
                  {video.duration}
                </div>
              </div>

              {/* Info */}
              <div className="p-4 border-t border-border">
                <h4 className="font-semibold text-foreground line-clamp-1 group-hover:text-accent transition-colors">
                  {video.title}
                </h4>
              </div>

              {/* Hover top accent line */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>

      <Modal isOpen={!!selectedVideo} onClose={() => setSelectedVideo(null)}>
        {selectedVideo && (
          <div className="aspect-video w-full bg-black">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        )}
      </Modal>
    </section>
  );
}
