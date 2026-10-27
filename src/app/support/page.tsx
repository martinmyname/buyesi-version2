import { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import {
  BadgeCheck,
  Calendar,
  Check,
  Globe,
  GraduationCap,
  Heart,
  Mail,
  Shirt,
  Sparkles,
  Sprout,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Become a Goat Guardian — Buyesi Youth Initiative",
  description:
    "Support Buyesi Youth Initiative by becoming a Goat Guardian. Empower a child in rural Uganda with a goat, education, and ongoing mentorship.",
};

export default function SupportPage() {
  return (
    <>
      <Hero
        title="Become a Goat Guardian"
        subtitle="Empower a child with a goat, an education, and a future."
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Become a Goat Guardian" },
        ]}
      />

      <section className="py-8 sm:py-12 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            id="become-guardian"
            className="relative rounded-2xl overflow-hidden shadow-lg scroll-mt-24"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark" />
            <div className="relative p-6 sm:p-10 text-white">
              <div className="flex items-center gap-2 mb-3">
                <Sparkles size={18} className="text-accent" />
                <span className="text-accent text-xs sm:text-sm font-medium uppercase tracking-wider">
                  Flagship Tier
                </span>
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-2">
                Become a Goat Guardian
              </h2>
              <p className="text-green-50/90 text-sm sm:text-base mb-6 leading-relaxed">
                One-off gift that empowers a child with a goat, essentials, and
                ongoing mentorship — with recognition as a named Guardian.
              </p>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-heading text-4xl sm:text-5xl font-bold">
                  £140
                </span>
                <span className="text-green-100 text-sm sm:text-base">
                  one-off
                </span>
              </div>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 mb-7">
                <li className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <span>A local goat purchased for a child</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <span>Scholastic materials, shoes &amp; essentials</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <span>A Buyesi shirt sent to you</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <span>Your own Goat Guardian ID (e.g. GG/01)</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <span>Ongoing updates on your child&apos;s progress</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <span>Invitations to Buyesi events &amp; campaigns</span>
                </li>
                <li className="flex items-start gap-2 text-sm">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <span>
                    Subsidised access to high-quality goats if you farm
                  </span>
                </li>
              </ul>
              <Link
                className="inline-flex w-full sm:w-auto items-center justify-center bg-accent hover:bg-accent-dark text-dark px-8 py-3.5 rounded-lg font-bold transition-colors"
                href="/contact"
              >
                Become a Guardian — £140
              </Link>
              <p className="text-xs text-green-100/80 mt-3">
                Contact us for bank details and next steps
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <p className="text-accent font-medium tracking-wider uppercase text-xs sm:text-sm mb-3">
              The Goat Guardian Concept
            </p>
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
              One goat. One child. A lifetime of impact.
            </h2>
            <p className="text-muted leading-relaxed">
              Goat Guardians are people from every sphere — locally and
              internationally — who choose to stand alongside rural families in
              Uganda and beyond. Your support unlocks a complete package for a
              child: a goat, schooling essentials, and an ongoing relationship
              that grows as the herd grows.
            </p>
          </div>
          <div className="mb-12 sm:mb-16">
            <h3 className="font-heading text-xl sm:text-2xl font-bold text-center mb-6 sm:mb-10">
              What £140 funds
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-light rounded-lg p-5 sm:p-6 flex gap-4 items-start">
                <div className="w-11 h-11 rounded-md bg-primary flex items-center justify-center shrink-0">
                  <Heart size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-heading text-base sm:text-lg font-bold mb-1">
                    A local goat
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    Purchased for a child in a rural family — their first step
                    into the Goat Economy.
                  </p>
                </div>
              </div>
              <div className="bg-light rounded-lg p-5 sm:p-6 flex gap-4 items-start">
                <div className="w-11 h-11 rounded-md bg-primary flex items-center justify-center shrink-0">
                  <GraduationCap size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-heading text-base sm:text-lg font-bold mb-1">
                    Schooling essentials
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    Scholastic materials, uniforms, shoes and the small things
                    that keep a child in class.
                  </p>
                </div>
              </div>
              <div className="bg-light rounded-lg p-5 sm:p-6 flex gap-4 items-start">
                <div className="w-11 h-11 rounded-md bg-primary flex items-center justify-center shrink-0">
                  <Shirt size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-heading text-base sm:text-lg font-bold mb-1">
                    A Buyesi shirt
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    Sent to you as a thank-you and a visible sign you stand with
                    rural communities.
                  </p>
                </div>
              </div>
              <div className="bg-light rounded-lg p-5 sm:p-6 flex gap-4 items-start">
                <div className="w-11 h-11 rounded-md bg-primary flex items-center justify-center shrink-0">
                  <BadgeCheck size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-heading text-base sm:text-lg font-bold mb-1">
                    Your Guardian ID
                  </h4>
                  <p className="text-sm text-muted leading-relaxed">
                    A Buyesi Goat Guardian ID with your own GG number (e.g.
                    GG/01) and year of joining.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div>
            <div className="mb-6 sm:mb-8 text-center">
              <h3 className="font-heading text-xl sm:text-2xl font-bold mb-2">
                Prefer to support at a smaller amount?
              </h3>
              <p className="text-muted text-sm sm:text-base">
                Every contribution goes toward funding the next Goat
                Guardianship.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
              <div className="relative bg-white rounded-xl p-6 sm:p-7 border transition-all border-gray-200 hover:border-primary/40">
                <div className="flex items-center gap-2 mb-3">
                  <Heart size={18} className="text-primary" />
                  <h4 className="font-heading text-lg font-bold">
                    Goat Friend
                  </h4>
                </div>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="font-heading text-3xl sm:text-4xl font-bold">
                    £10
                  </span>
                  <span className="text-muted text-sm">suggested support</span>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-5">
                  Feeds and cares for one goat for a month.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <Check size={15} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted">Quarterly email updates</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check size={15} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted">
                      Your name on our supporter wall
                    </span>
                  </li>
                </ul>
                <Link
                  className="block w-full py-3 rounded-lg text-center font-medium text-sm transition-colors bg-light hover:bg-primary hover:text-white text-dark"
                  href="/contact"
                >
                  Contact us about £10 support
                </Link>
              </div>
              <div className="relative bg-white rounded-xl p-6 sm:p-7 border transition-all border-primary shadow-md">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-dark text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                  Most Popular
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Heart size={18} className="text-primary" />
                  <h4 className="font-heading text-lg font-bold">
                    Pack Partner
                  </h4>
                </div>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="font-heading text-3xl sm:text-4xl font-bold">
                    £20
                  </span>
                  <span className="text-muted text-sm">suggested support</span>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-5">
                  Supports a child&apos;s schooling alongside the herd.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <Check size={15} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted">Quarterly email updates</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check size={15} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted">
                      Named thank-you on socials
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check size={15} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted">Digital impact report</span>
                  </li>
                </ul>
                <Link
                  className="block w-full py-3 rounded-lg text-center font-medium text-sm transition-colors bg-primary hover:bg-primary-dark text-white"
                  href="/contact"
                >
                  Contact us about £20 support
                </Link>
              </div>
              <div className="relative bg-white rounded-xl p-6 sm:p-7 border transition-all border-gray-200 hover:border-primary/40">
                <div className="flex items-center gap-2 mb-3">
                  <Heart size={18} className="text-primary" />
                  <h4 className="font-heading text-lg font-bold">
                    Herd Champion
                  </h4>
                </div>
                <div className="flex items-baseline gap-1 mb-3">
                  <span className="font-heading text-3xl sm:text-4xl font-bold">
                    £30
                  </span>
                  <span className="text-muted text-sm">suggested support</span>
                </div>
                <p className="text-sm text-muted leading-relaxed mb-5">
                  Directly funds improved breeding stock.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start gap-2 text-sm">
                    <Check size={15} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted">Monthly email updates</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check size={15} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted">
                      Named thank-you on socials
                    </span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check size={15} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted">Digital impact report</span>
                  </li>
                  <li className="flex items-start gap-2 text-sm">
                    <Check size={15} className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted">
                      Annual video from the field
                    </span>
                  </li>
                </ul>
                <Link
                  className="block w-full py-3 rounded-lg text-center font-medium text-sm transition-colors bg-light hover:bg-primary hover:text-white text-dark"
                  href="/contact"
                >
                  Contact us about £30 support
                </Link>
              </div>
            </div>
            <p className="text-center text-xs text-muted mt-8">
              Bank details and contact options are available on our contact page
            </p>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold mb-3">
              How Goat Guardians stay connected
            </h3>
            <p className="text-muted max-w-2xl mx-auto">
              Guardianship is a relationship, not a transaction. Here&apos;s
              what you get back.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="bg-white border border-gray-100 rounded-lg p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Mail size={22} className="text-primary" />
                <h4 className="font-heading text-lg font-bold">
                  Progress updates
                </h4>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                We keep you informed via info@buyesi.org — herd expansion, kids
                accumulated, the child&apos;s school performance, and key
                milestones.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Calendar size={22} className="text-primary" />
                <h4 className="font-heading text-lg font-bold">
                  Buyesi events
                </h4>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                Invitations to take part in health camps, community sanitation
                work, and welfare initiatives whenever you&apos;re able.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Sprout size={22} className="text-primary" />
                <h4 className="font-heading text-lg font-bold">
                  Commercial farming support
                </h4>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                If you&apos;d like to farm goats yourself, we source
                high-quality stock at subsidised Guardian pricing and train you
                on commercial practices.
              </p>
            </div>
            <div className="bg-white border border-gray-100 rounded-lg p-5 sm:p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <Globe size={22} className="text-primary" />
                <h4 className="font-heading text-lg font-bold">
                  Steer local impact
                </h4>
              </div>
              <p className="text-sm text-muted leading-relaxed">
                As Buyesi expands, Guardians help steer change in their own
                region of origin or residence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-14 bg-dark text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="font-heading text-xl sm:text-2xl font-bold mb-3">
            Questions? We&apos;d love to hear from you.
          </h3>
          <p className="text-gray-300 text-sm sm:text-base mb-5">
            Email
            <a
              href="mailto:info@buyesi.org"
              className="text-accent hover:underline"
            >
              info@buyesi.org
            </a>
            or reach out via our
            <Link href="/contact" className="text-accent hover:underline">
              contact page
            </Link>
            .
          </p>
        </div>
      </section>
    </>
  );
}
