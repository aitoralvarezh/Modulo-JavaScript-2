
//VARIABLES

const add = document.getElementById('add')
const list = document.querySelector('#list')

console.log(add);
console.log(list);

//FUNCIONES


const addElement = () => {
    const li = document.createElement('li')
    const img = document.createElement('img')
    const button = document.createElement('button')

    img.src = '../images/icon.svg'
    img.style.height = '40px'
    button.clasList = 'delete'
    button.innerText = 'Borrar'

    li.appendChild(img)
    li.appendChild(button)
    console.log(li)
    list.appendChild(li)
}

const deleteElement = e => {
    if (e.target.classList.contains('delete')) {
        e.target.parentElement.removeChild()
        
    }

}


//LISTENERS



add.addEventListener('click', addElement)
list.addEventListener('click', deleteElement)