export default function ChangeHeader() {
  const header = document.querySelector('header');
  const sections = document.querySelectorAll('section');
  const antigaCor = window.getComputedStyle(header).backgroundColor;
  const windowMetade = window.innerHeight * 0.1;
  function changeBGColor() {
    let aindaVisivel = [];
    sections.forEach((section, index) => {
      const { top } = section.getBoundingClientRect();
      const isSectionVisible = top - windowMetade < 0;
      if (isSectionVisible) {
        section.setAttribute('key', index);
        header.style.backgroundColor =
          window.getComputedStyle(section).backgroundColor;
      } else {
        section.removeAttribute('key');
      }
    });
    for (let i = 0; i < sections.length; i++) {
      const secao = sections[i].getAttribute('key');
      if (secao) {
        aindaVisivel = [...aindaVisivel, secao];
      }
    }
    if (!aindaVisivel.length) {
      header.style.backgroundColor = antigaCor;
    }
  }
  changeBGColor();
}
