
const table = document.querySelector('table')

const id = document.querySelector('.id')
const nam = document.querySelector('.name')
const phone = document.querySelector('.phone')

const push = document.querySelector('.push')
const delet = document.querySelector('.delete')
const adit = document.querySelector('.adit')
const container = document.querySelector('tbody')
const sort = document.querySelector('.sort')
const find = document.querySelector('.find');

const visitors = [
    {
        id: 1,
        name: 'Colette Kelley',
        phone: 0124354567
    }
]

push.addEventListener('click' , () => {
    const newVisitor = {
        id: id.value,
        name: nam.value,
        phone: phone.value
    }
    
    visitors.push(newVisitor)
    render(visitors)
})

render(visitors)

function render(visitors) {
    container.innerHTML = ''

    for(let i = 0; i < visitors.length; i++) {
        container.innerHTML += `
        <tr>
            <th>${visitors[i].id}</th>
            <th>${visitors[i].name}</th>
            <th>${visitors[i].phone}</th>
            <th><img class='delete' src='icons/мусор.png'><img index='${visitors[i]}' class='edit' src='icons/карандаш.png'></th> 
        </tr>
        `
    }
}

table.onclick = function(event) {
    let target = event.target; 
  
    if (target.classList.contains('delete') === false) return; 
    
    let index = +target.getAttribute('index')

    visitors.splice(index, 1)
    render(visitors)
  };

  find.addEventListener(('keyup'), () => {
    const value = find.value
    
    const newVisitor = visitors.filter((item) => {

        return item.name.includes(value)
    })

    render(newVisitor)
})