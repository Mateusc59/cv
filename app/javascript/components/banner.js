import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["I love Front End, UX/UI Design, web-development, learning is one of my best quality. I'm a big fan of all kind of sports! 🏋🏻‍♂️",],
    typeSpeed: 20,
    loop: false
  });
}

export { loadDynamicBannerText };
