let nomePeca;

switch (nomePeca.toLowerCase()) {
    case 'peão':
        console.log('Movimenta-se para uma casa para frente e captura uma casa na diagonal. Em seu primeiro movimento, é possível andar duas casas a frente.');
        break;
    case 'bispo':
        console.log('Movimenta-se e captura peças adversárias na diagonal.');
        break;
    case 'torre':
        console.log('Movimenta-se e captura peças adversárias na vertical e horizontal.');
        break;
    case 'cavalo':
        console.log('Movimenta-se e captura peças adversárias em formato de "L", uma casa para um lado, e duas para outro lado. É a única peça do xadrez que pode "pular" por cima de outras peças.');
        break;
    case 'rainha':
        console.log('Tem a junção da movimentação da torre e do bispo, se movendo para qualquer lado, sendo assim, a peça mais poderosa do xadrez.');
        break;
    case 'rei':
        console.log('Pode se mover apenas uma casa em qualquer direção, contanto que essa posição não esteja em xeque.');
        break;
    default:
        console.log('[ERRO] Peça inválida!')
}