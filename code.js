const btn = document.querySelector(".btn");

const newColor = document.querySelector(".new-color");

const body = document.querySelector(".body");


function aleatorio(minimo,maximo){
    return Math.round(Math.random() * (maximo - minimo) + minimo);
  }





btn.addEventListener("click", function() {

    let rgb = `rgb(${aleatorio(0,255)},${aleatorio(0,255)},${aleatorio(0,255)})`;

    body.style.backgroundColor = rgb;

    newColor.textContent = rgb;

});