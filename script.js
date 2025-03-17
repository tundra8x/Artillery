document.addEventListener('DOMContentLoaded', () => {
    // Animate feature cards on scroll
    const cards = document.querySelectorAll('.feature-card');
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        observer.observe(card);
    });

    // Add hover effect to the logo
    const logo = document.querySelector('.logo');
    logo.addEventListener('mouseover', () => {
        logo.style.transform = 'scale(1.1)';
    });
    logo.addEventListener('mouseout', () => {
        logo.style.transform = 'scale(1)';
    });

    // Add "fake loading" effect when clicking download button
    const downloadButton = document.querySelector('.cta-button');
    downloadButton.addEventListener('click', (e) => {
        e.preventDefault();
        downloadButton.style.cursor = 'wait';
        downloadButton.textContent = 'Processing...';
        
        setTimeout(() => {
            const status = document.querySelector('.status');
            status.style.background = 'rgba(255,0,0,0.2)';
            status.innerHTML = '❌ Error: Maximum user capacity reached. Please try again later.';
            status.style.color = '#ff0000';
            
            downloadButton.style.cursor = 'not-allowed';
            downloadButton.textContent = 'Download Now';
        }, 2000);
    });

    // Add particle effect background
    const particlesConfig = {
        particles: {
            number: {
                value: 50,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#00ff88'
            },
            opacity: {
                value: 0.1
            },
            size: {
                value: 3,
                random: true
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#00ff88',
                opacity: 0.1,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out'
            }
        }
    };

    // Initialize particles if particlesJS is loaded
    if (window.particlesJS) {
        particlesJS('particles-js', particlesConfig);
    }
});
