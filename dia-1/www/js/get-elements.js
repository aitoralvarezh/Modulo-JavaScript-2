console.log('¡Hola mundo!');

//acceso a varios nodos

let sections = document.getElementsByClassName('section')

sections[1].style.background = 'red'

console.log(sections);


//
let links = document.getElementsByTagName('a')

links[2].style.color = 'black'

links = Array.from(links)

links.forEach(link => console.log(link.textContent))

console.log(links);
