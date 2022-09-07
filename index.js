
const table = document.querySelector('table')
const nam = document.querySelector('.name')
const year = document.querySelector('.year')
const contry = document.querySelector('.contry')
const genre = document.querySelector('.genre')
const rating = document.querySelector('.rating')
const push = document.querySelector('.push')
const delet = document.querySelector('.delete')
const adit = document.querySelector('.adit')
const container = document.querySelector('tbody')
const find = document.querySelector('.find')
const sort = document.querySelector('.sort')


const films = [
    {
        name: 'Sky hith',
        year: 2005,
        contry: 'США',
        genre: 'фэнтази',
        rating: 6.4
    }
]

push.addEventListener('click' , () => {
    const newFilm = {
        name: nam.value,
        year: year.value,
        contry: contry.value,
        genre: genre.value,
        rating: rating.value,
    }
    
    films.push(newFilm)
    render()
})

render()



function render() {
    container.innerHTML = ''

    for(let i = 0; i < films.length; i++) {
        container.innerHTML += `
        <tr>
            <th>${films[i].name}</th>
            <th>${films[i].year}</th>
            <th>${films[i].contry}</th>
            <th>${films[i].genre}</th>
            <th>${films[i].rating}</th>
            <th><button class='edit'>Редоктировать</button>  <button index='${films[i]}' class='delete'>Удалить</button></th> 
        </tr>
        `
    }
}




table.onclick = function(event) {
    let target = event.target; 
  
    if (target.classList.contains('delete') === false) return; 
    
    let index = +target.getAttribute('index')

    films.splice(index, 1)
    render()
    console.log(index)
  };

find.addEventListener(('onkeyup'), () => {
    //получить значение
    //for пройтись
    // исравнить с films[i].names includs ...
    findFilm()
})

function findFilm() {

    
}



 

function listSee() {
    const ul = document.querySelector('.name')
    const list = ['sara', 'jane', 'nik', 'jone']
    let listNew = ''
    for(let i = 0; i < list.length; i++) {
        listNew += `<li>${list[i]}</li>`
    }
    
    ul.innerHTML = listNew
}
listSee()
