let minis = document.querySelectorAll('.min')
let imgGrand = document.querySelector('#imgGrand')

for (let i = 0; i < minis.length; i++) {
    minis[i].addEventListener('click', (e) => {
        imgGrand.src = e.target.src
    })
}