function initSlide(){
  const areaSlide = document.querySelector('.slideContent');  

  let ativo = 0;
  for(let i = 1; i < 38;i++){
    // Adicionando as imagens
    const imagem = `depo${i}.png`;
    const imagemArea = document.createElement('img');
    imagemArea.setAttribute('src', `./assets/img/${imagem}`);
    imagemArea.setAttribute('loading','lazy');
    areaSlide.appendChild(imagemArea);
  
    // Adicionando as bolinhas
    const bolinha = document.createElement('div');
    bolinha.classList.add('bolinha');
    const bolinhaArea = document.querySelector('.bolinhaArea');
    bolinhaArea.appendChild(bolinha);  
  }
  let position = 0;
  const bolinhas = document.querySelectorAll('.bolinha');
  bolinhas[ativo].classList.add('ativo');
  const container = document.querySelector('.slideContainer');
  const container2 = container.querySelector('.slideContent');
  const { width } = container.getBoundingClientRect();
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
    function prevSlide() {
      prevBtn.addEventListener('click', () => {      
        if (ativo > 0) {
          ativo--;        
          position = position+width;        
          container2.style.transform = `translateX(${position}px)`;
          for(let i = 0;i < bolinhas.length;i++){
            bolinhas[i].classList.remove('ativo');
            bolinhas[ativo].classList.add('ativo')
          }
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
  
    const imagens = areaSlide.querySelectorAll('img');
    function nextSlide() {
      nextBtn.addEventListener('click', () => {
        if (ativo < imagens.length - 1) {
          ativo++;
          position = -(ativo * width);
          container2.style.transform = `translateX(${position}px)`;        
          for(let i = 0;i < bolinhas.length;i++){
            bolinhas[i].classList.remove('ativo');
            bolinhas[ativo].classList.add('ativo')
          }          
        }
        if (ativo === imagens.length - 1) {
          nextBtn.style.opacity = '0';
          nextBtn.style.pointerEvents = 'none';
        }
        prevBtn.style.opacity = 1;
        prevBtn.style.pointerEvents = 'initial';
      });
    }
    nextSlide();
}

