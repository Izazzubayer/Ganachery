"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Product } from '@/types/shopify';
import { useCart } from '@/context/CartContext';

export default function ProductClient({ product }: { product: Product }) {
    const { addItem, loading } = useCart();
    const [qty, setQty] = useState(1);
    const [selectedVariantId, setSelectedVariantId] = useState(
        product.variants?.edges[0]?.node.id || ''
    );

    const selectedVariant = product.variants?.edges?.find(
        (edge) => edge.node.id === selectedVariantId
    )?.node;

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
        window.scrollTo(0, 0);
    }, []);

    const [mainImage, setMainImage] = useState(
        product.featuredImage?.url || ''
    );

    const images = product.images?.edges?.map((edge) => edge.node) || [];

    const handleAddToCart = async () => {
        if (!selectedVariantId) return;
        await addItem(selectedVariantId, qty);
    };

    const currentPrice = selectedVariant?.price.amount || product.priceRange?.minVariantPrice?.amount;
    const currencyCode = selectedVariant?.price.currencyCode === 'BDT' ? '৳' : (selectedVariant?.price.currencyCode || '৳');

    return (
        <div className="bg-[var(--ivory-100)] min-h-screen">
            <div className="container py-16 md:py-24">
                {/* Breadcrumb */}
                <div className="text-[0.65rem] uppercase tracking-widest text-[var(--neutral-500)] mb-12" data-aos="fade-in">
                    <Link href="/" className="hover:text-[var(--gold-500)]">Home</Link>
                    <span className="mx-2">/</span>
                    <Link href="/#collections" className="hover:text-[var(--gold-500)]">Collections</Link>
                    <span className="mx-2">/</span>
                    <span className="text-[var(--gold-500)]">{product.title}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
                    {/* Image Gallery */}
                    <div className="relative" data-aos="fade-right">
                        <div className="aspect-[4/5] rounded-lg overflow-hidden shadow-[var(--shadow-xl)] bg-white relative mb-4">
                            {!product.availableForSale && (
                                <div className="absolute top-6 left-6 z-10 bg-red-900 text-white text-[0.65rem] font-bold uppercase tracking-widest px-4 py-2 rounded-sm">
                                    Sold Out
                                </div>
                            )}
                            {mainImage ? (
                                <img src={mainImage} alt={product.title} className="w-full h-full object-cover" />
                            ) : (
                                <div className="w-full h-full bg-[#f5efe6]" />
                            )}
                        </div>
                        {/* Thumbnails */}
                        {images.length > 1 && (
                            <div className="flex gap-4 overflow-x-auto pb-2">
                                {images.map((img, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setMainImage(img.url)}
                                        className={`w-20 h-20 flex-shrink-0 border-2 ${mainImage === img.url ? 'border-[var(--gold-500)]' : 'border-transparent'} rounded-md overflow-hidden`}
                                    >
                                        <img src={img.url} alt={img.altText || product.title} className="w-full h-full object-cover" />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-center" data-aos="fade-left">
                        <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] text-[var(--gold-500)] mb-4">Boutique</span>
                        <h1 className="font-[var(--font-heading)] text-4xl md:text-5xl lg:text-6xl font-light text-[var(--cocoa-800)] leading-tight mb-4">{product.title}</h1>

                        <p className="text-xl font-bold text-[var(--cocoa-600)] tracking-widest mb-8">
                            {currencyCode} {currentPrice}
                            {selectedVariant?.compareAtPrice && parseFloat(selectedVariant.compareAtPrice.amount) > parseFloat(currentPrice) && (
                                <span className="line-through text-[var(--neutral-400)] ml-4 text-sm">
                                    {currencyCode} {selectedVariant.compareAtPrice.amount}
                                </span>
                            )}
                        </p>

                        <div className="text-[0.95rem] text-[var(--neutral-600)] leading-loose mb-10 pb-10 border-b border-[var(--gold-100)]" dangerouslySetInnerHTML={{ __html: product.description }} />

                        {product.variants?.edges?.length > 1 && (
                            <div className="mb-10">
                                <h4 className="text-[0.7rem] uppercase tracking-widest font-bold text-[var(--cocoa-800)] mb-4">Select Variant</h4>
                                <div className="flex flex-wrap gap-4">
                                    {product.variants.edges.map((edge) => (
                                        <button
                                            key={edge.node.id}
                                            onClick={() => setSelectedVariantId(edge.node.id)}
                                            className={`border px-6 py-3 rounded-md text-sm font-medium transition-colors ${selectedVariantId === edge.node.id ? 'border-[var(--gold-500)] bg-[var(--gold-100)] text-[var(--cocoa-800)]' : 'border-[var(--neutral-300)] text-[var(--neutral-600)] hover:border-[var(--gold-300)]'}`}
                                        >
                                            {edge.node.title}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div className="flex items-center gap-6 mb-12">
                            <div className="flex items-center border border-[var(--gold-100)] rounded-md h-14 bg-white shadow-sm overflow-hidden">
                                <button className="px-5 h-full text-lg hover:bg-[var(--ivory-200)] transition-colors text-[var(--cocoa-800)]" onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                                <span className="w-8 text-center font-bold text-[var(--cocoa-900)]">{qty}</span>
                                <button className="px-5 h-full text-lg hover:bg-[var(--ivory-200)] transition-colors text-[var(--cocoa-800)]" onClick={() => setQty(q => q + 1)}>+</button>
                            </div>
                            <button
                                className="btn btn--primary flex-1 h-14 text-[0.8rem] m-0 flex items-center justify-center gap-2"
                                onClick={handleAddToCart}
                                disabled={!product.availableForSale || (selectedVariant && !selectedVariant.availableForSale) || loading}
                            >
                                {loading ? (
                                    <span>Processing...</span>
                                ) : (
                                    !product.availableForSale || (selectedVariant && !selectedVariant.availableForSale) ? 'Out of Stock' : `Add to Box — ${currencyCode} ${currentPrice}`
                                )}
                            </button>
                        </div>

                        <div className="bg-[var(--ivory-200)] p-6 md:p-8 rounded-lg">
                            <div className="flex items-start gap-4 mb-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="1.5" className="flex-shrink-0 mt-1">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                                <div>
                                    <h5 className="text-[0.8rem] uppercase tracking-widest font-bold text-[var(--cocoa-800)] mb-2">Artisanal Ingredients</h5>
                                    <p className="text-[0.85rem] text-[var(--neutral-600)] leading-relaxed">Crafted with premium Belgian couverture chocolate, freshly roasted nuts, and locally sourced organic elements.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--gold-500)" strokeWidth="1.5" className="flex-shrink-0 mt-1">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <div>
                                    <h5 className="text-[0.8rem] uppercase tracking-widest font-bold text-[var(--cocoa-800)] mb-2">Care &amp; Storage</h5>
                                    <p className="text-[0.85rem] text-[var(--neutral-600)] leading-relaxed">Store in a cool, dry place between 15°C and 18°C. Best enjoyed within 14 days of receipt for optimal flavor.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
