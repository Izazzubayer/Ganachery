import { shopifyRequest } from './shopifyService';
import { getProductsQuery, getProductByHandleQuery } from '@/graphql/queries/products';
import { GetProductsResponse, GetProductByHandleResponse, Product } from '@/types/shopify';
import { MOCK_PRODUCTS } from './mockData';

export async function getProducts(limit: number = 12): Promise<Product[]> {
    try {
        const data = await shopifyRequest<GetProductsResponse>(getProductsQuery, { first: limit });
        if (!data || !data.products) {
            console.warn('Shopify data missing, falling back to mock products.');
            return MOCK_PRODUCTS.slice(0, limit);
        }
        return data?.products?.edges?.map(edge => edge.node) || [];
    } catch (error) {
        console.error('Error fetching products from Shopify, falling back to mock data:', error);
        return MOCK_PRODUCTS.slice(0, limit);
    }
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
    try {
        const data = await shopifyRequest<GetProductByHandleResponse>(getProductByHandleQuery, { handle });
        if (!data || !data.product) {
            const mockProduct = MOCK_PRODUCTS.find(p => p.handle === handle);
            if (mockProduct) {
                console.warn(`Product ${handle} not found in Shopify, falling back to mock data.`);
                return mockProduct;
            }
            return null;
        }
        return data?.product || null;
    } catch (error) {
        console.error(`Error fetching product ${handle} from Shopify, falling back to mock data:`, error);
        const mockProduct = MOCK_PRODUCTS.find(p => p.handle === handle);
        return mockProduct || null;
    }
}
