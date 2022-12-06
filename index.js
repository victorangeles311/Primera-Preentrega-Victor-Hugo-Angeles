//SIMULADOR INTERACTIVO


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
    contraseña = parseInt(prompt("Intenta nuevamente"));
}

alert("¡Bienvenido Víctor!");



/*
    Agregar artículos al carrito y resultados con descuentos
*/

let cuerdas = 1200;
let percusiones = 450;
let pianos = 350;

const resta = (a,b) => a - b;
const descuento = c => c * 0.15;


alert("Vamos a confirmar tus compras")
let preguntaC = prompt(`¿Seguro que desea agregar el Paquete de Sonidos de Cuerdas? Costo: ${cuerdas}`) .toLowerCase();

if(preguntaC === "si") {
    alert("Agregado al carrito");
    let costoTotal = resta(cuerdas, descuento(cuerdas));
    alert(`¡Felicidades, este producto tiene un descuento del 15%! Total = ${costoTotal}`);
} else if (preguntaC === "no") {
    alert ("Retirado del carrito");
} else {
    alert ("Producto guardado")
}



let preguntaP = prompt(`¿Seguro que desea agregar el Paquete de Sonidos de Percusiones? Costo: ${percusiones}`) .toLowerCase();

if(preguntaP === "si") {
    alert("Agregado al carrito");
} else if (preguntaP === "no") {
    alert ("Retirado del carrito");
} else {
    alert ("Producto guardado")
}



let preguntaPi = prompt(`¿Seguro que desea agregar el Paquete de Sonidos de Pianos? Costo: ${pianos}`) .toLowerCase();

if(preguntaPi === "si") {
    alert("Agregado al carrito");
    let costoTotal = resta(pianos, descuento(pianos));
    alert(`¡Felicidades, este producto tiene un descuento del 15%! Total = ${costoTotal}`);
} else if (preguntaPi === "no") {
    alert ("Retirado del carrito");
} else {
    alert ("Producto guardado")
}

alert("Gracias por tu preferencia");