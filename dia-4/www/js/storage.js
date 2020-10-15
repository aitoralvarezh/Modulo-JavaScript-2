//STORAGE (LOCAL Y SESIÓN)

const myStorage = window.localStorage

localStorage.setItem('nombre', 'Aitor')
localStorage.setItem('profesion', 'Jedi')

console.log(myStorage);


const name = localStorage.getItem('nombre')

console.log(`hola ${name}`);

localStorage.removeItem('profesion')
 localStorage.clear()

 const datosPersonaje = { 'nombre': 'ObiWan', 'profesion': 'Jedi'}

 const datosString = JSON.stringify(datosPersonaje)

 localStorage.setItem('datos', datosString)

 const guardado = JSON.parse(localStorage.getItem('datos'))

 console.log(guardado);

