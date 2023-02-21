let operacao = '';
let a = 6;
let b = 9;
let resultado;

if (operacao == 'adição') {
    resultado = a + b;
    console.log('O resultado da adição de ' + a + ' e ' + b + ' é ' + resultado);
} else if (operacao == 'subtração') {
    resultado = a - b;
    console.log('O resultado da subtração de ' + a + ' e ' + b + ' é ' + resultado);
} else if (operacao == 'multiplicação') {
    resultado = a * b;
    console.log('O resultado da multiplicação de ' + a + ' e ' + b + ' é ' + resultado);
} else if (operacao == 'divisão') {
    resultado = a / b;
    console.log('O resultado da divisão de ' + a + ' e ' + b + ' é ' + resultado);
} else if (operacao == 'exponenciação') {
    resultado = a ** b;
    console.log('O resultado da exponenciação de ' + a + ' e ' + b + ' é ' + resultado);
} else if (operacao == 'módulo') {
    resultado = a % b;
    console.log('O resultado do módulo de ' + a + ' e ' + b + ' é ' + resultado);
} else {
    console.log('[ERRO] Operação inválida!');
}