import { Metadata } from "next";
import Hero from "@/components/Hero";
import GalleryGrid from "@/components/GalleryGrid";
import { cloudName, galleryItems } from "./items";

export const metadata: Metadata = {
  title: "Our Gallery - Buyesi Youth Initiative",
  description:
    "Browse photos and videos from Buyesi Youth Initiative's community projects and goat farming programs in Uganda.",
};

export default function GalleryPage() {
  return (
    <>
      <Hero
        title="Our Gallery"
        subtitle="Moments from our journey"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Gallery" }]}
      />

      <section className="py-8 sm:py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <GalleryGrid cloudName={cloudName} items={galleryItems} />
        </div>
      </section>
    </>
  );
}
