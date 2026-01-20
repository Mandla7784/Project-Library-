const myLibrary = []


function Book() {
//. Constructor for Book object
}


function addBookToLibrary(title, author, pages, read) {
  // take params, create a book then store it in the array
  const book = new Book(title, author, pages, read);
  myLibrary.push(book);
  return book;
}