import { z } from "zod";

export const SlugSchema = z
  .string({ error: "Slug is required" })
  .trim()
  .min(3)
  .max(80)
  .regex(/^[a-z0-9-]+$/, { error: "Slug must be kebab-case" });

export const UrlSchema = z.url({ error: "Invalid URL" });

export const PaginationQuerySchema = z.object({
  page: z.coerce.number().int().min(1).default(1),
  pageSize: z.coerce.number().int().min(1).max(100).default(20),
});
