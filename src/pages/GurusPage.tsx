import { PageLayout } from "@/components/PageLayout";
import { Gurus } from "@/components/Gurus";
import { useSEO } from "@/hooks/useSEO";

export default function GurusPage() {
  useSEO({
    title: "Our Gurus — Expert Classical Music Teachers",
    description: "Meet the dedicated gurus of Sri Rahamandara Music Academy — masters of Carnatic music, Bharatanatyam, Veena, Mridangam and more with decades of experience.",
  });
  return (
    <PageLayout>
      <Gurus />
    </PageLayout>
  );
}
