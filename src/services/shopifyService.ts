import { shopifyClient } from '@/lib/shopifyClient';

/**
 * Reusable commerce data layer wrapper for Shopify Storefront API
 * 
 * @param query GraphQL query string
 * @param variables Optional variables for the query
 * @returns Typed response from Shopify
 */
export async function shopifyRequest<T>(query: string, variables?: object): Promise<T> {
    try {
        const data = await shopifyClient.request<T>(query, variables);
        return data;
    } catch (error) {
        // Log meaningful debugging info for developers but avoid exposing internal details to UI
        console.error('[Shopify API Request Error]:', error);

        // Normalized error structure handling depending on your needs.
        // For now, we throw a generic error so the app doesn't crash with raw GraphQL errors.
        throw new Error('Failed to fetch data from Shopify. Please check your connection and configuration.');
    }
}
