const nombre = document.getElementById("nombre");
const boton = document.getElementById("btnSaludar");
const resultado = document.getElementById("resultado");

boton.addEventListener("click", function() {

    const nombreUsuario = nombre.value.trim();

    if (nombreUsuario === "") {

        resultado.textContent = "Por favor, escribe tu nombre antes de continuar.";

    } else {

        resultado.textContent = "¡Hola, " + nombreUsuario + "! Bienvenido.";

    }

});