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
    let i = 0;
    for (let book of myLibrary) {
        bookNode = document.createElement('button');
        bookNode.classList.add('book');
        bookNode.setAttribute('index', i);
        displayTitle = document.createElement('p');
        displayTitle.textContent = book.title;
        displayAuthor = document.createElement('p');
        displayAuthor.textContent = book.author;
        deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.setAttribute('type', 'button');
        deleteButton.textContent = 'Delete';
        readCheckbox = document.createElement('input');
        readCheckbox.setAttribute('type', 'checkbox');
        readCheckbox.id = `markRead${i}`;
        readCheckbox.classList.add('read-checkbox');
        readLabel = document.createElement('label');
        readLabel.setAttribute('for', `markRead${i}`);
        readLabel.textContent = 'Read:'
        bookNode.appendChild(displayTitle);
        bookNode.appendChild(displayAuthor);
        bookNode.appendChild(deleteButton);
        bookNode.appendChild(readLabel);
        bookNode.appendChild(readCheckbox);
        library.appendChild(bookNode);
        bookNode.addEventListener('click', openBook);
        let deleteModalButtons = document.querySelectorAll('.delete-button');
        for(let i = 0; i < deleteModalButtons.length; ++i) {
            deleteModalButtons[i].addEventListener('click', deletePressed);
        }
        let readCheckboxes = document.querySelectorAll('.read-checkbox');
        for(let i = 0; i < readCheckboxes.length; ++i) {
            readCheckboxes[i].addEventListener('click', readPressed);
        }
        ++i;
    }
}

function openModal() {
    modal.showModal();
}

function openBook() {
    openModal();
    // disable all inputs
    // fill input values with book info
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

function deletePressed(event) {
    index = event.currentTarget.parentNode.getAttribute('index');
    console.log(`${myLibrary[index].title} was removed from the library`);
    myLibrary.splice(index, 1);
    event.stopPropagation();
    displayLibrary();
}

function readPressed(event) {
    index = event.currentTarget.parentNode.getAttribute('index');
    console.log(`${myLibrary[index].title} was read`);
    event.stopPropagation();
    // update read object value
}

function closeModal() {
    modal.close();
}

const myLibrary = [] // All of your book objects are going to be stored in an array

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

let modal = document.querySelector('dialog');

let newBookButton = document.querySelector('.new-book');
newBookButton.addEventListener('click', openModal);

let okModalButton = document.querySelector('.ok-button');
okModalButton.addEventListener('click', okPressed);

let cancelModalButton = document.querySelector('.cancel-button');
cancelModalButton.addEventListener('click', closeModal);