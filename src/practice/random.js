function multiply(multiplier, ...arg) {
  for (let i = 0; i < arguments.length; i++) {
    arguments[i] = multiplier * arguments[i]
  }
  return arguments
}

// console.log(multiply(2, 1, 2, 3, 4))

function multiply2(multiplier) {
  console.log(arguments)
  console.log(multiplier)
  return false
}

console.log(multiply2(2, 1, 2, 3, 4))

// ======================================

var x = 0
var y = 0
var z = 0

x = 1
x = (-1 + y++) * ++z

// ======================================
// correct snipet
class Cat {
  constructor(breed) {
    this.breed = breed
  }
}

// let t1 = Cat('ted') // missing the new keyword error
// let t1 = class.create('ted') // class clreate do not exist
let t2 = new Cat() // breed will be undefiend
console.log(t2)
// let t3 = Cat.create('tabby') // cat do not have create method neither the class
let t4 = new Cat('mep') //breed will be mep
console.log(t4)

// ======================================
// correct snipet

var a = Array.from('abcabcabc')
var items = a.entries()
var count = 0

for (let i of items) {
  if (i.has) {
    count += 1
  }
}

console.log(count)
