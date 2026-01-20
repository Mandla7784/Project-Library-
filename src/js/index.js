const myLibrary = []
const booksContainer = document.querySelector(".books")

function Book( title, author, pages, read) {
//. Constructor for Book object
this.title = title;
this.author = author;
this.pages = pages;
this.read = read;
}


function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  return book;
}
function displayBooks(){
    myLibrary.forEach(book => {
      
        const bookElement = document.createElement("div");
        const {title, author, pages, read} = book
        bookElement.classList.add("book");
        bookElement.innerHTML = `
            <h3>${title}</h3>
            <p>Author: ${author}</p>
            <p>Pages: ${pages}</p>
            <p>Read: ${read ? "Yes" : "No"}</p>
        `;
        booksContainer.appendChild(bookElement);
       
    })
}


// Example usage:
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 281, false);
displayBooks();
Book.prototype = {
    constructor: Book,
    title: "",
    author: "",
    pages: 0,
    read: false,
};