// Love My Build - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
      // Add scroll effect to header with mobile optimization
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    // Add transition to header
    header.style.transition = 'transform 0.3s ease-in-out';
    
    // Animate cards on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all cards and service items
    const animatedElements = document.querySelectorAll('.about-card, .service-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
    // Add loading animation
    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroDescription = document.querySelector('.hero-description');
    const heroButtons = document.querySelector('.hero-buttons');
    const heroImage = document.querySelector('.hero-image');
    
    // Animate hero elements on load
    setTimeout(() => {
        if (heroTitle) {
            heroTitle.style.opacity = '1';
            heroTitle.style.transform = 'translateY(0)';
        }
    }, 200);
    
    setTimeout(() => {
        if (heroSubtitle) {
            heroSubtitle.style.opacity = '1';
            heroSubtitle.style.transform = 'translateY(0)';
        }
    }, 400);
    
    setTimeout(() => {
        if (heroDescription) {
            heroDescription.style.opacity = '1';
            heroDescription.style.transform = 'translateY(0)';
        }
    }, 600);
    
    setTimeout(() => {
        if (heroButtons) {
            heroButtons.style.opacity = '1';
            heroButtons.style.transform = 'translateY(0)';
        }
    }, 800);
    
    setTimeout(() => {
        if (heroImage) {
            heroImage.style.opacity = '1';
            heroImage.style.transform = 'scale(1)';
        }
    }, 1000);
    
    // Set initial styles for hero animations
    [heroTitle, heroSubtitle, heroDescription, heroButtons].forEach(el => {
        if (el) {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        }
    });
    
    if (heroImage) {
        heroImage.style.opacity = '0';
        heroImage.style.transform = 'scale(0.8)';
        heroImage.style.transition = 'opacity 1s ease, transform 1s ease';
    }
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
      // Enhanced Mobile Navigation
    const createMobileMenu = () => {
        const nav = document.querySelector('.nav-menu');
        const navContainer = document.querySelector('.nav-container');
        
        // Create hamburger button
        const hamburger = document.createElement('button');
        hamburger.className = 'hamburger';
        hamburger.innerHTML = '☰';
        hamburger.setAttribute('aria-label', 'Toggle navigation menu');
        hamburger.setAttribute('aria-expanded', 'false');
        
        // Insert hamburger before nav menu
        navContainer.insertBefore(hamburger, nav);
        
        // Mobile menu state
        let isMenuOpen = false;
        
        // Handle mobile navigation
        const toggleMenu = () => {
            isMenuOpen = !isMenuOpen;
            nav.classList.toggle('mobile-open', isMenuOpen);
            hamburger.setAttribute('aria-expanded', isMenuOpen.toString());
            hamburger.innerHTML = isMenuOpen ? '✕' : '☰';
            
            // Prevent body scroll when menu is open
            document.body.style.overflow = isMenuOpen ? 'hidden' : '';
        };
        
        // Toggle menu on hamburger click
        hamburger.addEventListener('click', toggleMenu);
        
        // Close menu when clicking navigation links
        const navLinks = nav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (isMenuOpen) {
                    toggleMenu();
                }
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (isMenuOpen && !navContainer.contains(e.target)) {
                toggleMenu();
            }
        });
        
        // Handle escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                toggleMenu();
            }
        });
        
        // Handle window resize
        const handleResize = () => {
            if (window.innerWidth > 768 && isMenuOpen) {
                toggleMenu();
            }
        };
        
        window.addEventListener('resize', handleResize);
        
        // Focus management for accessibility
        hamburger.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleMenu();
            }
        });
    };
    
    createMobileMenu();
    
    // Touch-friendly button enhancements
    const enhanceTouchTargets = () => {
        const buttons = document.querySelectorAll('.btn, .nav-menu a');
        
        buttons.forEach(button => {
            // Add touch feedback
            button.addEventListener('touchstart', function() {
                this.style.opacity = '0.8';
            });
            
            button.addEventListener('touchend', function() {
                this.style.opacity = '1';
            });
            
            button.addEventListener('touchcancel', function() {
                this.style.opacity = '1';
            });
        });
    };
    
    enhanceTouchTargets();
    
    // Improved scroll performance for mobile
    let ticking = false;
    
    const optimizedScroll = () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
        ticking = false;
    };
    
    const handleScroll = () => {
        if (!ticking) {
            requestAnimationFrame(optimizedScroll);
            ticking = true;
        }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    console.log('Love My Build - Website loaded successfully!');
});
