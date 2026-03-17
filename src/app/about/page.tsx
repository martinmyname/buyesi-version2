import Hero from "@/components/Hero";
import Counter from "@/components/Counter";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Sprout } from "lucide-react";

export const metadata = {
  title: "About Us - Buyesi Youth Initiative",
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Us"
        backgroundImage="/aboutusbg.jpeg"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "About" },
        ]}
      />

      {/* Founder Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-3xl font-bold mb-10 text-center">
              Meet the Founder
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-10">
              <div className="flex-shrink-0">
                <Image
                  src="/aboutusbg.jpeg"
                  alt="Doughlous Koche - Founder of Buyesi Youth Initiative"
                  width={280}
                  height={280}
                  className="rounded-lg object-cover w-[280px] h-[280px] shadow-md"
                />
              </div>
              <div className="text-center md:text-left">
                <blockquote className="text-muted leading-relaxed italic text-lg mb-6">
                  &ldquo;I founded Buyesi Youth Initiative with one vision — to
                  create a Goat Economy that enables families in Puti-Puti and
                  beyond to become self-sufficient. Goats are not just livestock;
                  they are a pathway to education, healthcare, and dignity. Through
                  sustainable farming practices and community-driven support, we are
                  transforming lives one goat at a time.&rdquo;
                </blockquote>
                <div>
                  <p className="font-heading font-bold text-lg">Doughlous Koche</p>
                  <p className="text-muted text-sm mb-3">
                    Goat Farmer &amp; Founder, Buyesi Youth Initiative
                  </p>
                  <a
                    href="https://www.instagram.com/doughlouskoche"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary hover:underline text-sm font-medium"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                    @doughlouskoche
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Counter />

      {/* Goat Economy & Demo Farm */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <Sprout size={40} className="text-primary mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-3">
                The Goat Economy
              </h3>
              <p className="text-muted mb-4">
                Our flagship concept — transforming lives through sustainable
                goat farming. Income from meat, milk, hides, and manure creates
                multiple revenue streams for families.
              </p>
              <Link
                href="/goat-economy"
                className="text-primary font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-sm">
              <BookOpen size={40} className="text-primary mb-4" />
              <h3 className="font-heading text-2xl font-bold mb-3">
                Demonstration Farm
              </h3>
              <p className="text-muted mb-4">
                Our hands-on learning center where farmers learn modern goat
                farming techniques, breeding, feed production, and sustainable
                facility management.
              </p>
              <Link
                href="/demonstration-farm"
                className="text-primary font-medium hover:underline"
              >
                Read More →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
