const mainBtn = document.getElementById('btn')
const input = document.getElementById('text')
const square = document.querySelector('#square')
const circle = document.querySelector('#circle')
const btn = document.querySelector('#e_btn')
const inputRange = document.querySelector('input[type=range]')
const span = document.querySelector('#range-span')





function inputValue(event) {
    console.log(event.target.value);
}

input.addEventListener('input', inputValue)
input.addEventListener('change', inputValue)




const changeColor = function (e) {
    e.stopPropagation();

    if (input.value == 'black') {
        square.style.backgroundColor = 'black'
    } else if (input.value == 'blue') {
        square.style.backgroundColor = 'blue'
    } else {
        square.style.backgroundColor = 'orange'
    }

    btn.style.display = 'none'


}


mainBtn.addEventListener('click', changeColor)




const changeRange = function (event) {
    console.dir(event.target);
    span.innerHTML = event.target.value + '%'
    circle.style.width = event.target.value + '%'
    circle.style.height = event.target.value + '%'

}


inputRange.addEventListener('input', changeRange)
inputRange.addEventListener('change', changeRange)






















/*
const btn = document.querySelector('#e_btn')
const circle = document.querySelector('#circle')
const square = document.querySelector('#square')

const toggler = function (event) {
    // event.stopPropagation(); // останавливает всплытие и акцент на кликнутом элементе

    console.log(event.currentTarget);
    event.target.classList.toggle('test')
}

btn.addEventListener('click', toggler, true)
circle.addEventListener('click', toggler, true)
square.addEventListener('click', toggler, true)

*/