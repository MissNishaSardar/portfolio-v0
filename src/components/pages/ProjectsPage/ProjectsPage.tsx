import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";

const ProjectsPage = () => {
  return (
    <section className="flex flex-1 flex-col gap-10 py-16">
      <SectionHeading
        title="Projects"
        subtitle="A selection of things I've designed, built, and shipped."
      />

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.title}
            project={project}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
