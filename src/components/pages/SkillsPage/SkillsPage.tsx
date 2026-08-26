import Image from "next/image";

import SectionHeading from "@/components/SectionHeading";
import ToolkitGrid from "@/components/ToolkitGrid";
import { profile } from "@/data/portfolio";

const SkillsPage = () => {
  return (
    <section className="relative flex flex-1 flex-col items-center justify-center gap-10 overflow-hidden pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[30rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.10),transparent_65%)] dark:bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.16),transparent_65%)]"
      />

      <div className="relative z-10 grid w-full max-w-7xl grid-cols-1 items-center justify-between gap-12 lg:grid-cols-[360px_1fr] lg:gap-12">
        <div className="relative mx-auto w-full max-w-56">
          <div className="border-glass-border bg-glass ring-glass-ring relative overflow-hidden rounded-2xl border shadow-[var(--glass-shadow)] ring-1 backdrop-blur-md">
            <Image
              src="/image.jpg"
              alt="Nisha Sardar — Full-Stack Developer"
              width={440}
              height={440}
              priority
              sizes="(max-width:1024px) 80vw, 360px"
              className="aspect-square h-auto w-full object-cover"
            />
          </div>
        </div>

        <div className="flex flex-col gap-6 text-center lg:items-start lg:text-left">
          <SectionHeading
            title="About Me"
            className="items-center text-center lg:items-start lg:text-left"
          />
          {profile.bio.split("\n\n").map((paragraph) => (
            <p
              key={paragraph}
              className="max-w-2xl leading-relaxed font-light text-zinc-600 lg:max-w-none dark:text-zinc-400">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

      <div className="relative z-10 flex w-full flex-col items-center gap-10">
        <SectionHeading
          title="My Toolkit"
          subtitle="The technologies and tools I reach for every day."
          className="items-center text-center"
        />

        <ToolkitGrid />
      </div>
    </section>
  );
};

export default SkillsPage;
