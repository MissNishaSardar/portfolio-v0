import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  className?: string;
};

const SectionHeading = ({
  title,
  subtitle,
  className,
}: SectionHeadingProps) => {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <h2 className="text-3xl font-semibold sm:text-4xl">{title}</h2>
      {subtitle ? (
        <p className="max-w-2xl text-muted-foreground">{subtitle}</p>
      ) : null}
    </div>
  );
};

export default SectionHeading;
