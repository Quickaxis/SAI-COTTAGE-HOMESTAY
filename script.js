// Sai Cottage Homestay - Official Interaction Controller

document.addEventListener('DOMContentLoaded', () => {
    initNavbarScroll();
    initMobileMenu();
    initHeroSlideshow();
    initCardSliders();
    initGalleryFilter();
    initLightbox();
    initFaqAccordion();
    initBookingForm();
    initScrollReveal();
});

// ===== 1. HERO SLIDESHOW ROTATION SYSTEM =====
function initHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-slideshow-container .hero-slide');
    if (slides.length <= 1) return;

    let currentSlide = 0;
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }, 5500);
}

// ===== 2. INTERACTIVE ROOM CARD SLIDERS =====
const sliderStates = {
    nonAcSlider: 0,
    acSlider: 0
};

function initCardSliders() {
    ['nonAcSlider', 'acSlider'].forEach(sliderId => {
        const slider = document.getElementById(sliderId);
        if (!slider) return;

        sliderStates[sliderId] = 0;
        updateCardSliderUI(sliderId);
        initSwipeEvents(sliderId);
    });
}

function updateCardSliderUI(sliderId) {
    const slider = document.getElementById(sliderId);
    if (!slider) return;

    const parent = slider.parentElement;
    const slides = slider.querySelectorAll('.room-card-slide');
    const dots = parent ? parent.querySelectorAll('.room-card-dot') : [];
    const totalSlides = slides.length;

    if (totalSlides === 0) return;

    // Ensure index stays strictly within bounds [0, totalSlides - 1]
    let currentIndex = sliderStates[sliderId] || 0;
    currentIndex = (currentIndex % totalSlides + totalSlides) % totalSlides;
    sliderStates[sliderId] = currentIndex;

    // Smooth track translation
    slider.style.transform = `translateX(-${(currentIndex / totalSlides) * 100}%)`;

    // Toggle active class on slides
    slides.forEach((slide, idx) => {
        if (idx === currentIndex) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });

    // Toggle active class on dots
    dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function navigateCardSlider(event, sliderId, direction) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    const slider = document.getElementById(sliderId);
    if (!slider) return;

    const slides = slider.querySelectorAll('.room-card-slide');
    const totalSlides = slides.length;
    if (totalSlides === 0) return;

    let currentIndex = sliderStates[sliderId] || 0;
    if (direction === 1) {
        currentIndex = (currentIndex + 1) % totalSlides;
    } else if (direction === -1) {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    }

    sliderStates[sliderId] = currentIndex;
    updateCardSliderUI(sliderId);
}

function setCardSlider(event, sliderId, targetIdx) {
    if (event) {
        event.preventDefault();
        event.stopPropagation();
    }
    const slider = document.getElementById(sliderId);
    if (!slider) return;

    const slides = slider.querySelectorAll('.room-card-slide');
    const totalSlides = slides.length;
    if (totalSlides === 0) return;

    if (targetIdx >= 0 && targetIdx < totalSlides) {
        sliderStates[sliderId] = targetIdx;
        updateCardSliderUI(sliderId);
    }
}

function initSwipeEvents(sliderId) {
    const slider = document.getElementById(sliderId);
    if (!slider) return;
    const mediaBox = slider.parentElement;

    let startX = 0;
    let endX = 0;

    mediaBox.addEventListener('touchstart', (e) => {
        startX = e.changedTouches[0].screenX;
    }, { passive: true });

    mediaBox.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].screenX;
        handleSwipe();
    }, { passive: true });

    function handleSwipe() {
        const threshold = 50;
        const diff = startX - endX;

        if (Math.abs(diff) > threshold) {
            if (diff > 0) {
                // Swipe left -> Next photo
                navigateCardSlider(null, sliderId, 1);
            } else {
                // Swipe right -> Previous photo
                navigateCardSlider(null, sliderId, -1);
            }
        }
    }
}

