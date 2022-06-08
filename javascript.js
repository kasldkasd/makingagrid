const container = document.querySelector(".container");


const crearcuadricula = (numerofilas,numerocolumnas) =>{
    var r = document.querySelector(':root');
    container.innerHTML = "";
    let newsquaresize = (930 / numerocolumnas) -1;
    let newsquareheight = (930 / numerofilas);

    console.log(newsquaresize);
    for(let i=0;i<numerofilas;i++){
        for(let i=0;i<numerocolumnas;i++){
            let square = document.createElement('div');
            r.style.setProperty('--main-width',`${newsquaresize}px`); 
            r.style.setProperty('--main-height',`${newsquareheight}px`); 
            square.classList.add("squares");
            container.append(square);
            square.addEventListener('mouseover',addTransition);
            square.addEventListener('mouseout',removeTransition);
    }
}

}

crearcuadricula(16,16);

const chooseRows = () =>{
    var numerofilas = prompt("Cuantas filas?");
    var numerocolumnas= prompt("Cuantas columnas?");
    crearcuadricula(numerofilas,numerocolumnas);
}



function addTransition(e){
      var div = e.target;
      div.classList.add('bluesquare');

  }
function removeTransition(e){
     var div = e.target;
      this.classList.remove('bluesquare');

}
const button = document.querySelector('.buttonRows');

button.addEventListener('click',chooseRows);
