function duplicateMarqueeItems(marqueeId) {
    const marquee = document.getElementById(marqueeId);
    const items = marquee.querySelectorAll('.flex-none');
    items.forEach(item => {
        const clone = item.cloneNode(true);
        marquee.appendChild(clone);
    });
}
duplicateMarqueeItems('marquee');

// Function to duplicate carousel items for seamless loop
function duplicateCarouselItems(carouselId) {
    const carousel = document.getElementById(carouselId);
    const items = carousel.querySelectorAll('.flex-none');
    items.forEach(item => {
        const clone = item.cloneNode(true);
        carousel.appendChild(clone);
    });
}
duplicateCarouselItems('carousel-1');
duplicateCarouselItems('carousel-2');

// Optional: Trigger animation when cards enter viewport
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.animate-pop-up');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                entry.target.style.animationDelay = `${index * 0.2}s`;
                entry.target.classList.add('animate-pop-up');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    cards.forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });
});