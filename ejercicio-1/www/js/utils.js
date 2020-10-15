
//VARIABLES
const form = document.getElementById('msg')
const list = document.querySelector('#list')

//FUNCIONES

const addText = e => {
    e.preventDefault()
    const mensaje = e.target.message.value
    textAdded(mensaje)
  

    e.target.message.value = ''
}

const textAdded = mensaje => {

    const li = document.createElement('li')
    const mail = document.createTextNode('')
    const button = document.createElement('button')

    li.textContent = mensaje
    button.classList= 'delete'
    button.innerText= 'x'

    li.appendChild(button)
    list.appendChild(li)
}
const deleteElement = e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.remove()  
    }
}

//LISTENERS
form.addEventListener('submit', addText)
list.addEventListener('click', deleteElement)


