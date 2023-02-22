let salarioBruto = 1000;
let salarioBase;
let salarioLiquido;
let aliquotaINSS;
let aliquotaIR;
let deducaoINSS;
let deducaoIR;
let aDeduzirIR;

if (salarioBruto <= 1556.94) {
    aliquotaINSS = 0.08;
    deducaoINSS = salarioBruto * aliquotaINSS;
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
    aliquotaINSS = 0.09;
    deducaoINSS = salarioBruto * aliquotaINSS;
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
    aliquotaINSS = 0.11;
    deducaoINSS = salarioBruto * aliquotaINSS;
} else if (salarioBruto > 5189.82) {
    deducaoINSS = 570.88;
}
salarioBase = salarioBruto - deducaoINSS
console.log('O salário base é: ' + salarioBase.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}))

if (salarioBase <= 1903.98) {
    aliquotaIR = 0;
    salarioLiquido = salarioBase;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
    aliquotaIR = 0.075;
    aDeduzirIR = 142.80;
    deducaoIR = salarioBase * aliquotaIR - aDeduzirIR;
    salarioLiquido = salarioBase - deducaoIR;
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
    aliquotaIR = 0.15;
    aDeduzirIR = 354.80;
    deducaoIR = salarioBase * aliquotaIR - aDeduzirIR;
    salarioLiquido = salarioBase - deducaoIR;
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
    aliquotaIR = 0.225;
    aDeduzirIR = 636.13;
    deducaoIR = salarioBase * aliquotaIR - aDeduzirIR;
    salarioLiquido = salarioBase - deducaoIR;
} else if (salarioBase > 4664.68) {
    aliquotaIR = 0.275;
    aDeduzirIR = 869.36;
    deducaoIR = salarioBase * aliquotaIR - aDeduzirIR;
    salarioLiquido = salarioBase - deducaoIR;
}
console.log('O salário líquido é: ' + salarioLiquido.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'}));