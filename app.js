let amigosecreto = [];
                                                                    
function nombreAmigos () {                                           //document es el cuerpo del texto
  let ingresoDeNombre = document.getElementById("amigo")
  let nombre = ingresoDeNombre.value                                //value es para que sea igual al valor, no solo string

    if (nombre === "") {
        alert ("Por favor, inserte un nombre.")
    return;
    } 
    amigosecreto.push(nombre)               //.push guarda las variables en la lista
ingresoDeNombre.value = "";

}

function mostrarAmigos (){
let listaamigos = document.getElementById ("listaAmigos")
lista.innerHTML = ""

    for (let i=0; i<amigosecreto.length; i++){
      let etiquetaLi = document.createElement("li");
      etiquetaLi.textContent =  amigosecreto[i]
     listaamigos.appendChild(etiquetaLi)

      
    }

}


function amigoAleatorio(){
  if (amigosecreto.length === 0) {
    return
  }

  let indiceAlatorio = Math.floor(Math.random()* amigosecreto.length)
  let amigoSorteado = amigosecreto[indiceAlatorio];

  let resultado = document.getElementById(resultado).innerHTML = amigoSorteado;

}