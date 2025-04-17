function biggerThanFive(words: String[]) {
    return words.filter(x => x.length > 5)
}

console.log(biggerThanFive(["abacaxi", "maracuja", "uva"]))