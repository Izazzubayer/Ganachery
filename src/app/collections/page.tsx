"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { products } from '@/data/products';

export default function CollectionsPage() {
    const [activeFilter, setActiveFilter] = useState('all');

    useEffect(() => {
        AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true,
            offset: 80,
        });
    }, []);

    const filteredProducts = activeFilter === 'all'
        ? products
        : products.filter(p => p.category === activeFilter);

    return (
        <>
            <nav className="nav nav--scrolled" id="main-nav">
                <div className="nav__inner">
                    <Link href="/" className="nav__logo">
                        <span className="nav__logo-text">Ganachery</span>
                        <span className="nav__logo-sub">Pâtisserie</span>
                    </Link>
                    <div className="nav__links">
                        <Link href="/" className="nav__link">Home</Link>
                        <Link href="/collections" className="nav__link nav__link--active">Collections</Link>
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

            <section className="product pt-40 pb-24 min-h-screen" id="product" style={{ backgroundColor: 'var(--ivory-100)' }}>
                <div className="container">
                    <div className="section-header" data-aos="fade-up">
                        <span className="section-header__label">The Boutique</span>
                        <h1 className="section-header__title">All <em>Collections</em></h1>
                        <div className="section-header__divider">
                            <span className="gold-line"></span>
                            <svg className="section-header__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <path d="M16 10a4 4 0 01-8 0" />
                            </svg>
                            <span className="gold-line"></span>
                        </div>
                    </div>

                    <div className="product__filters" data-aos="fade-up">
                        {['all', 'chocolates', 'dates', 'giftbox', 'patisserie', 'seasonal'].map((filter) => (
                            <button
                                key={filter}
                                className={`product__filter ${activeFilter === filter ? 'product__filter--active' : ''}`}
                                onClick={() => setActiveFilter(filter)}
                                style={{ textTransform: 'capitalize' }}
                            >
                                {filter === 'giftbox' ? 'Gift Boxes' : filter}
                            </button>
                        ))}
                    </div>

                    <div className="product__grid">
                        {filteredProducts.map((product, index) => (
                            <div className="product__card" data-aos="fade-up" data-aos-delay={(index % 4) * 100} key={product.id}>
                                <div className="product__card-image" style={{ aspectRatio: '4/5', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                    <img src={product.image} alt={product.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    {product.badge && (
                                        <div className="product__card-badges">
                                            <span className={`product__badge product__badge--${product.badge.toLowerCase()}`}>{product.badge}</span>
                                        </div>
                                    )}
                                    <div className="product__card-actions">
                                        <Link href={`/product/${product.id}`} className="product__quick-view" aria-label="View Details" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black' }}>
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                                                <circle cx="12" cy="12" r="3" />
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                                <div className="product__card-info">
                                    <span className="product__card-category" style={{ textTransform: 'capitalize' }}>{product.category}</span>
                                    <h3 className="product__card-name">{product.name}</h3>
                                    <p className="product__card-variant">{product.variant}</p>
                                    <div className="product__card-bottom">
                                        <span className="product__card-price">{product.price}</span>
                                        <Link href={`/product/${product.id}`} className="btn btn--small btn--primary">Details</Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="footer text-white py-12 text-center text-sm border-t" style={{ backgroundColor: 'var(--cocoa-900)', borderColor: 'var(--gold-500)' }}>
                <p style={{ margin: 0 }}>&copy; 2026 Ganachery Pâtisserie. Artisanal Excellence.</p>
            </footer>
        </>
    );
}
