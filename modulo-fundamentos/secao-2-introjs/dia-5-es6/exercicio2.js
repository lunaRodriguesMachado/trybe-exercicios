// Parte 1
const motor = (ligadoOuDesligado) => {
    return (ligadoOuDesligado === 'ligado' ? `Desligando o motor` : `Ligando o motor`)
}

console.log(motor('desligado'));

// Parte 2
const areaCirculo = (raio) => {
    const pi = 3.14;
    return raio * pi;
}
console.log(areaCirculo(5));

// Parte 3
let longestWord = (string) => {
    let big = '';
    string.split(' ').forEach(word => {
        if (word.trim().length > big.length) {
            big = word.trim();
        }
    });
    return big;
}
console.log(longestWord('Com grandes poderes, vêm grandes responsabilidades'))