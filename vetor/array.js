/**
 *  Estudo do arrays(vetor)
 *  @author Fernanda Batista Neris
 */

console.clear
let alunos = []
console.log(typeof(alunos))

//                 [0]      [1]     [2]     [3]      [4]       [5]      [6]     [7]      [8]
let alunosEM1 = ["Vitor", "Tânia","Pedro","Maria","Viviane","Cleiton","Ruana","Eliêda","Selma"]
console.log(typeof(alunosEM1))

// .length (Obtém o tamanho do array)
console.log(alunosEM1.length)
// Exibindo os dados de um array
console.log(alunosEM1)
// Exibindo um aluno do array
console.log(alunosEM1[4])
// Exibindo os dados do array em uma tabela
console.table(alunosEM1)
// Adicionando um elemento ao array
alunosEM1.push("Luiza")
console.table(alunosEM1)
// Modificar um elemento do array
alunosEM1[0] = "Victor"
console.table(alunosEM1)
// Excluir uma elemento do array
delete alunosEM1[2]
console.table(alunosEM1)
// percorrendo um array
let notas = [3, 8, 5, 9, 2]  /* Escritura de dados */
// Uso do laço para percorrer um array
for (let i = 0; i < notas.length; i++){
    console.log(notas[i])
}

// forEach (simplificação do laço for para um uso em array)
notas.forEach((n) => {
    console.log(n)
})

// Map (mapeamento  da estrutura de dados para cálculos ou conversões)
// Exemplo 1: Adicionar 1 ponto as notas
let notaAtulizadas = notas.map((na) => {
    return na + 1 
}) 

console.log(notas)
console.log(notaAtulizadas)

// Exemplo 2: Conversão de um sistema de notas 
/*
        NA - Não Atendeu (nota < 5)
*/

let notaConvertidas = notas.map((nc) => {
    if(nc < 5){
        return "NA"
    } else if (nc > 7){
        return "A"
    } else {
        return "PA"
    }
})

console.log(notas)
console.log(notaConvertidas)