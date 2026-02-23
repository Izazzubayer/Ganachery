# Phase 1 — Project Foundation & Architecture Setup

---

## 🎯 Objective

Establish a clean, scalable, production-ready foundation for the Ganachery headless commerce storefront.

This phase focuses strictly on architecture and structure.

⚠️ Do NOT implement Shopify integration yet.  
⚠️ Do NOT implement product fetching yet.  
⚠️ Do NOT implement cart logic yet.

This phase is about building the base correctly.

---

## 🧱 Tech Stack Requirements

- Next.js (App Router)
- TypeScript
- TailwindCSS
- Clean modular folder structure
- Production-ready conventions

---

## 📁 Required Folder Structure

Create the following structure:

/app
/components
/lib
/services
/graphql
/types
/hooks
/context
/styles


If using `src/`, maintain consistent structure inside it.

Structure must be clean and future-proof.

---

## 🏗 Core Setup Requirements

### 1️⃣ TypeScript Configuration

- Ensure TypeScript is properly configured.
- Strict mode enabled.
- No implicit any types.

---

### 2️⃣ Tailwind Setup

- Proper Tailwind configuration
- Clean design token structure
- Define base typography scale
- Add container width utility
- Establish spacing rhythm

---

### 3️⃣ Global Layout

Create:


/app/layout.tsx


Must include:

- Global HTML structure
- Body wrapper
- Main container
- Header
- Footer
- Proper metadata configuration

Keep it minimal but scalable.

---

### 4️⃣ Header Component

Create:


/components/layout/Header.tsx


Must include:

- Logo placeholder
- Navigation links:
  - Shop
  - Collections
  - Gifting
  - About
- Cart icon placeholder (no functionality yet)

Keep styling minimal and elegant.

---

### 5️⃣ Footer Component

Create:


/components/layout/Footer.tsx


Include:

- Brand description
- Quick links
- Social placeholders
- Copyright

Maintain luxury tone.

---

### 6️⃣ Basic Homepage Placeholder

Create:


/app/page.tsx


Include:

- Hero section placeholder
- Section for featured products (static placeholder only)
- Section for gifting
- Clean vertical spacing

Do NOT fetch data.
Do NOT connect APIs.
Use mock placeholders only.

---

## 🎨 Design Foundation Rules

The base UI should reflect:

- Generous whitespace
- Minimal color usage
- Warm neutral tones
- Elegant typography hierarchy
- Subtle hover transitions
- No flashy effects

This is a luxury dessert brand.

Avoid:
- Startup SaaS aesthetics
- Heavy shadows
- Neon colors
- Overcomplicated layout

---

## 🧠 Architectural Standards

- Components must be modular
- No deeply nested messy structures
- Separate layout components from UI components
- No business logic yet
- No API calls yet

Think long-term scalability.

---

## 📌 Completion Checklist

Before finishing Phase 1, confirm:

- Folder structure created
- Layout configured
- Header & Footer implemented
- Tailwind working properly
- Homepage placeholder rendered cleanly
- No Shopify integration yet
- No cart logic yet

---

## 🏁 Deliverable

After implementation, provide:

1. Summary of created structure
2. Any architectural decisions made
3. Confirmation that no API integration has been started

Then STOP and wait for:

**Phase 2 — Shopify Storefront API Infrastructure**
