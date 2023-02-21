let primeiroAngulo;
let segundoAngulo;
let terceiroAngulo;

if (primeiroAngulo < 0 || segundoAngulo < 0 || terceiroAngulo < 0) {
    console.log('[ERRO] Ângulo inválido');
}
if (primeiroAngulo + segundoAngulo + terceiroAngulo === 180) {
    console.log('É um triângulo válido');
} else {
    console.log('NÃO é um triângulo válido');
}