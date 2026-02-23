# Ganachery Headless Commerce Project
## Master Context for AI Agent (Cursor Execution)

---

## 📌 Project Overview

We are building a **production-ready headless Shopify luxury eCommerce storefront** for:

**Brand:** Ganachery  
**Location:** Bangladesh  
**Category:** Premium artisanal chocolates, stuffed dates, and luxury gifting boxes  

This project is developed by **Pixel Mango (creative agency)**.

The goal is to create a scalable, maintainable, luxury-grade commerce frontend while Shopify handles all secure commerce operations.

---

## 🎯 Core Objective

Build a high-end luxury storefront using:

- Next.js (App Router)
- TypeScript
- TailwindCSS
- Shopify Storefront API (Headless)
- Clean modular architecture
- Production-ready structure (NOT demo code)

This is not a quick prototype.  
This must be structured like a real-world scalable project.

---

## 🧱 Architecture Philosophy

### Pixel Mango Controls:
- Frontend UX
- Visual luxury aesthetic
- Conversion design
- Product discovery experience
- Cart experience
- Performance optimization

### Shopify Controls:
- Checkout
- Payment processing
- Order creation
- Inventory management
- Email confirmations
- Admin dashboard
- Security & PCI compliance

We do NOT rebuild checkout.
We redirect to Shopify’s secure checkout.

---

## 🛒 Operational Pipeline (End-to-End Vision)

Customer Journey:

1. User browses products
2. User adds product to cart
3. Cart is created via Shopify Storefront API
4. User clicks checkout
5. Redirect to Shopify checkout
6. Payment handled by Shopify
7. Order created in Shopify Admin
8. Store owner notified
9. Fulfillment handled in Shopify
10. Future webhook integrations possible

The frontend must be structured to support this flow cleanly.

---

## ⚠️ Security & Credential Rules

The AI agent MUST follow these rules:

- Never hardcode tokens
- Never hardcode API secrets
- Never expose admin credentials
- Never implement real payment credentials
- Always use environment variables

Use placeholders like:

```ts
process.env.SHOPIFY_STORE_DOMAIN
process.env.SHOPIFY_STOREFRONT_TOKEN


When authentication is required, clearly mark:

// TODO: AUTHENTICATION REQUIRED HERE
// PLACEHOLDER FOR BACKEND SECRET

📁 Expected Folder Structure

The architecture should evolve toward:

/app
/components
/lib
/services
/graphql
/types
/hooks
/context
/styles

Structure must remain clean and scalable.


🚀 Development Approach

We will build in controlled phases:

Foundation & structure

Shopify API infrastructure

Product data layer

Product detail pages

Cart system

Operational placeholders

Luxury UI refinement

The AI agent must complete one phase at a time.
It must NOT jump ahead.
It must wait for the next instruction after each phase.


🧠 Engineering Mindset Required

The AI agent must behave like:

A senior full-stack engineer

Building a production-ready system

Thinking about scalability

Thinking about maintainability

Thinking about clean architecture

Not producing demo-level shortcuts


🏁 Current Status

We are at:

Phase 0 — Context Initialization

No implementation has started yet.

The next file will begin Phase 1: Project Foundation & Structure.