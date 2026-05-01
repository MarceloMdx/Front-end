// Variaveis ----

let professor = "João"
professor = 2



//-----------------

let texto = ""
let numero = -1
let booleano = true
let vazio = null
let indefinido

// ----------------------------

// Condicionais e Repetições

let hora = 14

if(hora < 12){
    console.log("Bom dia!")
}
else if(hora < 18){
    console.log("Boa tarde!")
}
else{
    console.log('Boa noite!')
}

for(let i = 0; i < 5; i++){
    console.log(`Indice do loop: ${i}`)
}

// ------------------------------

// Funções
function teste(texto){
    return texto
    
}

let resultado = teste("olá")


const multiplicar = (a, b) => {a * b}
   

// objetos  ----------------------

const carro = {
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2026,
    buzinar: function() {
        console.log("Bibi!!!")
    }
}

let frutas = ["moçã", "Banana", "melão"]

// ---- Métodos -------------------

let numeros = [1, 5, 8, 12, 15]

// mapeia (percorre o nosso array) e executa uma operação para cada elemento
const dobro = numeros.map(n => n * 2)

console.log("Dobro aqui: ", dobro)


// Filtra e retorna um array somente com os elementos que atendam uma determinada condição
const filtrados = numeros.filter(n=> n > 10)
console.log("Filtrados aqui: ", filtrados)

// Reduce é usado para fazer operações entre os elementos
const total = numeros.reduce((acc, atual)=> acc + atual, 0)

console.log("Total: ", total)


// Busca o primeiro elemento que satisfaz a condição
const primeiroPar = numeros.find(n => n % 2 === 0)

console.log("Primeiro Numero par: ", primeiroPar)

// Retorna um valor booleado (true se o valor do elemento estiver no array)
const temVinte = numeros.includes(20);

console.log("Tem vinte? ", temVinte)