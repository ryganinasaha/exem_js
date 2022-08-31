

const name = document.querySelector('.name')
const year = document.querySelector('.year')
const contry = document.querySelector('.contry')
const genre = document.querySelector('.genre')
const rating = document.queryCommandValue('.rating')
const push = document.querySelector('.push')
const delet = document.querySelector('.delete')
const container = document.querySelector('tbody')


const films = [
    {
        name: 'Sky hith',
        year: 2005,
        contry: 'США',
        genre: 'Sky hith',
        rating: 6.4
    }
]

push.addEventListener('click' , () => {
    const newFilm = {
        name: name.velue,
        year: year.velue,
        contry: contry.velue,
        genre: genre.velue,
        rating: rating.velue,
    }
    
    films.push(newFilm)

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
            <th>${films[i].contry}</th>
            <th>${films[i].rating}</th>
            <th><button class='delete'>Удалить</button></th> 
        </tr>
        `
    }
}







 

function listSee() {
    const ul = document.querySelector('.name')
    const list = ['sara', 'jane', 'nik', 'jone']
    let listNew = ''
    for(let i = 0; i < list.length; i++) {
        listNew += `<li>${list[i]}</li>`
    }
    console.log(listNew)
    ul.innerHTML = listNew
}
listSee()
