import { Metadata } from "next";
import Link from "next/link";
import Counter from "@/components/Counter";
import BlogCard from "@/components/BlogCard";
import { prisma } from "@/lib/prisma";
import {
  Award,
  Dna,
  GraduationCap,
  HandHeart,
  Heart,
  Landmark,
  Lightbulb,
  Rocket,
  ShieldCheck,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Buyesi Youth Initiative - Sustainable Goat Farming in Uganda",
  description:
    "Empowering rural communities through sustainable goat farming in the Eastern Region of Uganda. Let's grow with goats.",
};

// Refresh regularly so new posts from the admin appear without a redeploy
export const revalidate = 60;

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
              className="bg-primary hover:bg-primary-dark text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base"
              href="/contact"
            >
              Join Our Mission
            </Link>
            <Link
              className="bg-accent hover:bg-accent-dark text-dark px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-medium transition-colors text-sm sm:text-base"
              href="/causes"
            >
              Our Causes
            </Link>
          </div>
        </div>
      </section>

      <Counter />

      <section className="py-10 sm:py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8">
            <div className="bg-white rounded-lg p-5 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <Heart size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="font-heading text-xl font-bold mb-3">
                Support Our Cause
              </h3>
              <p className="text-sm text-muted mb-4">
                Your donation helps us provide goats, training, and resources to
                families in need across rural communities.
              </p>
              <Link
                className="text-primary font-medium text-sm hover:underline"
                href="/contact"
              >
                Donate Now →
              </Link>
            </div>
            <div className="bg-white rounded-lg p-5 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <HandHeart size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="font-heading text-xl font-bold mb-3">
                Join as Volunteer
              </h3>
              <p className="text-sm text-muted mb-4">
                Lend your skills and time to make a direct impact in rural
                Uganda. Every hand makes a difference.
              </p>
              <Link
                className="text-primary font-medium text-sm hover:underline"
                href="/contact"
              >
                Volunteer →
              </Link>
            </div>
            <div className="bg-white rounded-lg p-5 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow">
              <Award size={48} className="mx-auto mb-4 text-primary" />
              <h3 className="font-heading text-xl font-bold mb-3">
                Become a Sponsor
              </h3>
              <p className="text-sm text-muted mb-4">
                Partner with us to create lasting change. Sponsor a family, a
                goat, or an entire community project.
              </p>
              <Link
                className="text-primary font-medium text-sm hover:underline"
                href="/contact"
              >
                Sponsor →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                Our Vision
              </h2>
              <p className="text-muted leading-relaxed">
                To be the leading organisation in empowering smallholder goat
                farmers to achieve economic prosperity, food security and
                improved livelihoods through sustainable and innovative goat
                farming practices in Uganda and beyond.
              </p>
            </div>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-3 sm:mb-4">
                Our Mission
              </h2>
              <p className="text-muted leading-relaxed">
                To provide training, resources, and support to smallholder goat
                farmers, enabling them to adopt commercial farming practices,
                increase productivity and profitable markets, thereby improving
                their incomes, food security and overall wellbeing while
                promoting environmental stewardship and social equity.
              </p>
            </div>
          </div>
          <div className="mt-10 sm:mt-14">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
              Core Values
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
              <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <ShieldCheck size={28} className="text-primary" />
                </div>
                <span className="font-medium text-sm sm:text-base">
                  Integrity
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Rocket size={28} className="text-primary" />
                </div>
                <span className="font-medium text-sm sm:text-base">
                  Empowerment
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users size={28} className="text-primary" />
                </div>
                <span className="font-medium text-sm sm:text-base">
                  Community Participation
                </span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 sm:gap-3">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                  <Lightbulb size={28} className="text-primary" />
                </div>
                <span className="font-medium text-sm sm:text-base">
                  Innovation
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-10 sm:py-16 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-10">
            <h2 className="font-heading text-2xl sm:text-3xl font-bold">
              Our Programmes
            </h2>
            <p className="text-muted mt-2">
              Flagship initiatives driving sustainable change
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            <Link
              className="bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex gap-5 items-start group"
              href="/goat-economy"
            >
              <Landmark size={40} className="text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  The Goat Economy
                </h3>
                <p className="text-sm text-muted">
                  A community-driven economic model that uses goat farming as a
                  vehicle for poverty reduction, food security, and wealth
                  creation across rural Eastern Uganda.
                </p>
                <span className="text-primary font-medium text-sm mt-3 inline-block">
                  Learn more →
                </span>
              </div>
            </Link>
            <Link
              className="bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex gap-5 items-start group"
              href="/rural-breeding"
            >
              <Dna size={40} className="text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Buyesi Rural Breeding Model
                </h3>
                <p className="text-sm text-muted">
                  Collaborative farmer groups receive purebred stock and digital
                  herd management tools to progressively enhance the local gene
                  pool.
                </p>
                <span className="text-primary font-medium text-sm mt-3 inline-block">
                  Learn more →
                </span>
              </div>
            </Link>
            <Link
              className="bg-white rounded-lg p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex gap-5 items-start group"
              href="/child-future"
            >
              <GraduationCap size={40} className="text-primary shrink-0 mt-1" />
              <div>
                <h3 className="font-heading text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Every Goat, Every Child&apos;s Future
                </h3>
                <p className="text-sm text-muted">
                  Empowering vulnerable children through education, goat-rearing
                  entrepreneurship, and mindset transformation to break the
                  cycle of poverty.
                </p>
                <span className="text-primary font-medium text-sm mt-3 inline-block">
                  Learn more →
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>

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
            className="bg-accent hover:bg-accent-dark text-dark px-8 py-3 rounded-lg font-bold transition-colors"
            href="/contact"
          >
            Get Involved
          </Link>
        </div>
      </section>
    </>
  );
}
