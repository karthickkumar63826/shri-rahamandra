import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { About } from "@/components/About";
import { Gurus } from "@/components/Gurus";
import { Reviews } from "@/components/Reviews";
import { VideoGallery } from "@/components/VideoGallery";
import { Workshops } from "@/components/Workshops";
import { Footer } from "@/components/Footer";
import { ContactModal } from "@/components/ContactModal";

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Navbar onOpenContact={() => setContactOpen(true)} />

      <main>
        <Hero onOpenContact={() => setContactOpen(true)} />
        <BentoGrid />
        <About />
        <Gurus />
        <Reviews />
        <VideoGallery />
        <Workshops />
      </main>

      <Footer onOpenContact={() => setContactOpen(true)} />

      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />
    </div>
  );
}
