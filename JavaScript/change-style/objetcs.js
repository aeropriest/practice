
const myfunc = (callbackFunc) => {
    let val = 50
    let square = val**2
    callbackFunc(val, square)
}

myfunc( (side,area) => {
    console.log(`side of rectanel ${side} has an area of ${area}`)
})

const names = ['ashok', 'ariane', 'sarika', 'aviansh', 'sonu', 'sangeeta']

const logPerson = (person, index) => {
    console.log(`Name at ${index} is ${person}`)
}

names.forEach((person,index) => {
    console.log(`Name at ${index} is ${person}`)
})

names.forEach(logPerson)

const ul = document.querySelector('.people')
let html = ``
names.forEach(person => {
    //create html template
    html += `<li style="color:purple">${person}</li>`
})

console.log(html)
ul.innerHTML = html

let user ={
    name: 'ashok jaiswal',
    age: 42,
    gender: 'male',
    location: 'hong kong',
    family: ['ariane', 'hey hey', 'mammi'],
    email: 'ashok@jaiswal.com',
    blogs: [
        {title : 'why media center pc', like: 250},
        {title : 'fresh yogurt is good', like: 288},
    ],
    login(word) {console.log(`logged in for ${word} `)},
    printName() { 
        console.log(this.family)
        this.family.forEach((name=>{
            console.log(name)
        }))
    },
    printBlogs(){
        this.blogs.forEach((a)=>{
            console.log(`for blog '${a.title}', likes are ${a.like}`)
        })
    }
}
user.login('ashok')
console.log()
user.printName()
user.printBlogs()