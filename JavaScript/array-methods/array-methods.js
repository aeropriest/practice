const scores = [10,20,30,40,50,60]
const out = scores.filter((score)=>{
    return score > 30
})
console.log(out)

const reduced = scores.reduce((acc,curr)=>{
    if( curr > 20 )
        acc ++
    return acc
},0)
console.log('reduced array is ', reduced)
const users = [
    {name: 'ashok', premium: true},
    {name: 'ariane', premium: false},
    {name: 'heyhey', premium: false},
    {name: 'chunnju munnue', premium: true},
]
    
console.log('preimum users are ',premiumUsers = users.filter(user => user.premium))

const salesPrices = scores.map((score) => score/2
)

console.log(salesPrices)

const products = [
    {name: 'gold', price: 20},
    {name: 'silver', price: 40},
    {name: 'diamond', price: 50},
    {name: 'jade', price: 80},
    {name: 'platinum', price: 60},
]

const highValue = products.map(product => product.price >= 30 ? {name: product.name, price: product.price/2} : product )

console.log(highValue)