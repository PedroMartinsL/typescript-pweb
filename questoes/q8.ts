function contarDigitosParesImpares(num: number) {
    let chain: String = "" + num;
    let odd = 0;
    let even = 0;
    Array.from(chain).forEach((char) => {
        if(Number.parseInt(char) % 2 == 0) {
            odd++;
        } else {
            even ++;
        }
    });
}