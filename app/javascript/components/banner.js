import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Hello,I'm Math",],
    typeSpeed: 20,
    loop: false
  });
}

export { loadDynamicBannerText };
