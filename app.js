let amigosecreto = [];

function nombreAmigos () {
  let ingresoDeNombre = document.getElementById("amigo")
  let nombre = ingresoDeNombre.value

    if (nombre === "") {
        alert ("Por favor, inserte un nombre.")
    return;
    } 
    amigosecreto.push(nombre)
ingresoDeNombre.value = "";

}


