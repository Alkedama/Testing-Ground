import './../scss/test.scss'

const test = () => {
  return (
    <div>
      <div className="test">test</div>

      <button id="btnInvoke" className="btnInvoke">Invoke</button>
    </div>
    
  )
}

'use strict'

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

book.prototype.info2 = function (){
  console.log('wassup')
}

function book2(){
}

book2.prototype.info3 = function(){
  console.log('wassup2')
}

console.log('----');
// book.prototype = Object.create(duplicateBookConstructor.prototype);
Object.setPrototypeOf(book.prototype, duplicateBookConstructor.prototype);
Object.setPrototypeOf(book2.prototype, book.prototype);

console.log(book.prototype);

const authorSettingOne = new book2('Magna Carta', 'Indra', 400, true);
const authorSettingTwo = new book2('Alkedama', 'Hanuman', 500, false);

authorSettingOne.info();
authorSettingTwo.info();
authorSettingOne.info2();
authorSettingOne.info3();

// console.log(authorSettingOne.author);
// console.log(authorSettingTwo.author);

export default test