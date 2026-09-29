import { Metadata } from "next";

import HandbookPage from "@/components/pages/HandbookPage/HandbookPage";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Handbook | ${profile.name}`,
  description: "Toolkit, soft skills, projects, and journey in one place.",
};

const page = () => {
  return <HandbookPage />;
};

export default page;
