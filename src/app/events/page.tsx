import { Metadata } from "next";
import Link from "next/link";
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
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Events" },
        ]}
      />

      <section className="py-16 bg-light">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <CalendarDays size={64} className="mx-auto mb-6 text-muted" />
          <h2 className="font-heading text-2xl font-bold mb-4">
            Check back soon for upcoming events
          </h2>
          <p className="text-muted mb-8 leading-relaxed">
            We regularly host community training sessions, goat distribution
            events, and awareness campaigns. Stay connected to be the first to
            know about our next event.
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-8">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Social Links */}
          <div className="border-t border-gray-200 pt-8">
            <p className="text-sm text-muted mb-4">Follow us for event updates</p>
            <div className="flex flex-wrap gap-4 justify-center">
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
        </div>
      </section>
    </>
  );
}
