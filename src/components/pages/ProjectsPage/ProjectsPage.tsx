import ProjectCard from "@/components/ProjectCard";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";

const ProjectsPage = () => {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-10 pt-4 pb-16 sm:pt-6">
      <SectionHeading
        title="Projects"
        subtitle="A collection of projects I’ve loved working on, each solving a real problem and teaching me something new along the way."
        className="w-full items-start text-left"
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
