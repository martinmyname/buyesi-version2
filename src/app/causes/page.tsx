import { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { ArrowRight, Dna, GraduationCap, Heart, Landmark } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Programmes - Buyesi Youth Initiative",
  description:
    "Explore our flagship programmes: The Goat Economy, Rural Breeding Model, and Every Goat Every Child's Future.",
};

export default function CausesPage() {
  return (
    <>
      <Hero
        title="Our Programmes"
        subtitle="Flagship initiatives driving sustainable change in rural communities"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Programmes" },
        ]}
      />

      <section className="py-10 sm:py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3">
              What We Do
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Our programmes are designed to create lasting change in rural
              communities through sustainable goat farming, genetic improvement,
              and youth empowerment.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div
                className="h-40 sm:h-56 bg-cover bg-center relative"
                style={{ backgroundImage: "url(/bg_3.jpg)" }}
              >
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <Landmark className="text-primary" />
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading text-xl font-bold mb-3">
                  The Goat Economy
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                  A community-driven economic model that uses goat farming as a
                  vehicle for poverty reduction, food security, and wealth
                  creation. We empower smallholder farmers to shift from
                  subsistence to commercial goat farming through training,
                  market access, improved breeds, and a sustainable
                  demonstration farm.
                </p>
                <Link
                  className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:underline"
                  href="/goat-economy"
                >
                  Learn More
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div
                className="h-40 sm:h-56 bg-cover bg-center relative"
                style={{ backgroundImage: "url(/bg_6.jpg)" }}
              >
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <Dna className="text-primary" />
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading text-xl font-bold mb-3">
                  Buyesi Rural Breeding Model
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                  Collaborative farmer groups receive purebred goat stock and
                  are trained in advanced breeding, pasture development, and
                  digital herd management through the Buyesi Integrated Goat App
                  (BIGA). The model progressively enhances the local gene pool
                  by introducing high-value breeds like Boer and Kalahari Red.
                </p>
                <Link
                  className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:underline"
                  href="/rural-breeding"
                >
                  Learn More
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div
                className="h-40 sm:h-56 bg-cover bg-center relative"
                style={{ backgroundImage: "url(/bg_7.jpg)" }}
              >
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <GraduationCap className="text-primary" />
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading text-xl font-bold mb-3">
                  Every Goat, Every Child&apos;s Future
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                  Empowering vulnerable children aged 9–15 through education,
                  goat-rearing entrepreneurship, and mindset transformation.
                  Each child receives a local female goat, mentorship in
                  livestock care and economic literacy, and educational support
                  to break the cycle of poverty.
                </p>
                <Link
                  className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:underline"
                  href="/child-future"
                >
                  Learn More
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <div
                className="h-40 sm:h-56 bg-cover bg-center relative"
                style={{ backgroundImage: "url(/bg_4.jpg)" }}
              >
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                    <Heart className="text-primary" />
                  </div>
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-heading text-xl font-bold mb-3">
                  Become a Goat Guardian
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4 flex-1">
                  Stand alongside a rural family by funding a goat, schooling
                  essentials and ongoing mentorship for a child. Goat Guardians
                  receive their own Guardian ID, a Buyesi shirt, and progress
                  updates as the herd and the child grow — turning one-off
                  support into a lasting relationship.
                </p>
                <Link
                  className="inline-flex items-center gap-1 text-primary font-medium text-sm hover:underline"
                  href="/support"
                >
                  Learn More
                  <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="relative bg-cover bg-center py-12 sm:py-20"
        style={{ backgroundImage: "url(/bg_2.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Every Goat Changes a Life
          </h2>
          <p className="text-gray-200 mb-8">
            Your support helps us provide goats, training, and resources to
            families in need. Join us in making a difference.
          </p>
          <Link
            className="bg-accent hover:bg-accent-dark text-dark px-8 py-3 rounded-lg font-bold transition-colors"
            href="/contact"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </>
  );
}
