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
    console.log(`${book.title} was added to the library`);
}

function clearLibrary() {
    booksNodes = document.querySelectorAll('.book');
    for(let i = 0; i < booksNodes.length; ++i) {
        library.removeChild(booksNodes[i]);
    }
}

function displayLibrary() {
    // Write a function that loops through the array and displays each book on the page. You can display them in some sort of table, or each on their own “card”
    // get .library div
    clearLibrary();
    for (let book of myLibrary) {
        bookNode = document.createElement('div');
        bookNode.classList.add('book');
        displayTitle = document.createElement('p');
        displayTitle.textContent = book.title;
        displayAuthor = document.createElement('p');
        displayAuthor.textContent = book.author;
        bookNode.appendChild(displayAuthor);
        bookNode.appendChild(displayTitle);
        library.appendChild(bookNode);
        console.log(book);
    }
}

function openModal() {
    modal.showModal();
}

function okPressed(event) {
    event.preventDefault();
    newTitle = document.querySelector('#title').value;
    newAuthor = document.querySelector('#author').value;
    newPages = document.querySelector('#pages').value;
    newRead = document.querySelector('#read').value;
    newBook = new Book(newAuthor, newTitle, newPages, newRead);
    addBook(newBook);
    displayLibrary();
    closeModal();
}

function closeModal() {
    modal.close();
}

// TEST CODE

testBook1 = new Book('Phillip Pullman', 'Northern Lights', 448, true);
testBook2 = new Book('Phillip Pullman', 'The Subtle Knife', 368, true);
testBook3 = new Book('Phillip Pullman', 'The Amber Spyglass', 544, false);

addBook(testBook1);
addBook(testBook2);
addBook(testBook3);

// MAIN CODE

let library = document.querySelector('.library');

displayLibrary();

modal = document.querySelector('dialog');

newBookButton = document.querySelector('.new-book');
newBookButton.addEventListener('click', openModal);

okModalButton = document.querySelector('.ok-button');
okModalButton.addEventListener('click', okPressed);

closeModalButton = document.querySelector('.cancel-button');
closeModalButton.addEventListener('click', closeModal);