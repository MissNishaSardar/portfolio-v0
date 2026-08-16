import { Metadata } from "next";

import SkillsPage from "@/components/pages/SkillsPage/SkillsPage";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `About — ${profile.name}`,
  description: "About me and the technologies I work with.",
};

const page = () => {
  return <SkillsPage />;
};

export default page;
