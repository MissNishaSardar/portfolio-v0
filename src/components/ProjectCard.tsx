"use client";

import { ArrowUpRight, ExternalLink, FolderGit2 } from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/shadcnui/badge";
import { Button } from "@/components/shadcnui/button";
import { Card, CardContent, CardFooter } from "@/components/shadcnui/card";
import { Project } from "@/data/portfolio";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  index?: number;
};

const ProjectCard = ({ project, index = 0 }: ProjectCardProps) => {
  const { title, description, tags, demoUrl, repoUrl, accent, initials } =
    project;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="group relative h-full">
      <div
        aria-hidden
        className={cn(
          "absolute -inset-px rounded-xl bg-gradient-to-br opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-50",
          accent,
        )}
      />

      <Card className="relative h-full transition-transform duration-300 group-hover:-translate-y-1">
        <div
          aria-hidden
          className={cn(
            "relative -mx-(--card-spacing) -mt-(--card-spacing) flex aspect-[16/9] items-center justify-center overflow-hidden bg-gradient-to-br",
            accent,
          )}>
          <span className="text-5xl font-semibold text-white drop-shadow-sm">
            {initials}
          </span>

          <div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.25),transparent_60%)]"
          />

          <ArrowUpRight className="absolute top-3 right-3 size-5 text-white/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>

        <CardContent className="flex flex-1 flex-col gap-3">
          <h3 className="text-base font-medium">
            {demoUrl ?
              <a
                href={demoUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-primary transition-colors">
                {title}
              </a>
            : title}
          </h3>
          <p className="text-muted-foreground line-clamp-3 flex-1 text-sm">
            {description}
          </p>

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
          {demoUrl ?
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
          : null}

          {repoUrl ?
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
          : null}
        </CardFooter>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
