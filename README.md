# Noviq Frontend Developer Guide

Noviq is a Next.js application for AI-assisted video editing. The app uses the App Router, React components, Tailwind CSS, Radix primitives, `lucide-react`, and shared utilities under `app/src`.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

Available commands:

```bash
npm run dev      # Start the development server
npm run lint     # Run ESLint
npm run build    # Create a production build
npm run start    # Serve the production build
```

---

## Project Conventions

Follow these conventions when adding or updating code. They keep the UI consistent and make common changes easy to configure.

---

### 1. Use Next.js `Image`

Use `Image` from `next/image` for images instead of a raw `<img>` element. Provide dimensions, an appropriate `alt`, and a responsive class when needed.

✅ **Good:**
```jsx
import Image from "next/image";

<Image
  src={template.image}
  alt={`${template.title} preview`}
  width={640}
  height={360}
  className="h-auto w-full object-cover"
/>
```

❌ **Bad:**
```jsx
<img src={template.image} alt={template.title} />
```

For a containing element with a fixed aspect ratio, use `fill` and make the parent relative:

✅ **Good:**
```jsx
<div className="relative aspect-video overflow-hidden rounded-xl">
  <Image
    src="/LandingPagemockup.png"
    alt="Noviq editor preview"
    fill
    sizes="(max-width: 768px) 100vw, 768px"
    className="object-cover"
  />
</div>
```

❌ **Bad:**
```jsx
<div className="relative aspect-video overflow-hidden rounded-xl">
  <img src="/LandingPagemockup.png" alt="Noviq editor preview" className="object-cover" />
</div>
```

---

### 2. Keep Text and Content Data-Driven

Store repeated text and configurable content in an array or object near the top of the file. Map over the data instead of duplicating markup. This makes copy changes and future configuration easier.

✅ **Good:**
```jsx
const features = [
  {
    title: "AI Style Match",
    description: "Match pacing, transitions, and tone from an inspiration video.",
  },
  {
    title: "Smart Video Editing",
    description: "Turn raw footage into a polished first draft in minutes.",
  },
];

{features.map((feature) => (
  <article key={feature.title}>
    <h3 className="font-bold">{feature.title}</h3>
    <p className="text-sm text-slate-500">{feature.description}</p>
  </article>
))}
```

❌ **Bad:**
```jsx
<article>
  <h3 className="font-bold">AI Style Match</h3>
  <p className="text-sm text-slate-500">Match pacing, transitions, and tone from an inspiration video.</p>
</article>
<article>
  <h3 className="font-bold">Smart Video Editing</h3>
  <p className="text-sm text-slate-500">Turn raw footage into a polished first draft in minutes.</p>
</article>
```

Use an object for grouped configuration:

✅ **Good:**
```jsx
const pageContent = {
  eyebrow: "Smart Templates",
  title: "Start with Ready-Made Designs",
  description: "Prompt-ready starting points for your next edit.",
};
```

❌ **Bad:**
```jsx
<span>Smart Templates</span>
<h2>Start with Ready-Made Designs</h2>
<p>Prompt-ready starting points for your next edit.</p>
```

---

### 3. Use `cn` for Conditional Classes

Use the shared `cn` helper to combine Tailwind classes, especially when classes depend on state or props. Do not build class strings manually with complex template literals.

✅ **Good:**
```jsx
import { cn } from "@/lib/utils";

<span
  className={cn(
    "rounded-full px-3 py-1 text-xs font-semibold",
    active ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500",
  )}
>
  {active ? "Active" : "Inactive"}
</span>
```

❌ **Bad:**
```jsx
<span className={`rounded-full px-3 py-1 text-xs font-semibold ${active ? "bg-emerald-50 text-emerald-600" : "bg-slate-100 text-slate-500"}`}>
  {active ? "Active" : "Inactive"}
</span>
```

---

### 4. Lazy-Load Heavy Components

Use `next/dynamic` for heavy, optional, or below-the-fold components so they are not included in the initial page load.

✅ **Good:**
```jsx
import dynamic from "next/dynamic";

const VideoEditor = dynamic(() => import("@/components/VideoEditor"), {
  loading: () => <p className="text-sm text-slate-500">Loading editor...</p>,
});

export default function EditorPage() {
  return <VideoEditor />;
}
```

❌ **Bad:**
```jsx
import VideoEditor from "@/components/VideoEditor";

export default function EditorPage() {
  return <VideoEditor />;
}
```

