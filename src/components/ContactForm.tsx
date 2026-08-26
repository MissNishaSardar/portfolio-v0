"use client";

import { useState } from "react";

import { Button } from "@/components/shadcnui/button";
import { profile } from "@/data/portfolio";
import { parseContactForm } from "@/lib/validators/contact";
import { cn } from "@/lib/utils";

type FieldErrors = Record<string, string[]>;

export default function ContactForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [success, setSuccess] = useState(false);

  function onSubmit(formData: FormData) {
    const input = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject") || undefined,
      message: formData.get("message"),
    };

    const result = parseContactForm(input);

    if (!result.success) {
      const fieldErrors: FieldErrors = {};
      for (const [key, val] of Object.entries(result.error)) {
        if (key === "_errors") continue;
        const field = val as { _errors?: string[] };
        if (field?._errors?.length) fieldErrors[key] = field._errors;
      }
      setErrors(fieldErrors);
      setSuccess(false);
      return;
    }

    setErrors({});
    setSuccess(true);
    const subject = result.data.subject || `Contact from ${result.data.name}`;
    const body = `From: ${result.data.name} <${result.data.email}>\n\n${result.data.message}`;
    const mailto = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  return (
    <form
      action={onSubmit}
      className="mx-auto flex w-full max-w-2xl flex-col gap-4 text-left"
      noValidate>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium">Name</span>
          <input
            name="name"
            placeholder="Jane Doe"
            className={cn(
              "placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/40 border-glass-border bg-glass rounded-xl border px-4 py-2.5 text-sm shadow-sm backdrop-blur-md outline-none focus-visible:ring-2",
              errors.name &&
                "border-destructive focus-visible:ring-destructive/30",
            )}
            aria-invalid={!!errors.name}
          />
          {errors.name ?
            <span className="text-destructive text-xs">{errors.name[0]}</span>
          : null}
        </label>

        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium">Email</span>
          <input
            name="email"
            type="email"
            placeholder="jane@example.com"
            className={cn(
              "placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/40 border-glass-border bg-glass rounded-xl border px-4 py-2.5 text-sm shadow-sm backdrop-blur-md outline-none focus-visible:ring-2",
              errors.email &&
                "border-destructive focus-visible:ring-destructive/30",
            )}
            aria-invalid={!!errors.email}
          />
          {errors.email ?
            <span className="text-destructive text-xs">{errors.email[0]}</span>
          : null}
        </label>
      </div>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium">
          Subject{" "}
          <span className="text-muted-foreground font-normal">(optional)</span>
        </span>
        <input
          name="subject"
          placeholder="Project inquiry"
          className={cn(
            "placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/40 border-glass-border bg-glass rounded-xl border px-4 py-2.5 text-sm shadow-sm backdrop-blur-md outline-none focus-visible:ring-2",
            errors.subject &&
              "border-destructive focus-visible:ring-destructive/30",
          )}
          aria-invalid={!!errors.subject}
        />
        {errors.subject ?
          <span className="text-destructive text-xs">{errors.subject[0]}</span>
        : null}
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium">Message</span>
        <textarea
          name="message"
          placeholder="Tell me about your project..."
          rows={5}
          className={cn(
            "placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/40 border-glass-border bg-glass rounded-xl border px-4 py-3 text-sm shadow-sm backdrop-blur-md outline-none focus-visible:ring-2",
            errors.message &&
              "border-destructive focus-visible:ring-destructive/30",
          )}
          aria-invalid={!!errors.message}
        />
        {errors.message ?
          <span className="text-destructive text-xs">{errors.message[0]}</span>
        : null}
      </label>

      <Button
        type="submit"
        className="self-center">
        Send message
      </Button>

      {success ?
        <p
          role="status"
          className="rounded-xl border border-emerald-500/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-700 dark:text-emerald-300">
          Opening your mail client… If it doesn’t open, email directly at{" "}
          <a
            href={`mailto:${profile.email}`}
            className="underline underline-offset-2">
            {profile.email}
          </a>
          .
        </p>
      : null}
    </form>
  );
}
