# Implementation Plan: Tsaqif Neoclovin Portfolio

## 1. Overview
Single-page portfolio website for Full-Stack Web Developer Tsaqif Neoclovin, built with React + Tailwind CSS. Displays 6 sections (Hero → About Me → Skills / Tech Stack → Projects → Experience → Contact) in fixed order, with full responsiveness and mockup image placeholders.

## 2. Assumptions & Open Questions
- Stack: React 18 + Tailwind CSS v4 + Vite.
- Placeholders: SVG elements rendered inline/as component utilities with exact dimensions (Hero: 400x400 circular 1:1, Tech logos: 40x40 square, Projects: 1200x675 16:9 ratio).
- Styling: Modern dark/light neutral developer theme, clean layout, fully responsive (mobile, tablet, desktop).
- Sections are strictly limited to the 6 requested ones, in exact order.

## 3. Tech Stack / Architecture
- Frontend: React (Functional Components)
- Styling: Tailwind CSS v4
- Build Tool: Vite
- Deployment: Static Build (`npm run build`)

## 4. Phases

### Phase 1: Project & Tailwind Setup
**Goal:** Configure Tailwind CSS v4 in Vite + React.
**Scope:** Update `vite.config.js` with `@tailwindcss/vite`, configure `src/index.css` with `@import "tailwindcss";`, clean default Vite styles.
**Done when:** `npm run build` succeeds and Tailwind utility classes process correctly.

### Phase 2: Placeholder Asset Generators / Components
**Goal:** Create clean SVG placeholder components matching exact dimensions.
**Scope:** 
- Hero placeholder: 400x400px circular photo mockup (1:1 ratio).
- Skill logo placeholders: 40x40px square icon mockups.
- Project cover placeholders: 1200x675px 16:9 ratio mockup covers.
**Done when:** Placeholders render at specified sizes and aspect ratios without missing images.

### Phase 3: Section Components Implementation
**Goal:** Build individual React components for each section using exact content.
**Scope:**
- `Hero.jsx`: Name, tagline, 400x400 circular photo placeholder.
- `About.jsx`: Exact bio text, neat typography card.
- `Skills.jsx`: 5 category cards (Frontend, Backend, Database, Tools, Other) with 40x40 logo placeholders and items.
- `Projects.jsx`: 3 project cards with 1200x675 mockup cover images, titles, and descriptions.
- `Experience.jsx`: 2 experience entries with exact title and descriptions.
- `Contact.jsx`: Email, GitHub, Instagram, Portfolio with functional links.
**Done when:** All 6 sections render exact specified text and placeholder images.

### Phase 4: Integration, Styling Polish & Navigation
**Goal:** Wire components in single page layout in exact fixed order.
**Scope:** Assemble components in `src/App.jsx`, add header navigation with smooth scrolling to sections, refine mobile/tablet/desktop responsiveness.
**Done when:** All 6 sections display in order: Hero → About → Skills → Projects → Experience → Contact.

### Phase 5: Verification & Static Build
**Goal:** Verify responsiveness, absence of console errors, and successful build.
**Scope:** Run `npm run build` and `npm run preview` checks.
**Done when:** Build produces clean static output without warnings/errors.

## 5. Risks / Dependencies
- Dependency: Tailwind CSS v4 integration with Vite require `@tailwindcss/vite`.

## 6. Definition of Done
- [x] Implementation plan written.
- [ ] 6 sections present with exact content in exact order.
- [ ] Mockup placeholders exact size (Hero 400x400 circle, Logos 40x40, Projects 1200x675).
- [ ] Skills in 5 categories with logo placeholders.
- [ ] Responsive across mobile, tablet, desktop.
- [ ] Static build succeeds without console errors.
