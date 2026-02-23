import { GraphQLClient } from 'graphql-request';

const domain = process.env.SHOPIFY_STORE_DOMAIN;
// TODO: Add Shopify Storefront Access Token
// AUTHENTICATION REQUIRED HERE
// Ensure environment variables are configured in Vercel
const token = process.env.SHOPIFY_STOREFRONT_TOKEN;

const endpoint = domain ? `https://${domain}/api/2024-01/graphql.json` : '';

if (!domain || !token) {
    console.warn('⚠️ Shopify Storefront credentials missing from environment variables.');
}

export const shopifyClient = new GraphQLClient(endpoint, {
    headers: {
        'X-Shopify-Storefront-Access-Token': token || '',
        'Content-Type': 'application/json',
    },
});
