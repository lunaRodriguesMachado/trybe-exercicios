let primeiroNumero;
let segundoNumero;

if (primeiroNumero > segundoNumero) {
    console.log(primeiroNumero + ' é maior do que ' + segundoNumero);
} else if (primeiroNumero < segundoNumero) {
    console.log(primeiroNumero + ' é menor do que ' + segundoNumero);
} else if (primeiroNumero === segundoNumero) {
    console.log('Os dois números são iguais');
} else {
    console.log('Valor(es) inserido(s) não é(são) do tipo número')
}