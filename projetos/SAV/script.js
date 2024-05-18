const buttons = document.querySelectorAll('a');
const modal = document.querySelector('#modal');
buttons.forEach(botao=>{
  botao.addEventListener('click',(event)=>{
    event.preventDefault();
    modal.classList.add('ativo')
    if(modal.classList.contains('ativo')){
      setTimeout(() => {
        modal.firstChild.nextSibling.style.opacity='1';        
      }, 50);
    }
  })
})

modal.addEventListener('click',({target, currentTarget})=>{
  fecharModal(modal,currentTarget, target)  
})

function fecharModal(m,ct,t){    
  if(m.classList.contains('ativo')){
    if(t === ct){
      m.classList.remove('ativo')
      modal.firstChild.nextSibling.style.opacity='0';        
    }
  }
}

const $ = e=>document.querySelector(`[name="field[${e}]"]`);

(function verificarTags(){
  const url = location.search;
  if(url){
    const params = new URLSearchParams(url);    
    for (let param of params){          
      switch (param[0]){
        case "src":
        case "utm_source":{          
          $(3).value = param[1];        
          break;
        };      
        case "cpg":
        case "utm_campaign":{          
          $(5).value = param[1];          
          break;
        };
        case "med":
        case "utm_medium":{
          $(4).value = param[1];
          break;
        };
        case "ter":
        case "utm_term":{
          $(6).value = param[1];
          break;
        };
        case "con":
        case "utm_content":{
          $(9).value = param[1];
          break;
        }
        default: {
          break;
        }
      }      
    }
    if(location.pathname){
      window.history.replaceState(null, null, window.origin + location.pathname)    
    } else {
      window.history.replaceState(null, null, window.origin)
    }   
  }
})()