import { GraphQLClient } from 'graphql-request';

// TODO: Add Shopify Storefront Access Token
// AUTHENTICATION REQUIRED HERE
// Ensure environment variables are configured in Vercel
const domain = process.env.SHOPIFY_STORE_DOMAIN;
const token = process.env.SHOPIFY_STOREFRONT_TOKEN;

// Construct endpoint dynamically
const endpoint = domain ? `https://${domain}/api/2024-01/graphql.json` : '';

if (!domain || !token) {
    console.warn(
        '⚠️ Shopify Storefront domain or token is missing. Please configure SHOPIFY_STORE_DOMAIN and SHOPIFY_STOREFRONT_TOKEN.'
    );
}

// Implement reusable GraphQL client instance
export const shopifyClient = new GraphQLClient(endpoint, {
    headers: {
        'X-Shopify-Storefront-Access-Token': token || '',
        'Content-Type': 'application/json',
    },
});
