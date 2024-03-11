const myLibrary = [] // All of your book objects are going to be stored in an array

// Object constructor
function Book(author, title, pages, read) {
    // details for the new book: author, title, number of pages, whether it’s been read and anything else you might want
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBook(book) {
    // add a function to the script (not the constructor) that can take user’s input and store the new book objects into an array
    myLibrary.push(book);
}

function displayLibrary() {
    // Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”
    // get .library div
    let library = document.querySelector('.library');
    for (let book of myLibrary) {
        book = document.createElement('div');
        book.classList.add('book');
        library.appendChild(book);
        console.log(book);
    }
}

testBook1 = new Book('Phillip Pullman', 'Northern Lights', 448, true);
testBook2 = new Book('Phillip Pullman', 'The Subtle Knife', 368, true);
testBook3 = new Book('Phillip Pullman', 'The Amber Spyglass', 544, false);

addBook(testBook1);
addBook(testBook2);
addBook(testBook3);

displayLibrary();