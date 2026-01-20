import Book from "./book.js";


let myLibrary = []
const booksContainer = document.querySelector(".books")
const form = document.querySelector("form");

// Load books from localStorage on startup
const booksFromLocalStorage = JSON.parse(localStorage.getItem('myLibrary'));
if(booksFromLocalStorage){
    myLibrary = booksFromLocalStorage;
}


function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  return book;
}
function removeBook(id) {
    // Find and remove the book
    const idx = myLibrary.findIndex(book => book.id === id);
    if(idx !== -1){
        myLibrary.splice(idx, 1);
        // Clear previous display
        booksContainer.innerHTML = "";
        localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
        displayBooks();
    }
}

// Make removeBook accessible globally for onclick handlers
window.removeBook = removeBook;


function displayBooks(){

    myLibrary.forEach(book => {
      
        const bookElement = document.createElement("div");
        const {title, author, pages, read ,id} = book
        bookElement.classList.add("book");
        bookElement.innerHTML = `
        <button style="float: right;border-radius:30%;background-color: 
        #221f1fff;color: white;border: none;cursor: pointer;width: 30px;height: 30px;display: 
        flex;align-items: center;justify-content:
         center;" onclick="removeBook('${id}')">X</button>
            <h3>${title}</h3>
            <p>Author: ${author}</p>
            <p>Pages: ${pages}</p>
            <p>Read: ${read ? "Yes" : "No"}</p>
            
      
        `;
        console.log(bookElement);
        booksContainer.appendChild(bookElement);
       
    })
}


// Adding new book to the system
const  openFormButton = document.querySelector("#open-dialog");

openFormButton.addEventListener("click", () => {
    const dialog = document.querySelector("dialog");
    dialog.showModal();
}
)

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const title = form.title.value;
    const author = form.author.value;
    const pages = form.pages.value;
    const read = form.read.checked;
    const newBook = addBookToLibrary(title, author, pages, read);
    console.log(newBook);

    // Clear previous display
    booksContainer.innerHTML = "";
    displayBooks();
    
    form.reset();
    const dialog = document.querySelector("dialog");
    dialog.close();
})



document.addEventListener("DOMContentLoaded", () => {
    if(myLibrary.length > 0){
        displayBooks();
    }
});