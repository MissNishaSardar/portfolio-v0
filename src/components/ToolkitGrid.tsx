"use client";

import { useAtom } from "jotai";

import SkillCard from "@/components/SkillCard";
import {
  ToggleGroup,
  ToggleGroupItem,
} from "@/components/shadcnui/toggle-group";
import { skills } from "@/data/portfolio";
import { toolkitFilterAtom } from "@/store/toolkit";

export default function ToolkitGrid() {
  const [filter, setFilter] = useAtom(toolkitFilterAtom);

  const categories = ["All", ...skills.map((c) => c.title)];
  const filtered = filter ? skills.filter((c) => c.title === filter) : skills;

  return (
    <div className="flex w-full flex-col items-center gap-6">
      <ToggleGroup
        value={[filter ?? "All"]}
        onValueChange={
          ((value: string[]) => {
            const v = value[0] as string | undefined;
            setFilter(v === "All" || !v ? null : v);
          }) as unknown as never
        }
        variant="outline"
        size="sm"
        spacing={2}>
        {categories.map((cat) => (
          <ToggleGroupItem
            key={cat}
            value={cat}
            aria-label={`Filter ${cat}`}>
            {cat}
          </ToggleGroupItem>
        ))}
      </ToggleGroup>

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((category, index) => (
          <SkillCard
            key={category.title}
            category={category}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
