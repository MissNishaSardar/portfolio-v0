import { Metadata } from "next";

import AboutPage from "@/components/pages/AboutPage/AboutPage";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `About | ${profile.name}`,
  description: "Explore my interests, my journey as a programmer",
};

const page = () => {
  return <AboutPage />;
};

export default page;
