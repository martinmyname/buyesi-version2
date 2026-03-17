"use client";

import { useEffect, useRef, useState, useCallback } from "react";
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
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const animate = useCallback(() => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      setCounts(
        stats.map((s) =>
          Math.min(Math.round((step / steps) * s.value), s.value)
        )
      );
      if (step >= steps) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!visible) return;
    return animate();
  }, [visible, animate]);

  return (
    <section ref={ref} className="bg-primary py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-3 gap-4 sm:gap-8 text-center text-white">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label}>
                <Icon
                  size={28}
                  className="mx-auto mb-2 sm:mb-3 text-accent sm:w-10 sm:h-10"
                />
                <div className="text-2xl sm:text-4xl font-heading font-bold">
                  {counts[i].toLocaleString()}
                  {stat.suffix}
                </div>
                <div className="text-xs sm:text-sm mt-1 text-gray-200">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
