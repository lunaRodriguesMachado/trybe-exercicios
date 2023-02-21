let primeiroNumero;
let segundoNumero;
let terceiroNumero;
let maiorNumero;

if (primeiroNumero >= segundoNumero && primeiroNumero >= terceiroNumero) {
    maiorNumero = primeiroNumero;
} else if (segundoNumero >= primeiroNumero && segundoNumero >= terceiroNumero) {
    maiorNumero = segundoNumero;
} else if (terceiroNumero >= primeiroNumero && terceiroNumero >= segundoNumero) {
    maiorNumero = terceiroNumero;
}

console.log('O maior número é ' + maiorNumero)