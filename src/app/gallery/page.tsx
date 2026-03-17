import { Metadata } from "next";
import Hero from "@/components/Hero";

export const metadata: Metadata = {
  title: "Our Gallery - Buyesi Youth Initiative",
  description:
    "Browse photos from Buyesi Youth Initiative's community projects and goat farming programs in Uganda.",
};

const images = [
  { src: "/bg_1.jpg", alt: "Community goat farming" },
  { src: "/bg_2.jpg", alt: "Rural landscape" },
  { src: "/bg_3.jpg", alt: "Goat distribution program" },
  { src: "/bg_4.jpg", alt: "Farmer training session" },
  { src: "/bg_5.jpg", alt: "Community development" },
  { src: "/bg_6.jpg", alt: "Youth empowerment" },
  { src: "/bg_7.jpg", alt: "Sustainable agriculture" },
  { src: "/bg-01.jpg", alt: "Village life" },
  { src: "/bg-02.jpg", alt: "Goat herding" },
  { src: "/aboutusbg.jpeg", alt: "About our community" },
];

export default function GalleryPage() {
  return (
    <>
      <Hero
        title="Our Gallery"
        subtitle="Moments from our journey"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Gallery" },
        ]}
      />

      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image) => (
              <div
                key={image.src}
                className="rounded-lg overflow-hidden"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
