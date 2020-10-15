
//VARIABLES

const form = document.querySelector('#msg')
const list = document.querySelector('#list')

console.log('holi');
//FUNCIONES
const loadFromStorage = () => JSON.parse(localStorage.getItem('messages')) || []


const removeFromStorage = index => {

    const messages = loadFromStorage()
    messages.splice(index, 1)
    setList(messages)

}
const setList = messages => {
    messages.forEach((text, i) => {
        const li = list.appendChild(document.createElement('li'))
        const button = li.appendChild(document.createElement('button'))
        li.textContent = text
        li.appendChild(button)
        console.log(li);
        button.classList = 'delete'
        button.textContent = 'X'
        button.addEventListener('click', e => removeFromStorage(i))
    })

}


const addToStorage = message => {
    const messages = loadFromStorage()
    const newMessages = [...messages, message]
    localStorage.setItem('messages', JSON.stringify(newMessages))
    setList(newMessages);

}

const handleMessage = e => {
    e.preventDefault()
    const message = e.target.message.value
    message && addToStorage(message)

    e.target.message.value = ''
}



//LISTENERS

form.addEventListener('submit', handleMessage)

