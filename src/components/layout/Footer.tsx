import Link from "next/link";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container">
                    <div className="footer__grid">
                        <div className="footer__brand">
                            <span className="footer__logo">Ganachery</span>
                            <span className="footer__logo-sub">Pâtisserie · Est. 2020</span>
                            <p className="footer__tagline">
                                Handcrafted confections for life's most cherished moments — from a kitchen in Dhaka, to your table.
                            </p>
                            <div className="footer__social">
                                <a href="#" aria-label="Instagram" className="footer__social-link">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <rect x="2" y="2" width="20" height="20" rx="5" />
                                        <circle cx="12" cy="12" r="5" />
                                        <circle cx="17.5" cy="6.5" r="1" />
                                    </svg>
                                </a>
                                <a
                                    href="https://www.facebook.com/ganachery/"
                                    aria-label="Facebook"
                                    className="footer__social-link"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                                    </svg>
                                </a>
                                <a href="#" aria-label="WhatsApp" className="footer__social-link">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="footer__links">
                            <h4>Collections</h4>
                            <Link href="/#collections">Artisanal Truffles</Link>
                            <Link href="/#collections">Stuffed Dates</Link>
                            <Link href="/#collections">Chocolate Bars</Link>
                            <Link href="/#collections">Pâtisserie</Link>
                            <Link href="/#product">Gift Boxes</Link>
                        </div>
                        <div className="footer__links">
                            <h4>Services</h4>
                            <Link href="/#gifting">Wedding Favours</Link>
                            <Link href="/#gifting">Corporate Gifting</Link>
                            <Link href="/#gifting">Eid &amp; Ramadan</Link>
                            <Link href="/#contact">Custom Orders</Link>
                        </div>
                        <div className="footer__links">
                            <h4>Information</h4>
                            <Link href="/#story">Our Story</Link>
                            <Link href="/#contact">Contact Us</Link>
                            <Link href="#">Delivery Information</Link>
                            <Link href="#">Terms &amp; Conditions</Link>
                            <Link href="#">Privacy Policy</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__bottom-inner">
                        <span>&copy; {new Date().getFullYear()} Ganachery Pâtisserie. All rights reserved.</span>
                        <span>
                            Designed by <a href="#" className="footer__credit">Pixel Mango</a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
