import { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import {
  TrendingUp,
  Wheat,
  GraduationCap,
  Store,
  Dna,
} from "lucide-react";

export const metadata: Metadata = {
  title: "The Goat Economy - Buyesi Youth Initiative",
  description:
    "Discover how goat farming transforms lives through economic empowerment and food security in rural Uganda.",
};

export default function GoatEconomyPage() {
  return (
    <>
      <Hero
        title="The Goat Economy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "The Goat Economy" },
        ]}
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Transforming Lives Through Goat Farming
            </h2>
            <p className="text-muted leading-relaxed">
              In rural Eastern Uganda, goats are more than livestock — they are a
              pathway out of poverty. The goat economy creates sustainable income,
              improves nutrition, and builds resilient communities.
            </p>
          </div>

          {/* Economic Impact */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp size={28} className="text-primary" />
                <h3 className="font-heading text-2xl font-bold">
                  Economic Impact
                </h3>
              </div>
              <p className="text-muted leading-relaxed mb-4">
                Goat farming provides multiple streams of income for rural
                families. A single goat can generate revenue through:
              </p>
              <ul className="space-y-3">
                {[
                  { label: "Meat", desc: "High-demand protein source sold at local and regional markets" },
                  { label: "Milk", desc: "Nutritious goat milk for household use and sale" },
                  { label: "Hides", desc: "Processed into leather goods, creating additional value" },
                  { label: "Manure", desc: "Organic fertilizer that improves crop yields and soil health" },
                ].map((item) => (
                  <li key={item.label} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-medium">{item.label}:</span>{" "}
                      <span className="text-muted">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-4">
                <Wheat size={28} className="text-primary" />
                <h3 className="font-heading text-2xl font-bold">
                  Food Security
                </h3>
              </div>
              <p className="text-muted leading-relaxed mb-4">
                Goats play a vital role in ensuring food security for rural
                households. Goat milk and meat provide essential proteins and
                nutrients that are often lacking in rural diets, particularly for
                children and pregnant women.
              </p>
              <p className="text-muted leading-relaxed">
                By diversifying food sources and creating a reliable supply of
                animal protein, goat farming helps families maintain better
                nutrition year-round, even during lean agricultural seasons. The
                manure produced also enriches gardens and crops, further
                strengthening food production.
              </p>
            </div>
          </div>

          {/* Key Components */}
          <div className="mb-16">
            <h3 className="font-heading text-2xl font-bold text-center mb-10">
              Key Components
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: GraduationCap,
                  title: "Training & Education",
                  desc: "Comprehensive programs covering modern goat husbandry, disease management, breeding techniques, and business skills to help farmers maximize their returns.",
                },
                {
                  icon: Store,
                  title: "Market Access",
                  desc: "Connecting farmers with local and regional markets, helping them negotiate fair prices, and building cooperative structures for collective bargaining power.",
                },
                {
                  icon: Dna,
                  title: "Improved Breeds",
                  desc: "Introducing high-quality breeding stock that produces more milk and meat, increasing productivity and income potential for every farming family.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className="bg-light rounded-lg p-8 text-center"
                  >
                    <Icon size={40} className="mx-auto mb-4 text-primary" />
                    <h4 className="font-heading text-lg font-bold mb-3">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-primary rounded-lg p-10 text-center text-white">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Join the Movement
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Be part of the goat economy revolution. Your support helps us
              empower more families with the tools and knowledge they need to
              thrive.
            </p>
            <Link
              href="/contact"
              className="bg-accent hover:bg-accent-dark text-dark px-8 py-3 rounded-lg font-bold transition-colors"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
