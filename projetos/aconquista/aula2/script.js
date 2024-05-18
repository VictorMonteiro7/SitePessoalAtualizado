const areaVideo = document.querySelector('.videoArea.desktop');  
function initAula() {  
  areaVideo.addEventListener('click',()=>{      
  areaVideo.querySelector('.videoContent picture').style.display = 'none';
  areaVideo.querySelector('.videoContent').innerHTML = `<iframe loading="lazy" src="https://www.youtube.com/embed/${areaVideo.dataset.yt}?modestbranding=1&amp;rel=0&amp;autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" style="display: block;"></iframe>`;
  })
}
initAula();

function initVideoBotao(){
  const aulas = document.querySelectorAll('[data-aula]');
  const path = window.location.pathname;
  const nomes = path.split('/'); 
  aulas.forEach(aula=>{
    for(nome of nomes){            
      if((nome === aula.dataset.aula) && window.matchMedia('(max-width:480px)').matches == false){      
        aula.addEventListener('click',(e)=>{
          console.log('teste');  
          if(areaVideo.querySelector('.videoContent picture')){ 
            e.preventDefault();                                        
            areaVideo.querySelector('.videoContent picture').style.display = 'none';
            areaVideo.querySelector('.videoContent').innerHTML = `<iframe loading="lazy" src="https://www.youtube.com/embed/${aula.dataset.yt}?modestbranding=1&amp;rel=0&amp;autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" style="display: block;"></iframe>`;
          }
        })      
      }
    }
  })
}
initVideoBotao();