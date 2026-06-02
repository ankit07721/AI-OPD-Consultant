// Smooth scroll functionality
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
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

// Add animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe objective cards
document.querySelectorAll('.objective-card').forEach(card => {
    observer.observe(card);
});

// Observe feature cards
document.querySelectorAll('.feature').forEach(feature => {
    observer.observe(feature);
});

// Observe role cards
document.querySelectorAll('.role-card').forEach(role => {
    observer.observe(role);
});

// Observe timeline items
document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }

    .objective-card,
    .feature,
    .role-card,
    .timeline-item {
        opacity: 0;
    }
`;
document.head.appendChild(style);

// CTA Button functionality
document.querySelectorAll('.cta-button, .cta-button-large').forEach(button => {
    button.addEventListener('click', function() {
        // You can add custom action here
        console.log('CTA Button clicked');
        // Example: Scroll to contact section
        const contactSection = document.querySelector('#contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Mobile menu toggle (for future implementation with hamburger menu)
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

// Add active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Add active link styling
const activeStyle = document.createElement('style');
activeStyle.textContent = `
    .nav-links a.active {
        border-bottom: 2px solid white;
        padding-bottom: 0.25rem;
    }
`;
document.head.appendChild(activeStyle);

// Initialize tooltips (if needed for future features)
function initTooltips() {
    // Add tooltip functionality here
    console.log('Tooltips initialized');
}

// Document ready
document.addEventListener('DOMContentLoaded', () => {
    console.log('AI-Based OPD Consultant website loaded successfully');
    initTooltips();
});

// Add form validation for future contact form
function validateForm(formData) {
    const errors = [];
    
    if (!formData.name || formData.name.trim() === '') {
        errors.push('Name is required');
    }
    
    if (!formData.email || formData.email.trim() === '') {
        errors.push('Email is required');
    } else if (!isValidEmail(formData.email)) {
        errors.push('Please enter a valid email');
    }
    
    if (!formData.message || formData.message.trim() === '') {
        errors.push('Message is required');
    }
    
    return errors;
}

// Email validation helper
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Log page performance
window.addEventListener('load', () => {
    if (window.performance) {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
        console.log('Page load time:', pageLoadTime, 'ms');
    }
});