function reverseString(frase: String) {
    return Array.from(frase).reverse().toString().replace(/,/g,"");
}

console.log(reverseString("hello"));