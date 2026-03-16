import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { BentoGrid } from "@/components/BentoGrid";
import { About } from "@/components/About";
import { Gurus } from "@/components/Gurus";
import { Reviews } from "@/components/Reviews";
import { VideoGallery } from "@/components/VideoGallery";
import { Workshops } from "@/components/Workshops";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        <Hero />
        <BentoGrid />
        <About />
        <Gurus />
        <Reviews />
        <VideoGallery />
        <Workshops />
        <ContactForm />
      </main>

      <Footer />
    </div>
  );
}
