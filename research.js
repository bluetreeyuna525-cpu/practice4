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

const modal = document.querySelector('#modal-common');
const modalDesc = document.querySelector('#modal-description');
const modalImg = document.querySelector('#modal-image-src');
const mask = document.querySelector('#mask');
const closeBtn = document.querySelector('#close-modal');

const projectData = {
    p1: {
        image: 'modalimg1.png',
        description: 'ここに説明文が来る。概要など。ここに説明文が来る。概要など。ここに説明文が来る。概要など。ここに説明文が来る。概要など。ここに説明文が来る。概要など。ここに説明文が来る。概要など。ここに説明文が来る。概要など。',
    },
    p2: {
        image: 'modalimg2.png',
        description: 'ここに説明文が来る。概要など。ここに説明文が来る。概要など。ここに説明文が来る。概要など。ここに説明文が来る。概要など。ここに説明文が来る。概要など。ここに説明文が来る。概要など。ここに説明文が来る。概要など。',
    },
    p3: {
        image: 'modalimg3.png',
        description: 'ここに説明文が来る。概要など。ここに説明文が来る。概要など。ここに説明文が来る。概要など。ここに説明文が来る。概要など。ここに説明文が来る。概要など。ここに説明文が来る。概要など。ここに説明文が来る。概要など。',
    },
    p4: {
        image: 'modalimg4.png',
        description: 'ここに説明文が来る。概要など。ここに説明文が来る。概要など。ここに説明文が来る。概要など。ここに説明文が来る。概要など。',
    },
};
const showKeyframes = {
    opacity: [0, 1],
    visibility : 'visible',
};
const hideKeyframes = {
    opacity: [1, 0],
    visibility: 'hidden',
};
const options = {
    duration: 300,
    easing: 'ease',
    fill: 'forwards',
};

document.querySelectorAll('.open-modal').forEach(button => {
    button.addEventListener('click', () => {
        const id = button.getAttribute('data-id');
        const data = projectData[id];

        if (data) {
            modalDesc.textContent = data.description;
            modalImg.src = data.image; // 画像のパスを書き換え

            modal.animate(showKeyframes, options);
            mask.animate(showKeyframes, options);
            document.body.style.overflow = 'hidden';
        }
    });
});

const closeModal = () => {
    modal.animate(hideKeyframes, options);
    mask.animate(hideKeyframes, options);
    document.body.style.overflow = '';
};
closeBtn.addEventListener('click', closeModal);
mask.addEventListener('click', closeModal);


