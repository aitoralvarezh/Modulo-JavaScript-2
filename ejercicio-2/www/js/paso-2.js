
//VARIABLES
const reserva = document.querySelectorAll('.reserva')
const cartList = document.querySelector('.list-card')
console.log(cartList);
//console.log(reserva);

const discard = document.createElement('button')
discard.setAttribute('class', 'delete-item')

//console.log(discard)


//FUNCIONES 

const makeReservation = hotel => {
    const card = document.createElement('div')
    card.setAttribute('id', 'card')
    card.id = 'cart-card'
    
    card.innerHTML = `
        <img src= "${hotel.img}" alt="${hotel.name} imagen">
        <section>
            <h4 class="name"> ${hotel.name}</h4>
            <h6 class="price" id="hotel.id">${hotel.price}</h6>
            <button class="delete-card">delete</button>
        </section>
    
    `
    cartList.appendChild(card)
}


const readHotelData = hotel => {
    const infoHotel = {
        img: hotel.querySelector('img').src,
        name: hotel.querySelector('h2').textContent,
        price: hotel.querySelector('h3').textContent,
        id: hotel.getAttribute('id')
    }
    makeReservation(infoHotel)
}

const guardarReserva = e => {


    e.preventDefault()
    readHotelData(e.target.parentElement.parentElement);

}

reserva.forEach(button => {
    addEventListener('click', guardarReserva)

});




//PASO 3