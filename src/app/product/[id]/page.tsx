"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { products } from '@/data/products';
import '@/app/product-detail.css'; // Import the new styles

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
            <div className="product-detail" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem' }}>
                <h1 className="product-detail__title" style={{ fontSize: '2rem' }}>Product Not Found</h1>
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
        <div className="product-detail">
            <nav className="nav nav--scrolled" id="main-nav" style={{ position: 'sticky', top: 0, zIndex: 100, background: 'rgba(26, 14, 10, 0.95)' }}>
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

            <div className="container" style={{ paddingTop: '80px', paddingBottom: '80px' }}>
                {/* Breadcrumb */}
                <div className="product-detail__breadcrumb" data-aos="fade-in">
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <Link href="/collections">Collections</Link>
                    <span>/</span>
                    <span className="current">{product.name}</span>
                </div>

                <div className="product-detail__grid">
                    {/* Image Gallery */}
                    <div className="product-detail__image-wrapper" data-aos="fade-right">
                        {product.badge && (
                            <div className="product-detail__badge">
                                {product.badge}
                            </div>
                        )}
                        <img src={product.image} alt={product.name} loading="eager" />
                    </div>

                    {/* Product Info */}
                    <div className="product-detail__info" data-aos="fade-left">
                        <span className="product-detail__category">{product.category}</span>
                        <h1 className="product-detail__title">{product.name}</h1>
                        <div className="product-detail__reviews">★★★★★ <span>(Boutique Reviews)</span></div>
                        <p className="product-detail__price">{product.price}</p>

                        <p className="product-detail__desc">
                            {product.longDescription}
                        </p>

                        <div className="product-detail__variant-group">
                            <span className="product-detail__variant-label">Variant</span>
                            <div className="product-detail__variant">
                                {product.variant}
                            </div>
                        </div>

                        <div className="product-detail__actions">
                            <div className="product-detail__qty">
                                <button className="product-detail__qty-btn" onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                                <div className="product-detail__qty-val">{qty}</div>
                                <button className="product-detail__qty-btn" onClick={() => setQty(q => q + 1)}>+</button>
                            </div>
                            <button className="btn btn--primary product-detail__add-btn">
                                Add to Box — {product.price}
                            </button>
                        </div>

                        <div className="product-detail__meta">
                            <div className="product-detail__meta-item">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="product-detail__meta-icon">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                                </svg>
                                <div>
                                    <h5 className="product-detail__meta-title">Artisanal Ingredients</h5>
                                    <p className="product-detail__meta-text">{product.ingredients}</p>
                                </div>
                            </div>
                            <div className="product-detail__meta-item" style={{ marginBottom: 0 }}>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="product-detail__meta-icon">
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                </svg>
                                <div>
                                    <h5 className="product-detail__meta-title">Care & Storage</h5>
                                    <p className="product-detail__meta-text">{product.care}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* You May Also Like */}
                <div className="product-detail__related" data-aos="fade-up">
                    <div className="section-header" style={{ textAlign: 'center', marginBottom: 'var(--space-4xl)' }}>
                        <span className="section-header__label">Curated Pairings</span>
                        <h2 className="section-header__title">You May Also <em>Like</em></h2>
                        <div className="section-header__divider" style={{ justifyContent: 'center' }}>
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
                                    <div className="product__card-bottom" style={{ marginTop: '1rem' }}>
                                        <span className="product__card-price">{rel.price}</span>
                                        <Link href={`/product/${rel.id}`} className="btn btn--small btn--primary flex items-center justify-center">View</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <footer className="footer" style={{ background: 'var(--cocoa-900)', color: 'white', padding: '3rem 0', textAlign: 'center', fontSize: '0.875rem', borderTop: '1px solid var(--gold-500)', marginTop: 'var(--space-5xl)' }}>
                &copy; 2026 Ganachery Pâtisserie. Artisanal Excellence.
            </footer>
        </div>
    );
}
