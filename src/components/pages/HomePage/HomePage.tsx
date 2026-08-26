import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/shadcnui/button";
import { profile } from "@/data/portfolio";

const HomePage = () => {
  return (
    <section className="relative flex flex-1 flex-col justify-center overflow-hidden py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[30rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.16),transparent_65%)]"
      />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-7xl">
          {profile.name}
        </h1>

        <h2 className="text-2xl font-light text-zinc-400 sm:text-3xl">
          {profile.role}
        </h2>

        <p className="max-w-2xl leading-relaxed font-light text-zinc-400">
          {profile.tagline}
        </p>

        <div className="flex items-center gap-3 pt-2">
          <Button
            render={<Link href="/projects" />}
            nativeButton={false}
            size="lg"
            className="group gap-3 rounded-full px-8 py-6 text-lg shadow-md hover:shadow-lg">
            View Projects
            <ArrowRight
              data-icon="inline-end"
              className="transition-transform duration-200 group-hover:translate-x-0.5"
            />
          </Button>
          <Button
            render={<Link href="/contact" />}
            nativeButton={false}
            variant="outline"
            size="lg"
            className="border-glass-border bg-glass hover:bg-glass gap-3 rounded-full px-8 py-6 text-lg backdrop-blur-md">
            <Mail data-icon="inline-start" />
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
