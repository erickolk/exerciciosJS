let nuns = [1,2,3,4,5]

// let resultado = nuns.map(function(e){
//     return e * 2
// })

// console.log(resultado)

const soma10 = e => e + 10;
const triplo = e => e * 3;
const emDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

let resultado = nuns.map(soma10).map(triplo).map(emDinheiro);

console.log(resultado)