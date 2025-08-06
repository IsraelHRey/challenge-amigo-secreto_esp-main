let amigosecreto = [];
                                                                    
function agregarAmigo () {                                           //document es el cuerpo del texto
  let ingresoDeNombre = document.getElementById("amigo")
  let nombre = ingresoDeNombre.value                                //value es para que sea igual al valor, no solo string

    if (nombre === "") {
        alert ("Por favor, inserte un nombre.")
    return;
    } 
    amigosecreto.push(nombre)               //.push guarda las variables en la lista
ingresoDeNombre.value = "";
mostrarAmigos()
}

function mostrarAmigos (){
let listaamigos = document.getElementById ("listaAmigos")
listaamigos.innerHTML = ""

    for (let i=0; i<amigosecreto.length; i++){
      let etiquetaLi = document.createElement("li");
      etiquetaLi.textContent =  amigosecreto[i]
     listaamigos.appendChild(etiquetaLi)

      
    }

}



function sortearAmigo(){
  if (amigosecreto.length === 0) {
    alert ("inserte un nombre")
    return
  }

  let indiceAleatorio = Math.floor(Math.random()* amigosecreto.length)
  let amigoSorteado = amigosecreto[indiceAleatorio];

  document.getElementById("resultado").innerHTML = amigoSorteado;

}

