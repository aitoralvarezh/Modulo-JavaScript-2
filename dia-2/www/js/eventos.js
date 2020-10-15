console.log('hola mundo')

//EVENTOS


const titulo = document.querySelector('#titulo')
//titulo.onclick = ()=> alert('Hoy vemos los eventos')
titulo.addEventListener('click', () => alert('hoy vemos los eventos'))

//console.log(titulo);

const botonBuscador = document.querySelector('#boton-buscador')
//botonBuscador.addEventListener('click', ()=> confirm('¿buscar?'))
const ejecutaBoton = e => {
    e.preventDefault()
    confirm('¿buscar?')
    let elemento
    elemento = e
    elemento = e.type
    elemento = e.target
    elemento = e.target.id

    // console.log(elemento);
}
botonBuscador.addEventListener('click', ejecutaBoton)

//console.log(botonBuscador);


//TIPOS DE EVENTOS

const subtitulo = document.querySelector('#subtitulo')

let obtenerEvento = e => {
    console.log(`evento: ${e.type}`);
}

//subtitulo.addEventListener('click', obtenerEvento)
// subtitulo.addEventListener('dblclick', obtenerEvento)
// subtitulo.addEventListener('mouseover', obtenerEvento)
// subtitulo.addEventListener('mouseout', obtenerEvento)
subtitulo.addEventListener('mouseup', obtenerEvento)
subtitulo.addEventListener('mousedown', obtenerEvento)

console.log(subtitulo);

const buscador = document.querySelector('#buscador')

let obtenerBusqueda = e => {
    console.log(`evento: ${e.type}------>`, buscador.value);
}
//buscador.addEventListener('keyup', obtenerBusqueda)
// buscador.addEventListener('focus', obtenerBusqueda)
// buscador.addEventListener('blur', obtenerBusqueda)

// buscador.addEventListener('cut', obtenerBusqueda)
// buscador.addEventListener('copy', obtenerBusqueda)
// buscador.addEventListener('paste', obtenerBusqueda)

//buscador.addEventListener('input', obtenerBusqueda)

/* 
obtenerBusqueda = e => {
    titulo.innerText = buscador.value
}
buscador.addEventListener('input', obtenerBusqueda)
 */

//console.log(buscador);

const card = document.querySelector('.card')
const info = document.querySelector('.info')
const elim = document.querySelector('.eliminar')

// console.log(card);
// console.log(info);
// console.log(elim);


//card.addEventListener('click', () => console.log('click en card'))
// info.addEventListener('click', ()=>console.log('click en info'))
// elim.addEventListener('click', ()=>console.log('click en eliminar'))

/* 
info.addEventListener('click', e => {
    console.log('Click en info')
    e.stopPropagation()
})
elim.addEventListener('click', e => {
    console.log('Click en eliminar')
    e.stopPropagation()
})

 */
//DELEGATION

const eliminarElemento = e => {
   // console.log(e.target.classList)
    e.preventDefault()
   /*  if (e.target.classList.contains('enlace')) {
        console.log('siii');
    }else {
        console.log('noooo');
    } */
    if (e.target.classList.contains('eliminar')) {
        e.target.parentElement.parentElement.remove()
    }
}

//document.body.addEventListener('click', eliminarElemento)

const main = document.querySelector('main')
console.log(main);
main.addEventListener('click', eliminarElemento)

