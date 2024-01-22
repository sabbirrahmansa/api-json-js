const produck = {
    id: 1,
    name:'computer',
    price:45000,
    // id: 2,
    // name:'laptop',
    // price:55000,
    // id: 3,
    // name:'phone',
    // price:15000
}

console.log(produck);

const produckJson = JSON.stringify(produck);
console.log(produckJson)
const produckJson2 = JSON.parse(produck)
console.log(produckJson2)