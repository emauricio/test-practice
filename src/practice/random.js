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

// ======================================
// correct snipet

let str = 'Hello Word!'
console.log(str.slice(3, 5))
console.log(str.substring(3, 5))
console.log(str.substr(3, 2))

// ======================================
const arr = [1, 2, 3, 4, 5]
arr.splice(1, 2, 100, 200)
console.log(arr)

// ======================================

// no se puede llamar antes de la declaracion
// foo()
// var foo = function () {
//   return 0
// }

// var foo;  // solo se eleva la declaración
// foo()     // Error! foo es undefined en este punto
// foo = function () {  // la asignación se queda en su lugar original
//   return 0
// }

// funciona por el hoisting
// foo()
// function foo() {
//   console.log('returning 0')
//   return 0
// }

// ======================================

// calc function clousure
var calc = ((num1, num2) => {
  return num1 + num2
})(2, 2)

console.log(calc)

// ======================================

//array loop numbs and letters

var nums = [1, 2, 3, 4, 5, 6, 7, 8]
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']
var myArr = [nums, letters, nums, letters, nums, letters, nums, letters]
console.log(myArr)

for (var i = 0, j = 7; i <= j; i++, --j) {
  console.log(`arr[${i}][${j}]=${myArr[i][j]}`)
}

// ======================================
