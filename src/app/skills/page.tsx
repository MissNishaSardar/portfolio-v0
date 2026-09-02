import { Metadata } from "next";

import SkillsPage from "@/components/pages/SkillsPage/SkillsPage";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Skills | ${profile.name}`,
  description: "Everyday Tools and Technologies.",
};

const page = () => {
  return <SkillsPage />;
};

export default page;
