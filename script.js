// Mobile Navigation Toggle
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');
const navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    // Toggle Nav
    nav.classList.toggle('active');
    
    // Animate Links
    navLinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
        }
    });
    
    // Burger Animation
    burger.classList.toggle('toggle');
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
const bookingForm = document.querySelector('.booking-form');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic form validation
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const tour = this.querySelector('select').value;
        const date = this.querySelector('input[type="date"]').value;
        
        if (!name || !email || !phone || !tour || !date) {
            alert('Please fill in all fields');
            return;
        }
        
        // Here you would typically send the form data to a server
        alert('Booking submitted successfully! We will contact you shortly.');
        this.reset();
    });
}

// Add animation to destination cards on scroll
const destinationCards = document.querySelectorAll('.destination-card');
const tourCards = document.querySelectorAll('.tour-card');

const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation styles to cards
destinationCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

tourCards.forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(card);
});

// Add current year to footer
document.querySelector('.footer-bottom p').innerHTML = `&copy; ${new Date().getFullYear()} Wanderlust. All rights reserved.`;

// Add loading animation for images
document.querySelectorAll('img').forEach(img => {
    img.style.opacity = '0';
    img.addEventListener('load', () => {
        img.style.transition = 'opacity 0.5s ease';
        img.style.opacity = '1';
    });
});

// Testimonial Slider
const testimonialSlider = document.querySelector('.testimonial-slider');
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
let currentSlide = 0;

function updateSlider() {
    testimonialSlider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + testimonialCards.length) % testimonialCards.length;
    updateSlider();
});

nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % testimonialCards.length;
    updateSlider();
});

// Auto-rotate testimonials
setInterval(() => {
    currentSlide = (currentSlide + 1) % testimonialCards.length;
    updateSlider();
}, 5000);

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = this.querySelector('input[type="email"]').value;
        
        // Here you would typically send the email to your server
        alert('Thank you for subscribing to our newsletter!');
        this.reset();
    });
}

// Enhanced Navigation Scroll Effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Add loading animation to images
document.querySelectorAll('img').forEach(img => {
    img.classList.add('loading');
    img.addEventListener('load', () => {
        img.classList.remove('loading');
        img.style.opacity = '1';
    });
});

// Add smooth scroll to all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add animation to elements when they come into view
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.destination-card, .tour-card, .testimonial-card').forEach(element => {
    animateOnScroll.observe(element);
}); 