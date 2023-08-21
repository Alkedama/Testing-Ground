const ObjectConstructorPart4 = () => {
  return (
    <div>ObjectConstructorPart4</div>
  )
}

'use strict'

let user = {
  name: "John",
  surname: "Smith",

  set fullName(value) {
    [this.name, this.surname] = value.split(" ");
  },

  get fullName() {
    return `${this.name} ${this.surname}`;
  }
};

let admin = {
  __proto__: user,
  isAdmin: true
};

console.log(admin.fullName); // John Smith (*)

// setter triggers!
admin.fullName = "Alice Cooper"; // (**)

console.log(admin.fullName); // Alice Cooper, state of admin modified
console.log(user.fullName); // John Smith, state of user protected


function Alkedama(){
  this.name = "Rudra",
  this.surname = "Ragnarok"
  
  this.fullName = function(){
    console.log(`${this.name} ${this.surname}`);
  }
}

// Alkedama.prototype.fullName = function(){
//   console.log(`${this.name} ${this.surname}`);
// }

function MagnaCarta(){
}

MagnaCarta.prototype.fullName = function(){
  console.log(`${this.name} ${this.surname}`);
}

// Object.setPrototypeOf(Alkedama.prototype, MagnaCarta.prototype);

const output = new Alkedama();

output.fullName();

export default ObjectConstructorPart4