import { atom } from "jotai";

// Atomic, granular state — per react-state-management skill: Jotai for atomic updates
// Selected toolkit category filter. null = show all.
export const toolkitFilterAtom = atom<string | null>(null);

// Derived atom — computed, not duplicated (skill: don't store derived data)
export const filteredCategoriesAtom = atom((get) => {
  // This is a placeholder derived atom pattern.
  // Real filtering is done in component with skills data to avoid coupling store to data layer.
  return get(toolkitFilterAtom);
});
