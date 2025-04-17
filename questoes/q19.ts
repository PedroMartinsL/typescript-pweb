type Pessoa = {
    nome: String,
    genero: String,
    idade: number
}

function specifiedPessoa(pessoas: Pessoa[]) {
    return pessoas.reduce((older, pessoa) => 
        pessoa.idade > older ? pessoa.idade : older
    , -Infinity);
}

let pessoas: Pessoa[] = [
    {
        nome: "Renato",
        genero: "Masc",
        idade: 20
    },
    {
        nome: "Manu",
        genero: "Fem",
        idade: 25
    },
    {
        nome: "Lia",
        genero: "Fem",
        idade: 2
    }
]

console.log(specifiedPessoa(pessoas))