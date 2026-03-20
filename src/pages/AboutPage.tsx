import { PageLayout } from "@/components/PageLayout";
import { About } from "@/components/About";
import { Reviews } from "@/components/Reviews";
import { useSEO } from "@/hooks/useSEO";

export default function AboutPage() {
  useSEO({
    title: "About Us — Our Heritage & Story",
    description: "Learn about Sri Rahamantara Music Academy's roots beside the sacred Thiruvanaikovil temple and our mission to preserve classical arts since 2008.",
  });
  return (
    <PageLayout>
      <About />
      <Reviews />
    </PageLayout>
  );
}
