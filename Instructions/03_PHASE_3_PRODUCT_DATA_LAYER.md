Here is the next file.

Save this as:

`03_PHASE_3_PRODUCT_DATA_LAYER.md`

---

```md
# Phase 3 — Product Data Layer

---

## 🎯 Objective

Implement the product data layer using Shopify Storefront API.

This phase connects real product data to the frontend for the first time.

⚠️ Do NOT implement cart logic yet.  
⚠️ Do NOT implement checkout logic yet.  
⚠️ Do NOT implement mutations yet.  

We are only building product queries and rendering them cleanly.

---

## 🧱 Architecture Rules

- GraphQL queries must live in `/graphql/queries`
- Types must live in `/types`
- No inline queries inside components
- UI components must not directly call the Shopify client
- Use the service abstraction layer created in Phase 2

Maintain clean separation:

```

Component → Service → Shopify Client → API

```

---

## 📁 Required Files

Create:

```

/graphql/queries/products.ts
/types/shopify.ts
/services/productService.ts

```

---

## 1️⃣ GraphQL Queries

In:

```

/graphql/queries/products.ts

```

Create:

### A. Get Products Query

Should fetch:

- id
- title
- handle
- featured image
- price range
- availableForSale

Limit to first 12 products.

---

### B. Get Product By Handle Query

Should fetch:

- id
- title
- description
- images (multiple)
- variants
- price
- compareAtPrice (if exists)
- availableForSale

Keep query clean and reusable.

---

## 2️⃣ Type Definitions

In:

```

/types/shopify.ts

```

Define:

- Product
- ProductVariant
- Money
- Image
- ProductConnection
- GraphQL response shapes

Use strong typing.
No `any` types allowed.

Prepare types for scalability.

---

## 3️⃣ Product Service Layer

In:

```

/services/productService.ts

```

Create:

### getProducts()

- Calls Shopify request wrapper
- Returns normalized product array
- Handles API errors gracefully

### getProductByHandle(handle: string)

- Fetch single product
- Returns structured product object
- Handles null cases safely

No UI logic inside service.

---

## 4️⃣ Homepage Product Integration

Update:

```

/app/page.tsx

```

Now:

- Fetch products using getProducts()
- Render simple product grid
- Display:
  - Image
  - Title
  - Price
- Link product to:
  `/products/[handle]`

Keep styling minimal but elegant.

No heavy animation yet.

---

## 5️⃣ Loading & Error States

Add:

- Basic loading state
- Graceful fallback UI if products fail to load
- Do NOT crash the app

Prepare for production resilience.

---

## 🚫 Do NOT Implement Yet

- Cart mutations
- Add to cart logic
- Checkout redirect
- Webhooks
- Inventory updates
- Payment logic
- Admin API

This phase is read-only product data.

---

## 🧠 Engineering Expectations

- Clean async handling
- No duplicated logic
- Reusable data functions
- Proper null safety
- Proper TypeScript coverage

This is production-level structure, not demo code.

---

## 📌 Completion Checklist

Before finishing Phase 3, confirm:

- Queries are separated properly
- Types are strongly defined
- Service abstraction works
- Homepage displays live Shopify products
- No cart functionality exists yet
- No checkout functionality exists yet

---

## 🏁 Deliverable

After implementation, provide:

1. Summary of product data architecture
2. Explanation of how service layer connects to UI
3. Confirmation that no cart or mutation logic exists yet

Then STOP and wait for:

**Phase 4 — Product Detail Page**
```

---

Next file:

`04_PHASE_4_PRODUCT_DETAIL_PAGE.md`
