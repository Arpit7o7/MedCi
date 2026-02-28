// Main JavaScript for Medicine Price Comparison

document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Auto-focus search input on home page
    const searchInput = document.querySelector('input[name="q"]');
    if (searchInput && window.location.pathname === '/') {
        searchInput.focus();
    }
    
    // Add staggered animation to cards
    const cards = document.querySelectorAll('.feature-card, .benefit-card, .medicine-card');
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
        card.classList.add('fade-in');
    });
    
    // Add hover sound effect simulation with visual feedback
    const interactiveElements = document.querySelectorAll('.btn, .medicine-card, .feature-card');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
        });
    });
    
    // Highlight active navigation link
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
    
    // Add loading state to search button
    const searchForm = document.querySelector('form[action*="search"]');
    if (searchForm) {
        searchForm.addEventListener('submit', function() {
            const button = this.querySelector('button[type="submit"]');
            if (button) {
                button.innerHTML = '<span class="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>Searching...';
                button.disabled = true;
            }
        });
    }
});
