import { PageLayout } from "@/components/PageLayout";
import { VideoGallery } from "@/components/VideoGallery";
import { useSEO } from "@/hooks/useSEO";

export default function GalleryPage() {
  useSEO({
    title: "Gallery — Concerts, Recitals & Award Moments",
    description: "Browse photos and videos from Sri Rahamantara Music Academy — annual concerts, arangetrams, award ceremonies, and everyday musical life.",
  });
  return (
    <PageLayout>
      <VideoGallery />
    </PageLayout>
  );
}
