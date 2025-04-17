
function calcularMediaAlunos(alunos: Aluno[]): number {
    return alunos.reduce((soma, aluno) => soma += aluno.nota, 0) / alunos.length;
}

type Aluno = { 
    nome: string, 
    nota: number 
};

const turma: Aluno[] = [
    {
        nome: "Joaquim",
        nota: 10,
    }, {
        nome: "Josefa",
        nota: 7.5,
    }, {
        nome: "Josefa",
        nota: 8,
    }
];

console.log(calcularMediaAlunos(turma))