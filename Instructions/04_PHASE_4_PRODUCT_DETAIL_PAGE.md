Here is the next file.

Save this as:

`04_PHASE_4_PRODUCT_DETAIL_PAGE.md`

---

```md id="p4h3k2"
# Phase 4 — Product Detail Page (Dynamic Route)

---

## 🎯 Objective

Build a dynamic product detail page using the Shopify product handle.

This phase introduces:

- Dynamic routing
- Individual product fetching
- Variant selection UI (no cart logic yet)
- Structured luxury product layout

⚠️ Do NOT implement cart mutations yet.  
⚠️ Do NOT implement checkout logic yet.  
⚠️ Add to Cart button is UI-only for now.  

---

## 🧱 Architecture Rules

- Use App Router dynamic route
- Fetch product via service layer (NOT directly from component)
- Maintain separation:

```

UI → productService → shopifyService → shopifyClient

```id="rr6v3m"

- No inline GraphQL queries in components
- Strong TypeScript usage
- Handle missing product gracefully (404)

---

## 📁 Required File

Create:

```

/app/products/[handle]/page.tsx

```id="vzk4dn"

If needed, also create:

```

/components/product/

````

For modular layout pieces (recommended).

---

## 1️⃣ Dynamic Route Implementation

The route must:

- Read `handle` from params
- Call `getProductByHandle(handle)`
- Render product details
- Return `notFound()` if product does not exist

Must handle:

- Invalid handle
- API failure
- Null response

Gracefully.

---

## 2️⃣ Product Detail Layout Requirements

Display:

### A. Image Gallery
- Main image
- Thumbnail previews
- Click-to-change main image (basic state handling)
- No heavy animation yet

---

### B. Product Information
- Title
- Price
- Compare-at price (if exists)
- Availability indicator
- Description (sanitized rendering)

---

### C. Variant Selector

If product has variants:

- Render dropdown or buttons
- Allow selecting variant
- Maintain selected variant in state

No mutation logic yet.

---

### D. Quantity Selector

- Simple increment/decrement
- Prevent quantity < 1

No cart logic yet.

---

### E. Add to Cart Button

Add button styled properly.

But for now:

```ts
// TODO: Connect to cart mutation in Phase 5
``` id="m71zoc"

Button should not break app.
It can console.log selected variant for now.

---

## 🎨 Design Expectations

This is a luxury dessert brand.

Layout must feel:

- Spacious
- Premium
- Balanced
- Minimal
- Refined

Avoid:
- Dense UI
- Overly technical styling
- Loud UI components

Use:
- Proper grid layout
- Large typography
- Elegant spacing
- Subtle hover effects

---

## 🧠 Error Handling Requirements

- If product not found → render Next.js notFound()
- If API error → show graceful fallback message
- No white screen crashes
- No undefined errors

---

## 🚫 Do NOT Implement Yet

- cartCreate mutation
- cartLinesAdd mutation
- CartContext
- Checkout redirect
- Webhooks
- Payment logic
- Admin API
- Delivery integrations

We are still in read-only stage.

---

## 📌 Completion Checklist

Before completing Phase 4, confirm:

- Dynamic routing works
- Product loads by handle
- Variants selectable
- Quantity selector works
- Add to Cart is UI-only placeholder
- No mutation logic implemented
- No cart state exists yet

---

## 🏁 Deliverable

After implementation, provide:

1. Summary of dynamic route architecture
2. Explanation of how product state is managed
3. Confirmation that cart integration has NOT been implemented yet

Then STOP and wait for:

**Phase 5 — Cart System Infrastructure**
````

---

Next file:

`05_PHASE_5_CART_SYSTEM.md`
