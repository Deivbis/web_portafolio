
const boton = document.getElementById('boton');
const texto = document.getElementById('texto');

let contador = 0;

function ContarClick (){
  contador +=1;
  texto.innerText=`clicks: ${contador}`
};

boton.addEventListener('click',ContarClick);