// ===== 3. FLOATING NAVBAR SCROLL CLASS =====
function initNavbarScroll() {
    const header = document.getElementById('mainHeader');
    if (!header) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ===== 2. MOBILE MENU OVERLAY TRANSITIONS & CLOSE ACTIONS =====
let focusTrapHandler = null;

function initMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileCloseBtn = document.getElementById('mobileCloseBtn');

    if (!menuToggle || !mobileOverlay || !mobileDrawer) return;

    // Set initial aria attribute
    menuToggle.setAttribute('aria-expanded', 'false');

    function toggleMenu(e) {
        if (e) e.stopPropagation();
        const isOpen = mobileOverlay.classList.contains('active');
        if (isOpen) {
            closeMobileMenu();
        } else {
            openMobileMenu();
        }
    }

    menuToggle.addEventListener('click', toggleMenu);
    if (mobileCloseBtn) {
        mobileCloseBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            closeMobileMenu();
        });
    }

    // Close when clicking overlay (outside drawer)
    mobileOverlay.addEventListener('click', (e) => {
        if (e.target === mobileOverlay) {
            closeMobileMenu();
        }
    });

    // Close when clicking navigation elements inside drawer
    const drawerInteractive = mobileDrawer.querySelectorAll('.nav-link, .btn');
    drawerInteractive.forEach(el => {
        el.addEventListener('click', () => {
            closeMobileMenu();
        });
    });

    // Escape Key listener
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileOverlay.classList.contains('active')) {
            closeMobileMenu();
        }
    });
}

function openMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileCloseBtn = document.getElementById('mobileCloseBtn');

    if (!menuToggle || !mobileOverlay || !mobileDrawer) return;

    menuToggle.classList.add('active');
    mobileOverlay.classList.add('active');
    mobileDrawer.classList.add('active');
    menuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';

    // Focus first element or close button
    setTimeout(() => {
        if (mobileCloseBtn) {
            mobileCloseBtn.focus();
        }
    }, 100);

    // Setup focus trap
    const focusableEls = mobileDrawer.querySelectorAll('button, [href], input, select, textarea, [tabindex="0"]');
    if (focusableEls.length > 0) {
        const firstEl = focusableEls[0];
        const lastEl = focusableEls[focusableEls.length - 1];

        if (focusTrapHandler) {
            document.removeEventListener('keydown', focusTrapHandler);
        }

        focusTrapHandler = function(e) {
            if (e.key === 'Tab') {
                if (e.shiftKey) { // Shift + Tab
                    if (document.activeElement === firstEl) {
                        lastEl.focus();
                        e.preventDefault();
                    }
                } else { // Tab
                    if (document.activeElement === lastEl) {
                        firstEl.focus();
                        e.preventDefault();
                    }
                }
            }
        };

        document.addEventListener('keydown', focusTrapHandler);
    }
}

function closeMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mobileOverlay = document.getElementById('mobileOverlay');
    const mobileDrawer = document.getElementById('mobileDrawer');

    if (!menuToggle || !mobileOverlay || !mobileDrawer) return;

    menuToggle.classList.remove('active');
    mobileOverlay.classList.remove('active');
    mobileDrawer.classList.remove('active');
    menuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';

    if (focusTrapHandler) {
        document.removeEventListener('keydown', focusTrapHandler);
        focusTrapHandler = null;
    }

    setTimeout(() => {
        menuToggle.focus();
    }, 100);
}

// ===== 3. GALLERY CATEGORIES FILTER MASONS =====
function initGalleryFilter() {
    // Buttons state management
}

function filterGallery(category) {
    const buttons = document.querySelectorAll('.gallery-filters .filter-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('onclick').includes(category)) {
            btn.classList.add('active');
        }
    });

    const grid = document.getElementById('masonryGrid');
    if (grid) {
        grid.classList.remove('filter-all', 'filter-ac', 'filter-nonac', 'filter-property');
        grid.classList.add(`filter-${category}`);
    }

    const items = document.querySelectorAll('#masonryGrid .gallery-item');
    let shownCount = 0;
    const limits = {
        'all': 7,
        'ac': 2,
        'nonac': 2,
        'property': 3
    };
    
    const targetLimit = limits[category] || 999;

    items.forEach(item => {
        let matches = false;
        if (category === 'all') {
            matches = true;
        } else if (item.classList.contains(`g-${category}`)) {
            matches = true;
        }

        if (matches && shownCount < targetLimit) {
            shownCount++;
            item.style.display = 'block';
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'scale(1)';
            }, 50);
        } else {
            item.style.opacity = '0';
            item.style.transform = 'scale(0.95)';
            setTimeout(() => {
                item.style.display = 'none';
            }, 300);
        }
    });
}

// ===== 4. HD GALLERY LIGHTBOX SYSTEM (HIGH-QUALITY PHOTOS) =====
const lightboxPlaceholders = [
    { src: 'photos/nonac1/1.png?v=3', caption: 'Sai Cottage Homestay — Non-AC Room 1' },
    { src: 'photos/ac/1.png?v=3', caption: 'Sai Cottage Homestay — AC Room 1' },
    { src: 'photos/reception.png?v=3', caption: 'Sai Cottage Homestay — Reception' },
    { src: 'photos/nonac1/2.png?v=3', caption: 'Sai Cottage Homestay — Non-AC Room 2' },
    { src: 'photos/ac/2.png?v=3', caption: 'Sai Cottage Homestay — AC Room 2' },
    { src: 'photos/parking1.png?v=3', caption: 'Sai Cottage Homestay — Parking 1' },
    { src: 'photos/parking2.png?v=3', caption: 'Sai Cottage Homestay — Parking 2' }
];