If a component depends on browser-only APIs, disable server rendering for that component:

```jsx
const Waveform = dynamic(() => import("@/components/Waveform"), {
  ssr: false,
});
```

---

### 5. Use Clean Semantic HTML for Better SEO (Required)

Use semantic HTML elements to improve SEO and accessibility. This helps search engines understand your content structure and makes your app more accessible to screen readers.

**Element Reference:**

| Element | When To Use |
|---------|-------------|
| `<main>` | Main content of the page (only one per page) |
| `<section>` | Each distinct section/path in a page (must have an `id`) |
| `<article>` | Self-contained content (blog post, comment, card) |
| `<header>` | Top of page or section |
| `<footer>` | Bottom of page |
| `<span>` | Inline text styling |
| `<div>` | Generic container for deeper/layout content inside sections |

✅ **Good:**
```jsx
<main>
  <header>
    <span>Logo</span>
  </header>

  <section id="hero">
    <h1>Welcome to Noviq</h1>
  </section>

  <section id="features">
    <h2>Features</h2>
    <article>
      <h3>AI Style Match</h3>
      <p>...</p>
    </article>
    <div>
      {/* deeper layout / grid / flex containers */}
    </div>
  </section>

  <section id="pricing">
    <h2>Pricing</h2>
  </section>

  <footer>
    <span>© 2026 Noviq</span>
  </footer>
</main>
```

❌ **Bad:**
```jsx
<div>
  <div>Logo</div>
  <div>Hero</div>
  <div>Features</div>
  <div>Pricing</div>
  <div>Footer</div>
</div>
```

---

### 6. Use Tailwind for Styling

Use Tailwind utility classes for layout, spacing, typography, borders, responsive behavior, and standard colors. Keep styling close to the component.

For imported or runtime styling that cannot be represented by a Tailwind class, use inline `style` values. This is the expected pattern for shared colors:

✅ **Good:**
```jsx
import { COLORS } from "@/lib/constants";

<button
  className="rounded-full px-5 py-2.5 text-sm font-semibold text-white"
  style={{ backgroundColor: COLORS.button }}
>
  Start creating
</button>
```

❌ **Bad:**
```jsx
<button style={{ backgroundColor: "#7E56D8", borderRadius: "9999px", padding: "10px 20px" }}>
  Start creating
</button>
```

Use vanilla CSS in `app/globals.css` only for global rules, theme variables, animations, or styling that genuinely cannot be expressed with Tailwind. Avoid adding component-specific CSS files when utilities are sufficient.

---

### 7. Use Colors from `lib/constants`

Do not add hard-coded brand colors to components. Import the shared `COLORS` object from `@/lib/constants`. Add a new named color there when a reusable color is needed.

✅ **Good:**
```jsx
import { COLORS } from "@/lib/constants";

<button
  className="rounded-lg px-4 py-2 font-semibold text-white"
  style={{ backgroundColor: COLORS.button }}
>
  Save
</button>
```

❌ **Bad:**
```jsx
<button className="rounded-lg px-4 py-2 font-semibold text-white" style={{ backgroundColor: "#7E56D8" }}>
  Save
</button>
```

Use the constants for SVG attributes and other runtime values as well:

```jsx
<Check size={14} color={COLORS.success} aria-hidden="true" />
```

Provider-specific colors, such as the official Google logo colors, may remain fixed because they are part of the provider's brand identity rather than Noviq's application theme.

---

### 8. Use Only `lucide-react` for Icons

Import icons from `lucide-react`. Do not add a second icon library or draw custom icon SVGs for standard interface actions.

✅ **Good:**
```jsx
import { Menu } from "lucide-react";

<button type="button" aria-label="Open menu">
  <Menu className="size-4" aria-hidden="true" />
</button>
```

❌ **Bad:**
```jsx
<button type="button" aria-label="Open menu">
  <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
</button>
```

Use an accessible label for icon-only buttons. Use `size`, `className`, and the icon's supported props to control appearance.

---

### 9. Use `@/` Imports

Use the configured `@/` alias for imports from `app/src`. Do not use relative paths such as `../../components` or `../lib`.

✅ **Good:**
```jsx
import AuthCard from "@/components/AuthPage/AuthCard";
import Logo from "@/components/ui/logo";
import { cn } from "@/lib/utils";
import { COLORS } from "@/lib/constants";
```

