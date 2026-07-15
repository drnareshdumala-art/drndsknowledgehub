// ===============================
// Animated Counter
// ===============================

const counters = document.querySelectorAll(".counter");

const animateCounter = (counter) => {
    const target = +counter.dataset.target;
    let current = 0;

    const increment = target / 120;

    const update = () => {
        current += increment;

        if (current < target) {
            counter.textContent = Math.ceil(current);
            requestAnimationFrame(update);
        } else {
            counter.textContent = target + "+";
        }
    };

    update();
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounter(entry.target);
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

counters.forEach(counter => observer.observe(counter));