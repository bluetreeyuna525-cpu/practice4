// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
const links = document.querySelectorAll('#nav-links a');

hamburger.addEventListener('click', () => {
    // 1. Toggle the slide-out menu
    navLinks.classList.toggle('nav-active');

    if (navLinks.classList.contains('nav-active')) {
        hamburger.textContent = '×'; // バツ印に変更
    } else {
        hamburger.textContent = '☰'; // 三本線に戻す
    }

});
links.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('nav-active'); // メニューを閉じる
        hamburger.textContent = '☰'; // ボタンを三本線に戻す
    });
});


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

