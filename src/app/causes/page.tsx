import { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Causes - Buyesi Youth Initiative",
  description:
    "Learn about our causes: goat distribution, farmer training, and community development in rural Uganda.",
};

const causes = [
  {
    title: "Goat Distribution Program",
    description:
      "We provide quality breeding goats to vulnerable families in Puti-Puti and surrounding communities. Each family receives training alongside their goats, ensuring they have the knowledge to raise healthy animals and build a sustainable source of income. Through our pass-on-the-gift model, beneficiary families share offspring with neighbors, multiplying the impact across the community.",
    image: "/bg_3.jpg",
  },
  {
    title: "Farmer Training & Education",
    description:
      "Our comprehensive training programs equip smallholder farmers with modern goat farming techniques. From proper nutrition and housing to disease prevention and breeding practices, we ensure every farmer has the skills to succeed. Training sessions are held at our demonstration farm and within village communities, making knowledge accessible to all.",
    image: "/bg_4.jpg",
  },
  {
    title: "Community Development",
    description:
      "Beyond goat farming, we invest in building the infrastructure and social systems that support thriving rural communities. This includes improving access to clean water, supporting youth education initiatives, and creating market linkages that help farmers sell their products at fair prices. Together, we are building a stronger, more resilient Buyesi.",
    image: "/bg_5.jpg",
  },
];

export default function CausesPage() {
  return (
    <>
      <Hero
        title="Our Causes"
        subtitle="Empowering communities through sustainable goat farming"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Causes" },
        ]}
      />

      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-3">
              What We Do
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Our programs are designed to create lasting change in rural
              communities through sustainable goat farming and holistic community
              development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {causes.map((cause) => (
              <div
                key={cause.title}
                className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div
                  className="h-56 bg-cover bg-center"
                  style={{ backgroundImage: `url(${cause.image})` }}
                />
                <div className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-3">
                    {cause.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {cause.description}
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:underline"
                  >
                    Support This Cause <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative bg-cover bg-center py-20"
        style={{ backgroundImage: "url(/bg_2.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-3xl mx-auto px-4 text-center text-white">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Every Goat Changes a Life
          </h2>
          <p className="text-gray-200 mb-8">
            Your support helps us provide goats, training, and resources to
            families in need. Join us in making a difference.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-dark text-dark px-8 py-3 rounded-lg font-bold transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </>
  );
}
