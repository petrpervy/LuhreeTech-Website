"use client";

import { useEffect, useState } from "react";

const SECTIONS = ["overview", "roles", "deep-dives", "integrations", "security", "faq"] as const;

export default function FeatureSubnav() {
  const [active, setActive] = useState<string>("overview");

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0.01 }
    );

    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });

    return () => obs.disconnect();
  }, []);

  const LinkBtn = ({ id, label }: { id: string; label: string }) => (
    <a
      href={`#${id}`}
      className={`px-3 py-2 rounded-full text-sm link-underline focus-ring transition-colors ${
        active === id ? "glass text-accent-teal-500" : "text-gray-500"
      }`}
    >
      {label}
    </a>
  );

  return (
    <div className="sticky top-[68px] z-40 mx-auto max-w-[1200px] py-2 px-4">
      <div className="glass backdrop-blur-md px-3 py-2 flex gap-2 overflow-x-auto">
        <LinkBtn id="overview" label="Overview" />
        <LinkBtn id="roles" label="Roles" />
        <LinkBtn id="deep-dives" label="Deep Dives" />
        <LinkBtn id="integrations" label="Integrations" />
        <LinkBtn id="security" label="Security" />
        <LinkBtn id="faq" label="FAQ" />
      </div>
    </div>
  );
}
