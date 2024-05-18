function initVideos(){
  Videos.forEach((e)=>{
    const videoArea = document.querySelector('.videoArea').cloneNode(true);
    document.querySelector('.areaDepoimentos').appendChild(videoArea);
    videoArea.querySelector('p').innerText = `"${e.text}"`;
    const url = "https://www.youtube.com/embed/" + e.url + "?rel=0&modestbranding=1";
    videoArea.querySelector('iframe').src = url;
  })
}
