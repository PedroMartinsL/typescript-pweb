function calcularDesconto(valor: number, percentual: number) {
    return valor * (1 - percentual);
}

console.log(calcularDesconto(20, 0.5))