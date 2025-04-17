function imc(peso: number, altura: number) {
    return peso/(altura)**2;
}

console.log(imc(70.5, 1.80).toFixed(2))
