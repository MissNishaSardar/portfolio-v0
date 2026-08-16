import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";

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
          <Link
            href="/projects"
            className="group inline-flex items-center gap-3 rounded-full bg-white px-8 py-4 text-lg font-medium text-black transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(45,212,191,0.35)]">
            View Projects
            <ArrowRight className="size-5 transition-transform duration-200 group-hover:translate-x-0.5" />
          </Link>
          <Link
            href="/contact"
            className="text-foreground inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-8 py-4 text-lg font-medium backdrop-blur-sm transition-all duration-200 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-2 hover:border-white/20 hover:bg-white/10">
            <Mail className="size-5" />
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
