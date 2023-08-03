const objectConstructor = () => {
  return (
    <div>objectConstructor</div>
  )
}

'use strict'

// Object
const bookObject = {
  title: "Object",
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

const authorOne = new bookConstructor('Object Constructor', 'Rudra', 200, true);
const authorTwo = new bookConstructor('Object Constructor', 'Savitur', 300, true);

authorOne.info();
authorTwo.info();

console.log(Object.getPrototypeOf(authorOne) === bookConstructor.prototype);
console.log(Object.getPrototypeOf(authorOne));

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

const authorInheritOne = new inheritBook('Inherit Object Constructor', 'Agni', 300, true);
const authorInheritTwo = new inheritBook('Inherit Object Constructor', 'Yami', 400, true);

authorInheritOne.info();
authorInheritTwo.info();

console.log(Object.getPrototypeOf(authorInheritOne) === inheritBook.prototype);
console.log(authorInheritOne);

// Setting prototype for Object
function duplicateBookConstructor(){
}

duplicateBookConstructor.prototype.info = function(){
  console.log(`The ${this.title} by ${this.author} has ${this.pages} pages, ${this.read == true ? 'The book is read' : 'The book is not read yet.'}`);
}

function book(title, author, pages, read){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

book.prototype = Object.create(duplicateBookConstructor.prototype);

const authorSettingOne = new book('Setting prototype', 'Indra', 400, true);
const authorSettingTwo = new book('Setting prototype', 'Hanuman', 500, true);

authorSettingOne.info();
authorSettingTwo.info();

console.log(Object.getPrototypeOf(authorSettingOne) === book.prototype)
console.log(Object.getPrototypeOf(authorSettingOne))
export default objectConstructor