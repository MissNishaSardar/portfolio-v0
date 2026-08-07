import { Metadata } from "next";

import SkillsPage from "@/components/pages/SkillsPage/SkillsPage";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Skills — ${profile.name}`,
  description: "The technologies and tools I work with.",
};

const page = () => {
  return <SkillsPage />;
};

export default page;
