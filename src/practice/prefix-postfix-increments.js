// ## notes

// `prefix` increment the value first then return
// `postfix` return value first then increment

var index = 0
do {
  index++
  console.log(index)
} while (index < 10)

//case 1
console.log('prefix start at index: 1')
var index = 1
do {
  console.log(++index)
} while (index <= 10)

// case 2
// console.log('postfix')
// var index = 0
// do {
//   console.log(index++)
// } while (index < 10)

// case 3
console.log('prefix')
var index = 0
do {
  console.log(++index)
} while (index < 10)

//case 4
console.log('for loop')
for (var index = 0; index < 10; index++) {
  console.log(index)
}
