import Typed from 'typed.js';

const loadDynamicBannerText = () => {

  const banner = document.querySelector('.banner');
  if (banner){
    new Typed('#banner-typed-text', {
      strings: ["Hello,I'm Math",],
      typeSpeed: 20,
      loop: false
    });
  }
}

export { loadDynamicBannerText };
