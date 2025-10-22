// Aula 1 - 20/10/2025

// console.log() serve para mostrar mensagens no console do navegador ou do VS Code.
console.log("Olá Mundo!!!");
console.log("Hello World!!!");

// Variáveis são usadas para armazenar informações, como nomes, números, idades, etc.
// Estrutura básica:
// tipo da variável + nome da variável + valor

// Existem 3 formas principais de criar variáveis:
// var, let e const

// let: pode mudar de valor ao longo do código
let idade = 18;
console.log(idade);

idade = 19;
console.log(idade);

// Exemplo: let é ideal quando o valor pode mudar.
let nome = "Marina";
console.log(nome);

// const: é uma variável que NÃO pode ser alterada depois de criada
const cpf = 1234567899;
console.log(cpf);

const sobrenome = "Pereira";
console.log(sobrenome);

let quantidadeDeBlusas = 10;

let n1 = 1;
let n2 = 3;

console.log(n1 + n2);

n2 = "3";

console.log(n1 + n2);

// Continuação
// Aula 2 - 22/10/2025

// Variavel são espaços na memoria onde podemos armazenar dados
// Regras para criar nomes de variaveis
// 1. Não podem começar com numeros
// 2. Não podemos usar espaços
// 3. Não podemos usar palavras reservadas
// 4. Javascrip é case sensitive 
// 5. É comum usar o camelCase (ex: alunoNoite). 🐫

//3 tipos de variaveis:
// let - é uma variavel que pode ser reatribuida
let numeroCelular = "(81) 9 1254-7845";
console.log(numeroCelular);

numeroCelular = "(81) 9 8964-7845";
console.log(numeroCelular);

//const - é uma variavel constante, ou seja ela não pode ser reatribuida;

const nacionalidade = "Brasileira";
console.log(nacionalidade);

//nacionalidade = "Colombiana"; Não é possivel fazer isso! pois não podemos reatribuir uma const

// var - NÃO É RECOMENDADA!!!
//var conseguimos reescrever
var endereco = "Rua da Batata";
console.log(endereco);

var endereco = "Não sei";
console.log(endereco);

var endereco = "Não sei kkkk";

// tipos de dados;
// string "" -> textos, caracteres, palavras... (dado textual)
let nomeDoVisitante = "João Pedro Belo";

//number -> Dado numerico usado para armazenar números;

let quantidadeLivros = 1;
console.log(quantidadeLivros);

// boolean -> boleano é um tipo de dado que usamos para verdadeiro ou falso
// true -> verdadeiro
// false -> falso
let visitanteAtivo = true;

//null -> é um valor intecionalmente vazia
let livroVisitante = null;
console.log(livroVisitante);

//  undefined -> é quando criamos uma variavel que nao passamos o valor
let telefoneVisitante;
console.log(telefoneVisitante);
