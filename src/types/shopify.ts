export interface Money {
    amount: string;
    currencyCode: string;
}

export interface Image {
    url: string;
    altText: string | null;
    width: number;
    height: number;
}

export interface ProductVariant {
    id: string;
    title: string;
    availableForSale: boolean;
    price: Money;
    compareAtPrice: Money | null;
}

export interface Product {
    id: string;
    title: string;
    handle: string;
    description: string;
    availableForSale: boolean;
    featuredImage: Image | null;
    images: {
        edges: { node: Image }[];
    };
    priceRange: {
        minVariantPrice: Money;
        maxVariantPrice: Money;
    };
    variants: {
        edges: { node: ProductVariant }[];
    };
}

export interface ProductConnection {
    edges: {
        node: Product;
    }[];
}

export interface GetProductsResponse {
    products: ProductConnection;
}

export interface GetProductByHandleResponse {
    product: Product | null;
}
