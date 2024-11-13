function test(a, b) {
  return a + b
}

console.log(test.apply(this, [2, 2]))
console.log(test.call(this, 2, 2))

const obj = {
  myName: 'mep',
  printName: function () {
    console.log(`printing: ${this.myName}`)
  },
}

obj.printName()
const newObj = {
  myName: 'oh with call',
}
obj.printName.call(newObj)
