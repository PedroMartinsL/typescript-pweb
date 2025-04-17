function verificarPropriedade(objeto: Object, propriedade: String) {
    if(objeto.hasOwnProperty("" + propriedade)) {
        return true
    }
    return false;
}

let carro = {
    pneu: 20
}

console.log(verificarPropriedade(carro, "garrafa"));
console.log(verificarPropriedade(carro, "pneu"));