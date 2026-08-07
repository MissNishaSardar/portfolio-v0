import { Metadata } from "next";

import HomePage from "@/components/pages/HomePage/HomePage";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.tagline,
};

const page = () => {
  return <HomePage />;
};

export default page;
