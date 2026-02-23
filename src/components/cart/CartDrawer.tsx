"use client";

import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';

export default function CartDrawer() {
    const { cart, isOpen, setIsOpen, checkout, loading } = useCart();

    return (
        <>
            <div
                className={`cart-drawer-overlay ${isOpen ? 'is-open' : ''}`}
                onClick={() => setIsOpen(false)}
                aria-hidden={!isOpen}
            />
            <div
                className={`cart-drawer ${isOpen ? 'is-open' : ''}`}
                aria-hidden={!isOpen}
            >
                <div className="cart-drawer__header">
                    <h2 className="cart-drawer__title">Your Box</h2>
                    <button
                        onClick={() => setIsOpen(false)}
                        className="cart-drawer__close"
                        aria-label="Close cart"
                    >
                        <svg width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <div className="cart-drawer__body">
                    {!cart || cart.lines.edges.length === 0 ? (
                        <div className="cart-drawer__empty">
                            <div className="cart-drawer__empty-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                                    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                                    <line x1="3" y1="6" x2="21" y2="6" />
                                    <path d="M16 10a4 4 0 01-8 0" />
                                </svg>
                            </div>
                            <h3 className="cart-drawer__empty-heading">Your box is empty.</h3>
                            <p className="cart-drawer__empty-text">
                                Discover our artisanal chocolates and curate an elegant gift box.
                            </p>
                            <div className="cart-drawer__empty-action">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="btn btn--primary"
                                >
                                    START EXPLORING
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="cart-drawer__items">
                            {cart.lines.edges.map(({ node }) => (
                                <div key={node.id} className="cart-item group">
                                    {node.merchandise.product.featuredImage && (
                                        <div className="cart-item__image">
                                            <img
                                                src={node.merchandise.product.featuredImage.url}
                                                alt={node.merchandise.product.featuredImage.altText || node.merchandise.product.title}
                                            />
                                        </div>
                                    )}
                                    <div className="cart-item__details">
                                        <h3 className="cart-item__title">
                                            {node.merchandise.product.title}
                                        </h3>
                                        <p className="cart-item__variant">
                                            {node.merchandise.title}
                                        </p>

                                        <div className="cart-item__bottom">
                                            <span className="cart-item__qty">QTY: {node.quantity}</span>
                                            <span className="cart-item__price">
                                                {node.merchandise.price.currencyCode === 'BDT' ? '৳' : node.merchandise.price.currencyCode} {node.merchandise.price.amount}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {cart && cart.lines.edges.length > 0 && (
                    <div className="cart-drawer__footer">
                        <div className="cart-drawer__subtotal">
                            <span>Subtotal</span>
                            <strong>
                                {cart.cost.totalAmount.currencyCode === 'BDT' ? '৳' : cart.cost.totalAmount.currencyCode} {cart.cost.totalAmount.amount}
                            </strong>
                        </div>
                        <button
                            onClick={checkout}
                            disabled={loading}
                            className="btn btn--primary cart-drawer__checkout-btn"
                        >
                            {loading ? (
                                <span style={{ opacity: 0.7 }}>PROCESSING...</span>
                            ) : (
                                <>
                                    PROCEED TO CHECKOUT
                                    <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ marginLeft: '10px' }}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}
