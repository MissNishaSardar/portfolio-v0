import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";

const ProjectsPage = () => {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-10 pb-16 text-center">
      <SectionHeading
        title="Projects"
        subtitle="A selection of things I've designed, built, and shipped."
        className="items-center text-center"
      />

      <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            project={project}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
