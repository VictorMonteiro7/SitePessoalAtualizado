if (localStorage.ft) localStorage.removeItem('ft');
import ChangeHeader from './scripts/ChangeHeader.js';
// import Slider from './scripts/Slider.js';
import { validaForm, ValidaCampo } from './scripts/ValidaForm.js';
import Responsividade from './scripts/Responsividade.js';
import Hamburger from './scripts/Hamburger.js';
Hamburger();
Responsividade();
window.addEventListener('resize',Responsividade);
window.addEventListener('scroll', ChangeHeader);
// Slider();
const formulario = document.querySelector('form');

formulario.addEventListener('submit', validaForm);

const inputName = document.querySelector('[placeholder="Nome_"]');
const inputMsg = document.querySelector('[placeholder^="Breve"]');
const inputEmail = document.querySelector('[placeholder="Email_"]');

let FT;
let intervalo = setInterval(() => {
  FT = localStorage.ft;
  if (FT) {
    clearInterval(intervalo);
    ValidaCampo(inputName);
    ValidaCampo(inputMsg);
    ValidaCampo(inputEmail);
  }
}, 500);
