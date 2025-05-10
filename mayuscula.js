
const texto = document.getElementById('texto');
const boton = document.getElementById('boton');
const mayuscula = document.getElementById('mayuscula')

function ConvertirMayuscula () {
    const textoMayus=texto.value.toUpperCase();
    mayuscula.innerText = textoMayus

}

boton.addEventListener('click',ConvertirMayuscula)