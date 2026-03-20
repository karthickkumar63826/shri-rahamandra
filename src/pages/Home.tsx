import { PageLayout } from "@/components/PageLayout";
import { Hero } from "@/components/Hero";
import { CoursesSection } from "@/components/CoursesSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { TestimonialsHome } from "@/components/TestimonialsHome";
import { CTABanner } from "@/components/CTABanner";
import { useContactModal } from "@/hooks/useContactModal";
import { useSEO } from "@/hooks/useSEO";

export default function Home() {
  const { openContact } = useContactModal();
  useSEO({
    title: "Classical Music & Dance Academy in Thiruvanaikoil",
    description: "Sri Rahamantara Music Academy offers Carnatic vocal, Veena, Mridangam, Bharatanatyam and more in Thiruvanaikoil. Enrol today and begin your classical journey.",
  });

  return (
    <PageLayout>
      <Hero onOpenContact={openContact} />
      <CoursesSection />
      <WhyUsSection />
      {/* <EventsPreview /> */}
      <TestimonialsHome />
      <CTABanner />
    </PageLayout>
  );
}
