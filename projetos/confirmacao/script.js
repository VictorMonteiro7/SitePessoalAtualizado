Modernizr.on('webp',function(result){
  const webp = document.querySelectorAll('.webp');  
  if(!result){
    webp.forEach((e)=>{
      e.classList.toggle('no-webp');      
    })
    const logo = document.querySelector('.leftContent picture img');
    logo.src = './assets/logo.png'
  }
})