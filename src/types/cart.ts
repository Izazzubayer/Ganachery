import { Money, Image } from './shopify';

export interface CartItem {
    id: string;
    quantity: number;
    merchandise: {
        id: string;
        title: string;
        price: Money;
        product: {
            title: string;
            handle: string;
            featuredImage?: Image | null;
        };
    };
}

export interface Cart {
    id: string;
    checkoutUrl: string;
    cost: {
        totalAmount: Money;
    };
    lines: {
        edges: {
            node: CartItem;
        }[];
    };
}

// Responses
export interface CreateCartResponse {
    cartCreate: { cart: Cart };
}

export interface AddToCartResponse {
    cartLinesAdd: { cart: Cart };
}

export interface GetCartResponse {
    cart: Cart | null;
}
