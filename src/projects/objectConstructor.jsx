const objectConstructor = () => {
  return (
    <div>objectConstructor</div>
  )
}

'user strict'

// Object
const bookObject = {
  title: "The Magna Carta",
  author: "Harihara",
  page: 100,
  read: true
}

console.log(`${bookObject.title} by ${bookObject.author} has ${bookObject.page} pages, ${bookObject.read == true ? 'The book is read' : 'The book is not read yet.'}`);

// Object Constructor
function bookConstructor(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function(){
      console.log(`The ${title} by ${author} has ${pages} pages, ${read == true ? 'The book is read' : 'The book is not read yet.'}`);
    }
}

const rudra = new bookConstructor('Magna Carta', 'Rudra', 200, true);

rudra.info();

// Inherit Object Constructor
function inheritBook(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

inheritBook.prototype.info = function(){
  console.log(`The ${this.title} by ${this.author} has ${this.pages} pages, ${this.read == true ? 'The book is read' : 'The book is not read yet.'}`);
}

const authorInherit = new inheritBook('Magna Carta', 'Agni', 300, true);

authorInherit.info();

// Setting prototype for Object
function duplicateBookConstructor(){
}

function indra(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

indra.prototype = Object.create(duplicateBookConstructor.prototype);

indra.prototype.info = function(){
  console.log(`The ${this.title} by ${this.author} has ${this.pages} pages, ${this.read == true ? 'The book is read' : 'The book is not read yet.'}`);
}

const authorOne = new indra('Magna Carta', 'Indra', 400, true);

authorOne.info();

export default objectConstructor