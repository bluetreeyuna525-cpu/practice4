const animateFade = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.animate(
                {
                    opacity: [0, 1],
                    filter: ['blur(2px)', 'blur(0rem)'],
                    translate: ['0 2rem', 0 ],
                },
                {
                    duration: 2000,
                    easing: 'ease',
                    fill: 'forwards',
                }
            );
            observer.unobserve(entry.target);
        }
    });
};
const fadeObserver = new IntersectionObserver(animateFade);
const fadeElements = document.querySelectorAll('.fadein');
    fadeElements.forEach((fadeElement) => {
        fadeObserver.observe(fadeElement);
    });
