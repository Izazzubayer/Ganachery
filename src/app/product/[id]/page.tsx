"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { products } from '@/data/products';

export default function ProductDetailPage() {
    const params = useParams();
    const id = params.id as string;
    const product = products.find(p => p.id === id);
    const [qty, setQty] = useState(1);

    useEffect(() => {
        AOS.init({ duration: 800, once: true });
        window.scrollTo(0, 0);
    }, []);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-[var(--ivory-100)] flex-col gap-4">
                <h1 className="text-2xl font-[var(--font-heading)]">Product Not Found</h1>
                <Link href="/collections" className="btn btn--primary">Back to Collections</Link>
            </div>
        );
    }

    // Find 4 related products
    const related = products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4);
    if (related.length < 4) {
        const more = products.filter(p => p.id !== product.id && p.category !== product.category).slice(0, 4 - related.length);
        related.push(...more);
    }

    return (
        <div className="min-h-screen" style={{ backgroundColor: 'var(--ivory-100)' }}>
            <nav className="nav nav--scrolled relative" id="main-nav" style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(26, 14, 10, 0.95)' }}>
                <div className="nav__inner">
                    <Link href="/" className="nav__logo">
                        <span className="nav__logo-text">Ganachery</span>
                        <span className="nav__logo-sub">Pâtisserie</span>
                    </Link>
                    <div className="nav__links">
                        <Link href="/" className="nav__link">Home</Link>
                        <Link href="/collections" className="nav__link">Collections</Link>
                    </div>
                    <div className="nav__actions">
                        <button className="nav__cart" aria-label="Shopping Cart">
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <path d="M16 10a4 4 0 01-8 0" />
                            </svg>
                            <span className="nav__cart-count">0</span>
                        </button>
                    </div>
                </div>
            </nav>

            <div className="container py-16 md:py-24">
                {/* Breadcrumb */}
                <div className="uppercase tracking-widest mb-12 text-xs" style={{ color: 'var(--neutral-500)' }} data-aos="fade-in">
                    <Link href="/" className="hover:text-black transition-colors" style={{ color: 'inherit' }}>Home</Link>
                    <span className="mx-3">/</span>
                    <Link href="/collections" className="hover:text-black transition-colors" style={{ color: 'inherit' }}>Collections</Link>
                    <span className="mx-3">/</span>
                    <span style={{ color: 'var(--gold-500)' }}>{product.name}</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 mb-32">
                    {/* Image Gallery */}
                    <div className="relative" data-aos="fade-right">
                        <div className="aspect-[4/5] rounded-xl overflow-hidden bg-white relative" style={{ boxShadow: 'var(--shadow-xl)' }}>
                            {product.badge && (
                                <div className="absolute top-6 left-6 z-10 text-[0.65rem] font-bold uppercase tracking-widest px-4 py-2 rounded-sm" style={{ backgroundColor: 'var(--gold-500)', color: 'var(--cocoa-900)' }}>
                                    {product.badge}
                                </div>
                            )}
                            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col justify-center" data-aos="fade-left">
                        <span className="text-[0.6rem] font-bold uppercase tracking-[0.2em] mb-4" style={{ color: 'var(--gold-500)' }}>{product.category}</span>
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-light leading-tight mb-4" style={{ fontFamily: 'var(--font-heading)', color: 'var(--cocoa-800)' }}>{product.name}</h1>
                        <div className="tracking-widest text-sm mb-4" style={{ color: 'var(--gold-500)' }}>★★★★★ <span className="text-xs ml-2" style={{ color: 'var(--neutral-400)' }}>(Boutique Reviews)</span></div>
                        <p className="text-xl font-bold tracking-widest mb-8" style={{ color: 'var(--cocoa-600)' }}>{product.price}</p>

                        <p className="text-[0.95rem] leading-loose mb-10 pb-10 border-b" style={{ color: 'var(--neutral-600)', borderColor: 'var(--gold-100)' }}>
                            {product.longDescription}
                        </p>

                        <div className="mb-10">
                            <h4 className="text-[0.7rem] uppercase tracking-widest font-bold mb-4" style={{ color: 'var(--cocoa-800)' }}>Variant</h4>
                            <div className="inline-block border px-6 py-3 rounded-md text-sm font-medium" style={{ borderColor: 'var(--gold-500)', color: 'var(--cocoa-800)', backgroundColor: 'var(--gold-100)' }}>
                                {product.variant}
                            </div>
                        </div>

                        <div className="flex items-center gap-6 mb-12">
                            <div className="flex items-center border rounded-md" style={{ borderColor: 'var(--neutral-300)', height: '56px' }}>
                                <button className="px-5 text-lg h-full flex items-center hover:bg-black/5 transition-colors" onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                                <span className="w-10 text-center font-bold flex items-center justify-center h-full border-x w-10 border-black/10">{qty}</span>
                                <button className="px-5 text-lg h-full flex items-center hover:bg-black/5 transition-colors" onClick={() => setQty(q => q + 1)}>+</button>
                            </div>
                            <button className="btn btn--primary flex-1" style={{ margin: 0, height: '56px', fontSize: '0.8rem', padding: '0 24px' }}>
                                Add to Box — {product.price}
                            </button>
                        </div>

                        <div className="p-6 md:p-8 rounded-lg" style={{ backgroundColor: 'var(--ivory-200)' }}>
                            <div className="flex items-start gap-4 mb-6">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C7A157" strokeWidth="1.5" className="flex-shrink-0 mt-1">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                                <div>
                                    <h5 className="text-[0.8rem] uppercase tracking-widest font-bold mb-2" style={{ color: 'var(--cocoa-800)' }}>Artisanal Ingredients</h5>
                                    <p className="text-[0.85rem] leading-relaxed" style={{ color: 'var(--neutral-600)' }}>{product.ingredients}</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C7A157" strokeWidth="1.5" className="flex-shrink-0 mt-1">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <div>
                                    <h5 className="text-[0.8rem] uppercase tracking-widest font-bold mb-2" style={{ color: 'var(--cocoa-800)' }}>Care & Storage</h5>
                                    <p className="text-[0.85rem] leading-relaxed" style={{ color: 'var(--neutral-600)' }}>{product.care}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* You May Also Like */}
                <div className="pt-24 border-t" style={{ borderColor: 'var(--gold-100)' }} data-aos="fade-up">
                    <div className="section-header text-center mb-16">
                        <span className="section-header__label" style={{ display: 'block', marginBottom: '1rem' }}>Curated Pairings</span>
                        <h2 className="section-header__title" style={{ fontSize: '2.5rem' }}>You May Also <em>Like</em></h2>
                        <div className="section-header__divider justify-center" style={{ display: 'flex' }}>
                            <span className="gold-line"></span>
                            <span className="gold-line"></span>
                        </div>
                    </div>

                    <div className="product__grid">
                        {related.map((rel, index) => (
                            <div className="product__card" data-aos="fade-up" data-aos-delay={index * 100} key={rel.id}>
                                <div className="product__card-image" style={{ aspectRatio: '4/5', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                    <img src={rel.image} alt={rel.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    <div className="product__card-actions">
                                        <Link href={`/product/${rel.id}`} className="product__quick-view" aria-label="View Details" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black' }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="product__card-info">
                                    <span className="product__card-category" style={{ textTransform: 'capitalize' }}>{rel.category}</span>
                                    <h3 className="product__card-name">{rel.name}</h3>
                                    <div className="product__card-bottom mt-4">
                                        <span className="product__card-price">{rel.price}</span>
                                        <Link href={`/product/${rel.id}`} className="btn btn--small btn--primary">View</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <footer className="footer text-white py-12 text-center text-sm border-t mt-24" style={{ backgroundColor: 'var(--cocoa-900)', borderColor: 'var(--gold-500)' }}>
                <p style={{ margin: 0 }}>&copy; 2026 Ganachery Pâtisserie. Artisanal Excellence.</p>
            </footer>
        </div>
    );
}
