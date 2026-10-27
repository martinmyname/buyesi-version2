import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const siteLinks = [
  { href: "/causes", label: "Our Programmes" },
  { href: "/team", label: "Our Team" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
  { href: "/support", label: "Become a Goat Guardian" },
];

const programmeLinks = [
  { href: "/goat-economy", label: "The Goat Economy" },
  { href: "/rural-breeding", label: "Buyesi Rural Breeding Model" },
  { href: "/child-future", label: "Every Goat, Every Child's Future" },
  { href: "/support", label: "Become a Goat Guardian" },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {/* About */}
          <div>
            <h3 className="text-white font-heading text-lg font-bold mb-4">
              Buyesi Youth Initiative
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              Empowering rural communities through sustainable goat farming in
              the Eastern Region of Uganda. Let&apos;s grow with goats.
            </p>
            <div className="flex flex-wrap gap-3 sm:gap-4">
              <a
                href="https://x.com/DoughlousK9"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors text-sm"
              >
                Twitter
              </a>
              <a
                href="https://www.linkedin.com/in/doughlous-koche-0034a6161/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors text-sm"
              >
                LinkedIn
              </a>
              <a
                href="https://www.instagram.com/doughlouskoche/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors text-sm"
              >
                Instagram
              </a>
              <a
                href="https://wa.me/256703660479"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent transition-colors text-sm"
              >
                WhatsApp
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-heading text-lg font-bold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {siteLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programmes */}
          <div>
            <h3 className="text-white font-heading text-lg font-bold mb-4">
              Programmes
            </h3>
            <ul className="space-y-2">
              {programmeLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-accent transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-heading text-lg font-bold mb-4">
              Contact Us
            </h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 shrink-0" />
                <span>
                  Puti-Puti Subcounty, Mpongi Parish, Buyesi Village,
                  <br />
                  P.O. Box 260007, Pallisa, Uganda
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="shrink-0" />
                <a href="tel:+256703660479" className="hover:text-accent">
                  +256 703 660 479
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                <a href="mailto:info@buyesi.org" className="hover:text-accent">
                  info@buyesi.org
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} Buyesi Youth Initiative. All
            rights reserved.{" "}
            <Link
              href="/admin/login"
              className="text-gray-500 hover:text-gray-400 transition-colors"
            >
              Admin
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
