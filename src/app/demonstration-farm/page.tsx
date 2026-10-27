import { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { BookOpen, Dna, FlaskConical, House, Sprout } from "lucide-react";

export const metadata: Metadata = {
  title: "Demonstration Farm - Buyesi Youth Initiative",
  description:
    "Visit our demonstration farm — a learning center for modern goat farming techniques in the Eastern Region of Uganda.",
};

export default function DemonstrationFarmPage() {
  return (
    <>
      <Hero
        title="Demonstration Farm"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programmes", href: "/causes" },
          { label: "Demonstration Farm" },
        ]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Learning Center for Modern Goat Farming
            </h2>
            <p className="text-muted leading-relaxed">
              Our demonstration farm serves as a hands-on learning environment
              where farmers can observe, practice, and master modern goat
              farming techniques before applying them on their own farms.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <BookOpen size={28} className="text-primary" />
                <h3 className="font-heading text-2xl font-bold">
                  Hands-On Learning
                </h3>
              </div>
              <p className="text-muted leading-relaxed mb-4">
                Theory alone cannot teach a farmer how to care for goats. Our
                demonstration farm provides practical, experiential learning
                where participants work directly with animals and equipment.
              </p>
              <p className="text-muted leading-relaxed">
                From proper feeding and housing construction to kidding
                assistance and health monitoring, farmers gain the confidence
                and skills they need through real-world practice under expert
                guidance.
              </p>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <FlaskConical size={28} className="text-primary" />
                <h3 className="font-heading text-2xl font-bold">
                  Research &amp; Innovation
                </h3>
              </div>
              <p className="text-muted leading-relaxed mb-4">
                Our farm is also a space for testing and refining new approaches
                to goat farming that are suited to the local climate and
                conditions of Eastern Uganda.
              </p>
              <p className="text-muted leading-relaxed">
                We experiment with feed formulations, housing designs, breeding
                programs, and health management protocols, sharing successful
                innovations with our network of farmers to continuously improve
                outcomes across the community.
              </p>
            </div>
          </div>
          <div className="mb-16">
            <h3 className="font-heading text-2xl font-bold text-center mb-10">
              What You&apos;ll Find at Our Farm
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-light rounded-lg p-8 text-center">
                <House size={40} className="mx-auto mb-4 text-primary" />
                <h4 className="font-heading text-lg font-bold mb-3">
                  Sustainable Facilities
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  Model goat houses and infrastructure built with locally
                  available materials, designed for the climate and easy for
                  farmers to replicate at home.
                </p>
              </div>
              <div className="bg-light rounded-lg p-8 text-center">
                <Dna size={40} className="mx-auto mb-4 text-primary" />
                <h4 className="font-heading text-lg font-bold mb-3">
                  Breeding Stock
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  High-quality breeding goats that produce offspring with
                  improved genetics for better milk yield, meat production, and
                  disease resistance.
                </p>
              </div>
              <div className="bg-light rounded-lg p-8 text-center">
                <Sprout size={40} className="mx-auto mb-4 text-primary" />
                <h4 className="font-heading text-lg font-bold mb-3">
                  Feed Production
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  Demonstration plots for growing fodder crops and producing
                  nutritious feed mixes that maximize goat health and
                  productivity using local resources.
                </p>
              </div>
            </div>
          </div>
          <div className="bg-primary rounded-lg p-10 text-center text-white">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Visit Our Demonstration Farm
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Come see our work in action. Whether you are a farmer looking to
              learn, a partner exploring collaboration, or a supporter wanting
              to witness the impact firsthand — you are welcome.
            </p>
            <Link
              className="bg-accent hover:bg-accent-dark text-dark px-8 py-3 rounded-lg font-bold transition-colors"
              href="/contact"
            >
              Plan Your Visit
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
