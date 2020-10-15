//VARIABLES

const button = document.querySelector('.geo-button')
const list = document.querySelector('ul')
const map = document.querySelector('#iframe-map')

/* 
console.log(list);
console.log(button);
console.log(map); 
*/

//FUNCIONES

const success = pos => {
    console.log('ok', pos);
    const {latitude, longitude, accuracy} = pos.coords
    map.src = `http://maps.stamen.com/toner/embed#12/${latitude}/${longitude}`
}

const error = err => {
    console.warn(err.code);
}

const locate = () => {
    navigator.geolocation.getCurrentPosition(success, error)
    
}


//LISTENERS

button.addEventListener('click', locate)