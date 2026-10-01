// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Copy email button functionality
const copyEmailBtn = document.getElementById('copy-email-btn');
const emailLink = document.getElementById('email-link');

if (copyEmailBtn && emailLink) {
    copyEmailBtn.addEventListener('click', function() {
        const email = emailLink.textContent;
        
        // Copy email to clipboard
        navigator.clipboard.writeText(email).then(() => {
            // Change button text to "Copied"
            const originalText = copyEmailBtn.textContent;
            copyEmailBtn.textContent = 'Copied';
            
            // Reset button text after 2 seconds
            setTimeout(() => {
                copyEmailBtn.textContent = originalText;
            }, 2000);
        }).catch(err => {
            console.error('Failed to copy email:', err);
        });
    });
}

// Highlight current section's nav link using IntersectionObserver
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('nav a');

const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -80% 0px',
    threshold: 0
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Remove active class from all nav links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to the corresponding nav link
            const id = entry.target.getAttribute('id');
            const activeLink = document.querySelector(`nav a[href="#${id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}, observerOptions);

// Observe all sections
sections.forEach(section => {
    observer.observe(section);
});

// Dark mode toggle functionality
const themeToggle = document.getElementById('theme-toggle');

// Check for saved theme preference or system preference
function getInitialTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        return savedTheme;
    }
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        return 'dark';
    }
    return 'light';
}

// Apply theme to document
function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeToggle.textContent = theme === 'dark' ? 'Light' : 'Dark';
    localStorage.setItem('theme', theme);
}

// Initialize theme on page load
const initialTheme = getInitialTheme();
applyTheme(initialTheme);

// Toggle theme on button click
if (themeToggle) {
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(newTheme);
    });
}
