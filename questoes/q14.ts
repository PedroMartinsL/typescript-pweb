function calcularPrecoProduto(custo: number, lucro: number, frete: number) {
    let vendaLucro: number = custo * (1 + lucro/100);
    // + frete
    return vendaLucro + frete;
}

console.log(calcularPrecoProduto(100, 20, 10));