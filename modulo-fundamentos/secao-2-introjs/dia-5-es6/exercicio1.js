// Parte 1
function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
}
imprimeIdade()

// Parte 2
const pessoa = {
nome: 'Henri',
idade: 20
}
pessoa.nome = 'Luna';
pessoa.idade = 19;

console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);

// Parte 3
let favoriteFood = 'Lasanha';
favoriteFood = 'Hambúrguer';
console.log(favoriteFood);

// Parte 4
const name = 'Adriana';
const lastName = 'Soares';
console.log('Olá' + ',' + name + ' ' + lastName + '!');
function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log(`O resultado da soma de ${a} + ${b} é: ${a+b}`)

// Parte 5
let numeroAleatorio = () => Math.random();
console.log(numeroAleatorio());

// Parte 6
let hello = (nome) => {return `Olá, ${nome}!`}
console.log(hello('Ivan'));

// Parte 7
let nomeCompleto = (nome, sobrenome) => {return `${nome} ${sobrenome}`}
console.log(nomeCompleto('Ivan', 'Pires'));

// Parte 8
const speedCar = (speed) => {
  return (speed >= 120) ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;
};
console.log(speedCar(90));