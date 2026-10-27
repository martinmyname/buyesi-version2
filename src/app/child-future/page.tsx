import { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import {
  Circle,
  Clock,
  GraduationCap,
  Heart,
  Lightbulb,
  Smartphone,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Every Goat, Every Child's Future - Buyesi Youth Initiative",
  description:
    "Empowering vulnerable children through education, goat-rearing entrepreneurship, and mindset transformation in the Eastern Region of Uganda.",
};

export default function ChildFuturePage() {
  return (
    <>
      <Hero
        title="Every Goat, Every Child's Future"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Programmes", href: "/causes" },
          { label: "Every Goat, Every Child's Future" },
        ]}
      />

      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Empowering Children Through Goat Farming
            </h2>
            <p className="text-muted leading-relaxed">
              In the Eastern Region of Uganda, where 48% of residents live below
              the poverty line, children aged 6–15 are disproportionately
              affected by limited access to education and livelihood skills.
              This programme combines education support with child-centred
              goat-rearing to break the cycle of poverty.
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
              To empower vulnerable children in rural communities through
              education, goat-rearing entrepreneurship, and mindset
              transformation, thereby breaking the cycle of poverty.
            </p>
          </div>
          <div className="mb-12 sm:mb-16">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-10">
              Our Approach
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="bg-light rounded-lg p-6 sm:p-8 text-center">
                <GraduationCap
                  size={36}
                  className="mx-auto mb-3 text-primary"
                />
                <h4 className="font-heading text-base sm:text-lg font-bold mb-2">
                  Educational Support
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  School materials, tuition support, and mentorship programmes
                  to ensure regular attendance and reduce dropout rates.
                </p>
              </div>
              <div className="bg-light rounded-lg p-6 sm:p-8 text-center">
                <Heart size={36} className="mx-auto mb-3 text-primary" />
                <h4 className="font-heading text-base sm:text-lg font-bold mb-2">
                  Child-Centred Goat-Rearing
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  Each child receives a local female goat and is trained in
                  animal husbandry, nutrition, and herd management.
                </p>
              </div>
              <div className="bg-light rounded-lg p-6 sm:p-8 text-center">
                <Lightbulb size={36} className="mx-auto mb-3 text-primary" />
                <h4 className="font-heading text-base sm:text-lg font-bold mb-2">
                  Mindset Transformation
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  Structured mentorship developing entrepreneurial thinking,
                  goal-setting abilities, and long-term planning skills.
                </p>
              </div>
              <div className="bg-light rounded-lg p-6 sm:p-8 text-center">
                <Smartphone size={36} className="mx-auto mb-3 text-primary" />
                <h4 className="font-heading text-base sm:text-lg font-bold mb-2">
                  Digital Monitoring
                </h4>
                <p className="text-sm text-muted leading-relaxed">
                  E-animal tracking app to monitor goat health, growth, and
                  productivity in real time, ensuring accountability.
                </p>
              </div>
            </div>
          </div>
          <div className="mb-12 sm:mb-16">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-center mb-8 sm:mb-10">
              Mindset Change &amp; Therapy Model
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex gap-4 items-start bg-white rounded-lg p-5 shadow-sm">
                <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                  1
                </span>
                <div>
                  <h4 className="font-heading font-bold mb-1">Distribution</h4>
                  <p className="text-sm text-muted leading-relaxed">
                    A child (aged 9–15) is given a local female goat to raise,
                    providing a tangible asset and sense of ownership.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-white rounded-lg p-5 shadow-sm">
                <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                  2
                </span>
                <div>
                  <h4 className="font-heading font-bold mb-1">Mentorship</h4>
                  <p className="text-sm text-muted leading-relaxed">
                    The child is mentored on goat care, nutrition, reproduction,
                    and basic financial management.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-white rounded-lg p-5 shadow-sm">
                <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                  3
                </span>
                <div>
                  <h4 className="font-heading font-bold mb-1">Herd Growth</h4>
                  <p className="text-sm text-muted leading-relaxed">
                    As the flock grows, BYI helps the child sell part of the
                    herd and reinvest in the enterprise.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-white rounded-lg p-5 shadow-sm">
                <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                  4
                </span>
                <div>
                  <h4 className="font-heading font-bold mb-1">
                    Breed Upgrading
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    The child receives a high-quality breed (Boer, Kalahari Red,
                    Savanna) to enhance productivity.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-white rounded-lg p-5 shadow-sm">
                <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                  5
                </span>
                <div>
                  <h4 className="font-heading font-bold mb-1">
                    Commercial Farming
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    With better genetics, the child transitions into a
                    small-scale commercial goat farmer.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 items-start bg-white rounded-lg p-5 shadow-sm">
                <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                  6
                </span>
                <div>
                  <h4 className="font-heading font-bold mb-1">
                    Community Impact
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    Income improves, education becomes sustainable, and
                    community attitudes toward farming shift.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold mb-4">
                Achievements to Date
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    Establishment of child mentorship goat classes
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    Each child received a local female goat and school materials
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    Initial training in goat care and animal husbandry delivered
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    Parents and caregivers oriented on project objectives
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    Foundation for e-animal tracking system established
                  </span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-xl sm:text-2xl font-bold mb-4">
                Expected Outcomes
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    Children engaged in agricultural entrepreneurship
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    Improved school attendance, performance, and wellbeing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    Small-scale commercial goat farmers established
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    Increased household income and food security
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    Strengthened local goat gene pool through improved breeding
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span className="text-muted">
                    Community-wide mindset shift toward self-reliance
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
                      Project initiation, stakeholder alignment, internal team
                      mobilisation, confirmation of funding allocation,
                      operational framework, beneficiary targeting, development
                      of training curriculum, M&amp;E framework setup, and
                      digital tracking system planning.
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
                      Identification and selection of children and households,
                      community sensitisation meetings, engagement of mentors,
                      field staff, and local stakeholders.
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
                      Procurement of local female goats, veterinary services,
                      educational materials (books, uniforms, stationery), and
                      contracting of app developers and trainers.
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
                        Preparation &amp; Baseline
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Preparation of training materials, onboarding of digital
                      goat-tracking system, logistics setup, baseline data
                      collection on children, households, and herd metrics.
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
                        Workshop &amp; Goat Distribution
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Delivery of initial training workshops (goat-rearing,
                      education support, mindset transformation), distribution
                      of goats to children, and launch of mentorship programme.
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
                        Ongoing Training &amp; Development
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Continuous capacity building: animal husbandry, financial
                      literacy, entrepreneurship skills, family sensitisation,
                      and mentorship cycles throughout the programme.
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
                        Impact Sharing &amp; Celebration
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Documentation of impact through case studies, reports, and
                      community showcases. Donor reporting and dissemination of
                      learnings for scale-up opportunities.
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
                        Final Evaluation
                      </h4>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-400">
                      Final impact assessment covering education outcomes,
                      income growth, herd expansion, financial reconciliation,
                      stakeholder reporting, and sustainability transition plan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-primary rounded-lg p-8 sm:p-10 text-center text-white">
            <h3 className="font-heading text-2xl md:text-3xl font-bold mb-4">
              Change a Child&apos;s Future
            </h3>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Your support provides goats, educational resources, and mentorship
              that transform lives — one child and one goat at a time.
            </p>
            <Link
              className="bg-accent hover:bg-accent-dark text-dark px-8 py-3 rounded-lg font-bold transition-colors"
              href="/contact"
            >
              Support This Programme
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
