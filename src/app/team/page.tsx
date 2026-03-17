import { Metadata } from "next";
import Link from "next/link";
import Hero from "@/components/Hero";
import { Users, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Team - Buyesi Youth Initiative",
  description:
    "Meet the dedicated team behind Buyesi Youth Initiative working to empower rural communities in Uganda.",
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

      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl font-bold mb-3">
              Meet Our Founder
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Driven by a passion for community empowerment and sustainable
              agriculture.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <div className="bg-white rounded-lg shadow-sm overflow-hidden text-center p-8">
              <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Users size={48} className="text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-1">
                Doughlous Koche
              </h3>
              <p className="text-primary font-medium mb-4">
                Founder & Goat Farmer
              </p>
              <p className="text-sm text-muted leading-relaxed">
                Doughlous founded Buyesi Youth Initiative with a vision to
                transform rural livelihoods through sustainable goat farming. As
                both a leader and practicing goat farmer, he brings firsthand
                experience and deep community connections to every aspect of the
                organization&apos;s work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Heart size={48} className="mx-auto mb-4 text-primary" />
          <h2 className="font-heading text-3xl font-bold mb-4">
            Volunteer With Us
          </h2>
          <p className="text-muted max-w-2xl mx-auto mb-8 leading-relaxed">
            We are always looking for passionate individuals who want to make a
            difference. Whether you have experience in agriculture, education,
            project management, or simply a desire to help, there is a place for
            you at Buyesi Youth Initiative. Join our team and help us empower
            rural communities through sustainable goat farming.
          </p>
          <Link
            href="/contact"
            className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-lg font-medium transition-colors"
          >
            Become a Volunteer
          </Link>
        </div>
      </section>
    </>
  );
}
