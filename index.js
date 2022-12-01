//SIMULADOR INTERACTIVO: Cálculo de costo total de productos y/o servicios seleccionados por el usuario.

/*
    Login
    Nombre de usuario: victor_311
    Contraseña: 92306
*/

let nombreUsuario = prompt("¡Bienvenido a Synth World! Ingresa tu nombre de usuario");

while (nombreUsuario != "victor_311"){
    alert("Este nombre de usuario no está registrado");
    nombreUsuario = prompt("Ingrese un usuario válido");
}

let contraseña = parseInt(prompt(`Hola ${nombreUsuario} ingresa tu contraseña de favor`));

while (contraseña != 92306){
    alert("Contraseña incorrecta");
    contraseña = prompt("Intenta nuevamente");
}

alert("¡Bienvenido Víctor!");


/*
    Agregar artículos al carrito
*/

let cuerdas = 1200;
let percusiones = 450;
let pianos = 350;

let preguntaC = prompt(`¿Desea agregar el Paquete de Sonidos de Cuerdas? Costo: ${cuerdas}`) .toLowerCase();

if(preguntaC === "si") {
    alert("Agregado al carrito");
} else {
    alert ("Ok");
}

let preguntaP = prompt(`¿Desea agregar el Paquete de Sonidos de Percusiones? Costo: ${percusiones}`) .toLowerCase();

if(preguntaP === "si") {
    alert("Agregado al carrito");
} else {
    alert ("Ok");
}

let preguntaPi = prompt(`¿Desea agregar el Paquete de Sonidos de Pianos? Costo: ${pianos}`) .toLowerCase();

if(preguntaPi === "si") {
    alert("Agregado al carrito");
} else {
    alert ("Ok");
}
