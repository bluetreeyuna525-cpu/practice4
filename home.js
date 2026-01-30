//fade-in effect on scroll
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

// Animation for headings
window.addEventListener('load', () => {
    const heading1 = document.getElementById('heading1');
    const heading2 = document.getElementById('heading2');

    // Heading1 をふわっと表示（0.5秒かけて）
    if(heading1) {
        heading1.style.transition = 'opacity 2s ease';
        heading1.style.opacity = '1';
    }

    // Heading2 を少し遅れて表示（1.5秒後に開始）
    if(heading2) {
        // setTimeoutでタイミングをずらす
        setTimeout(() => {
            heading2.style.transition = 'opacity 2s ease';
            heading2.style.opacity = '1';
        }, 1000); // 1000ミリ秒 = 1秒後に実行
    }
});

