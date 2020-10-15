const reserva = document.querySelectorAll('.box')
const cartList = document.querySelector('.list-card')
const deleteCart = document.querySelector('#delete')


//FUNCIONES

const addToLocalStorage = hotel => {
    const hotelList = []
    const newHotelList = [...hotelList, hotel]
}

const saveReservation = e => {
    console.log(e.target.parentElement)
}

//LISTENER

reserva.forEach(button => {
    button.addEventListener('click', guardarReserva)
})