let activeLightboxIdx = 0;

function initLightbox() {
    const lightbox = document.getElementById('galleryLightbox');
    if (!lightbox) return;

    // Close overlay by clicking outer backgrounds
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox || e.target.classList.contains('lightbox-content-wrapper')) {
            closeLightbox();
        }
    });

    // Keyboard key listeners
    document.addEventListener('keydown', (e) => {
        if (lightbox.style.display === 'flex') {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') navigateLightbox(1);
            if (e.key === 'ArrowLeft') navigateLightbox(-1);
        }
    });
}

function openLightbox(index) {
    const lightbox = document.getElementById('galleryLightbox');
    if (!lightbox) return;

    activeLightboxIdx = index;
    lightbox.style.display = 'flex';
    updateLightboxUI();
    document.body.style.overflow = 'hidden';
}

// Dismiss lightbox view
function closeLightbox() {
    const lightbox = document.getElementById('galleryLightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = '';
    }
}

function updateLightboxUI() {
    const imgElement = document.getElementById('lightboxActualImage');
    const captionElement = document.getElementById('lightboxCaption');
    const wrapper = document.getElementById('lightboxImgWrapper');
    if (!imgElement || !captionElement || !wrapper) return;

    const activePhoto = lightboxPlaceholders[activeLightboxIdx];

    // Smooth transition fade out
    wrapper.style.opacity = '0.3';
    setTimeout(() => {
        imgElement.src = activePhoto.src;
        captionElement.innerText = activePhoto.caption;
        wrapper.style.opacity = '1';
    }, 120);
}

function navigateLightbox(direction) {
    activeLightboxIdx = (activeLightboxIdx + direction + lightboxPlaceholders.length) % lightboxPlaceholders.length;
    updateLightboxUI();
}

// ===== 5. FAQ ACCORDION PANEL TRANSITIONS =====
function initFaqAccordion() {
    // Initial structures
}

function toggleFaq(triggerElement) {
    const item = triggerElement.parentElement;
    const content = item.querySelector('.faq-content');

    if (!item || !content) return;

    const isActive = item.classList.contains('active');

    // Collapse all other active QA items
    const allItems = document.querySelectorAll('.faq-item');
    allItems.forEach(el => {
        el.classList.remove('active');
        el.querySelector('.faq-content').style.maxHeight = null;
    });

    if (!isActive) {
        item.classList.add('active');
        content.style.maxHeight = content.scrollHeight + 'px';
    } else {
        item.classList.remove('active');
        content.style.maxHeight = null;
    }
}



// ===== 7. DIRECT WHATSAPP BOOKING SYSTEM =====
const SAI_COTTAGE_PHONE = '918486298700';

function bookOnWhatsApp(roomType) {
    let message = '';

    if (roomType === 'ac') {
        message = `Hello Sai Cottage Homestay,

I am interested in booking an AC Room.

Name:
Check-in Date:
Check-out Date:
Number of Guests:

Please let me know the availability and total price.

Thank you.`;
    } else if (roomType === 'nonac') {
        message = `Hello Sai Cottage Homestay,

I am interested in booking a Non-AC Room.

Name:
Check-in Date:
Check-out Date:
Number of Guests:

Please let me know the availability and total price.

Thank you.`;
    } else {
        message = `Hello Sai Cottage Homestay,

I would like to book a room.

Name:
Check-in Date:
Check-out Date:
Number of Guests:
Room Type (AC / Non-AC):

Please let me know the availability.

Thank you.`;
    }

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${SAI_COTTAGE_PHONE}?text=${encodedMessage}`, '_blank');
}

function initBookingForm() {
    // No form to initialize — booking is now direct WhatsApp / Call
}

function openBookingDialog() {
    const modal = document.getElementById('bookingModal');
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBookingDialog() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }
}

// ===== 8. INTERSECTION OBSERVER FOR SCROLL FADES =====
function initScrollReveal() {
    const elements = document.querySelectorAll('.scroll-reveal');
    if (elements.length === 0) return;

    const revealOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    elements.forEach(el => {
        revealObserver.observe(el);
    });
}
