import { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { Heart, Users, Handshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team - Buyesi Youth Initiative",
  description:
    "Join the Buyesi Youth Initiative team. Volunteer your skills to empower rural communities in Uganda.",
};

export default function TeamPage() {
  return (
    <>
      <Hero
        title="Our Team"
        subtitle="The people behind the mission"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Our Team" },
        ]}
      />

      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <Heart size={48} className="mx-auto mb-4 text-primary" />
            <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-4">
              Volunteer With Us
            </h2>
            <p className="text-muted max-w-2xl mx-auto leading-relaxed">
              We are always looking for passionate individuals who want to make a
              difference. Whether you have experience in agriculture, education,
              project management, or simply a desire to help, there is a place
              for you at Buyesi Youth Initiative.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 mb-10 sm:mb-14">
            {[
              {
                icon: Users,
                title: "On the Ground",
                desc: "Work directly with farming families in Puti-Puti — help with goat distribution, training sessions, and community events.",
              },
              {
                icon: Handshake,
                title: "Remote Support",
                desc: "Contribute your skills in marketing, fundraising, web development, or grant writing from anywhere in the world.",
              },
              {
                icon: Heart,
                title: "Spread the Word",
                desc: "Share our mission with your network, organise local fundraisers, or connect us with potential partners and donors.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-light rounded-lg p-5 sm:p-8 text-center"
                >
                  <Icon size={36} className="mx-auto mb-3 text-primary" />
                  <h3 className="font-heading text-lg font-bold mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base"
            >
              Become a Volunteer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
