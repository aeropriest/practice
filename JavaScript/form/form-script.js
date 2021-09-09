const form = document.querySelector('.signup-form')
const feedback = document.querySelector('.feedback')

const usernamePatterh = /^[a-zA-Z]{6,12}$/

form.addEventListener('click', e=>{
    e.preventDefault()
    console.log('form submit')
    const username = form.username.value
    if( usernamePatterh.test(username) ){
        feedback.textContent = 'that username is valid'
    }else{
        feedback.textContent = 'invalid username'
    }
})

form.username.addEventListener('keyup', e => {
    console.log(e.target.value)
    if( usernamePatterh.test(e.target.value) ){
        form.username.setAttribute('class', 'success')
    }else{
        form.username.setAttribute('class', 'error')
    }
})