var paso = 0;

var textos = [
    "Bienvenid@ a nuestro sistema, viajero. Necesitamos que te registres en el Nexo para poder atracar tu nave.",
    "Ahora necesitamos un correo electrónico para enviarte el cifrado de tu tarjeta de embarque.",
    "Por último, necesitamos una contraseña para proteger tu cuenta."
];

var inputs = [
    "Nombre de usuario",
    "Correo electrónico",
    "Contraseña"
];


function siguiente() {
    paso = paso + 1;
    texto.innerHTML = textos[paso];
    dato.placeholder = inputs[paso];
}
 
