"use client";

import { useEffect, useRef, useState } from "react";
import { Home, Heart, Users } from "lucide-react";

const stats = [
  {
    icon: Home,
    value: 2786,
    label: "Households to Impact",
    suffix: "+",
  },
  {
    icon: Heart,
    value: 7,
    label: "Active Initiatives",
    suffix: "",
  },
  {
    icon: Users,
    value: 16,
    label: "Dedicated Volunteers",
    suffix: "",
  },
];

export default function Counter() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCounts(
        stats.map((s) => Math.min(Math.round((step / steps) * s.value), s.value))
      );
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [visible]);

  return (
    <section ref={ref} className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={i}>
                <Icon size={40} className="mx-auto mb-3 text-accent" />
                <div className="text-4xl font-heading font-bold">
                  {counts[i].toLocaleString()}
                  {stat.suffix}
                </div>
                <div className="text-sm mt-1 text-gray-200">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
