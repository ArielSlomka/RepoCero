// strings
var tuNombre = 'Ariel';
var tuApellido = 'Slomka';
const todoTuNombre = 'Malena Slomka';

// numbers
let tuEdad = 32;

// booleans
let soyPelado = true;
let tengoHuevos = false;

// undefined
let cualquierCosa = undefined;

// null
let otraCosa = null;

// not a number
let notNumber = NaN;

// array
var numeros = [ 1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ]
var cosas = [ 0 , true , 'chota', undefined ,  null , NaN , { concha: true, pija: false } ]


// object
const objeto = {
    forma: 'redonda',
    anchoEnCm: '15',
    altoEnCm: 18,
    esTridimensional: false,
    percheros: 'indignante'
}



// alert(numeros);
//console.log('estoy funcionando');


// estructuras de control
// condicional if ("si x o si y")

if (soyPelado || tengoHuevos) {
    console.log('o soy pelado o tengo huevos');

    /*if (tengoHuevos) {
        console.log('soy pelado y encima tengo huevos')
    } else {
        console.log('soy pelado y encima no tengo huevos, la puta madre')
    }*/


} else if (tengoHuevos) {
    console.log('no soy pelado pero tengo huevos');
} else {
    console.log('tengo pelo pero no huevos')
}

// bucle while ("mientras")
/*
var i = 1;

while (i <= 10) {
    console.log(i);
    i++;
}


// bucle for (por determinada condicion)
for (let index = 1; index <= 10; index++) {
    console.log(index);
}*/


// interaccion con el DOM
// seleccion de elemento / elementos
/*
var titulo = document.querySelector('.pija');

console.log(titulo)

titulo.classList.add('modulo-web__title');
titulo.classList.remove('pija');

titulo.style.backgroundColor = 'orange';
*/

var titulo = document.querySelector('.pija');
var articulo = document.querySelector('.modulo-web__articulo');


// funciones
function cambiarColorDeFondo(elemento, color) {

    console.log(elemento)

    elemento.classList.add('modulo-web__title');
    elemento.classList.remove('pija');

    elemento.style.backgroundColor = color;
}

cambiarColorDeFondo(titulo, 'orange');
cambiarColorDeFondo(articulo, 'pink');