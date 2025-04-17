type Livro = {
    title: String,
    author: String,
    year: number
}

function filterByAuthor(books: Livro[]) {
    const author = "Clarice";
    return books.filter((book) => book.author === author);
}


const bookshelf: Livro[] = [
    {
        title: "Peter pan",
        author: "Barrie",
        year: 1904
    },
    {
        title: "Bras Cubas",
        author: "Assis",
        year: 1881
    },
    {
        title: "Um sopro da vida",
        author: "Clarice",
        year: 1978
    },
]

console.log(filterByAuthor(bookshelf));