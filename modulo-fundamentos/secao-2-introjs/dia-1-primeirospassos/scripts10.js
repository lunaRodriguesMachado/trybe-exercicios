let custoProduto;
let impostoSobreCusto = custoProduto * 0.2;
let custoTotal = custoProduto + impostoSobreCusto;
let valorVenda;
let lucro = valorVenda - custoTotal;

if (custoProduto < 0 || valorVenda < 0) {
    throw new Error('[ERRO] Valor inserido é inválido!');
}

console.log('O lucro é R$' + lucro)