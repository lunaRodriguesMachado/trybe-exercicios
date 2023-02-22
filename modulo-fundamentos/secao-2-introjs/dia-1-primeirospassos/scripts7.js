let porcentagem;
let notaAluno;

if (porcentagem >= 90 && porcentagem <= 100) {
    notaAluno = 'A';
    console.log('A nota do aluno é ' + notaAluno);
} else if (porcentagem >= 80 && porcentagem < 90) {
    notaAluno = 'B';
    console.log('A nota do aluno é ' + notaAluno);
} else if (porcentagem >= 70 && porcentagem < 80) {
    notaAluno = 'C';
    console.log('A nota do aluno é ' + notaAluno);
} else if (porcentagem >= 60 && porcentagem < 70) {
    notaAluno = 'D';
    console.log('A nota do aluno é ' + notaAluno);
} else if (porcentagem >= 50 && porcentagem < 60) {
    notaAluno = 'E';
    console.log('A nota do aluno é ' + notaAluno);
} else if (porcentagem >= 0 && porcentagem < 50) {
    notaAluno = 'F';
    console.log('A nota do aluno é ' + notaAluno);
} else {
    console.log('[ERRO] Porcentagem inválida');
}