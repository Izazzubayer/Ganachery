import { shopifyClient } from '@/lib/shopifyClient';

/**
 * A reusable wrapper for executing Shopify Storefront GraphQL queries.
 * Handles try/catch logic, neutralizes error responses, and avoids breaking the app on failure.
 * 
 * @param query - The GraphQL query string
 * @param variables - The variables dictionary mapped for the query
 * @returns {Promise<T>} - The typed data response
 */
export async function shopifyRequest<T>(query: string, variables?: object): Promise<T> {
    if (!process.env.SHOPIFY_STORE_DOMAIN) {
        console.warn('Shopify request skipped: SHOPIFY_STORE_DOMAIN is not defined.');
        return null as unknown as T;
    }

    try {
        const response = await shopifyClient.request<T>(query, variables);
        return response;
    } catch (error) {
        const errMessage = error instanceof Error ? error.message : 'Unknown Shopify error occurred';

        // Log meaningful debugging info without crashing the client app
        console.error('Shopify API Error:', errMessage);

        // Return structured exception or re-throw as safe application-level error
        throw new Error('Failed to retrieve data from Shopify API. See server logs for details.');
    }
}
