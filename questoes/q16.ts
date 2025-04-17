function rectangularSplit(chain: String[]) {
    const maxWidth: number = chain.reduce((larger, actual) => actual.length > larger ? actual.length : larger,-Infinity) + 2;
    console.log("*".repeat(maxWidth));
    for(const word of chain) {
        const size = word.length + 2;
        const preenchimento = " ".repeat(maxWidth - size);
        console.log(`*${word}${preenchimento}*`);
    }
    console.log("*".repeat(maxWidth));
}

console.log(rectangularSplit(["Hello", "World", "in", "a", "frame"]));