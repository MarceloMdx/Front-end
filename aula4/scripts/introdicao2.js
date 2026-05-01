let alunos = [
    {
        nome: "João",
        nota: 8.5,
        bolsista: false
    },
    {
        nome: "Ana",
        nota: 7.5,
        bolsista: false
    },
    {
        nome: "Beto",
        nota: 9.0,
        bolsista: false
    },
    {
        nome: "Carla",
        nota: 6.5,
        bolsista: true
    }
]


// Map (Criar um novo array de nomes)
 const nomes = alunos.map(aluno => aluno.nome.toUpperCase())
 console.log("Nomes: ", nomes)

// Filter (Cria um novo array apenas com quem passou)
const aprovados = alunos.filter(aluno => aluno.nota >= 7)
console.log("Aprovados: ", aprovados)

// Reduce (Reduzir os valores do array em um único valor)
const soma = alunos.reduce((acc, atual)=> acc + atual.nota, 0)
const media = soma / alunos.length
console.log("Média: ", media)


// -----------------------------------------------

// Find (Busca de um objeto por um atributo)
const aluno = alunos.find(aluno => aluno.nome === "Ana")
console.log("Aluno encontrado: ", aluno)

// FindIndex (Retorna o indice do objeto que satisfaz aquela condição)
const IndexAluno = alunos.findIndex(aluno => aluno.nome === "Ana")
console.log("Aluno encontrado em : ", IndexAluno)

// Every (Verifica se todos os elementos satisfazem a condição (se sim retorna true))
const todosAprovados = alunos.every(aluno => aluno.nota >= 7)
console.log("Todos aprovados?", todosAprovados)

//some (verifica se pelomenos um elemento satisfaz a condição(se sim retorna True))
const temBolsista = alunos.some(aluno => aluno.bolsista)
console.log("Tem bolsista? ", temBolsista)

//----------------------------------------------------------------------
// alteração (mutabilidade dp array)
const letras=['b','c']
letras.push('b') //Adiciona um elemento ao final do array
letras.unshift() // Adiciona um elemento ao inicio do array
letras.pop() // remove um elemento do final doa rray
letras.shift() // remove um elemento do inicio do array

console.log(letras)

//------------------------------------------------------
//Ordenação

const numeros =[10,1,5,20]

numeros.sort((a , b)=> a - b) // Ordenar nosso array em ordem crescente
console.log("Array ordenado", numeros)

numeros.reverse() // inverte a ordem do nosso array
console.log("Array inverso", numeros)

const data = [30 ,4 ,2026]
const stringResultante = data.join("/") // converter o nosso array para string separando os valores pelo caractere informado

console.log("Data", stringResultante)

const somenteDoisAlunos = alunos.slice(0,2) // 0 e 2 = start e end tras 0 e 1. Corta o array sem alterar o original
console.log("Os dois 1º alunos:", somenteDoisAlunos)
console.log("Alunos:", alunos)

