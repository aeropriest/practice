const scores = [100,10,80,20,30,88,40,50,60]
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
    {name: 'brass', price: 10},
    {name: 'plastic', price: 5},
]



//find all products more than 20 dollar and then map it to the new array
console.log('expeinse proucts are ')

console.log(products
    .filter( product=> product.price > 20 )
    .map( product => `the ${product.name} is ${product.price} dollars`))


const highValue = products.map(product => product.price >= 30 ? {name: product.name, price: product.price/2} : product )

console.log(highValue)

const playerScores = [
    {player: 'mario', score:10},
    {player: 'jais', score:4},
    {player: 'mario', score:40},
    {player: 'mario', score:45},
    {player: 'mario', score:22},
    {player: 'hey', score:88},
]

const totalScore = playerScores.reduce((accum, curr) => {
    if( curr.player === 'mario'){
        accum += curr.score
    }
    return accum
},0)

console.log(`marios score is ${totalScore}`)

const highScore = scores.find((score)=>{
    return score >= 20
})

console.log(`highest score is ${highScore}`)

const names = ['ashok', 'hey hey', 'jais', 'ariane', 'mamam']

console.log(`not sorted ${names}`)

console.log(`sorted array ${names}`)

playerScores.sort((a,b)=>{
    if( a.score > b.score ){
        return -1
    }else if(b.score > a.score){
        return 1
    }else{
        return 0
    }

})

scores.sort((a,b) => b - a)
console.log(scores)

console.log(`sorted players are ${playerScores}`)
console.log(playerScores)