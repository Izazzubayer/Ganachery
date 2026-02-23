"use client";

import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { createCart, addToCart, fetchCart } from '@/services/cartService';
import { Cart } from '@/types/cart';

interface CartContextProps {
    cart: Cart | null;
    addItem: (variantId: string, quantity: number) => Promise<void>;
    loading: boolean;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    checkout: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

const CART_KEY = 'ganachery_cart_id';

export function CartProvider({ children }: { children: ReactNode }) {
    const [cart, setCart] = useState<Cart | null>(null);
    const [loading, setLoading] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        async function initializeCart() {
            const storedCartId = localStorage.getItem(CART_KEY);
            if (storedCartId) {
                setLoading(true);
                const fetchedCart = await fetchCart(storedCartId);
                if (fetchedCart) {
                    setCart(fetchedCart);
                } else {
                    // Fallback context: Cart was invalid or expired natively from Shopify API
                    localStorage.removeItem(CART_KEY);
                }
                setLoading(false);
            }
        }
        initializeCart();
    }, []);

    const addItem = async (variantId: string, quantity: number) => {
        setLoading(true);
        let currentCartId = cart?.id;

        if (!currentCartId) {
            const newCart = await createCart();
            if (newCart) {
                currentCartId = newCart.id;
                setCart(newCart);
                localStorage.setItem(CART_KEY, newCart.id);
            } else {
                console.error('Failed to create cart during add attempt');
                setLoading(false);
                return;
            }
        }

        const updatedCart = await addToCart(currentCartId, variantId, quantity);
        if (updatedCart) {
            setCart(updatedCart);
            setIsOpen(true);
        }
        setLoading(false);
    };

    const checkout = () => {
        if (cart?.checkoutUrl) {
            window.location.href = cart.checkoutUrl;
        }
    };

    return (
        <CartContext.Provider value={{ cart, addItem, loading, isOpen, setIsOpen, checkout }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}
