/**
 *  Tipagem dinâmica - JS
 */

// Declaração de  variavéis 
let nome, idade, peso, altura,vip,imc


// Entrada de dados

nome = "Fernanda Batista"
idade = 26
peso = 75
altura = 1.60
vip = true

// A linha abaixo verifica o tipo da variavél 
// console.log(typeof(idade))

console.clear()

// Processamento

imc = peso / (altura * altura)
fcm = 208  - (0.7 * idade)

// Saida

console.log("Ficha do aluno")
console.log("_______________________________")
console.log(`Nome: ${nome}`)
console.log(`Idade: ${idade}`)
console.log(`Peso: ${peso}`)
console.log(`Altura: ${altura}`)
console.log(`Vip: ${vip}`)
console.log(`Imc: ${imc.toFixed(2)}`)
console.log(`Fcm: ${fcm} bpm`)

