export default function Responsividade() {
  if (window.innerWidth <= 728) {
    const menuMobile = document.querySelector('nav');
    menuMobile.classList.add('mobile');
    menuMobile.addEventListener('click', () => {
      menuMobile.classList.toggle('active');
    });
    window.addEventListener('scroll', () => {
      if (menuMobile.classList.contains('active')) {
        if (window.scrollY > window.innerHeight * 0.2) {
          menuMobile.classList.remove('active');
        } else {
        }
      }
    });
  }
}
