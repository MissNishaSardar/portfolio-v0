import { ExternalLink, FolderGit2 } from "lucide-react";

import { Badge } from "@/components/shadcnui/badge";
import { Button } from "@/components/shadcnui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/shadcnui/card";
import { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { title, description, tags, demoUrl, repoUrl, accent, initials } =
    project;

  return (
    <Card className="h-full">
      <div
        aria-hidden
        className={cn(
          "-mx-(--card-spacing) -mt-(--card-spacing) flex aspect-[16/9] items-center justify-center bg-gradient-to-br",
          accent
        )}>
        <span className="text-4xl font-semibold text-white">{initials}</span>
      </div>

      <CardContent className="flex flex-1 flex-col gap-3">
        <h3 className="text-base font-medium">{title}</h3>
        <p className="flex-1 text-sm text-muted-foreground">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>

      <CardFooter className="gap-2">
        {demoUrl ? (
          <Button
            render={
              <a
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
              />
            }
            nativeButton={false}
            size="sm">
            <ExternalLink data-icon="inline-start" />
            Demo
          </Button>
        ) : null}

        {repoUrl ? (
          <Button
            render={
              <a
                href={repoUrl}
                target="_blank"
                rel="noreferrer"
              />
            }
            nativeButton={false}
            size="sm"
            variant="outline">
            <FolderGit2 data-icon="inline-start" />
            Code
          </Button>
        ) : null}
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
