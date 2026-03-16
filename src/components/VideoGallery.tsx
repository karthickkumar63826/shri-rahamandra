import { useState } from "react";
import { motion } from "framer-motion";
import { Modal } from "./ui/Modal";
import { FaPlay } from "react-icons/fa";

const videos = [
  { id: "dQw4w9WgXcQ", title: "Annual Arangetram 2024 - Vocal Recital", duration: "12:45" },
  { id: "jNQXAC9IVRw", title: "Veena Masterclass Highlights", duration: "08:20" },
  { id: "_OBlgSz8sSM", title: "Mridangam Solo by Guru Krishnamurthy", duration: "15:10" },
  { id: "9bZkp7q19f0", title: "Violin Duet - State Level Winners", duration: "06:30" },
  { id: "kJQP7kiw5Fk", title: "Thyagaraja Aradhana Celebration", duration: "45:00" },
  { id: "OPf0YbXqDm0", title: "Beginners Batch First Performance", duration: "04:15" },
];

export function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <section id="gallery" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-accent mb-3">Gallery</h2>
            <h3 className="  text-4xl font-bold text-primary md:text-5xl">
              Performances & Recitals
            </h3>
          </div>
          <a href="#" className="hidden md:inline-block mt-4 md:mt-0 font-semibold text-primary hover:text-accent transition-colors">
            Subscribe to Channel →
          </a>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative cursor-pointer overflow-hidden rounded-2xl bg-card shadow-md"
              onClick={() => setSelectedVideo(video.id)}
            >
              <div className="aspect-video w-full overflow-hidden">
                <img
                  src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                  alt={video.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-center justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent text-primary transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                    <FaPlay className="ml-1 h-6 w-6" />
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-border">
                <h4 className="font-semibold text-foreground line-clamp-1">{video.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{video.duration}</p>
              </div>
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
