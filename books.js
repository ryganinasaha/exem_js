
const table = document.querySelector('table')

const id = document.querySelector('.id')
const nam = document.querySelector('.name')
const year = document.querySelector('.year')
const aftor = document.querySelector('.aftor')
const publish = document.querySelector('.publish')
const pagers = document.querySelector('.pagers')
const amount = document.querySelector('.amount')

const push = document.querySelector('.push')
const delet = document.querySelector('.delete')
const adit = document.querySelector('.adit')
const container = document.querySelector('tbody')
const sort = document.querySelector('.sort')
const find = document.querySelector('.find')

const tr = document.querySelectorAll('tr')

const books = [
    {
        id: 1,
        name: 'Harry Potter',
        aftor: 'Juan Rouling',
        year: 2001,
        publish: 'Bloomsbury',
        pagers: 200,
        amount: 40
    }
]

push.addEventListener('click' , () => {
    const newBook = {
        id: id.value,
        name: nam.value,
        aftor: aftor.value,
        year: year.value,
        publish: publish.value,
        pagers: pagers.value,
        amount: amount.value
    }
    
    books.push(newBook)
    render(books)
})

render(books)



function render(books) {
    container.innerHTML = ''

    console.log(books)

    for(let i = 0; i < books.length; i++) {
        container.innerHTML += `
        <tr>
            <th>${books[i].id}</th>
            <th>${books[i].name}</th>
            <th>${books[i].aftor}</th>
            <th>${books[i].year}</th>
            <th>${books[i].publish}</th>
            <th>${books[i].pagers}</th>
            <th>${books[i].amount}</th>
            <th><img class='delete' src='icons/мусор.png'><img index='${books[i]}' class='edit' src='icons/карандаш.png'></th> 
        </tr>
        `
    }
}




table.onclick = function(event) {
    let target = event.target; 

    if (target.classList.contains('delete') === false) return; 
    
    let index = +target.getAttribute('index')

    books.splice(index, 1)
    render(books)
  };

  
find.addEventListener(('keyup'), () => {
    const value = find.value
    
    const newBook = books.filter((item) => {

        return item.name.includes(value)
    })

    render(newBook)
})



/*
sort.addEventListener(('click'), () => {
    let sortedRows = Array.from(tr.rows)
        .slice(1)
        .sort((rowA, rowB) => rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);

    table.tBodies[0].append(...sortedRows)
})    

*/



 