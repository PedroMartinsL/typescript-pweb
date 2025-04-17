function calcularIdade(year: number) {
    return new Date().getFullYear() - year;
}

console.log(calcularIdade(2010));