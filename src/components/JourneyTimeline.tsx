import { Badge } from "@/components/shadcnui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { journey } from "@/data/portfolio";

const JourneyTimeline = () => {
  return (
    <ol
      aria-label="Personal journey"
      className="relative flex w-full flex-col gap-5">
      {journey.map((stop) => (
        <li
          key={stop.eyebrow + stop.title}
          className="relative flex gap-4">
          <span
            aria-hidden="true"
            className="flex flex-col items-center">
            <span className="mt-1 size-2.5 shrink-0 rounded-full bg-sky-500 ring-4 ring-sky-500/15" />
            <span className="bg-border w-px flex-1" />
          </span>
          <Card className="w-full">
            <CardHeader>
              <Badge
                variant="secondary"
                className="font-mono tracking-wide uppercase">
                {stop.eyebrow}
              </Badge>
              <CardTitle>{stop.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground text-sm leading-relaxed">
              {stop.text}
            </CardContent>
            <CardFooter className="flex flex-wrap gap-1.5 border-t-0 bg-transparent p-[var(--card-spacing)] pt-0">
              {stop.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline">
                  {tag}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        </li>
      ))}
    </ol>
  );
};

export default JourneyTimeline;
