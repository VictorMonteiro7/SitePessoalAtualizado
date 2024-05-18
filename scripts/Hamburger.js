export default function Hamburger(){
  const menuMobile = document.querySelector('.hamburger');
  menuMobile.addEventListener('click',()=>{
    const lista = document.querySelector('nav ul');
    lista.classList.toggle('closed');
  })
}