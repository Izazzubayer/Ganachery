Here is the next file.

Save this as:

`05_PHASE_5_CART_SYSTEM.md`

---

```md id="k9x2lm"
# Phase 5 — Cart System Infrastructure

---

## 🎯 Objective

Implement a fully functional Shopify cart system using Storefront API mutations.

This phase introduces:

- cartCreate mutation
- cartLinesAdd mutation
- getCart query
- Cart state management
- Cart drawer UI
- Checkout redirection to Shopify

⚠️ We are still NOT building custom checkout.
⚠️ Shopify handles payment securely.
⚠️ No payment credentials should be implemented.

---

## 🧱 Architecture Rules

Maintain separation of concerns:

```

UI → CartContext → cartService → shopifyService → shopifyClient

```id="9k6dbe"

No inline GraphQL mutations in UI components.

All GraphQL mutations must live in:

```

/graphql/mutations/

```id="bbv4m1"

---

## 📁 Required Files

Create:

```

/graphql/mutations/cart.ts
/services/cartService.ts
/context/CartContext.tsx
/components/cart/CartDrawer.tsx

```id="u6j2rp"

---

## 1️⃣ GraphQL Mutations

In:

```

/graphql/mutations/cart.ts

```id="l3wyvs"

Implement:

### A. cartCreate

Should return:
- cart id
- checkoutUrl
- lines
- estimated cost

---

### B. cartLinesAdd

Should:
- Accept cartId
- Accept variantId
- Accept quantity
- Return updated cart

---

### C. getCart

Query to retrieve cart by ID.

Keep queries reusable and typed.

---

## 2️⃣ Cart Service Layer

In:

```

/services/cartService.ts

```id="oc5ztu"

Implement:

- createCart()
- addToCart(cartId, variantId, quantity)
- fetchCart(cartId)

Must:
- Handle API errors gracefully
- Normalize cart response
- Return safe structured data

No UI logic here.

---

## 3️⃣ Cart Context

In:

```

/context/CartContext.tsx

```id="xw4br8"

Responsibilities:

- Store cart ID
- Persist cart ID in localStorage
- Initialize cart if none exists
- Store cart items
- Provide:
  - addItem()
  - removeItem() (optional)
  - refreshCart()
  - checkout()

Cart ID must persist across sessions.

If cart ID exists in localStorage:
- Attempt to fetch it
- If invalid → create new cart

Handle safely.

---

## 4️⃣ Cart Drawer UI

In:

```

/components/cart/CartDrawer.tsx

```id="p2g8nk"

Must:

- Slide-in drawer
- Display cart items
- Show:
  - Product title
  - Variant
  - Quantity
  - Price
- Show subtotal
- Show Checkout button

Luxury styling:
- Minimal
- Spacious
- Elegant
- Soft transitions

---

## 5️⃣ Connect Add to Cart Button

Update:

```

/app/products/[handle]/page.tsx

```id="m8zq1r"

Now:

- Replace placeholder Add to Cart logic
- Call CartContext.addItem()
- Pass:
  - Selected variant ID
  - Quantity

Ensure:
- Proper loading state
- Error handling
- No crashes

---

## 6️⃣ Checkout Redirection

Checkout button must:

Redirect to:

```

cart.checkoutUrl

````id="v9r4hs"

Add comment in code:

```ts
// Checkout handled securely by Shopify backend
// No payment logic implemented here
````

Do NOT build custom checkout.
Do NOT implement payment gateways.

---

## 🧠 Edge Case Handling

Must handle:

* Empty cart
* Invalid cart ID
* API failure
* Network errors
* Missing variant selection

App must not crash.

---

## 🚫 Do NOT Implement

* Admin API
* Payment API
* Webhooks
* Delivery integration
* bKash tracking
* Nagad integration
* Inventory sync
* Order tracking page

We are only building storefront cart.

---

## 📌 Completion Checklist

Before completing Phase 5, confirm:

* Cart creation works
* Add to cart works
* Cart ID persists
* Cart drawer renders correctly
* Checkout redirects to Shopify
* No payment logic implemented
* No webhook logic implemented

---

## 🏁 Deliverable

After implementation, provide:

1. Summary of cart architecture
2. Explanation of state persistence
3. Confirmation that checkout is Shopify-hosted
4. Confirmation that no payment credentials were implemented

Then STOP and wait for:

**Phase 6 — Operational Pipeline & Webhook Placeholders**

```

---

Next file:

`06_PHASE_6_OPERATIONAL_PIPELINE.md`
```
