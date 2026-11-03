function verificarEdad() {
    let inputEdad = document.getElementById("campoEdad");
    let valorInput = inputEdad.value;

    if (valorInput === "") {
        alert("Por favor, ingresa tu edad. El campo no puede estar vacío.");
    } else if (isNaN(valorInput) || valorInput < 0) {
        alert("Por favor, ingresa un número válido mayor o igual a cero.");
    } else if (valorInput >= 18) {
        alert("Eres mayor de edad");
    } else {
        alert("Eres menor de edad");
    }
}