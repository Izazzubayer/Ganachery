import { Product } from '@/types/shopify';

export interface MockProduct extends Product {
    productType?: string;
}

export const MOCK_PRODUCTS: MockProduct[] = [
    {
        id: 'mock-1',
        title: 'Artisanal Truffle Collection',
        handle: 'artisanal-truffle-collection',
        description: 'A curated selection of our finest handcrafted truffles, featuring hazelnut praline, dark chocolate ganache, and seasonal inspirations.',
        availableForSale: true,
        productType: 'chocolates',
        featuredImage: {
            url: '/images/truffles-gift-box.jpg',
            altText: 'Artisanal Truffle Collection',
            width: 1200,
            height: 1500
        },
        images: {
            edges: [
                { node: { url: '/images/truffles-gift-box.jpg', altText: 'Truffles', width: 1200, height: 1500 } },
                { node: { url: '/images/assorted-box-closeup.jpg', altText: 'Truffles Close-up', width: 1200, height: 1500 } }
            ]
        },
        priceRange: {
            minVariantPrice: { amount: '1800', currencyCode: 'BDT' },
            maxVariantPrice: { amount: '4500', currencyCode: 'BDT' }
        },
        variants: {
            edges: [
                {
                    node: {
                        id: 'v-1-1',
                        title: '12 Pieces',
                        availableForSale: true,
                        price: { amount: '1800', currencyCode: 'BDT' },
                        compareAtPrice: null
                    }
                },
                {
                    node: {
                        id: 'v-1-2',
                        title: '25 Pieces',
                        availableForSale: true,
                        price: { amount: '3200', currencyCode: 'BDT' },
                        compareAtPrice: null
                    }
                }
            ]
        }
    },
    {
        id: 'mock-2',
        title: 'Premium Medjool Dates',
        handle: 'premium-medjool-dates',
        description: 'Large Medjool dates stuffed with premium nuts and chocolate, topped with delicate gold leaf.',
        availableForSale: true,
        productType: 'dates',
        featuredImage: {
            url: '/images/dates-gift-box.jpg',
            altText: 'Premium Medjool Dates',
            width: 1200,
            height: 1500
        },
        images: {
            edges: [
                { node: { url: '/images/dates-gift-box.jpg', altText: 'Dates', width: 1200, height: 1500 } }
            ]
        },
        priceRange: {
            minVariantPrice: { amount: '2200', currencyCode: 'BDT' },
            maxVariantPrice: { amount: '2200', currencyCode: 'BDT' }
        },
        variants: {
            edges: [
                {
                    node: {
                        id: 'v-2-1',
                        title: 'Signature Box',
                        availableForSale: true,
                        price: { amount: '2200', currencyCode: 'BDT' },
                        compareAtPrice: null
                    }
                }
            ]
        }
    },
    {
        id: 'mock-3',
        title: 'Ganachery Signature Cake',
        handle: 'signature-cake',
        description: 'Our award-winning chocolate cake, featuring layers of rich Ganachery chocolate and smooth cream.',
        availableForSale: true,
        productType: 'patisserie',
        featuredImage: {
            url: '/images/cake-display.jpg',
            altText: 'Signature Cake',
            width: 1200,
            height: 1500
        },
        images: {
            edges: [
                { node: { url: '/images/cake-display.jpg', altText: 'Cake', width: 1200, height: 1500 } }
            ]
        },
        priceRange: {
            minVariantPrice: { amount: '3500', currencyCode: 'BDT' },
            maxVariantPrice: { amount: '3500', currencyCode: 'BDT' }
        },
        variants: {
            edges: [
                {
                    node: {
                        id: 'v-3-1',
                        title: 'Standard Size',
                        availableForSale: true,
                        price: { amount: '3500', currencyCode: 'BDT' },
                        compareAtPrice: null
                    }
                }
            ]
        }
    },
    {
        id: 'mock-4',
        title: 'Assorted Brownie Box',
        handle: 'assorted-brownie-box',
        description: 'A decadent collection of our signature brownies, including dark chocolate, sea salt, and caramel swirl.',
        availableForSale: true,
        productType: 'giftbox',
        featuredImage: {
            url: '/images/assorted-truffles-brownies.jpg',
            altText: 'Assorted Brownies',
            width: 1200,
            height: 1500
        },
        images: {
            edges: [
                { node: { url: '/images/assorted-truffles-brownies.jpg', altText: 'Brownies', width: 1200, height: 1500 } }
            ]
        },
        priceRange: {
            minVariantPrice: { amount: '1500', currencyCode: 'BDT' },
            maxVariantPrice: { amount: '1500', currencyCode: 'BDT' }
        },
        variants: {
            edges: [
                {
                    node: {
                        id: 'v-4-1',
                        title: 'Box of 6',
                        availableForSale: true,
                        price: { amount: '1500', currencyCode: 'BDT' },
                        compareAtPrice: null
                    }
                }
            ]
        }
    },
    {
        id: 'mock-5',
        title: 'Strawberry Petit Fours',
        handle: 'strawberry-petit-fours',
        description: 'Delicate French-style petit fours with fresh strawberry glaze and light vanilla sponge.',
        availableForSale: true,
        productType: 'patisserie',
        featuredImage: {
            url: '/images/gallery-2.jpg',
            altText: 'Strawberry Petit Fours',
            width: 1200,
            height: 1500
        },
        images: {
            edges: [
                { node: { url: '/images/gallery-2.jpg', altText: 'Petit Fours', width: 1200, height: 1500 } }
            ]
        },
        priceRange: {
            minVariantPrice: { amount: '2500', currencyCode: 'BDT' },
            maxVariantPrice: { amount: '2500', currencyCode: 'BDT' }
        },
        variants: {
            edges: [
                {
                    node: {
                        id: 'v-5-1',
                        title: 'Set of 12',
                        availableForSale: true,
                        price: { amount: '2500', currencyCode: 'BDT' },
                        compareAtPrice: null
                    }
                }
            ]
        }
    },
    {
        id: 'mock-6',
        title: 'Chocolate Covered Strawberries',
        handle: 'chocolate-covered-strawberries',
        description: 'Giant seasonal strawberries double-dipped in Belgian dark and white chocolate.',
        availableForSale: true,
        productType: 'seasonal',
        featuredImage: {
            url: '/images/chocolate-strawberries.jpg',
            altText: 'Chocolate Covered Strawberries',
            width: 1200,
            height: 1500
        },
        images: {
            edges: [
                { node: { url: '/images/chocolate-strawberries.jpg', altText: 'Strawberries', width: 1200, height: 1500 } }
            ]
        },
        priceRange: {
            minVariantPrice: { amount: '1200', currencyCode: 'BDT' },
            maxVariantPrice: { amount: '1200', currencyCode: 'BDT' }
        },
        variants: {
            edges: [
                {
                    node: {
                        id: 'v-6-1',
                        title: 'Box of 6',
                        availableForSale: true,
                        price: { amount: '1200', currencyCode: 'BDT' },
                        compareAtPrice: null
                    }
                }
            ]
        }
    }
];
