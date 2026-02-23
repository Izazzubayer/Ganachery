import { shopifyRequest } from './shopifyService';
import { createCartMutation, addToCartMutation, getCartQuery } from '@/graphql/mutations/cart';
import { CreateCartResponse, AddToCartResponse, GetCartResponse, Cart } from '@/types/cart';

export async function createCart(): Promise<Cart | null> {
    try {
        const data = await shopifyRequest<CreateCartResponse>(createCartMutation);
        return data?.cartCreate?.cart || null;
    } catch (error) {
        console.error('Error creating cart:', error);
        return null;
    }
}

export async function addToCart(cartId: string, variantId: string, quantity: number): Promise<Cart | null> {
    try {
        const lines = [{ merchandiseId: variantId, quantity }];
        const data = await shopifyRequest<AddToCartResponse>(addToCartMutation, { cartId, lines });
        return data?.cartLinesAdd?.cart || null;
    } catch (error) {
        console.error(`Error adding variant ${variantId} to cart ${cartId}:`, error);
        return null;
    }
}

export async function fetchCart(cartId: string): Promise<Cart | null> {
    try {
        const data = await shopifyRequest<GetCartResponse>(getCartQuery, { cartId });
        return data?.cart || null;
    } catch (error) {
        console.error(`Error fetching cart ${cartId}:`, error);
        return null;
    }
}
