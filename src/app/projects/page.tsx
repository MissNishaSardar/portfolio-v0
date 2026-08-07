import { Metadata } from "next";

import ProjectsPage from "@/components/pages/ProjectsPage/ProjectsPage";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Projects — ${profile.name}`,
  description: "A selection of projects I've built.",
};

const page = () => {
  return <ProjectsPage />;
};

export default page;
