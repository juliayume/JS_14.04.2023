// Atividades

// 1. Escreva uma função que pede ao usuário a altura e a largura (nessa ordem) de um retângulo e imprime no console a área do retângulo.

// function retangleArea(height, width) {
//     return height * width
// }

// let height = prompt("Insira a altura do seu retângulo em centímetros:")
// let width = prompt("Insira a largura do seu retângulo em centímetros:")

// console.log(`A área do seu retângulo, de altura de ${height} cm e largura de ${width} cm, é de ${retangleArea(height, width)}`)

// 2. Escreva uma função que pede ao usuário o ano atual e seu ano de nascimento e imprima no console sua idade.

// function age (currentYear, birthYear) {
//     return currentYear - birthYear
// }

// let currentYear = prompt("Insira o ano atual:")
// let birthYear = prompt("Insira seu ano de nascimento:")

// console.log(`Você tem ${age (currentYear, birthYear)} anos.`)

// 3. Escreva uma função que recebe o peso em kg e a altura em metros de uma pessoa e retorna o seu IMC (Índice de Massa Corpórea).

// function IMC (weight, userHeight) {
//     return weight / (userHeight ^ 2)
// }

// let weight = prompt("Insira o seu peso em kg:")
// let userHeight = prompt("Insira a sua altura em metros:")

// console.log(`Seu IMC é ${IMC (weight, userHeight)}`)

// 4. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas possuem o mesmo tamanho.

// function compare (str1, str2) {
//     if (str1.lenght === str2.lenght) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// let str1 = prompt("Insira uma mensagem:")
// let str2 = prompt("Insira outra mensagem:")

// if (compare (str1, str2) === true) {
//     console.log("Ambos os textos possuem o mesmo tamanho.")
// }
// else {
//     console.log("As mensagens possuem tamanhos direfentes")
// }

// 5. Escreva uma função que recebe um array e retorna o último elemento.

// function lastItem (arr) {
//     return arr[arr.length-1]
// }

// const arr = [1, 2, 3, 4];

// console.log(lastItem (arr))

// 6. Escreva uma função que recebe duas strings e retorna um booleano (true ou false) indicando se elas são iguais, desconsiderando letras maiúsculas ou minúsculas.

// function compare (str1, str2) {
//     if (str1.toLowerCase() === str2.toLowerCase()) {
//         return true
//     }
//     else {
//         return false
//     }
// }

// let str1 = prompt("Insira uma mensagem:")
// let str2 = prompt("Insira outra mensagem:")

// if (compare (str1, str2) === true) {
//     console.log("Os textos são iguais.")
// }
// else {
//     console.log("Os textos não são iguais.")
// }

// 7. Escreva uma função que pergunta ao usuário o ano atual, o ano de nascimento de uma pessoa, e o ano em que sua carteira de identidade foi emitida (nessa ordem). 

// A função deve imprimir no console um booleano (true ou false) que indica se a carteira precisa ser renovada ou não. A carteira precisa ser renovada segundo os seguintes critérios:

// - a) Para pessoas com menos de 20 anos, ou exatamente 20 anos, deve ser renovada de 5 em 5 anos (se for exatamente 5 anos, deve ser renovada).
// - b) Para pessoas entre 20 e 50 anos, ou exatamente 50, deve ser renovada de 10 em 10 anos (se for exatamente 10 anos, deve ser renovada).
// - c) Para pessoas acima dos 50 anos, deve ser renovada de 15 em 15 anos.

// function renovation (currentYear, birthYear, idEmissionYear) {
//     let age = currentYear - birthYear

//     if (age <= 20) {
//         if (((currentYear - idEmissionYear) % 5) === 0) {
//             return true
//         }
//         else {
//             return false
//         }
//     }
//     else if (age > 20 & age <= 50){
//         if (((currentYear - idEmissionYear) % 10) === 0) {
//             return true
//         }
//         else {
//             return false
//         }
//     }
//     else if (age > 50) {
//         if (((currentYear - idEmissionYear) % 15) === 0) {
//             return true
//         }
//         else {
//             return false
//         }
//     }
// }

// let currentYear = prompt("Insira o ano atual:")
// let birthYear = prompt("Insira seu ano de nascimento:")
// let idEmissionYear = prompt("Insira o ano que sua carteira de identidade foi emitida:")

// if (renovation (currentYear, birthYear, idEmissionYear) === true) {
//     console.log("A carteira deve ser renovada!")
// }
// else {
//     console.log("A carteira está dentro da validade!")
// }
