const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')
const close = document.querySelector('.popup-close')
console.log(button)

close.addEventListener('click', () =>{
    popup.style.display = 'none'
})

button.addEventListener('click', e => {
    popup.style.display = 'block'
})

popup.addEventListener('click', e => {
    popup.style.display = 'block'
})