# Project instructions

## Style constraints

- Never use the em dash character, codepoint U+2014, anywhere in this application. This applies to all code, comments, UI strings, metadata, commit messages, and documentation.
- When a pause or separation is needed, use a period, comma, colon, or hyphen instead. Do not use en dashes as substitutes.
- This rule supersedes any example text that contains em dashes. Always rewrite to avoid them.
- Never use ellipses in prose. Use a period instead. Spread syntax with three dots in code is allowed because the language requires it.
- Use plain speech. Keep sentences short. Split dense sentences. Use plain words. State what things do.
- Do not use parentheses for asides in prose. End the sentence and start a new one instead. Parentheses in code syntax are allowed because the language requires them.

## Components

- Only use shadcn/ui components. No external component libraries.
- Base UI is allowed only inside src/components/shadcnui wrappers. Lucide is allowed for icons.
- Component files must use PascalCase, for example UserCard.tsx.
- Exception: src/components/shadcnui keeps existing lowercase names and uses normal function declarations.
- Exception: Next.js route files such as layout.tsx and page.tsx keep framework names.
- Always use arrow functions for components outside shadcnui. Use normal functions only inside shadcnui.

## Workflow

- Prefer retrieval led reasoning. Read code before claims. Never guess unseen code.
- Use subagents for parallel free work. Work direct for simple single work.
- Share the plan before edits, commands, or git operations. Wait for approval. Do not act on assumptions.
- Ask one question at a time. Wait for the answer.

## Fast output

- Default to short answers. Give full detail only when asked.
- Use targeted reads. Read only files needed for the task.
- Do not scan node_modules, .next, or lockfiles unless asked.
- Do not run broad searches for small tasks. Prefer direct file reads.
- Use subagents only for large parallel tasks. Work direct for simple tasks.
- Keep tool calls small. Ask free tools in parallel. Call linked tools in order.
- Skip formatting, lint, and build unless the task needs it.
- State what was found, what was done, and what is next in short lines.

## Playwright

- Tests live in tests with spec.ts suffix, for example tests/home.spec.ts.
- Config lives in playwright.config.ts at repo root.
- Run tests with bun scripts. Use test for headless, test:headed for headed, test:ui for UI mode.
- Keep tests fast. Chromium only is the policy for now. Chromium uses system Chrome channel.
- Firefox and Webkit are removed until browser CDN works.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
