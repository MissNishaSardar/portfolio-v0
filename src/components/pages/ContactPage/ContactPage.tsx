import { ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";

import SocialTiles from "@/components/SocialTiles";
import { profile } from "@/data/portfolio";

const ContactPage = () => {
  return (
    <section className="relative flex flex-1 flex-col items-center justify-center overflow-hidden px-5 py-14">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[30rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.16),transparent_65%)]"
      />

      <div className="relative z-10 flex w-full max-w-2xl flex-col items-center gap-10 text-center">
        <div className="rounded-full bg-[conic-gradient(from_210deg,#ffffff_0%,#6366f1_18%,#38bdf8_32%,#e2e8f0_55%,#ffffff_100%)] p-2 shadow-[0_0_40px_rgba(99,102,241,0.22)] dark:bg-[conic-gradient(from_210deg,#1c1c24_0%,#6366f1_16%,#38bdf8_28%,#1c1c24_42%,#1c1c24_100%)] dark:shadow-[0_0_50px_rgba(99,102,241,0.25)]">
          <div className="bg-muted overflow-hidden rounded-full">
            <Image
              src="/img2.jpg"
              alt="Edited portrait of Nisha Sardar with soft light"
              width={368}
              height={368}
              priority
              sizes="184px"
              className="size-46 rounded-full object-cover object-[center_18%]"
              style={{
                filter: "brightness(1.12) contrast(0.94) saturate(0.92)",
              }}
            />
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="font-serif text-[40px] leading-[1.25] tracking-[-0.01em] text-balance">
            &quot;I am not what happened to me, I am what I choose to
            become.&quot;
          </h2>
          <p className="text-muted-foreground mt-4 flex items-center justify-center gap-3 text-sm">
            <span
              aria-hidden="true"
              className="bg-border block h-px w-8"
            />
            Carl Jung
            <span
              aria-hidden="true"
              className="bg-border block h-px w-8"
            />
          </p>
        </div>

        <a
          href={`mailto:${profile.email}`}
          className="group border-glass-border bg-glass inline-flex items-center gap-3 rounded-full border px-8 py-4 text-lg font-medium shadow-[var(--glass-shadow)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--glass-shadow-hover)]">
          <Mail className="size-5" />
          Feel free to reach
          <ArrowUpRight className="size-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        <div className="flex flex-col items-center gap-4">
          <p className="text-muted-foreground text-xs font-bold tracking-[0.18em] uppercase">
            Find me online
          </p>
          <SocialTiles />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
