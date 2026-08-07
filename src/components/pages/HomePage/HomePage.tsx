import Link from "next/link";

import SocialLinks from "@/components/SocialLinks";
import { Button } from "@/components/shadcnui/button";
import { profile } from "@/data/portfolio";

const HomePage = () => {
  return (
    <section className="flex flex-1 flex-col justify-center py-16">
      <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="flex flex-col gap-6">
          <h1 className="text-5xl font-semibold sm:text-6xl">{profile.name}</h1>

          <h2 className="text-muted-foreground text-2xl sm:text-3xl">
            {profile.role}
          </h2>

          <p className="text-muted-foreground max-w-2xl">{profile.tagline}</p>

          <div className="flex items-center gap-3 pt-2">
            <Button
              render={<Link href="/projects" />}
              nativeButton={false}
              size="lg">
              View Projects
            </Button>
            <Button
              render={<Link href="/contact" />}
              nativeButton={false}
              size="lg"
              variant="outline">
              Get in Touch
            </Button>
          </div>

          <SocialLinks />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-2xl font-semibold">About Me</h3>
          <p className="text-muted-foreground pt-7">{profile.bio}</p>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
