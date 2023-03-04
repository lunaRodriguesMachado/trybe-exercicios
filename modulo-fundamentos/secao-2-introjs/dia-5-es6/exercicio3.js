const substituaX = (nome) => {
    const frase = 'Tryber x aqui!';
    const fraseArray = frase.split(' ');
    for (let index = 0; index < fraseArray.length; index += 1) {
        if (fraseArray[index] === 'x') {
            fraseArray[index] = nome;
        }
    }
    return fraseArray.join(' ');
};

const minhasSkills = (subsituaX) => {
    const skills = ['HTML5', 'CSS3', 'JavaScript'];
    let fraseFinal = `${subsituaX} Minhas três principais habilidades são: ${skills}`;
    return fraseFinal;
}

console.log(minhasSkills(substituaX('Luna')));