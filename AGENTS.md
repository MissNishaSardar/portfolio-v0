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
