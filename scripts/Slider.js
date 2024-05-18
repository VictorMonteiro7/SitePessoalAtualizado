import {Lista} from './Lista.js';
const c = (e)=>document.querySelector(e);
export default function Slider() {    
  const area = document.querySelector('.slideTeste');
  const areaP = c('.sliderContainer');
  adicionaSlide(Lista, area, areaP );  
  let slides = document.querySelectorAll('.slide'); 
  let ativo = 0;
  let position = 0;
  const prevBtn = document.querySelector('.arrowLeft');
  const nextBtn = document.querySelector('.arrowRight');
  if (ativo === 0) {
    prevBtn.style.opacity = '0';
    prevBtn.style.pointerEvents = 'none';
  }
  const container = document.querySelector('.sliderContainer');
  const { width } = container.getBoundingClientRect();
  slides.forEach((slide, index) => {
    slide.setAttribute('key', index);
  });
  function prevSlide() {
    prevBtn.addEventListener('click', () => {
      if (ativo > 0) {
        slides[ativo].classList.remove('active');
        ativo--;
        slides[ativo].classList.add('active');
        position = -(ativo * width);
        container.style.transform = `translateX(${position}px)`;
      }
      if (ativo === 0) {
        prevBtn.style.opacity = '0';
        prevBtn.style.pointerEvents = 'none';
      }
      nextBtn.style.opacity = '1';
      nextBtn.style.pointerEvents = 'initial';
    });
  }
  prevSlide();
  function nextSlide() {
    nextBtn.addEventListener('click', () => {
      if (ativo < slides.length - 1) {
        slides[ativo].classList.remove('active');
        ativo++;
        slides[ativo].classList.add('active');
        const { width } = container.getBoundingClientRect();
        position = -(ativo * width);
        container.style.transform = `translateX(${position}px)`;
      }
      if (ativo === slides.length - 1) {
        nextBtn.style.opacity = '0';
        nextBtn.style.pointerEvents = 'none';
      }
      prevBtn.style.opacity = 1;
      prevBtn.style.pointerEvents = 'initial';
    });
  }
  nextSlide();
}

function adicionaSlide(target, copy, loc){
  target.forEach(slide=>{   
    const area = copy.cloneNode(true);
    loc.appendChild(area);
    area.querySelector('.slide img').src = slide.logo;
    area.querySelector('p').innerText = slide.text;
    area.querySelector('p:nth-child(3)').innerHTML = `<span>Feito com:<br/> </span> ${slide.techs}`;
    area.querySelector('.button').setAttribute('href', slide.url);        
  })
}