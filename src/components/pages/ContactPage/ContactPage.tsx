import { ArrowUpRight, Mail } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import SocialTiles from "@/components/SocialTiles";
import { profile } from "@/data/portfolio";

const ContactPage = () => {
  return (
    <section className="relative flex flex-1 flex-col items-center justify-center gap-10 overflow-hidden pb-16 text-center">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[30rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.16),transparent_65%)]"
      />

      <div className="relative z-10 flex flex-col items-center gap-10">
        <SectionHeading
          title="Let's Work Together"
          subtitle="Have a project in mind or just want to say hi? My inbox is always open."
          className="text-center"
        />

        <a
          href={`mailto:${profile.email}`}
          className="group inline-flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-lg font-medium backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-white/40 hover:bg-white hover:text-black hover:shadow-[0_0_30px_rgba(255,255,255,0.25)]">
          <Mail className="size-5" />
          {profile.email}
          <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <div className="flex flex-col items-center gap-4">
          <p className="text-muted-foreground text-sm">Find me online</p>
          <SocialTiles />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
