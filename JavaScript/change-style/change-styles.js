
const paras = document.querySelectorAll('p')

paras.forEach(p=>{
    if(p.textContent.includes('success')){
        p.classList.add('success')
    }
    if(p.textContent.includes('error')){
        p.classList.add('error')
    }
    console.log(p.innerText)
})

const article = document.querySelector('article')

Array.from(article.children).forEach((child)=>{
    child.classList.add('article-element')
})