❌ **Bad:**
```jsx
import AuthCard from "../../../components/AuthPage/AuthCard";
import Logo from "../../../components/ui/logo";
```

The alias is configured in `jsconfig.json`:

```json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./app/src/*"]
    }
  }
}
```

---

### 10. Use the Shared Navigation API

Use `useNavigate` from `@/lib/hooks/router` for client-side navigation. Do not import `useRouter` directly into feature components unless the shared hook cannot support the required behavior.

✅ **Good:**
```jsx
"use client";
import { useNavigate } from "@/lib/hooks/router";

export default function ProjectActions({ project }) {
  const navigate = useNavigate();

  return (
    <button onClick={() => navigate.to("project", { id: project.id })}>
      Open project
    </button>
  );
}
```

❌ **Bad:**
```jsx
"use client";
import { useRouter } from "next/navigation";

export default function ProjectActions({ project }) {
  const router = useRouter();

  return (
    <button onClick={() => router.push(`/project?id=${project.id}`)}>
      Open project
    </button>
  );
}
```

**Method Signature:**
```jsx
navigate.to("page", { id: "123", category: "video" }, false);
```

- **First argument** – Route name. `"home"` → `/`, other routes → `/<route>`
- **Second argument** – Optional query params, e.g., `/project?id=123&category=video`
- **Third argument** – `false` (push) = allow back button, `true` (replace) = disable back button

Use `replace: true` mostly for authentication redirects, so users cannot navigate back to a page they should no longer access.

✅ **Good (Auth):**
```jsx
navigate.to("dashboard", { id: user.id }, true); // Replace login page
```

❌ **Bad (Auth):**
```jsx
navigate.to("dashboard", { id: user.id }); // User can go back to login
```

The hook also exposes browser navigation helpers:

```jsx
const navigate = useNavigate();

navigate.back();    // Go back one page
navigate.refresh(); // Refresh current page
```

---

### 11. Remove Unused Imports

Keep imports limited to modules that are used in the file. Remove unused components, hooks, icons, helpers, and other imports immediately. This keeps files easier to read and prevents lint failures.

✅ **Good:**
```jsx
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function PreviewLink() {
  return (
    <a href="/preview">
      Preview
      <ArrowUpRight className="size-4" aria-hidden="true" />
    </a>
  );
}
```

❌ **Bad:**
```jsx
import Image from "next/image";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

export default function PreviewLink() {
  return <a href="/preview">Preview</a>;
}
```

Before committing, run `npm run lint` and remove every unused-import warning or error reported by ESLint.

---

### 12. Comment Complex or Custom Logic

Add a short comment when code uses a non-obvious algorithm, workaround, business rule, or custom abstraction that another developer would not understand from the code alone. Explain what the code is doing and why it is needed. Keep comments next to the relevant code and update them when the behavior changes.

✅ **Good:**
```jsx
// Replace the auth route so the browser Back button cannot reopen the sign-in screen.
navigate.to("dashboard", { id: user.id }, true);
```

```jsx
// Keep the preview dimensions stable while the image loads to prevent layout shift.
const previewSize = { width: 640, height: 360 };
```

❌ **Bad:**
```jsx
// Set the user ID.
const userId = user.id;

// Render the button.
return <button>Save</button>;
```

Do not add comments that merely repeat the code. Prefer clear names and simple code for obvious behavior, and reserve comments for context, intent, or decisions that are easy to miss.

## Before Opening a Pull Request

Run the checks locally:

```bash
npm run lint
npm run build
```

Confirm that:
- [ ] New images use `next/image`
- [ ] Repeated text is data-driven
- [ ] Conditional classes use `cn`
- [ ] Heavy components are lazy-loaded where appropriate
- [ ] Semantic HTML used (`main`, `section` with `id`, `article`, `header`, `footer`, `span`, `div`)
- [ ] Shared colors come from `COLORS`
- [ ] Icons come from `lucide-react`
- [ ] Internal imports use `@/`
- [ ] Navigation uses `useNavigate`
- [ ] Unused imports have been removed
- [ ] Complex or custom logic has useful comments

---

## Useful Documentation

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Image Component](https://nextjs.org/docs/app/api-reference/components/image)
- [Next.js Dynamic Import](https://nextjs.org/docs/app/building-your-application/optimizing/lazy-loading)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Lucide React Documentation](https://lucide.dev/guide/packages/lucide-react)
