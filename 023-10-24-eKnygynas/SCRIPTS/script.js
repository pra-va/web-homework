function Book (name, author, year, numberOfPages, booksLeft, price) {
    this.name = name;
    this.author = author;
    this.year = year;
    this.numberOfPages = numberOfPages;
    this.booksLeft = booksLeft;
    this.price = price;
}

var booksArray = [
    new Book("Leviathan Wakes", "James S. A. Corey", 2011, 552, 10, 15.3), 
    new Book("Calibans War", "James S. A. Corey", 2012, 620, 5, 18.1),
    new Book("The Hitchhikers Guide To The Galaxy", "Douglas Adams", 1979, 250, 3, 12.0)
];

function searchBookByName (bookName) {
    var bookFound = false;
    booksArray.forEach((item) => {
        if (item.name === bookName) {
            console.log("Book " + bookName + " FOUND.");
            bookFound = true;
        }
    });
    if (bookFound) {
        return;
    } else {
        console.log("Book " + bookName + " NOT FOUND.");
    }
}

function searchBookByAuthor (authorName) {
    var bookFound = false;
    booksArray.forEach((item) => {
        if (item.author === authorName) {
            console.log("Book " + item.name + " by "+ item.author + " FOUND.");
            bookFound = true;
        }
    });
    if (bookFound) {
        return;
    } else {
        console.log("Author " + authorName + " has no books in books array.");
    }
}

function searchBookByYear (year) {
    var bookFound = false;
    booksArray.forEach((item) => {
        if (item.year === year) {
            console.log("Book " + item.name + " by "+ item.author + " FOUND.");
            bookFound = true;
        }
    });
    if (bookFound) {
        return;
    } else {
        console.log("There are no books written in year " + year + ".");
    }
}

searchBookByName("Leviathan Wakes");
searchBookByName("Pranas Uraganas");

searchBookByAuthor("Douglas Adams");
searchBookByAuthor("Pranas Varaneckas");

searchBookByYear(2015);
searchBookByYear(2011);


