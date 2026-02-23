/* ══════════════════════════════════════════════════
   GANACHERY PÂTISSERIE — Main JavaScript
   ══════════════════════════════════════════════════ */

// Initialize AOS
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 80,
  delay: 0,
});

// ─── NAVIGATION ───
const nav = document.getElementById('main-nav');
const hamburger = document.getElementById('hamburger-btn');
const mobileMenu = document.getElementById('mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-menu__link');
const navLinks = document.querySelectorAll('.nav__link');

// Scroll-based nav styling
let lastScroll = 0;
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  if (scrollY > 60) {
    nav.classList.add('nav--scrolled');
  } else {
    nav.classList.remove('nav--scrolled');
  }
  lastScroll = scrollY;
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('mobile-menu--active');
  const spans = hamburger.querySelectorAll('span');
  if (mobileMenu.classList.contains('mobile-menu--active')) {
    spans[0].style.transform = 'rotate(45deg) translate(4px, 4px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(4px, -4px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// Close mobile menu on link click
mobileLinks.forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('mobile-menu--active');
    const spans = hamburger.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY + 200;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        link.classList.remove('nav__link--active');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('nav__link--active');
        }
      });
    }
  });
});

// ─── PRODUCT FILTERS ───
const filterBtns = document.querySelectorAll('.product__filter');
const productCards = document.querySelectorAll('.product__card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('product__filter--active'));
    btn.classList.add('product__filter--active');
    const filter = btn.dataset.filter;

    productCards.forEach(card => {
      if (filter === 'all' || card.dataset.category === filter) {
        card.style.display = '';
        card.style.animation = 'fadeInUp 0.6s ease forwards';
      } else {
        card.style.display = 'none';
      }
    });
  });
});

// Add fadeInUp animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);

// ─── PRODUCT MODAL ───
const modal = document.getElementById('product-modal');
const modalClose = document.getElementById('modal-close');
const modalBackdrop = modal.querySelector('.modal__backdrop');
const quickViewBtns = document.querySelectorAll('.product__quick-view');
const modalThumbs = document.querySelectorAll('.modal__thumb');
const modalImage = document.getElementById('modal-image');

quickViewBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    modal.classList.add('modal--active');
    document.body.style.overflow = 'hidden';
  });
});

const closeModal = () => {
  modal.classList.remove('modal--active');
  document.body.style.overflow = '';
};

modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

// Thumbnail switching
modalThumbs.forEach(thumb => {
  thumb.addEventListener('click', () => {
    modalThumbs.forEach(t => t.classList.remove('modal__thumb--active'));
    thumb.classList.add('modal__thumb--active');
    modalImage.src = thumb.src;
  });
});

// ─── QUANTITY SELECTOR ───
const qtyDecrease = document.getElementById('qty-decrease');
const qtyIncrease = document.getElementById('qty-increase');
const qtyValue = document.getElementById('qty-value');
let qty = 1;

qtyDecrease.addEventListener('click', () => {
  if (qty > 1) {
    qty--;
    qtyValue.textContent = qty;
  }
});

qtyIncrease.addEventListener('click', () => {
  qty++;
  qtyValue.textContent = qty;
});

// ─── VARIANT SELECTION ───
document.querySelectorAll('.modal__variants').forEach(group => {
  const variants = group.querySelectorAll('.modal__variant');
  variants.forEach(variant => {
    variant.addEventListener('click', () => {
      variants.forEach(v => v.classList.remove('modal__variant--active'));
      variant.classList.add('modal__variant--active');
    });
  });
});

// ─── FORM HANDLING ───
const form = document.getElementById('inquiry-form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  const originalText = btn.textContent;
  btn.textContent = 'Inquiry Sent ✓';
  btn.style.background = '#4A7C59';
  btn.style.borderColor = '#4A7C59';
  setTimeout(() => {
    btn.textContent = originalText;
    btn.style.background = '';
    btn.style.borderColor = '';
    form.reset();
  }, 3000);
});

// ─── SMOOTH SCROLL FOR ANCHOR LINKS ───
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  });
});

// ─── ADD TO CART BUTTONS ───
const cartCount = document.querySelector('.nav__cart-count');
let cartItems = 0;

document.querySelectorAll('.product__card-btn, .product__add-to-cart, .modal__add-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    cartItems++;
    cartCount.textContent = cartItems;
    cartCount.style.transform = 'scale(1.3)';
    setTimeout(() => {
      cartCount.style.transform = 'scale(1)';
    }, 200);
  });
});

// ─── PARALLAX EFFECT ON HERO ───
window.addEventListener('scroll', () => {
  const hero = document.querySelector('.hero__bg-image');
  if (hero) {
    const scrolled = window.scrollY;
    hero.style.transform = `scale(1.05) translateY(${scrolled * 0.15}px)`;
  }
});

console.log('%c✦ Ganachery Pâtisserie — Website Prototype', 
  'color: #C7A157; font-family: Georgia, serif; font-size: 14px; font-style: italic;');
console.log('%cDesigned by Pixel Mango', 
  'color: #9B7462; font-family: sans-serif; font-size: 10px;');
