
// Hamburger menu functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    // 1. Toggle the slide-out menu
    navLinks.classList.toggle('active');

    // 2. Check if the menu is now open or closed
    if (navLinks.classList.contains('active')) {
        hamburger.innerHTML = '&times;'; // Change to "X"
    } else {
        hamburger.innerHTML = '&#9776;'; // Change back to Hamburger
    }
});

// Animation for headings
const heading1 = document.querySelector('#heading1');

const keyframesh1 = {
    opacity: [0, 1],
    translate: ['0px, 50px', 0 ],

};
const optionsh1 = {
    duration: 4000,
    easing: 'ease',
    fill: 'forwards',
};
heading1.animate(keyframesh1, optionsh1);

const heading2 = document.querySelector('#heading2');

const keyframesh2 = {
    opacity: [0, 1],
    translate: ['0px, 50px', 0 ],

};
const optionsh2 = {
    duration: 4000,
    easing: 'ease',
    delay: 500, // 1秒遅らせる
    fill: 'forwards',
};
heading2.animate(keyframesh2, optionsh2);


// const headingbg = document.querySelector('.bg');;

// const frames = {
//     opacity: [0, 1],
//     translate: ['0px, 50px', 0 ],
//     borderRadius: [
//         '20% 50% 50% 70%/50% 50% 70% 50%',
//         '50% 20% 50% 50%/40% 40% 60% 60%',
//         '50% 40% 20% 40%/40% 50% 50% 80%',
//         '50% 50% 50% 20%/40% 40% 60% 60%',],
// };
// const option = {
//     duration: 5000,
//     direction: 'alternate',
//     iterations: Infinity,
//     easing: 'ease',
// };
// headingbg.animate(frames, option);
