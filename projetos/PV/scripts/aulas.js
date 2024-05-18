function initAulas(){
  Lista.forEach(item=>{
    const areaBonus = document.querySelector('.aulasBonusContainer');
    const aula = areaBonus.querySelector('.aula').cloneNode(true);
    areaBonus.appendChild(aula);
    const aulaContent = aula.querySelector('.aulaContent');
    aulaContent.querySelector('h1').innerText = item.texto;
    aulaContent.querySelector('img').src = item.imagem;
    aula.querySelector('h1:nth-child(2)').innerHTML = `<span>com</span> ${item.nome}`;
    aula.querySelector('h2').innerText = item.ig;
    if(item.consertox){
      aulaContent.querySelector('img').style.objectPosition = `${item.consertox}`;
    }
    if(item.padding){
      aulaContent.querySelector('h1').style.paddingLeft = item.padding;
    }
  })
}
