import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
  id?: string;
};

const SectionHeading = ({
  title,
  subtitle,
  className,
  id,
}: SectionHeadingProps) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <h2
        id={id}
        className="text-3xl font-semibold sm:text-4xl">
        {title}
      </h2>
      {subtitle ?
        <p className="text-muted-foreground max-w-2xl">{subtitle}</p>
      : null}
    </div>
  );
};

export default SectionHeading;
