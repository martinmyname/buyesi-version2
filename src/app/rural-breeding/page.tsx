import { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import {
  Circle,
  Clock,
  Dna,
  Smartphone,
  Sprout,
  Target,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Buyesi Rural Breeding Model - Buyesi Youth Initiative",
  description:
    "Community-centered goat breeding programme empowering farmer groups with purebred stock, digital tracking via BIGA, and sustainable pasture development.",
};

export default function RuralBreedingPage() {
  return (
    <>
      <Hero
        title="Buyesi Rural Breeding Model"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programmes", href: "/causes" },
          { label: "Buyesi Rural Breeding Model" },
        ]}
      />

      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Community-Centred Goat Breeding
            </h2>
            <p className="text-muted leading-relaxed">
              The Buyesi Rural Breeding Model establishes collaborative farmer
              groups who receive purebred goat stock and are trained in advanced
              breeding, digital herd management, and sustainable pasture
              development — progressively enhancing the local gene pool and
              creating lasting economic independence.
            </p>
          </div>
          <div className="bg-primary/5 rounded-lg p-6 sm:p-10 mb-12 sm:mb-16">
            <div className="flex items-center gap-3 mb-4">
              <Target size={28} className="text-primary" />
              <h3 className="font-heading text-xl sm:text-2xl font-bold">
                Model Goal
              </h3>
            </div>
            <p className="text-muted leading-relaxed">
              To establish a Goat Economy aimed at creating a network of
              empowered goat farmers under one umbrella for a wider local and
              international market of goats.
            </p>
          </div>
          <div className="mb-12 sm:mb-16">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-10">
              Our Approach
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-light rounded-lg p-6 sm:p-8 text-center">
                <Users size={36} className="mx-auto mb-3 text-primary" />
                <h4 className="font-heading text-base sm:text-lg font-bold mb-2">
                  Farmer Groups
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  10-person collaborative groups receive initial purebred stock,
                  fostering mutual accountability, knowledge sharing, and
                  reduced individual risk.
                </p>
              </div>
              <div className="bg-light rounded-lg p-6 sm:p-8 text-center">
                <Smartphone size={36} className="mx-auto mb-3 text-primary" />
                <h4 className="font-heading text-base sm:text-lg font-bold mb-2">
                  BIGA Digital Tracking
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  The Buyesi Integrated Goat App enables real-time tracking of
                  breeding cycles, health data, growth rates, and transparent
                  communication.
                </p>
              </div>
              <div className="bg-light rounded-lg p-6 sm:p-8 text-center">
                <Dna size={36} className="mx-auto mb-3 text-primary" />
                <h4 className="font-heading text-base sm:text-lg font-bold mb-2">
                  Genetic Improvement
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  Strategic introduction of Boer, Kalahari Red, and Savannah
                  breeds to crossbreed with local stock, enhancing productivity
                  and market value.
                </p>
              </div>
              <div className="bg-light rounded-lg p-6 sm:p-8 text-center">
                <Sprout size={36} className="mx-auto mb-3 text-primary" />
                <h4 className="font-heading text-base sm:text-lg font-bold mb-2">
                  Pasture Development
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  Training in cultivating Alfalfa, Chloris gayana, Panicum, and
                  silage crops (Maize, Sorghum) for year-round nutritious feed.
                </p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold mb-4">
                Expected Outcomes
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    Farmers empowered and skilled in modern goat rearing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    30% increase in offspring weight through improved genetics
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    25% rise in disposable income for participating families
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    Sustainable fodder production established across all groups
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    Full BIGA adoption for data-driven herd management
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    Stronger community networks and collective capacity
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold mb-4">
                Achievements to Date
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    3 pilot farmer groups established with 30 participants
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    60+ hours of hands-on training delivered
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    Demonstration land secured for pasture trials
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    Alfalfa and Chloris gayana research underway
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    Community sensitisation meetings completed
                  </span>
                </li>
              </ul>
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
                      Formal project initiation, stakeholder alignment,
                      confirmation of funding allocation, internal team
                      briefing, baseline project setup, farmer group structuring
                      (10 groups), BIGA system finalisation, and training
                      curriculum design.
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
                      Community mobilisation, identification and onboarding of
                      farmers, formation of 10 farmer groups, sensitisation
                      meetings, and initial capacity-building workshops.
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
                      Procurement of purebred goats (does and bucks), sourcing
                      of fodder seeds and tools, contracting veterinary
                      services, BIGA technical deployment partners, and
                      logistics suppliers.
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
                        Training &amp; Development
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Advanced husbandry benchmarking, breeding techniques,
                      animal health management, fodder production training, BIGA
                      app usage, and mentorship and peer-learning systems
                      established across all 10 groups.
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
                        Permissions &amp; Compliance
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Securing local agricultural approvals, veterinary
                      compliance, community land-use agreements for fodder
                      production, and regulatory alignment for livestock
                      movement and digital data usage.
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
                        Project Sharing &amp; Celebration
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Sharing best practices, peer learning sessions among
                      farmer groups, dissemination of early results, stakeholder
                      engagement events, and showcasing BIGA adoption impact.
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
                      Continuous data collection via BIGA, monthly field visits,
                      KPI tracking (mortality rates ≤5%, kidding rates, herd
                      market value), biannual evaluations, final impact
                      assessment, and financial reporting.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary rounded-lg p-8 sm:p-10 text-center text-white">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Support Rural Breeding
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Your support provides purebred goats, digital tools, and training
              that transform livelihoods.
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
