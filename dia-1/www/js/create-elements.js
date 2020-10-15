console.log('¡Hola mundo!');

let change = document.querySelector('ul').parentElement.previousElementSibling

change.textContent = 'Hola'



console.log(change);

const link = document.createElement('a')//crea el link en la consola (en la nada)
link.className = 'enlace'
link.id = 'nuevo'

link.setAttribute('href', 'https://google.com')
link.setAttribute('target', '_blank')
link.innerText = 'Google'

const text = document.createTextNode('link real')//en la nada

link.appendChild(text)

link.textContent = 'Google'

console.log(link);

const section = document.querySelector('section')

section.appendChild(link)

console.log(section);


//MODIFICAR Y REEMPLAZAR NODOS

const newHeading = document.createElement('h1')
newHeading.id = 'new-heading'

newHeading.appendChild(document.createTextNode('Nuevo encabezado'))

const oldHeading = document.getElementById('title')
const parent = oldHeading.parentElement

parent.replaceChild(newHeading, oldHeading)

console.log(newHeading);
console.log(parent);


//ELIMINAR UN NODO.

const links = document.querySelectorAll('a')

const deleteLink = links[0]

deleteLink.remove()

const otherLink = links[3]

otherLink.parentElement.removeChild(otherLink)

console.log(links);


//CREAR Y MODIFICAR ATRIBUTOS

const firstLi = document.querySelector('ul li')

firstLi.className = 'list'
firstLi.classList.add('new-class')
firstLi.classList.remove('list')
firstLi.setAttribute('data-id', '3244')
firstLi.hasAttribute('data-id')
firstLi.removeAttribute('data-id')

console.log(firstLi);