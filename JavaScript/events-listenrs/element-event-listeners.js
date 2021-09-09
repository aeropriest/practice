const copy = document.querySelector('.copy-me')
console.log('page is loaded')
const scores = [10,20,30,40,50,60]
const out = scores.filter((score)=>{
    return score > 30
})
console.log(out)
copy.addEventListener('copy', ()=>{
    console.log('dont steal code')
})

const box = document.querySelector('.box')

box.addEventListener('mousemove', event => {
    //console.log(event.offsetX, event.offsetY)
    box.textContent = `x pos ${event.offsetX}, y pos ${event.offsetY}`
})

document.addEventListener('wheel', e => {
    console.log(e.pageX, e.pageY)
})

const button = document.querySelector('button')


const ul = document.querySelector('ul')
const items = document.querySelectorAll('li')


button.addEventListener('click', () => {
    console.log('button clicked')
    ul.innerHTML+= `<li class='item'>Depost $${Math.floor(Math.random() * 100)} in bank</li>`
    const li = document.createElement('li')
    li.textContent = 'new item'
    li.className = 'item'
    //ul.append(li)
    // ul.prepend(li)
})

// items.forEach(item => {
//     item.addEventListener('click', event =>{
//         // console.log('item clicked')
//         // console.log(event.target)
//         // console.log(item)
//         //event.target.style.textDecoration = 'line-through'
//         event.stopPropagation()
//         console.log('event in li')
//         event.target.remove()
//     })
// })

ul.addEventListener('click', e => {
    console.log('event in ul')
    console.log(e.target)
    if( e.target.tagName === 'LI' )
    {
        e.target.remove()
    }
})