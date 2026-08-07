import { Metadata } from "next";

import ContactPage from "@/components/pages/ContactPage/ContactPage";
import { profile } from "@/data/portfolio";

export const metadata: Metadata = {
  title: `Contact — ${profile.name}`,
  description: `Get in touch with ${profile.name}.`,
};

const page = () => {
  return <ContactPage />;
};

export default page;
