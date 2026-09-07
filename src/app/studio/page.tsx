import { Metadata } from "next";

import StudioPage from "@/components/pages/StudioPage/StudioPage";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Studio | ${profile.name}`,
  description: "Toolkit, soft skills, and projects in one place.",
};

const page = () => {
  return <StudioPage />;
};

export default page;
