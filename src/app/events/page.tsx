import { Metadata } from "next";
import Hero from "@/components/Hero";
import { CalendarDays } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Events - Buyesi Youth Initiative",
  description:
    "Stay updated with upcoming events from Buyesi Youth Initiative.",
};

export default function EventsPage() {
  return (
    <>
      <Hero
        title="Our Events"
        subtitle="Community gatherings, training sessions, and more"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Events" }]}
      />

      <section className="py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CalendarDays size={48} className="mx-auto mb-4 text-muted" />
          <h2 className="font-heading text-xl sm:text-2xl font-bold mb-3">
            Check back soon for upcoming events
          </h2>
          <p className="text-muted mb-6 sm:mb-8 leading-relaxed text-sm sm:text-base">
            We regularly host community training sessions, goat distribution
            events, and awareness campaigns. Follow us to be the first to know
            about the next one.
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            <a
              href="https://x.com/DoughlousK9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-primary hover:text-primary text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/doughlous-koche-0034a6161/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-primary hover:text-primary text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://www.instagram.com/doughlouskoche/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-primary hover:text-primary text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://wa.me/256703660479"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white border border-gray-200 hover:border-primary hover:text-primary text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
