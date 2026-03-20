import { PageLayout } from "@/components/PageLayout";
import { Workshops } from "@/components/Workshops";
import { useSEO } from "@/hooks/useSEO";

export default function WorkshopsPage() {
  useSEO({
    title: "Workshops & Events — Masterclasses & Festivals",
    description: "Explore upcoming workshops, masterclasses, and cultural events at Sri Rahamantara Music Academy. Open to students of all levels.",
  });
  return (
    <PageLayout>
      <Workshops />
    </PageLayout>
  );
}
