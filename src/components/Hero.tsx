import Link from "next/link";

interface HeroProps {
  title: string;
  subtitle?: string;
  backgroundImage?: string;
  breadcrumbs?: { label: string; href?: string }[];
  cta?: { label: string; href: string }[];
}

export default function Hero({
  title,
  subtitle,
  backgroundImage = "/bg_1.jpg",
  breadcrumbs,
  cta,
}: HeroProps) {
  return (
    <section
      className="relative bg-cover bg-center py-24 md:py-32"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        {breadcrumbs && (
          <div className="mb-4 text-sm">
            {breadcrumbs.map((crumb, i) => (
              <span key={i}>
                {i > 0 && <span className="mx-2">/</span>}
                {crumb.href ? (
                  <Link href={crumb.href} className="hover:text-accent">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-accent">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
        )}
        <h1 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-200">
            {subtitle}
          </p>
        )}
        {cta && (
          <div className="flex flex-wrap gap-4 justify-center">
            {cta.map((btn, i) => (
              <Link
                key={i}
                href={btn.href}
                className={
                  i === 0
                    ? "bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors"
                    : "bg-accent hover:bg-accent-dark text-dark px-6 py-3 rounded-lg font-medium transition-colors"
                }
              >
                {btn.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
