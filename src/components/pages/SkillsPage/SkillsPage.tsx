import SectionHeading from "@/components/SectionHeading";
import SkillCard from "@/components/SkillCard";
import { skills } from "@/data/portfolio";

const SkillsPage = () => {
  return (
    <section className="flex flex-1 flex-col gap-10 py-16">
      <SectionHeading
        title="Skills"
        subtitle="The technologies and tools I reach for every day."
      />

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skills.map((category) => (
          <SkillCard
            key={category.title}
            category={category}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsPage;
