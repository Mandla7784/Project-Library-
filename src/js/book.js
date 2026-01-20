export default function Book( title, author, pages, read) {
//. Constructor for Book object
this.title = title;
this.author = author;
this.pages = pages;
this.read = read;
this.id  = crypto.randomUUID();
}
