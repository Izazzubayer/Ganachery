"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { cart, setIsOpen } = useCart();

    const cartCount = cart?.lines.edges.reduce((sum, item) => sum + item.node.quantity, 0) || 0;

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 60) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
    const closeMobileMenu = () => setMobileMenuOpen(false);

    return (
        <>
            <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`} id="main-nav">
                <div className="nav__inner">
                    <Link href="/#home" className="nav__logo" onClick={closeMobileMenu}>
                        <span className="nav__logo-text">Ganachery</span>
                        <span className="nav__logo-sub">Pâtisserie</span>
                    </Link>
                    <div className="nav__links" id="nav-links">
                        <Link href="/#home" className="nav__link nav__link--active">
                            Home
                        </Link>
                        <Link href="/#collections" className="nav__link">
                            Collections
                        </Link>
                        <Link href="/#story" className="nav__link">
                            Our Story
                        </Link>
                        <Link href="/#gifting" className="nav__link">
                            Gifting
                        </Link>
                        <Link href="/#collections" className="nav__link">
                            Shop
                        </Link>
                        <Link href="/#contact" className="nav__link">
                            Contact
                        </Link>
                    </div>
                    <div className="nav__actions">
                        <button className="nav__cart" id="cart-btn" aria-label="Shopping Cart" onClick={() => setIsOpen(true)}>
                            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                                <line x1="3" y1="6" x2="21" y2="6" />
                                <path d="M16 10a4 4 0 01-8 0" />
                            </svg>
                            <span className="nav__cart-count">{cartCount}</span>
                        </button>
                        <button className="nav__hamburger" id="hamburger-btn" aria-label="Menu" onClick={handleMobileMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </button>
                    </div>
                </div>
            </nav>

            <div className={`mobile-menu ${mobileMenuOpen ? "mobile-menu--open" : ""}`} id="mobile-menu" style={{ display: mobileMenuOpen ? 'flex' : 'none' }}>
                <div className="mobile-menu__inner">
                    <Link href="/#home" className="mobile-menu__link" onClick={closeMobileMenu}>
                        Home
                    </Link>
                    <Link href="/#collections" className="mobile-menu__link" onClick={closeMobileMenu}>
                        Collections
                    </Link>
                    <Link href="/#story" className="mobile-menu__link" onClick={closeMobileMenu}>
                        Our Story
                    </Link>
                    <Link href="/#gifting" className="mobile-menu__link" onClick={closeMobileMenu}>
                        Gifting
                    </Link>
                    <Link href="/#collections" className="mobile-menu__link" onClick={closeMobileMenu}>
                        Shop
                    </Link>
                    <Link href="/#contact" className="mobile-menu__link" onClick={closeMobileMenu}>
                        Contact
                    </Link>
                    <div className="mobile-menu__divider"></div>
                    <span className="mobile-menu__est">Est. 2020 · Dhaka, Bangladesh</span>
                </div>
            </div>
        </>
    );
}
