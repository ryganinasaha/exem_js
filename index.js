 

 

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
