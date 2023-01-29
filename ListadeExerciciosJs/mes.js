// // function nMes(n) {
// //     switch(n){
// //         case 1: console.log('Janeiro!')
// //         break
// //         case 2: console.log('Fevereiro!')
// //         break
// //         case 3: console.log('Março!')
// //         break
// //         case 4: console.log('Abril!')
// //         break
// //         case 5: console.log('Maio!')
// //         break
// //         case 6: console.log('Junho!')
// //         break
// //         case 7: console.log('Julho!')
// //         break
// //         case 8: console.log('Agosto!')
// //         break
// //         case 9: console.log('Setembro!')
// //         break
// //         case 10: console.log('Outubro!')
// //         break
// //         case 11: console.log('Novembro!')
// //         break
// //         case 12: console.log('Dezembro!')
// //         break
// //         default: console.log('Número de mês não existente')
// //         break
// //     }
// // }

// // nMes(10)



const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']

const mes = (valor) => meses[valor-1]  ? console.log(meses[valor-1]): console.log("Numero de mes não existente")

mes(1)