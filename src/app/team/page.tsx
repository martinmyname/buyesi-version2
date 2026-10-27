import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import TeamGrid from "@/components/TeamGrid";
import { Handshake, Heart, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team - Buyesi Youth Initiative",
  description:
    "Meet the team behind Buyesi Youth Initiative — empowering rural communities in Uganda through sustainable goat farming.",
};

export default function TeamPage() {
  return (
    <>
      <Hero
        title="Our Team"
        subtitle="The people behind the mission"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Our Team" }]}
      />

      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-6 sm:mb-10 text-center">
              Meet the Founder
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-6 sm:gap-10">
              <div className="flex-shrink-0 w-full max-w-[200px] sm:max-w-[280px]">
                <Image
                  src="/aboutusbg.jpeg"
                  alt="Doughlous Koche - Founder of Buyesi Youth Initiative"
                  width={280}
                  height={280}
                  className="rounded-lg object-cover w-full aspect-square shadow-md"
                />
              </div>
              <div className="text-center md:text-left">
                <blockquote className="text-muted leading-relaxed italic text-lg mb-6">
                  “I founded Buyesi Youth Initiative with one vision — to create
                  a Goat Economy that enables families in rural communities and
                  beyond to become self-sufficient. Goats are not just
                  livestock; they are a pathway to education, healthcare, and
                  dignity. Through sustainable farming practices and
                  community-driven support, we are transforming lives one goat
                  at a time.”
                </blockquote>
                <div>
                  <p className="font-heading font-bold text-lg">
                    Doughlous Koche
                  </p>
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

      <section className="py-10 sm:py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center">
            The Team
          </h2>
          <TeamGrid />
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <Heart size={48} className="mx-auto mb-4 text-primary" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
              Volunteer With Us
            </h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              We are always looking for passionate individuals who want to make
              a difference. Whether you have experience in agriculture,
              education, project management, or simply a desire to help, there
              is a place for you at Buyesi Youth Initiative.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-10 sm:mb-14">
            <div className="bg-light rounded-lg p-5 sm:p-8 text-center">
              <Users size={36} className="mx-auto mb-3 text-primary" />
              <h3 className="font-heading text-lg font-bold mb-2">
                On the Ground
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Work directly with farming families in rural communities — help
                with goat distribution, training sessions, and community events.
              </p>
            </div>
            <div className="bg-light rounded-lg p-5 sm:p-8 text-center">
              <Handshake size={36} className="mx-auto mb-3 text-primary" />
              <h3 className="font-heading text-lg font-bold mb-2">
                Remote Support
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Contribute your skills in marketing, fundraising, web
                development, or grant writing from anywhere in the world.
              </p>
            </div>
            <div className="bg-light rounded-lg p-5 sm:p-8 text-center">
              <Heart size={36} className="mx-auto mb-3 text-primary" />
              <h3 className="font-heading text-lg font-bold mb-2">
                Spread the Word
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                Share our mission with your network, organise local fundraisers,
                or connect us with potential partners and donors.
              </p>
            </div>
          </div>
          <div className="text-center">
            <Link
              className="bg-primary hover:bg-primary-dark text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base"
              href="/contact"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
