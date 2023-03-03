// Parte 1
let motor = (ligadoOuDesligado) => {
    return (ligadoOuDesligado === 'ligado' ? `Desligando o motor` : `Ligando o motor`)
}

console.log(motor('desligado'));

// Parte 2
let areaCirculo = (raio) => {
    const pi = 3.14;
    return raio * pi;
}
console.log(areaCirculo(5));