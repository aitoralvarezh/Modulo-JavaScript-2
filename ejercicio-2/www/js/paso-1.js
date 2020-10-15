
//VARIABLES
const reserva = document.querySelectorAll('.box')

console.log(reserva);

const discard = document.createElement('button')
discard.setAttribute('class', 'delete-item')

console.log(discard)


//FUNCIONES 

const readHotelData = node => {
    const hotelInfo = {
        img:node.querySelector('img'),
        name: node.querySelector('h2'),
        price: node.querySelector('h3'),
        id: node.getAttribute('id')
    }
    console.log(hotelInfo);
}

const guardarReserva = e => {
    e.preventDefault()
    readHotelData(e.target.parentElement.parentElement);
}

reserva.forEach(button => {
    addEventListener('click', guardarReserva)
});