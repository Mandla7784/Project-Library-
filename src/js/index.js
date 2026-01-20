const myLibrary = []
const booksContainer = document.querySelector(".books")

function Book() {
//. Constructor for Book object
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