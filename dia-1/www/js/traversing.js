console.log('¡Hola mundo!');

const main = document.querySelector ('#principal')

let nodes = main.childNodes

nodes = main.children
//children devuelve coleccion, habria que convertir en array
nodes = nodes[3].nodeType

console.log(nodes);

let nav = document.querySelector('nav')

nav = nav.children[0]
console.log(nav);

const links = document.querySelectorAll('a')

let link = links[0]
link= link.parentElement

console.log(link);