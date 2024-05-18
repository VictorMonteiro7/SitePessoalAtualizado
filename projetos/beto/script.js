const videoArea = document.querySelector('.videoArea');
videoArea.addEventListener('click',({currentTarget})=>{
  let videoArea = currentTarget;
  videoArea.classList.add('ativo');
  videoArea.querySelector('iframe').src = "https://www.youtube.com/embed/UGfa0qWVZIQ?controls=0&modestbranding=1&rel=0&autoplay=1";
})