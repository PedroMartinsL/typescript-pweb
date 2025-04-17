function longestWord(word: String) {
    const splitted: String[] = word.split(" ");
    let longest: String = "";
    splitted.forEach((actualWord)=> {
        if (actualWord.length > longest.length) {
            longest = actualWord;
        }
    })
    return longest;
}

console.log(longestWord("Tutorial de desenvolvimento da web"))