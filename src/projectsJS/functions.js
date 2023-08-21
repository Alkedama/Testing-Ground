'use strict';
// Object Literal
const Rudra = {
    name: 'Rudra',
    surname: 'Ragnarok'
}

console.log(Rudra.name, Rudra.surname);
// Arrow Function
const Indra = () => {
    let name = 'Indra'
    return name;
}

console.log(Indra());

const Indra2 = () => 'Indra';

console.log(Indra2());

// Factory Function
const Harihara = (name) => {
    return { name: name };
}

const Harihara1 = Harihara('Harihara');
const Harihara2 = Harihara('Harihara2');

console.log(Harihara1.name);
console.log(Harihara2.name);

// IIFE
(() => {
    console.log('Yami');
    let name = "Yami";

    console.log(name);
})();

// Module Pattern
const Vishnu = (() => {
    const info = (name) => name;
    return { info };
})();

console.log(Vishnu.info("Vishnu"));

// Object Constructor
const Agni = function(name) {
    this.name = name;

    this.info = function(){
        console.log(this.name);
    }
}

const Agni1 = new Agni('Agni1');
const Agni2 = new Agni('Agni2');

Agni1.info();
Agni2.info();

// Inherit Object Constructor
const Shiva = function(name){
    this.name = name;
}

Shiva.prototype.info = function(){
    console.log(this.name);
}

const Shiva1 = new Shiva('Shiva1');
const Shiva2 = new Shiva('Shiva2');

Shiva1.info();
Shiva2.info();
