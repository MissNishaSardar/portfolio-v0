import { Code2, Database, Server, Wrench } from "lucide-react";

import { Badge } from "@/components/shadcnui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/shadcnui/card";
import { SkillCategory, SkillIcon } from "@/data/portfolio";

const iconMap: Record<SkillIcon, typeof Code2> = {
  code: Code2,
  server: Server,
  database: Database,
  wrench: Wrench,
};

type SkillCardProps = {
  category: SkillCategory;
};

const SkillCard = ({ category }: SkillCardProps) => {
  const Icon = iconMap[category.icon];

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Icon
            size={18}
            className="text-primary"
          />
          {category.title}
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ul className="flex flex-wrap gap-2">
          {category.skills.map((skill) => (
            <li key={skill}>
              <Badge variant="secondary">{skill}</Badge>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default SkillCard;
