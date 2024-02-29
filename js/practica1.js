function cambiarColorCajitas() {
    let padreCajitas = document.querySelector('.modulo-web__contenido');
    let hijosCajitas = padreCajitas.children;

    console.log(hijosCajitas);

    hijosCajitas[0].style.backgroundColor = 'red';
    hijosCajitas[1].style.backgroundColor = 'blue';
    hijosCajitas[2].style.backgroundColor = 'green';
    hijosCajitas[3].style.backgroundColor = 'yellow';
    hijosCajitas[4].style.backgroundColor = 'purple';
}

cambiarColorCajitas();

let primerosColores = [
    'purple', 
    'yellow', 
    'green', 
    'blue', 
    'red'
];

let segundosColores = [
    'azure',
    'wheat',
    'brown',
    'gold',
    'aqua',
]

function applyColors(colors) {
    let cajitas = document.querySelectorAll('.modulo-web__articulo-2')

    //console.log(cajitas);

    cajitas.forEach((cajita, index) => {
        cajita.style.backgroundColor = colors[index];
    })
}

applyColors(['purple', 'yellow', 'green', 'blue', 'red']);

function mostrarLoOculto() {
    let loOculto = document.querySelector('.modulo-web__contenido-2');
    let boton = document.querySelector('#boton');


    boton.addEventListener('click', () => {
        if (loOculto.classList.contains('mostrar')) {
            loOculto.classList.remove('mostrar');
        } else {
            loOculto.classList.add('mostrar');
        }
    })
}

mostrarLoOculto();

