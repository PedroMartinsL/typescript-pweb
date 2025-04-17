function calcularImpostoRenda(salBruto: number) {
    if(salBruto > 4664.68) {
        return salBruto * (27.5)
    } else if (salBruto > 3751.06) {
        return salBruto * (22.5);
    } else if (salBruto > 2826.66) {
        return salBruto * (15);
    } else if (salBruto > 1903.99) {
        return salBruto * (7.5);
    }
    return 0;        
}

console.log(calcularImpostoRenda(3560))