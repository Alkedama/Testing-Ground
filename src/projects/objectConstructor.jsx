const objectConstructor = () => {
  return (
    <div>objectConstructor</div>
  )
}

'user strict'

function book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

book.prototype.sayBookAuthor = function(){
    console.log(this.title)
}

indra.prototype = Object.create(book.prototype);

const rudra = new book('rudra', 'rudra', 100, true);
const authorOne = new book('indra', 'indra', 100, true);

console.log(authorOne.sayBookAuthor());

export default objectConstructor