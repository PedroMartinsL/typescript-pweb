function calcularMediaArredondada(lista: Array<number>) {
    const res = lista.reduce((sum, actual) => actual + sum, 0);
    return Math.round((res/lista.length));
}

console.log(calcularMediaArredondada([1.5, 2.9, 3.7, 1.2]));
