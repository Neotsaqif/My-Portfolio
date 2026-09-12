# Design Specification: Black Modern Glassmorphism Theme

## 1. Executive Summary
This document specifies the design system and aesthetic guidelines for updating Tsaqif Neoclovin's single-page portfolio website. The target aesthetic combines a **Deep Obsidian Black** base background with **Sleek Frosted Glass (Glassmorphism)** components, high-contrast typography, and subtle ambient glows.

---

## 2. Visual Identity & Color Palette

### Base Surfaces
- **Deep Obsidian Background**: `#050507` (Pitch black with subtle cool undertones)
- **Glass Panel Surface**: `rgba(255, 255, 255, 0.03)` with `backdrop-filter: blur(16px)`
- **Glass Panel Hover**: `rgba(255, 255, 255, 0.07)` with `backdrop-filter: blur(20px)`
- **Glass Inset Surface**: `rgba(0, 0, 0, 0.4)` with `backdrop-filter: blur(8px)`

### Borders & Reflections
- **Glass Border Default**: `1px solid rgba(255, 255, 255, 0.08)`
- **Glass Border Hover**: `1px solid rgba(255, 255, 255, 0.20)`
- **Glow Highlight**: `0 0 25px -5px rgba(99, 102, 241, 0.25)`

### Color Accents & Glows
- **Primary Accent (Indigo)**: `#6366f1` / `rgba(99, 102, 241, 0.15)`
- **Secondary Accent (Purple)**: `#a855f7` / `rgba(168, 85, 247, 0.12)`
- **Cyan Highlight**: `#06b6d4` / `rgba(6, 182, 212, 0.12)`
- **Emerald Pulse**: `#10b981` (Status indicator)

### Typography Hierarchy
- **Primary Headings**: Pure White (`#ffffff`), `font-weight: 800`, tight letter spacing.
- **Gradient Headings**: `linear-gradient(135deg, #818cf8, #c084fc, #f472b6)` clipped to text.
- **Body Text**: Zinc Light (`#e4e4e7`), 1.6 line height.
- **Muted Subtitles & Labels**: Zinc Muted (`#a1a1aa` / `#71717a`).

---

## 3. UI Component Glassmorphism Specifications

### 3.1 Header Navigation (`Navbar.jsx`)
- **Container**: Floating centered capsule on medium/large screens.
- **Style**: `backdrop-blur-xl bg-black/40 border border-white/10 rounded-full shadow-2xl`.
- **Active State**: Frosted glass highlight with subtle text glow.

### 3.2 Hero Section (`Hero.jsx`)
- **Status Badge**: Frosted glass green pill (`bg-emerald-500/10 border-emerald-500/20 text-emerald-400`).
- **Hero Photo Placeholder**: 400x400px (1:1 ratio) circular avatar framed with dual glass rings, radial gradients, and subtle dash ring animation.
- **CTA Buttons**: 
  - Primary: Glowing indigo glass gradient button (`bg-gradient-to-r from-indigo-600 to-purple-600 shadow-indigo-500/25`).
  - Secondary: Frosted translucent glass button (`bg-white/5 border-white/10 hover:bg-white/10`).

### 3.3 About Me (`About.jsx`)
- **Card Layout**: Full-width glass container with `backdrop-blur-2xl bg-white/[0.02] border-white/10`.
- **Visual Accent**: Radial ambient light orb in background corners.

### 3.4 Skills & Tech Stack (`Skills.jsx`)
- **Category Cards**: 5 distinct glass panels (`bg-white/[0.02] border-white/10 backdrop-blur-md`).
- **Skill Items**: 40x40px glass square icon placeholders with metallic initials and dark translucent background (`bg-black/50 border-white/10`).

### 3.5 Featured Projects (`Projects.jsx`)
- **Card Structure**: Glass card container with 16:9 ratio (1200x675px mockup cover) image container.
- **Project Covers**: Dark browser mockup header with dot indicators, grid pattern overlay, and metallic typography.
- **Tag Badges**: Frosted pill badges (`bg-indigo-500/10 border-indigo-500/20 text-indigo-300 font-mono`).

### 3.6 Experience Section (`Experience.jsx`)
- **Card Design**: Frosted glass panels with custom vertical gradient indicator line on the left border (`from-indigo-500 to-purple-500`).
- **Bullet Items**: Glowing bullet points with light zinc typography.

### 3.7 Contact Section (`Contact.jsx`)
- **Interactive Tiles**: 4 responsive glass link cards (`bg-white/[0.03] hover:bg-white/[0.08] border-white/10`).
- **Hover Motion**: Smooth elevation hover (`-translate-y-1`) with border glow activation.

---

## 4. Accessibility & Responsiveness
- **Contrast Ratios**: Verified text contrast ratio >= 4.5:1 against glass backgrounds.
- **Breakpoints**: 
  - Mobile (< 640px): 1-column layouts, expanded touch targets (>= 44px).
  - Tablet (640px - 1024px): 2-column grid system.
  - Desktop (> 1024px): 3-column grid system with full glass effects.
- **Performance**: Zero external images; pure SVG and CSS backdrop filter rendering.
