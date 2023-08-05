const objectConstructorPart2 = () => {
  return (
    <div>objectConstructorPart2</div>
  )
}

'use strict'
function Person(name) {
  this.name = name //ignored written by me
  }
  
  Person.prototype.sayName = function() {
    console.log(`Hello, I'm ${this.name}! ${this.rudra}`)
  }
  
  function Player(name, marker, rudra) {
    this.name = name
    this.marker = marker
    this.rudra = rudra
  }
  
  Player.prototype.getMarker = function() {
    console.log(`My marker is '${this.marker}'`)
  }
  
  // Object.getPrototypeOf(Player.prototype) should
  // return the value of "Person.prototype" instead
  // of "Object.prototype"
  console.log(Object.getPrototypeOf(Player.prototype)) 
  // returns Object.prototype
  
  // Now make `Player` objects inherit from `Person`
  // Player.prototype = Object.create(Person.prototype)
  console.log(Object.setPrototypeOf(Player.prototype, Person.prototype))
  console.log(Object.getPrototypeOf(Player.prototype))
   // returns Person.prototype
  
  const player1 = new Player('steve', 'X', 'indra')
  const player2 = new Player('also steve', 'O', 'rudra')
  
  player1.sayName() // Hello, I'm steve!
  player2.sayName() // Hello, I'm also steve!
  
  player1.getMarker() // My marker is 'X'
  player2.getMarker() // My marker is 'O'

export default objectConstructorPart2