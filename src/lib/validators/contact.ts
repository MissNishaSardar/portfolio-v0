import { z } from "zod";

// Reusable primitives — Zod v4 error option, strict constraints
export const NameSchema = z
  .string({ error: "Name is required" })
  .trim()
  .min(2, { error: "Name must be at least 2 characters" })
  .max(80, { error: "Name must be at most 80 characters" });

export const EmailSchema = z
  .string({ error: "Email is required" })
  .trim()
  .toLowerCase()
  .pipe(z.email({ error: "Invalid email address" }));

export const MessageSchema = z
  .string({ error: "Message is required" })
  .trim()
  .min(10, { error: "Message must be at least 10 characters" })
  .max(1000, { error: "Message must be at most 1000 characters" });

export const ContactFormSchema = z.object(
  {
    name: NameSchema,
    email: EmailSchema,
    message: MessageSchema,
    subject: z
      .string()
      .trim()
      .max(120, { error: "Subject must be at most 120 characters" })
      .optional(),
  },
  { error: "Invalid contact payload" },
);

export type ContactFormInput = z.input<typeof ContactFormSchema>;
export type ContactFormOutput = z.output<typeof ContactFormSchema>;

export function parseContactForm(input: unknown) {
  const result = ContactFormSchema.safeParse(input);
  if (!result.success) {
    return { success: false as const, error: result.error.format() };
  }
  return { success: true as const, data: result.data };
}
