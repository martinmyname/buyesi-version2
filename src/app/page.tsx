import Link from "next/link";
import Counter from "@/components/Counter";
import BlogCard from "@/components/BlogCard";
import { prisma } from "@/lib/prisma";
import { Heart, HandHeart, Award } from "lucide-react";

async function getRecentBlogs() {
  try {
    return await prisma.blog.findMany({
      where: { published: true },
      include: { author: { select: { name: true } } },
      orderBy: { createdAt: "desc" },
      take: 3,
    });
  } catch {
    return [];
  }
}

export default async function Home() {
  const blogs = await getRecentBlogs();

  return (
    <>
      {/* Hero */}
      <section
        className="relative bg-cover bg-center py-16 sm:py-28 md:py-40"
        style={{ backgroundImage: "url(/bg_1.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <p className="text-accent font-medium tracking-wider uppercase text-xs sm:text-sm mb-3">
            Buyesi Youth Initiative
          </p>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-6xl font-bold mb-4 max-w-3xl mx-auto">
            Bringing About Social Change in Rural Communities
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
            Let&apos;s Grow With Goats
          </p>
          <div className="flex flex-wrap gap-3 sm:gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-primary hover:bg-primary-dark text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base"
            >
              Join Our Mission
            </Link>
            <Link
              href="/causes"
              className="bg-accent hover:bg-accent-dark text-dark px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base"
            >
              Our Causes
            </Link>
          </div>
        </div>
      </section>

      {/* GoFundMe Banner */}
      <section className="bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
            <p className="text-dark font-medium text-sm sm:text-base">
              We are fundraising to launch a UK charity to secure long-term funding for Buyesi
            </p>
            <a
              href="https://gofund.me/54ab45736"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-dark text-white px-5 py-2 rounded-lg font-medium text-sm transition-colors whitespace-nowrap"
            >
              Support on GoFundMe
            </a>
          </div>
        </div>
      </section>

      {/* Counter */}
      <Counter />

      {/* Services */}
      <section className="py-10 sm:py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            {[
              {
                icon: Heart,
                title: "Support Our Cause",
                desc: "Your donation helps us provide goats, training, and resources to families in need across Puti-Puti subcounty.",
                link: "/contact",
                label: "Donate Now",
              },
              {
                icon: HandHeart,
                title: "Join as Volunteer",
                desc: "Lend your skills and time to make a direct impact in rural Uganda. Every hand makes a difference.",
                link: "/contact",
                label: "Volunteer",
              },
              {
                icon: Award,
                title: "Become a Sponsor",
                desc: "Partner with us to create lasting change. Sponsor a family, a goat, or an entire community project.",
                link: "/contact",
                label: "Sponsor",
              },
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-white rounded-lg p-5 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow"
                >
                  <Icon size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="font-heading text-xl font-bold mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted mb-4">{item.desc}</p>
                  <Link
                    href={item.link}
                    className="text-primary font-medium text-sm hover:underline"
                  >
                    {item.label} →
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                Our Vision
              </h2>
              <p className="text-muted leading-relaxed">
                To be the lead organization in empowering smallholder goat
                farmers for economic prosperity in the rural communities of
                Eastern Uganda and beyond.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                Our Mission
              </h2>
              <p className="text-muted leading-relaxed">
                To provide training, resources, and support to smallholder goat
                farmers in Puti-Puti and surrounding communities, enabling them
                to build sustainable livelihoods and improve their quality of
                life through modern goat farming practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      {blogs.length > 0 && (
        <section className="py-16 bg-light">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="font-heading text-3xl font-bold">
                Recent from Blog
              </h2>
              <p className="text-muted mt-2">
                Stay updated with our latest news and stories
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogs.map((blog) => (
                <BlogCard
                  key={blog.id}
                  id={blog.id}
                  title={blog.title}
                  excerpt={blog.excerpt}
                  imageId={blog.imageId}
                  authorName={blog.author.name}
                  createdAt={blog.createdAt.toISOString()}
                />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                href="/blog"
                className="bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-lg font-medium transition-colors"
              >
                View All Posts
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section
        className="relative bg-cover bg-center py-12 sm:py-20"
        style={{ backgroundImage: "url(/bg_2.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 text-center text-white">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Make a Difference Today
          </h2>
          <p className="text-gray-200 mb-6 sm:mb-8 text-sm sm:text-base">
            Your support helps us empower rural communities through sustainable
            goat farming. Every contribution counts.
          </p>
          <Link
            href="/contact"
            className="bg-accent hover:bg-accent-dark text-dark px-8 py-3 rounded-lg font-bold transition-colors"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </>
  );
}
