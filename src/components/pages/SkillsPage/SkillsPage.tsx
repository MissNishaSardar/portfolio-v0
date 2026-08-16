import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import { profile, skills } from "@/data/portfolio";

const SkillsPage = () => {
  return (
    <section className="relative flex flex-1 flex-col items-center justify-center gap-10 overflow-hidden pb-16">
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 h-[30rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.16),transparent_65%)]"
      />

      <div className="relative z-10 flex flex-col items-center gap-6 text-center">
        <SectionHeading
          title="About Me"
          className="items-center text-center"
        />
        {profile.bio.split("\n\n").map((paragraph) => (
          <p
            key={paragraph}
            className="max-w-2xl leading-relaxed font-light text-zinc-400">
            {paragraph}
          </p>
        ))}
      </div>

      <div className="relative z-10 flex w-full flex-col items-center gap-10">
        <SectionHeading
          title="My Toolkit"
          subtitle="The technologies and tools I reach for every day."
          className="items-center text-center"
        />

        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, index) => (
            <SkillCard
              key={category.title}
              category={category}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
