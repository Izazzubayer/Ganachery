Here is the next file.

Save this as:

`02_PHASE_2_SHOPIFY_API_LAYER.md`

---

````md
# Phase 2 — Shopify Storefront API Infrastructure

---

## 🎯 Objective

Build a clean, reusable Shopify Storefront API integration layer.

This phase establishes the commerce backend connection structure.

⚠️ Do NOT fetch products yet.  
⚠️ Do NOT implement cart mutations yet.  
⚠️ Do NOT modify UI heavily yet.  

We are only building the API infrastructure foundation.

---

## 🧱 Requirements

We are integrating with:

- Shopify Storefront API
- GraphQL
- Environment variable-based configuration
- Secure, scalable architecture

---

## 📦 Install Required Dependency

Install:

```bash
npm install graphql-request
````

Do not add unnecessary dependencies.

---

## 📁 Required File Structure

Create:

```
/lib/shopifyClient.ts
/graphql/
/types/
/services/
```

We are preparing a reusable commerce data layer.

---

## 1️⃣ Shopify Client Setup

Create:

```
/lib/shopifyClient.ts
```

### Requirements:

* Use `graphql-request`
* Construct endpoint dynamically using:

```ts
process.env.SHOPIFY_STORE_DOMAIN
```

* Add headers using:

```ts
process.env.SHOPIFY_STOREFRONT_TOKEN
```

* Implement reusable GraphQL client instance
* Add minimal error handling wrapper

---

### ⚠️ Authentication Placeholder Rules

Do NOT hardcode credentials.

Add clear placeholder comments:

```ts
// TODO: Add Shopify Storefront Access Token
// AUTHENTICATION REQUIRED HERE
// Ensure environment variables are configured in Vercel
```

If token is missing, fail gracefully.

---

## 2️⃣ Environment Configuration

Create:

```
.env.example
```

Include:

```
SHOPIFY_STORE_DOMAIN=
SHOPIFY_STOREFRONT_TOKEN=
```

Do NOT commit real credentials.

---

## 3️⃣ API Utility Wrapper

Create:

```
/services/shopifyService.ts
```

This file should:

* Wrap client calls
* Handle try/catch
* Normalize error responses
* Prepare for future expansion

Example structure:

```ts
export async function shopifyRequest<T>(query: string, variables?: object): Promise<T> {
  try {
    // request logic
  } catch (error) {
    // normalized error handling
  }
}
```

No product queries yet.

---

## 4️⃣ Error Handling Philosophy

Errors must:

* Not crash the app
* Return structured response
* Log meaningful debugging info
* Avoid exposing internal details

Prepare for production-level resilience.

---

## 🚫 Do NOT Implement Yet

* Product queries
* Product display
* Cart mutations
* Checkout logic
* Webhooks
* Admin API
* Payment integration

This phase is infrastructure only.

---

## 🧠 Architecture Standards

* Code must be modular
* No inline GraphQL queries inside components
* GraphQL queries will live in `/graphql`
* Services layer must be separate from UI
* Types will be defined in `/types`

Think scalable architecture.

---

## 📌 Completion Checklist

Before completing Phase 2, confirm:

* Shopify client file created
* Environment variables referenced properly
* `.env.example` created
* Service wrapper implemented
* No credentials hardcoded
* No product fetching implemented yet

---

## 🏁 Deliverable

After implementation, provide:

1. Summary of API layer structure
2. Explanation of how environment variables are used
3. Confirmation that no commerce logic has been implemented yet

Then STOP and wait for:

**Phase 3 — Product Data Layer**

```

---

Next file:

`03_PHASE_3_PRODUCT_DATA_LAYER.md`
```
