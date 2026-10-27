import { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import {
  Circle,
  Clock,
  Dna,
  GraduationCap,
  Store,
  Target,
  Tractor,
  TrendingUp,
  Wheat,
} from "lucide-react";

export const metadata: Metadata = {
  title: "The Goat Economy - Buyesi Youth Initiative",
  description:
    "Establishing a Goat Economy to empower smallholder farmers through commercial goat farming, market access, and a demonstration farm in the Eastern Region of Uganda.",
};

export default function GoatEconomyPage() {
  return (
    <>
      <Hero
        title="The Goat Economy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programmes", href: "/causes" },
          { label: "The Goat Economy" },
        ]}
      />

      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Transforming Lives Through Goat Farming
            </h2>
            <p className="text-muted leading-relaxed">
              The Goat Economy is a network of rural communities under one
              umbrella carrying out goat farming as a sustainable economic
              activity. In rural communities across the Eastern Region of
              Uganda, where 48% of residents live below the poverty line, this
              project aims to revitalise local livelihoods through commercial
              goat farming.
            </p>
          </div>
          <div className="bg-primary/5 rounded-lg p-6 sm:p-10 mb-12 sm:mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Target size={28} className="text-primary" />
              <h3 className="font-heading text-xl sm:text-2xl font-bold">
                Project Goal
              </h3>
            </div>
            <p className="text-muted leading-relaxed">
              To establish a Goat Economy aimed at creating a network of
              empowered goat farmers under one umbrella for a wider local and
              international market of goats, transforming rural communities
              across the Eastern Region of Uganda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp size={28} className="text-primary" />
                <h3 className="font-heading text-xl sm:text-2xl font-bold">
                  Economic Impact
                </h3>
              </div>
              <p className="text-muted leading-relaxed mb-4">
                Goat farming provides multiple revenue streams for rural
                families:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Meat:</span>
                    <span className="text-muted">
                      High-demand protein source for local and regional markets
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Milk:</span>
                    <span className="text-muted">
                      Nutritious goat milk for household use and sale
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Hides &amp; Skins:</span>
                    <span className="text-muted">
                      Processed into leather goods, creating additional value
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-medium">Manure:</span>
                    <span className="text-muted">
                      Organic fertiliser that improves crop yields and soil
                      health
                    </span>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Wheat size={28} className="text-primary" />
                <h3 className="font-heading text-xl sm:text-2xl font-bold">
                  Food Security
                </h3>
              </div>
              <p className="text-muted leading-relaxed mb-4">
                Goats play a vital role in ensuring food security for rural
                households. Goat milk and meat provide essential proteins and
                nutrients that are often lacking in rural diets, particularly
                for children and pregnant women.
              </p>
              <p className="text-muted leading-relaxed">
                By diversifying food sources and creating a reliable supply of
                animal protein, goat farming helps families maintain better
                nutrition year-round, even during lean agricultural seasons.
              </p>
            </div>
          </div>
          <div className="mb-12 sm:mb-16">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-10">
              Key Components
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-light rounded-lg p-6 sm:p-8 text-center">
                <GraduationCap
                  size={36}
                  className="mx-auto mb-3 text-primary"
                />
                <h4 className="font-heading text-base sm:text-lg font-bold mb-2">
                  Training &amp; Education
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  Comprehensive programmes covering nutrition, genetics,
                  management, and business skills for 1,000+ households.
                </p>
              </div>
              <div className="bg-light rounded-lg p-6 sm:p-8 text-center">
                <Store size={36} className="mx-auto mb-3 text-primary" />
                <h4 className="font-heading text-base sm:text-lg font-bold mb-2">
                  Market Access
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  Connecting farmers with local and international markets,
                  building cooperative structures for collective bargaining.
                </p>
              </div>
              <div className="bg-light rounded-lg p-6 sm:p-8 text-center">
                <Dna size={36} className="mx-auto mb-3 text-primary" />
                <h4 className="font-heading text-base sm:text-lg font-bold mb-2">
                  Improved Breeds
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  Introducing high-quality Boer, Kalahari Red, and Savannah
                  breeds to improve productivity and market value.
                </p>
              </div>
              <div className="bg-light rounded-lg p-6 sm:p-8 text-center">
                <Tractor size={36} className="mx-auto mb-3 text-primary" />
                <h4 className="font-heading text-base sm:text-lg font-bold mb-2">
                  Demonstration Farm
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  A hands-on learning centre for modern goat husbandry,
                  research, and community development.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12 sm:mb-16">
            <div className="text-center mb-8 sm:mb-10">
              <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">
                Project Milestones
              </h3>
              <p className="text-muted">
                Where we are and where we&apos;re heading
              </p>
            </div>
            <div className="max-w-3xl mx-auto">
              <div className="relative">
                <div className="relative flex gap-4 sm:gap-6 pb-8 last:pb-0">
                  <div className="absolute left-[15px] sm:left-[19px] top-10 bottom-0 w-0.5 bg-primary/40" />
                  <div className="relative z-10 shrink-0 mt-0.5">
                    <div className="relative">
                      <Clock
                        size={30}
                        className="text-accent sm:w-[38px] sm:h-[38px]"
                      />
                      <span className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
                    </div>
                  </div>
                  <div className="flex-1 rounded-lg p-4 sm:p-5 bg-accent/10 border border-accent/30">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 mb-2">
                      <h4 className="font-heading font-bold text-base sm:text-lg ">
                        Planning &amp; Development
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-muted">
                      Formal project launch, stakeholder alignment, governance
                      setup, demonstration farm design, breeding programme
                      strategy, training curriculum development, and M&amp;E
                      framework setup.
                    </p>
                  </div>
                </div>
                <div className="relative flex gap-4 sm:gap-6 pb-8 last:pb-0">
                  <div className="absolute left-[15px] sm:left-[19px] top-10 bottom-0 w-0.5 bg-gray-200" />
                  <div className="relative z-10 shrink-0 mt-0.5">
                    <Circle
                      size={30}
                      className="text-gray-300 sm:w-[38px] sm:h-[38px]"
                    />
                  </div>
                  <div className="flex-1 rounded-lg p-4 sm:p-5 bg-gray-50 border border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 mb-2">
                      <h4 className="font-heading font-bold text-base sm:text-lg text-gray-400">
                        Recruitment &amp; Engagement
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Identification and registration of beneficiary households
                      (~2,786 target), recruitment of project staff (veterinary
                      technicians, trainers, herdsmen), and mobilisation of
                      youth participants.
                    </p>
                  </div>
                </div>
                <div className="relative flex gap-4 sm:gap-6 pb-8 last:pb-0">
                  <div className="absolute left-[15px] sm:left-[19px] top-10 bottom-0 w-0.5 bg-gray-200" />
                  <div className="relative z-10 shrink-0 mt-0.5">
                    <Circle
                      size={30}
                      className="text-gray-300 sm:w-[38px] sm:h-[38px]"
                    />
                  </div>
                  <div className="flex-1 rounded-lg p-4 sm:p-5 bg-gray-50 border border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 mb-2">
                      <h4 className="font-heading font-bold text-base sm:text-lg text-gray-400">
                        Procurement &amp; Contracting
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Procurement of breeding stock (Boer, Kalahari Red,
                      Savannah goats), farm infrastructure materials, veterinary
                      supplies, feed systems, and contracting of construction
                      and technical service providers.
                    </p>
                  </div>
                </div>
                <div className="relative flex gap-4 sm:gap-6 pb-8 last:pb-0">
                  <div className="absolute left-[15px] sm:left-[19px] top-10 bottom-0 w-0.5 bg-gray-200" />
                  <div className="relative z-10 shrink-0 mt-0.5">
                    <Circle
                      size={30}
                      className="text-gray-300 sm:w-[38px] sm:h-[38px]"
                    />
                  </div>
                  <div className="flex-1 rounded-lg p-4 sm:p-5 bg-gray-50 border border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 mb-2">
                      <h4 className="font-heading font-bold text-base sm:text-lg text-gray-400">
                        Demonstration Farm Construction
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Construction of the model farm including goat housing,
                      water systems, fencing, veterinary units, and
                      establishment of pasture systems and animal management
                      infrastructure.
                    </p>
                  </div>
                </div>
                <div className="relative flex gap-4 sm:gap-6 pb-8 last:pb-0">
                  <div className="absolute left-[15px] sm:left-[19px] top-10 bottom-0 w-0.5 bg-gray-200" />
                  <div className="relative z-10 shrink-0 mt-0.5">
                    <Circle
                      size={30}
                      className="text-gray-300 sm:w-[38px] sm:h-[38px]"
                    />
                  </div>
                  <div className="flex-1 rounded-lg p-4 sm:p-5 bg-gray-50 border border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 mb-2">
                      <h4 className="font-heading font-bold text-base sm:text-lg text-gray-400">
                        Training &amp; Capacity Building
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Structured training programmes covering goat nutrition,
                      genetics, management, commercial farming practices,
                      business and marketing skills, and environmental
                      awareness. Target: 1,000+ households trained.
                    </p>
                  </div>
                </div>
                <div className="relative flex gap-4 sm:gap-6 pb-8 last:pb-0">
                  <div className="absolute left-[15px] sm:left-[19px] top-10 bottom-0 w-0.5 bg-gray-200" />
                  <div className="relative z-10 shrink-0 mt-0.5">
                    <Circle
                      size={30}
                      className="text-gray-300 sm:w-[38px] sm:h-[38px]"
                    />
                  </div>
                  <div className="flex-1 rounded-lg p-4 sm:p-5 bg-gray-50 border border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 mb-2">
                      <h4 className="font-heading font-bold text-base sm:text-lg text-gray-400">
                        Market Linkages &amp; Promotion
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Development of market linkages (local &amp;
                      international), branding of goat products, awareness
                      campaigns, and promotion of the Goat Economy model to
                      stakeholders and buyers.
                    </p>
                  </div>
                </div>
                <div className="relative flex gap-4 sm:gap-6 pb-8 last:pb-0">
                  <div className="relative z-10 shrink-0 mt-0.5">
                    <Circle
                      size={30}
                      className="text-gray-300 sm:w-[38px] sm:h-[38px]"
                    />
                  </div>
                  <div className="flex-1 rounded-lg p-4 sm:p-5 bg-gray-50 border border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 sm:gap-4 mb-2">
                      <h4 className="font-heading font-bold text-base sm:text-lg text-gray-400">
                        Monitoring &amp; Evaluation
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Continuous tracking of farmer income, goat productivity
                      (weight, fertility rates), adoption of improved genetics,
                      and market participation. Final evaluation report and
                      sustainability roadmap.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary rounded-lg p-8 sm:p-10 text-center text-white">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Join the Movement
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Be part of the Goat Economy revolution. Your support helps us
              empower more families with the tools and knowledge they need to
              thrive.
            </p>
            <Link
              className="bg-accent hover:bg-accent-dark text-dark px-8 py-3 rounded-lg font-bold transition-colors"
              href="/contact"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
