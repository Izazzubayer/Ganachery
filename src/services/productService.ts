import { shopifyRequest } from './shopifyService';
import { getProductsQuery, getProductByHandleQuery } from '@/graphql/queries/products';
import { GetProductsResponse, GetProductByHandleResponse, Product } from '@/types/shopify';

export async function getProducts(limit: number = 12): Promise<Product[]> {
    try {
        const data = await shopifyRequest<GetProductsResponse>(getProductsQuery, { first: limit });
        return data?.products?.edges?.map(edge => edge.node) || [];
    } catch (error) {
        console.error('Error fetching products from Shopify:', error);
        return [];
    }
}

export async function getProductByHandle(handle: string): Promise<Product | null> {
    try {
        const data = await shopifyRequest<GetProductByHandleResponse>(getProductByHandleQuery, { handle });
        return data?.product || null;
    } catch (error) {
        console.error(`Error fetching product ${handle} from Shopify:`, error);
        return null;
    }
}
