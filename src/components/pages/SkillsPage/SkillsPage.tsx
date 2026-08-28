import SectionHeading from "@/components/SectionHeading";
import ToolkitGrid from "@/components/ToolkitGrid";

const SkillsPage = () => {
  return (
    <section
      aria-labelledby="toolkit-heading"
      className="relative flex flex-1 flex-col items-center justify-center gap-10 overflow-visible pt-12 pb-32 sm:pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[30rem] w-[45rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.10),transparent_65%)] dark:bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.16),transparent_65%)]"
      />

      <div className="relative z-10 flex w-full flex-col items-center gap-10">
        <SectionHeading
          id="toolkit-heading"
          title="My Toolkit"
          subtitle="The tools I use every day."
          className="items-center text-center"
        />

        <ToolkitGrid />
      </div>
    </section>
  );
};

export default SkillsPage;
