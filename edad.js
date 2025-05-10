const inputAño = document.getElementById('año');
const boton = document.getElementById('boton');
const texto = document.getElementById('texto')

function calcularEdad() {
  const valorAño = parseInt(inputAño.value);
  const añoActual = new Date().getFullYear()
  
  if (isNaN(valorAño)|| valorAño>añoActual){
    texto.innerText=`año invalido`
    return;
  }
  
  const edad =añoActual-valorAño

  if (edad>115){
    texto.innerText = `año invalido`;
    return;
  };

  texto.innerText = `Tu edad es: ${edad} años`;
}

boton.addEventListener('click', calcularEdad);