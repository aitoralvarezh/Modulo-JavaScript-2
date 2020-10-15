console.log('¡Hola mundo!');

let element = document.getElementById('formulario')
element = document.getElementById('formulario').className
element = document.getElementById('title').textContent//devuelve el texto íntegro

element = document.getElementById('title')

element.style.background = '#bbb'
element.style.color = '#fff'
element.textContent = 'los patos son bonitos'
element.innertext


element = document.querySelector('#title')
element = document.querySelector('li a')//puedo usar class, tag, id o combinación
element = document.querySelector('li:last-child a')

console.log(element);