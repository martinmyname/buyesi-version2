import Hero from "@/components/Hero";
import {
  MapPin,
  Phone,
  Mail,
  Landmark,
  MessageCircle,
} from "lucide-react";

export const metadata = {
  title: "Contact Us - Buyesi Youth Initiative",
};

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact Us"
        subtitle="We'd love to hear from you"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Contact" },
        ]}
      />

      <section className="py-10 sm:py-16 bg-light">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Contact Info */}
            <div className="bg-white rounded-lg shadow-sm p-5 sm:p-8">
              <h2 className="font-heading text-2xl font-bold mb-6">
                Get in Touch
              </h2>
              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <MapPin
                    size={20}
                    className="text-primary mt-1 flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-medium mb-1">Address</h3>
                    <p className="text-sm text-muted leading-relaxed">
                      Puti-Puti Subcounty, Mpongi Parish,
                      <br />
                      Buyesi Village,
                      <br />
                      P.O. Box 260007, Pallisa, Uganda
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone
                    size={20}
                    className="text-primary mt-1 flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-medium mb-1">Phone</h3>
                    <a
                      href="tel:+256703660479"
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      +256 703 660 479
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail
                    size={20}
                    className="text-primary mt-1 flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-medium mb-1">Email</h3>
                    <a
                      href="mailto:info@buyesi.org"
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      info@buyesi.org
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MessageCircle
                    size={20}
                    className="text-primary mt-1 flex-shrink-0"
                  />
                  <div>
                    <h3 className="font-medium mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/256703660479"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-muted hover:text-primary transition-colors"
                    >
                      +256 703 660 479
                    </a>
                  </div>
                </div>
              </div>

              {/* Socials */}
              <div className="mt-8 pt-6 border-t border-gray-100">
                <h3 className="font-medium mb-3">Follow Us</h3>
                <div className="flex gap-4">
                  <a
                    href="https://x.com/DoughlousK9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    Twitter
                  </a>
                  <a
                    href="https://www.linkedin.com/in/doughlous-koche-0034a6161/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="https://www.instagram.com/doughlouskoche/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted hover:text-primary transition-colors"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>

            {/* Bank Details */}
            <div className="bg-white rounded-lg shadow-sm p-5 sm:p-8">
              <div className="flex items-center gap-3 mb-6">
                <Landmark size={24} className="text-primary flex-shrink-0" />
                <h2 className="font-heading text-xl sm:text-2xl font-bold">
                  Bank Details for Donations
                </h2>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-100 gap-0.5">
                  <span className="text-muted">Bank Name</span>
                  <span className="font-medium">
                    Equity Bank Uganda Limited
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-100 gap-0.5">
                  <span className="text-muted">Account Name</span>
                  <span className="font-medium">
                    Buyesi Youth Initiative (BYI) Limited
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-100 gap-0.5">
                  <span className="text-muted">Account Number</span>
                  <span className="font-medium">1001203394603</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-2 border-b border-gray-100 gap-0.5">
                  <span className="text-muted">Branch</span>
                  <span className="font-medium">Pallisa Branch</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between py-2 gap-0.5">
                  <span className="text-muted">Swift Code</span>
                  <span className="font-medium">EQBLUGKA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
