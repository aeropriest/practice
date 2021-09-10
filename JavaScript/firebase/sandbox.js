const list = document.querySelector('ul')
const form = document.querySelector('form')
console.log(form)
form.addEventListener('submit', e => {
    e.preventDefault()
    const now = new Date()
    const recipe = {
        title: form.recipe.value.trim(),
        created_at: firebase.firestore.Timestamp.fromDate(now),
        author: 'nobody'
    }
    console.log('gone')
    db.collection('recipes').add(recipe).then(()=>{
        console.log('recipe added', recipe)
    }).catch(error=>{
        console.log(error.message)
    })
})
const addRecipe = recipe => {
    
    let time = recipe.created_at.toDate()
    let html = `
    <li>
        <div>
        ${recipe.title}
        </div>
        <div>${time}</div>
    </li>`
    list.innerHTML += html
}

db.collection('recipes').get().then((snapshot)=>{
    
    snapshot.docs.forEach(doc=>{
        addRecipe(doc.data())
    })
}).catch(error=>{
    console.log(error)
})