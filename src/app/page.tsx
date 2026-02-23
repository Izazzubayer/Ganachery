
"use client";
import { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [activeFilter, setActiveFilter] = useState('all');
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-out-cubic',
      once: true,
      offset: 80,
      delay: 0,
    });

    const handleScroll = () => {
      const nav = document.getElementById('main-nav');
      if (nav) {
        if (window.scrollY > 60) {
          nav.classList.add('nav--scrolled');
        } else {
          nav.classList.remove('nav--scrolled');
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Parallax effect on hero
    const handleParallax = () => {
      const hero = document.querySelector('.hero__bg-image') as HTMLElement;
      if (hero) {
        const scrolled = window.scrollY;
        hero.style.transform = `scale(1.05) translateY(${scrolled * 0.15}px)`;
      }
    };
    window.addEventListener('scroll', handleParallax);
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  const handleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const filterCards = (filter: string) => {
    setActiveFilter(filter);
    const cards = document.querySelectorAll('.product__card') as NodeListOf<HTMLElement>;
    cards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = '';
        card.style.animation = 'fadeInUp 0.6s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  };

  const handleQuickView = () => {
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = '';
  };

  const addToCart = () => {
    setCartCount(prev => prev + 1);
  };

  return (
    <>
      <div onClick={(e) => {
        // Event delegation for clicks to keep it simple without full React rewrite
        const target = e.target as HTMLElement;
        const quickViewBtn = target.closest('.product__quick-view');
        if (quickViewBtn) {
          handleQuickView();
          return;
        }

        const addToCartBtn = target.closest('.product__add-to-cart') || target.closest('.product__card-btn') || target.closest('.modal__add-btn');
        if (addToCartBtn) {
          addToCart();
          return;
        }

        const closeBtn = target.closest('#modal-close') || target.closest('.modal__backdrop');
        if (closeBtn) {
          closeModal();
          return;
        }

        const filterBtn = target.closest('.product__filter') as HTMLElement;
        if (filterBtn) {
          filterCards(filterBtn.dataset.filter || 'all');
          return;
        }

        const hamburgerBtn = target.closest('#hamburger-btn');
        if (hamburgerBtn) {
          handleMobileMenu();
          return;
        }

        const mobileLink = target.closest('.mobile-menu__link');
        if (mobileLink) {
          setMobileMenuOpen(false);
          return;
        }
      }}>





        <nav className="nav" id="main-nav">
          <div className="nav__inner">
            <a href="#home" className="nav__logo">
              <span className="nav__logo-text">Ganachery</span>
              <span className="nav__logo-sub">Pâtisserie</span>
            </a>
            <div className="nav__links" id="nav-links">
              <a href="#home" className="nav__link nav__link--active">Home</a>
              <a href="#collections" className="nav__link">Collections</a>
              <a href="#story" className="nav__link">Our Story</a>
              <a href="#gifting" className="nav__link">Gifting</a>
              <a href="#product" className="nav__link">Shop</a>
              <a href="#contact" className="nav__link">Contact</a>
            </div>
            <div className="nav__actions">
              <button className="nav__cart" id="cart-btn" aria-label="Shopping Cart">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
                <span className="nav__cart-count">0</span>
              </button>
              <button className="nav__hamburger" id="hamburger-btn" aria-label="Menu">
                <span></span><span></span><span></span>
              </button>
            </div>
          </div>
        </nav>


        <div className="mobile-menu" id="mobile-menu">
          <div className="mobile-menu__inner">
            <a href="#home" className="mobile-menu__link">Home</a>
            <a href="#collections" className="mobile-menu__link">Collections</a>
            <a href="#story" className="mobile-menu__link">Our Story</a>
            <a href="#gifting" className="mobile-menu__link">Gifting</a>
            <a href="#product" className="mobile-menu__link">Shop</a>
            <a href="#contact" className="mobile-menu__link">Contact</a>
            <div className="mobile-menu__divider"></div>
            <span className="mobile-menu__est">Est. 2020 · Dhaka, Bangladesh</span>
          </div>
        </div>




        <section className="hero" id="home">
          <div className="hero__overlay"></div>
          <div className="hero__bg-image" style={{ backgroundImage: "url('/images/chocolate-bars-ambient.jpg')" }}></div>
          <div className="hero__content">
            <div className="hero__badge" data-aos="fade-down" data-aos-delay="200">
              <span className="hero__badge-line"></span>
              <span className="hero__badge-text">Est. 2020 · Dhaka</span>
              <span className="hero__badge-line"></span>
            </div>
            <h1 className="hero__title" data-aos="fade-up" data-aos-delay="400">
              The Art of<br />
              <em>Indulgence</em>
            </h1>
            <p className="hero__subtitle" data-aos="fade-up" data-aos-delay="600">
              Handcrafted chocolates, premium dates & artisanal confections — <br className="desktop-only" />
              each piece a testament to the marriage of tradition and elegance.
            </p>
            <div className="hero__actions" data-aos="fade-up" data-aos-delay="800">
              <a href="#collections" className="btn btn--primary">Explore Collections</a>
              <a href="#story" className="btn btn--ghost">Our Story</a>
            </div>
            <div className="hero__scroll-indicator" data-aos="fade-up" data-aos-delay="1200">
              <div className="hero__scroll-line"></div>
              <span>Scroll to discover</span>
            </div>
          </div>
        </section>




        <section className="signature" id="collections">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <span className="section-header__label">Signature Collections</span>
              <h2 className="section-header__title">Curated with<br /><em>Precision & Passion</em></h2>
              <div className="section-header__divider">
                <span className="gold-line"></span>
                <svg className="section-header__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1">
                  <path d="M12 2l2.5 7.5H22l-6 4.5 2.5 7.5L12 17l-6.5 4.5L8 14 2 9.5h7.5z" />
                </svg>
                <span className="gold-line"></span>
              </div>
              <p className="section-header__desc">Every creation is a celebration of flavour, artistry, and the finest ingredients
                — handpicked and prepared with unwavering devotion.</p>
            </div>

            <div className="signature__grid">

              <div className="signature__card" data-aos="fade-up" data-aos-delay="100">
                <div className="signature__card-image">
                  <img src="/images/truffles-gift-box.jpg" alt="Artisanal Chocolate Truffles Collection" loading="lazy" />
                  <div className="signature__card-overlay">
                    <span className="btn btn--small btn--gold">Discover</span>
                  </div>
                </div>
                <div className="signature__card-content">
                  <span className="signature__card-label">Signature</span>
                  <h3 className="signature__card-title">Artisanal Truffles</h3>
                  <p className="signature__card-desc">Hazelnut praline, soan papri, cream cheese — each truffle handmade with
                    European-grade chocolate and desi-inspired soul.</p>
                  <span className="signature__card-price">From ৳ 1,800</span>
                </div>
              </div>


              <div className="signature__card" data-aos="fade-up" data-aos-delay="200">
                <div className="signature__card-image">
                  <img src="/images/dates-gift-box.jpg" alt="Premium Stuffed Medjool Dates" loading="lazy" />
                  <div className="signature__card-overlay">
                    <span className="btn btn--small btn--gold">Discover</span>
                  </div>
                </div>
                <div className="signature__card-content">
                  <span className="signature__card-label">Premium</span>
                  <h3 className="signature__card-title">Stuffed Medjool Dates</h3>
                  <p className="signature__card-desc">Large Medjool dates adorned with Hazelnut Praline, Gur (Jaggery), Coconut &
                    Sesame, and Walnut White Chocolate — crowned with gold leaf.</p>
                  <span className="signature__card-price">From ৳ 2,200</span>
                </div>
              </div>


              <div className="signature__card" data-aos="fade-up" data-aos-delay="300">
                <div className="signature__card-image">
                  <img src="/images/gallery-2.jpg" alt="Petit Fours & Tarts Collection" loading="lazy" />
                  <div className="signature__card-overlay">
                    <span className="btn btn--small btn--gold">Discover</span>
                  </div>
                </div>
                <div className="signature__card-content">
                  <span className="signature__card-label">Pâtisserie</span>
                  <h3 className="signature__card-title">Petit Fours & Tarts</h3>
                  <p className="signature__card-desc">Strawberry tarts topped with mirror-glaze, lemon meringue rosettes — the
                    delicate art of French pâtisserie with Bangladeshi warmth.</p>
                  <span className="signature__card-price">From ৳ 1,500</span>
                </div>
              </div>


              <div className="signature__card" data-aos="fade-up" data-aos-delay="400">
                <div className="signature__card-image">
                  <img src="/images/chocolate-strawberries.jpg" alt="Chocolate Covered Strawberries" loading="lazy" />
                  <div className="signature__card-overlay">
                    <span className="btn btn--small btn--gold">Discover</span>
                  </div>
                </div>
                <div className="signature__card-content">
                  <span className="signature__card-label">Seasonal</span>
                  <h3 className="signature__card-title">Chocolate Strawberries</h3>
                  <p className="signature__card-desc">Fresh, juicy strawberries enrobed in rich chocolate with hand-piped designs
                    — a fleeting luxury available only in season.</p>
                  <span className="signature__card-price">From ৳ 1,200</span>
                </div>
              </div>
            </div>

            <div className="signature__cta" data-aos="fade-up">
              <a href="#product" className="btn btn--primary">View All Collections</a>
            </div>
          </div>
        </section>




        <section className="story" id="story">
          <div className="story__bg"></div>
          <div className="container">
            <div className="story__grid">
              <div className="story__images" data-aos="fade-right">
                <div className="story__image story__image--main">
                  <img src="/images/assorted-box-closeup.jpg" alt="Close-up of handcrafted chocolate artistry"
                    loading="lazy" />
                </div>
                <div className="story__image story__image--accent">
                  <img src="/images/cake-display.jpg" alt="Ganachery cake on display" loading="lazy" />
                </div>
                <div className="story__image-badge">
                  <span className="story__image-badge-number">5+</span>
                  <span className="story__image-badge-text">Years of<br />Craft</span>
                </div>
              </div>
              <div className="story__content" data-aos="fade-left">
                <span className="section-header__label">Our Story</span>
                <h2 className="story__title">Where Heritage<br />Meets <em>Haute Pâtisserie</em></h2>
                <div className="story__divider">
                  <span className="gold-line gold-line--short"></span>
                </div>
                <p className="story__text">
                  Born from a kitchen in Dhaka with nothing more than a dream and a double boiler, Ganachery began as a
                  passion project — a quiet rebellion against mass-produced confectionery.
                </p>
                <p className="story__text">
                  Every truffle is hand-rolled. Every date is individually stuffed. Every chocolate bar is tempered, poured,
                  and adorned by hand. We source premium Belgian couverture, imported Medjool dates, and the finest local
                  ingredients to create confections that honour both the art of European pâtisserie and the warmth of
                  Bangladeshi hospitality.
                </p>
                <p className="story__text">
                  We don't make candy. We craft <em>edible sentiments</em> — for your celebrations, your milestones, and your
                  most cherished moments.
                </p>
                <div className="story__stats">
                  <div className="story__stat">
                    <span className="story__stat-number">5,000+</span>
                    <span className="story__stat-label">Gift Boxes Delivered</span>
                  </div>
                  <div className="story__stat">
                    <span className="story__stat-number">20+</span>
                    <span className="story__stat-label">Signature Flavours</span>
                  </div>
                  <div className="story__stat">
                    <span className="story__stat-number">100%</span>
                    <span className="story__stat-label">Handcrafted</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        <section className="giftboxes">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <span className="section-header__label">Gift Boxes</span>
              <h2 className="section-header__title">Unwrap <em>Elegance</em></h2>
              <div className="section-header__divider">
                <span className="gold-line"></span>
                <svg className="section-header__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1">
                  <rect x="3" y="8" width="18" height="14" rx="1" />
                  <path d="M12 8V22M3 12h18M7.5 8C7.5 8 7 2 12 2s4.5 6 4.5 6" />
                </svg>
                <span className="gold-line"></span>
              </div>
              <p className="section-header__desc">Our luxury gift boxes are designed to make a statement before they're opened.
                Wrapped in our signature packaging, each box tells a story of care and devotion.</p>
            </div>

            <div className="giftboxes__showcase">
              <div className="giftboxes__main" data-aos="fade-up">
                <img src="/images/gallery-4.jpg" alt="Ganachery Dessert Selections Gift Box" loading="lazy" />
                <div className="giftboxes__main-overlay">
                  <h3>Dessert Selections</h3>
                  <p>Our flagship gift box. A curated journey through truffles, dates, brownies, and beyond.</p>
                  <a href="#product" className="btn btn--gold">Explore This Box</a>
                </div>
              </div>
              <div className="giftboxes__side">
                <div className="giftboxes__side-item" data-aos="fade-up" data-aos-delay="100">
                  <img src="/images/brownies-dates-box.jpg" alt="Chocolate and Dates Assortment" loading="lazy" />
                  <div className="giftboxes__side-overlay">
                    <h4>Dates & Brownie Box</h4>
                    <span>From ৳ 3,500</span>
                  </div>
                </div>
                <div className="giftboxes__side-item" data-aos="fade-up" data-aos-delay="200">
                  <img src="/images/assorted-truffles-brownies.jpg" alt="Assorted Truffles and Brownies" loading="lazy" />
                  <div className="giftboxes__side-overlay">
                    <h4>Grand Assortment</h4>
                    <span>From ৳ 4,800</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        <section className="gifting" id="gifting">
          <div className="gifting__bg-texture"></div>
          <div className="container">
            <div className="gifting__grid">
              <div className="gifting__content" data-aos="fade-right">
                <span className="section-header__label section-header__label--light">Wedding & Corporate Gifting</span>
                <h2 className="gifting__title">Make Every Occasion<br /><em>Unforgettable</em></h2>
                <div className="story__divider">
                  <span className="gold-line gold-line--short"></span>
                </div>
                <p className="gifting__text">
                  From intimate nikah ceremonies to grand corporate affairs, our bespoke gifting service transforms your
                  vision into an exquisite reality. Each gift is customised — from flavour selections to packaging, monograms,
                  and ribbon colours.
                </p>
                <div className="gifting__features">
                  <div className="gifting__feature">
                    <div className="gifting__feature-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path
                          d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
                      </svg>
                    </div>
                    <div>
                      <h4>Wedding Favours</h4>
                      <p>Personalised boxes for holud, nikah & walima — starting from 50 pieces.</p>
                    </div>
                  </div>
                  <div className="gifting__feature">
                    <div className="gifting__feature-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="7" width="20" height="14" rx="2" />
                        <path d="M16 7V5a4 4 0 00-8 0v2" />
                      </svg>
                    </div>
                    <div>
                      <h4>Corporate Gifting</h4>
                      <p>Branded packaging, bulk orders, and doorstep delivery for Eid, Pohela Boishakh & year-end gifts.</p>
                    </div>
                  </div>
                  <div className="gifting__feature">
                    <div className="gifting__feature-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                      </svg>
                    </div>
                    <div>
                      <h4>Ramadan & Eid Collections</h4>
                      <p>Seasonal boxes featuring premium dates, truffles, and festive assortments — the perfect iftar & Eid
                        gift.</p>
                    </div>
                  </div>
                </div>
                <a href="#contact" className="btn btn--gold">Inquire About Gifting</a>
              </div>
              <div className="gifting__images" data-aos="fade-left">
                <div className="gifting__image-main">
                  <img src="/images/gallery-6.jpg" alt="Luxury wedding gift box by Ganachery" loading="lazy" />
                </div>
                <div className="gifting__image-accent">
                  <img src="/images/gallery-10.jpg" alt="Corporate gift arrangement" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>




        <section className="seasonal">
          <div className="container">
            <div className="seasonal__inner" data-aos="fade-up">
              <div className="seasonal__content">
                <span className="section-header__label">Limited Edition</span>
                <h2 className="seasonal__title">Ramadan <em>Collection</em></h2>
                <p className="seasonal__text">
                  A curated offering of premium Medjool dates stuffed with Hazelnut Praline, Gur, and Coconut, alongside
                  artisanal truffles and festive assortments. Available for a limited time.
                </p>
                <a href="#product" className="btn btn--primary">Shop Ramadan Collection</a>
              </div>
              <div className="seasonal__image">
                <img src="/images/gallery-14.jpg" alt="Ramadan Collection" loading="lazy" />
              </div>
            </div>
          </div>
        </section>




        <section className="product" id="product">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <span className="section-header__label">The Boutique</span>
              <h2 className="section-header__title">Shop Our <em>Collections</em></h2>
              <div className="section-header__divider">
                <span className="gold-line"></span>
                <svg className="section-header__icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  strokeWidth="1">
                  <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <path d="M16 10a4 4 0 01-8 0" />
                </svg>
                <span className="gold-line"></span>
              </div>
            </div>


            <div className="product__filters" data-aos="fade-up">
              <button className="product__filter product__filter--active" data-filter="all">All</button>
              <button className="product__filter" data-filter="chocolates">Chocolates</button>
              <button className="product__filter" data-filter="dates">Dates</button>
              <button className="product__filter" data-filter="giftbox">Gift Boxes</button>
              <button className="product__filter" data-filter="patisserie">Pâtisserie</button>
            </div>


            <div className="product__grid">

              <div className="product__card" data-category="chocolates" data-aos="fade-up" data-aos-delay="100">
                <div className="product__card-image">
                  <img src="/images/truffles-gift-box.jpg" alt="Signature Truffle Box - 25 Pieces" loading="lazy" />
                  <div className="product__card-badges">
                    <span className="product__badge product__badge--bestseller">Bestseller</span>
                  </div>
                  <div className="product__card-actions">
                    <button className="product__quick-view" aria-label="Quick View">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                    <button className="product__add-to-cart" aria-label="Add to Cart">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <path d="M16 10a4 4 0 01-8 0" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="product__card-info">
                  <span className="product__card-category">Chocolates</span>
                  <h3 className="product__card-name">Signature Truffle Box</h3>
                  <p className="product__card-variant">25 Pieces · Assorted</p>
                  <div className="product__card-bottom">
                    <span className="product__card-price">৳ 3,200</span>
                    <button className="product__card-btn">Add to Box</button>
                  </div>
                </div>
              </div>


              <div className="product__card" data-category="dates" data-aos="fade-up" data-aos-delay="200">
                <div className="product__card-image">
                  <img src="/images/gallery-6.jpg" alt="Premium Medjool Dates Collection" loading="lazy" />
                  <div className="product__card-badges">
                    <span className="product__badge product__badge--new">New</span>
                  </div>
                  <div className="product__card-actions">
                    <button className="product__quick-view" aria-label="Quick View">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                    <button className="product__add-to-cart" aria-label="Add to Cart">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <path d="M16 10a4 4 0 01-8 0" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="product__card-info">
                  <span className="product__card-category">Dates</span>
                  <h3 className="product__card-name">Premium Medjool Dates</h3>
                  <p className="product__card-variant">20 Pieces · 4 Flavours</p>
                  <div className="product__card-bottom">
                    <span className="product__card-price">৳ 2,800</span>
                    <button className="product__card-btn">Add to Box</button>
                  </div>
                </div>
              </div>


              <div className="product__card" data-category="giftbox" data-aos="fade-up" data-aos-delay="300">
                <div className="product__card-image">
                  <img src="/images/brownies-strawberries-box.jpg" alt="Grand Assortment Gift Box" loading="lazy" />
                  <div className="product__card-badges">
                    <span className="product__badge product__badge--limited">Limited</span>
                  </div>
                  <div className="product__card-actions">
                    <button className="product__quick-view" aria-label="Quick View">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                    <button className="product__add-to-cart" aria-label="Add to Cart">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <path d="M16 10a4 4 0 01-8 0" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="product__card-info">
                  <span className="product__card-category">Gift Box</span>
                  <h3 className="product__card-name">Grand Assortment</h3>
                  <p className="product__card-variant">Strawberries · Brownies · Dates</p>
                  <div className="product__card-bottom">
                    <span className="product__card-price">৳ 4,800</span>
                    <button className="product__card-btn">Add to Box</button>
                  </div>
                </div>
              </div>


              <div className="product__card" data-category="patisserie" data-aos="fade-up" data-aos-delay="400">
                <div className="product__card-image">
                  <img src="/images/cheesecake.jpg" alt="Basque Burnt Cheesecake" loading="lazy" />
                  <div className="product__card-badges">
                    <span className="product__badge product__badge--bestseller">Bestseller</span>
                  </div>
                  <div className="product__card-actions">
                    <button className="product__quick-view" aria-label="Quick View">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                    <button className="product__add-to-cart" aria-label="Add to Cart">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <path d="M16 10a4 4 0 01-8 0" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="product__card-info">
                  <span className="product__card-category">Pâtisserie</span>
                  <h3 className="product__card-name">Basque Burnt Cheesecake</h3>
                  <p className="product__card-variant">7 inch · Serves 8-10</p>
                  <div className="product__card-bottom">
                    <span className="product__card-price">৳ 2,500</span>
                    <button className="product__card-btn">Add to Box</button>
                  </div>
                </div>
              </div>


              <div className="product__card" data-category="chocolates" data-aos="fade-up" data-aos-delay="100">
                <div className="product__card-image">
                  <img src="/images/gallery-10.jpg" alt="Artisan Chocolate Bars" loading="lazy" />
                  <div className="product__card-actions">
                    <button className="product__quick-view" aria-label="Quick View">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                    <button className="product__add-to-cart" aria-label="Add to Cart">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <path d="M16 10a4 4 0 01-8 0" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="product__card-info">
                  <span className="product__card-category">Chocolates</span>
                  <h3 className="product__card-name">Artisan Chocolate Bars</h3>
                  <p className="product__card-variant">Set of 2 · Dark & Milk</p>
                  <div className="product__card-bottom">
                    <span className="product__card-price">৳ 1,800</span>
                    <button className="product__card-btn">Add to Box</button>
                  </div>
                </div>
              </div>


              <div className="product__card" data-category="giftbox" data-aos="fade-up" data-aos-delay="200">
                <div className="product__card-image">
                  <img src="/images/gallery-4.jpg" alt="Dessert Selections Premium Box" loading="lazy" />
                  <div className="product__card-badges">
                    <span className="product__badge product__badge--bestseller">Bestseller</span>
                  </div>
                  <div className="product__card-actions">
                    <button className="product__quick-view" aria-label="Quick View">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                    </button>
                    <button className="product__add-to-cart" aria-label="Add to Cart">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
                        <line x1="3" y1="6" x2="21" y2="6" />
                        <path d="M16 10a4 4 0 01-8 0" />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className="product__card-info">
                  <span className="product__card-category">Gift Box</span>
                  <h3 className="product__card-name">Dessert Selections</h3>
                  <p className="product__card-variant">Flagship · Truffles, Dates & More</p>
                  <div className="product__card-bottom">
                    <span className="product__card-price">৳ 5,500</span>
                    <button className="product__card-btn">Add to Box</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        <section className="testimonials">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <span className="section-header__label">Testimonials</span>
              <h2 className="section-header__title">Words from Our <em>Patrons</em></h2>
              <div className="section-header__divider">
                <span className="gold-line"></span>
                <span className="gold-line"></span>
              </div>
            </div>

            <div className="testimonials__grid">
              <div className="testimonials__card" data-aos="fade-up" data-aos-delay="100">
                <div className="testimonials__stars">★★★★★</div>
                <p className="testimonials__quote">"We ordered 200 custom boxes for our wedding and the response from our guests
                  was overwhelming. The packaging was exquisite and the truffles — absolute perfection."</p>
                <div className="testimonials__author">
                  <div className="testimonials__avatar">F</div>
                  <div>
                    <span className="testimonials__name">Fariha & Arif</span>
                    <span className="testimonials__role">Wedding, December 2024</span>
                  </div>
                </div>
              </div>

              <div className="testimonials__card" data-aos="fade-up" data-aos-delay="200">
                <div className="testimonials__stars">★★★★★</div>
                <p className="testimonials__quote">"As a corporate buyer, I need consistency and elegance. Ganachery delivers both
                  without fail. Our clients always remember the gift — and the sentiment behind it."</p>
                <div className="testimonials__author">
                  <div className="testimonials__avatar">R</div>
                  <div>
                    <span className="testimonials__name">Reza Karim</span>
                    <span className="testimonials__role">CEO, Karim Holdings</span>
                  </div>
                </div>
              </div>

              <div className="testimonials__card" data-aos="fade-up" data-aos-delay="300">
                <div className="testimonials__stars">★★★★★</div>
                <p className="testimonials__quote">"The Soan Papri truffles brought tears to my mother's eyes. It tasted like
                  home. Ganachery understands something most brands don't — the soul of food."</p>
                <div className="testimonials__author">
                  <div className="testimonials__avatar">N</div>
                  <div>
                    <span className="testimonials__name">Nadia Chowdhury</span>
                    <span className="testimonials__role">Loyal Customer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>




        <section className="gallery">
          <div className="container">
            <div className="section-header" data-aos="fade-up">
              <span className="section-header__label">@ganachery.bd</span>
              <h2 className="section-header__title">Follow Our <em>Journey</em></h2>
            </div>

            <div className="gallery__grid" data-aos="fade-up">
              <div className="gallery__item gallery__item--tall">
                <img src="/images/truffles-gift-box.jpg" alt="Gallery" loading="lazy" />
                <div className="gallery__overlay">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1" />
                  </svg>
                </div>
              </div>
              <div className="gallery__item">
                <img src="/images/tarts-flatlay.jpg" alt="Gallery" loading="lazy" />
                <div className="gallery__overlay">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1" />
                  </svg>
                </div>
              </div>
              <div className="gallery__item">
                <img src="/images/chocolate-strawberries.jpg" alt="Gallery" loading="lazy" />
                <div className="gallery__overlay">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1" />
                  </svg>
                </div>
              </div>
              <div className="gallery__item gallery__item--wide">
                <img src="/images/dates-gift-box.jpg" alt="Gallery" loading="lazy" />
                <div className="gallery__overlay">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1" />
                  </svg>
                </div>
              </div>
              <div className="gallery__item">
                <img src="/images/gallery-8.jpg" alt="Gallery" loading="lazy" />
                <div className="gallery__overlay">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1" />
                  </svg>
                </div>
              </div>
              <div className="gallery__item">
                <img src="/images/gallery-9.jpg" alt="Gallery" loading="lazy" />
                <div className="gallery__overlay">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>




        <section className="contact" id="contact">
          <div className="container">
            <div className="contact__grid">
              <div className="contact__info" data-aos="fade-right">
                <span className="section-header__label">Get in Touch</span>
                <h2 className="contact__title">Begin Your<br /><em>Gifting Journey</em></h2>
                <div className="story__divider">
                  <span className="gold-line gold-line--short"></span>
                </div>
                <p className="contact__text">Whether you're planning an intimate celebration or a grand occasion, we'd love to
                  craft something extraordinary for you.</p>

                <div className="contact__details">
                  <div className="contact__detail">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                    <span>Gulshan 2, Dhaka, Bangladesh</span>
                  </div>
                  <div className="contact__detail">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path
                        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <span>+880 1730-377706</span>
                  </div>
                  <div className="contact__detail">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <rect x="2" y="2" width="20" height="20" rx="5" />
                      <circle cx="12" cy="12" r="5" />
                      <circle cx="17.5" cy="6.5" r="1" />
                    </svg>
                    <span>@ganachery.bd</span>
                  </div>
                </div>
              </div>

              <form className="contact__form" data-aos="fade-left" id="inquiry-form">
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" placeholder="Your name" required />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" id="phone" placeholder="+880" required />
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="inquiry-type">Inquiry Type</label>
                  <select id="inquiry-type" required>
                    <option value="" disabled selected>Select an option</option>
                    <option value="wedding">Wedding Gifting</option>
                    <option value="corporate">Corporate Gifting</option>
                    <option value="seasonal">Seasonal / Eid Order</option>
                    <option value="custom">Custom Order</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="event-date">Event Date (if applicable)</label>
                    <input type="date" id="event-date" />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="quantity">Estimated Quantity</label>
                    <input type="text" id="quantity" placeholder="e.g. 50-100 boxes" />
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Tell Us More</label>
                  <textarea id="message" rows={4}
                    placeholder="Describe your vision, preferences, or any special requirements..."></textarea>
                </div>
                <button type="submit" className="btn btn--primary btn--full">Send Inquiry</button>
                <p className="contact__form-note">We typically respond within 24 hours.</p>
              </form>
            </div>
          </div>
        </section>




        <footer className="footer">
          <div className="footer__top">
            <div className="container">
              <div className="footer__grid">
                <div className="footer__brand">
                  <span className="footer__logo">Ganachery</span>
                  <span className="footer__logo-sub">Pâtisserie · Est. 2020</span>
                  <p className="footer__tagline">Handcrafted confections for life's most cherished moments — from a kitchen in
                    Dhaka, to your table.</p>
                  <div className="footer__social">
                    <a href="#" aria-label="Instagram" className="footer__social-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <rect x="2" y="2" width="20" height="20" rx="5" />
                        <circle cx="12" cy="12" r="5" />
                        <circle cx="17.5" cy="6.5" r="1" />
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/ganachery/" aria-label="Facebook" className="footer__social-link"
                      target="_blank" rel="noopener noreferrer">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                      </svg>
                    </a>
                    <a href="#" aria-label="WhatsApp" className="footer__social-link">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path
                          d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="footer__links">
                  <h4>Collections</h4>
                  <a href="#collections">Artisanal Truffles</a>
                  <a href="#collections">Stuffed Dates</a>
                  <a href="#collections">Chocolate Bars</a>
                  <a href="#collections">Pâtisserie</a>
                  <a href="#product">Gift Boxes</a>
                </div>
                <div className="footer__links">
                  <h4>Services</h4>
                  <a href="#gifting">Wedding Favours</a>
                  <a href="#gifting">Corporate Gifting</a>
                  <a href="#gifting">Eid & Ramadan</a>
                  <a href="#contact">Custom Orders</a>
                </div>
                <div className="footer__links">
                  <h4>Information</h4>
                  <a href="#story">Our Story</a>
                  <a href="#contact">Contact Us</a>
                  <a href="#">Delivery Information</a>
                  <a href="#">Terms & Conditions</a>
                  <a href="#">Privacy Policy</a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer__bottom">
            <div className="container">
              <div className="footer__bottom-inner">
                <span>&copy; 2025 Ganachery Pâtisserie. All rights reserved.</span>
                <span>Designed by <a href="#" className="footer__credit">Pixel Mango</a></span>
              </div>
            </div>
          </div>
        </footer>


        <div className="modal" id="product-modal">
          <div className="modal__backdrop"></div>
          <div className="modal__content">
            <button className="modal__close" id="modal-close" aria-label="Close">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
            <div className="modal__grid">
              <div className="modal__gallery">
                <div className="modal__main-image">
                  <img src="/images/truffles-gift-box.jpg" alt="Product" id="modal-image" />
                </div>
                <div className="modal__thumbnails">
                  <img src="/images/truffles-gift-box.jpg" alt="Thumbnail" className="modal__thumb modal__thumb--active" />
                  <img src="/images/assorted-box-closeup.jpg" alt="Thumbnail" className="modal__thumb" />
                  <img src="/images/gallery-4.jpg" alt="Thumbnail" className="modal__thumb" />
                </div>
              </div>
              <div className="modal__details">
                <span className="modal__category">Chocolates · Signature</span>
                <h2 className="modal__title">Signature Truffle Box</h2>
                <div className="modal__rating">★★★★★ <span>(47 reviews)</span></div>
                <p className="modal__price">৳ 3,200</p>
                <p className="modal__desc">A curated collection of 25 handcrafted truffles — Hazelnut Praline, Soan Papri, Cream
                  Cheese, Dark Chocolate Meringue, and Gur Coconut Sesame. Each truffle is prepared in small batches using
                  premium Belgian couverture.</p>

                <div className="modal__section">
                  <h4>Select Size</h4>
                  <div className="modal__variants">
                    <button className="modal__variant">12 Pieces — ৳ 1,800</button>
                    <button className="modal__variant modal__variant--active">25 Pieces — ৳ 3,200</button>
                    <button className="modal__variant">36 Pieces — ৳ 4,500</button>
                  </div>
                </div>

                <div className="modal__section">
                  <h4>Packaging</h4>
                  <div className="modal__variants">
                    <button className="modal__variant modal__variant--active">Signature Box</button>
                    <button className="modal__variant">Gift Wrapped</button>
                    <button className="modal__variant">Custom Monogram (+৳ 300)</button>
                  </div>
                </div>

                <div className="modal__section">
                  <h4>Add a Gift Note</h4>
                  <textarea className="modal__gift-note" placeholder="Write a personal message to be included with the box..."
                    rows={3}></textarea>
                </div>

                <div className="modal__section modal__delivery">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="1" y="3" width="15" height="13" />
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
                    <circle cx="5.5" cy="18.5" r="2.5" />
                    <circle cx="18.5" cy="18.5" r="2.5" />
                  </svg>
                  <span>Delivery within Dhaka in 24-48 hours. Nationwide shipping available.</span>
                </div>

                <div className="modal__actions">
                  <div className="modal__quantity">
                    <button className="modal__qty-btn" id="qty-decrease">−</button>
                    <span className="modal__qty-value" id="qty-value">1</span>
                    <button className="modal__qty-btn" id="qty-increase">+</button>
                  </div>
                  <button className="btn btn--primary btn--full modal__add-btn">Add to Box — ৳ 3,200</button>
                </div>
              </div>
            </div>
          </div>
        </div>



      </div>
    </>
  );
}
