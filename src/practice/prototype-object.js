function Person(first, last, age) {
  this.firstName = first
  this.lastName = last
  this.age = age
}

const p1 = new Person('em', 'cp', 30)
console.log(p1)

// in this case is no possible to use arrow function coz of the scope
//
Person.prototype.display = function () {
  console.log(`${this.firstName} ${this.lastName}`)
  return false
}

const p2 = new Person('emc', 'cpp', 35)
console.log(p2)
p2.display()
p1.display()
