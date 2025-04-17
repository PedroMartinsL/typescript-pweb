function gerarTabuada(num: number) {
    for(let i: number= 0; i <= 10; i++) {
        console.log("%d x %d = %d", num, i, num * i);
    }
}

gerarTabuada(5)