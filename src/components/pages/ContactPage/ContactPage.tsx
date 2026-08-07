import { Mail } from "lucide-react";

import SectionHeading from "@/components/SectionHeading";
import SocialLinks from "@/components/SocialLinks";
import { Button } from "@/components/shadcnui/button";
import { profile } from "@/data/portfolio";

const ContactPage = () => {
  return (
    <section className="flex flex-1 flex-col items-center justify-center gap-10 py-16 text-center">
      <SectionHeading
        title="Let's Work Together"
        subtitle="Have a project in mind or just want to say hi? My inbox is always open."
        className="text-center"
      />

      <Button
        render={<a href={`mailto:${profile.email}`} />}
        nativeButton={false}
        size="lg">
        <Mail data-icon="inline-start" />
        {profile.email}
      </Button>

      <div className="flex flex-col gap-2">
        <p className="text-sm text-muted-foreground">Find me online</p>
        <SocialLinks className="justify-center" />
      </div>
    </section>
  );
};

export default ContactPage;
