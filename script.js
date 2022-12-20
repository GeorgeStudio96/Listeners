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