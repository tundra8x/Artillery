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

    // Roblox Executor Script

    // Function to execute scripts
    function executeScript(script) {
        // Logic to execute Roblox scripts
        console.log('Executing script:', script);
        // Add your execution logic here
    }

    // Example usage
    const exampleScript = 'print("Hello from Roblox!")';
    executeScript(exampleScript);

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
                value: 0.1,
                random: true
            },
            size: {
                value: 2,
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
                speed: 1.5,
                direction: 'none',
                random: true,
                straight: false,
                out_mode: 'out',
                bounce: false
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 0.3
                    }
                }
            }
        }
    };

    // Initialize particles if particlesJS is loaded
    if (window.particlesJS) {
        particlesJS('particles-js', particlesConfig);
    }
});
