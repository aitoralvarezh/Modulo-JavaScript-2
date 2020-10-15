console.log('¡Hola mundo!');

/* 
#############
##  D·O·M  ##
#############
*/

let element = document;// acceso a todo el DOM

element =document.all//HTMLCollection que te muestra una colección (''array'')
element =document.all[10]//devuelve el elemento con índice 10

element =document.head
element =document.body

element =document.domain//devuelve el dominio

element =document.URL//devuelve el dominio
element =document.links//devuelve el HTMLCollection con todos los links ('a')
element =document.forms

element =document.forms[0]

element =document.forms[0].id
element =document.forms[0].className//como un string
element =document.forms[0].classList//como un array

element =document.images[2].getAttribute('src')
element =document.images[2].getAttribute('alt')

console.log(element);

const images = document.images

console.log(images);

const imagesArr = Array.from(images)

imagesArr.forEach(image => {
    console.log(image)
});