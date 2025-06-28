/**
 * @param {any} proto
 * @return {object}
 */
function myObjectCreate(proto) {
  if (typeof proto !== 'object' || proto === null) {
    throw new TypeError('Argument must be a non-null object')
  }

  function F() {
    // This is a temporary constructor function
    // It does not need to do anything
    // Its purpose is to set the prototype of the object we will create
  }
  F.prototype = proto
  return new F()
}

const person = {
  isHuman: false,
  printIntroduction() {
    console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`)
  },
}

const me = Object.create(person)
console.log(me)
const test = { a: 1, b: 2 }
const obj1 = myObjectCreate(test)
const obj2 = Object.create(test)
const obj3 = test

// 1. Prototype Inheritance:
// We use a temporary constructor F and assign proto to its prototype so that new F() creates an object inheriting from proto.

// 2. Type Validation:
// The function throws an error if proto is not a non-null object, aligning with how Object.create behaves.

// 3. No Native Methods Used:
// This approach avoids Object.create and Object.setPrototypeOf, showing a deep understanding of prototypal inheritance mechanics.
