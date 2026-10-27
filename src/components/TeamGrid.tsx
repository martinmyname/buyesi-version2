"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

interface Member {
  name: string;
  title: string;
  photo: string | null;
  bio: string | null;
}

const members: Member[] = [
  {
    name: "Galandi Joswa Franco",
    title: "Coordination Officer",
    photo: "/team/GalandiJoswaFranco.jpeg",
    bio: "“Ever since we began door to door household visits, we have been able to provide basic needs not only to children but also different households as well. With the Goat Economy in place, many lives will be changed.”",
  },
  {
    name: "Prof. Tonny Mayambala",
    title: "Advisor, International Markets",
    photo: "/team/ProfTonnyMayambala.jpeg",
    bio: "“Grow with Goats, a chain of Farmers all involved in Goat Farming Practices, there’s a firm and consistent supply of Goats, Goat Breeds, and all Goat Products, a massive contribution to sustainable cities and communities.”",
  },
  {
    name: "Nankoma Evelyn Sana",
    title: "Operations Officer",
    photo: "/team/NankomaEvelynSana.jpeg",
    bio: "“Making the world a better place for all through sustainable and innovative Goat Farming Practices.”",
  },
  {
    name: "Alberto Braibanti",
    title: "Commercial Food Systems",
    photo: "/team/albertobraibanti.jpeg",
    bio: "Alberto Braibanti is a London, UK based culinary professional with a background in high-level hospitality, including Michelin-starred restaurants and international hotel groups, graduate in MSc Food Business Management. With over three years of experience as a private chef delivering over 200 bespoke dining experiences, he brings a strong understanding of food systems, operational excellence, and performance-driven solutions.\n\nThrough Buyesi Youth Initiative, Alberto is committed to apply his expertise to create sustainable, community-led impact. His work focuses on empowering small-holder farmers, particularly in rural communities in the Eastern Region of Uganda to transition from subsistence to commercial sustainable goat farming practices, with specific emphasis on establishing long-term economic resilience.\n\nBy bridging his background in hospitality through food systems and sustainability, he aims to execute feasible, scalable solutions that generate income, strengthen local food systems, and leverage livelihoods in rural communities.",
  },
  {
    name: "Catherine Farinha",
    title: "",
    photo: "/team/CatherineFarinha.jpg",
    bio: null,
  },
  {
    name: "Carniel Levy",
    title: "",
    photo: "/team/CarnielLevy.jpeg",
    bio: null,
  },
];

function initials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("");
}

export default function TeamGrid() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = useCallback(() => setOpenIndex(null), []);

  // Lock scroll and close on Escape while a bio is open
  useEffect(() => {
    if (openIndex === null) return;
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") close();
    }
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [openIndex, close]);

  const open = openIndex !== null ? members[openIndex] : null;

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-8 sm:gap-x-10 sm:gap-y-10 max-w-5xl mx-auto">
        {members.map((member, i) => {
          const hasBio = !!member.bio;
          const Tag = hasBio ? "button" : "div";
          const hover = hasBio
            ? "group-hover:shadow-xl group-hover:scale-105 group-hover:ring-primary/30"
            : "";
          return (
            <Tag
              key={member.name}
              {...(hasBio ? { onClick: () => setOpenIndex(i) } : {})}
              className={`group flex flex-col items-center text-center ${hasBio ? "cursor-pointer" : ""}`}
            >
              {member.photo ? (
                <div
                  className={`relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mb-3 sm:mb-4 shadow-md transition-all duration-300 ring-3 ring-transparent ${hover}`}
                >
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 128px, 160px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div
                  className={`w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-primary/10 flex items-center justify-center mb-3 sm:mb-4 shadow-md transition-all duration-300 ring-3 ring-transparent ${hover}`}
                >
                  <span className="text-primary font-heading font-bold text-3xl sm:text-4xl">
                    {initials(member.name)}
                  </span>
                </div>
              )}
              <h3
                className={`font-heading font-bold text-sm sm:text-base leading-tight transition-colors ${hasBio ? "group-hover:text-primary" : ""}`}
              >
                {member.name}
              </h3>
              {member.title && (
                <p className="text-xs sm:text-sm text-muted mt-0.5">
                  {member.title}
                </p>
              )}
            </Tag>
          );
        })}
      </div>

      {open && (
        <div
          onClick={close}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm animate-[fadeIn_0.2s_ease-out]" />
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[85vh] overflow-y-auto animate-[scaleIn_0.25s_ease-out]"
          >
            <button
              onClick={close}
              aria-label="Close"
              className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/80 hover:bg-gray-100 flex items-center justify-center transition-colors shadow-sm"
            >
              <X size={18} />
            </button>
            <div className="bg-gradient-to-b from-primary/10 to-transparent pt-10 pb-6 flex flex-col items-center text-center px-6">
              {open.photo ? (
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-lg ring-4 ring-white mb-5">
                  <Image
                    src={open.photo}
                    alt={open.name}
                    fill
                    sizes="176px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-primary/10 flex items-center justify-center shadow-lg ring-4 ring-white mb-5">
                  <span className="text-primary font-heading font-bold text-4xl sm:text-5xl">
                    {initials(open.name)}
                  </span>
                </div>
              )}
              <h3 className="font-heading font-bold text-xl sm:text-2xl">
                {open.name}
              </h3>
              <p className="text-primary font-medium text-sm sm:text-base mt-1">
                {open.title}
              </p>
            </div>
            {open.bio && (
              <div className="px-6 sm:px-8 pb-8 pt-2">
                <div className="w-10 h-0.5 bg-primary/20 rounded-full mx-auto mb-5" />
                {open.bio.split("\n\n").map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-sm sm:text-base text-muted leading-relaxed mb-4 last:mb-0"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            )}
            <div className="flex justify-center gap-2 pb-6">
              {members.map((member, i) =>
                member.bio ? (
                  <button
                    key={member.name}
                    onClick={() => setOpenIndex(i)}
                    aria-label={`View ${member.name}`}
                    className={`w-2.5 h-2.5 rounded-full transition-all ${i === openIndex ? "bg-primary scale-110" : "bg-gray-200 hover:bg-gray-300"}`}
                  />
                ) : null,
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
