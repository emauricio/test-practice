function Person(first, last, age, status) {
  this.firstName = first
  this.lastName = last
  var age = age
  var status = status
  this.getAge = function () {
    return age
  }
}

const p1 = new Person('em', 'cp', 30)
console.log(p1)

// in this case is no possible to use arrow function coz of the scope
Person.prototype.display = function () {
  console.log(`${this.firstName} ${this.lastName}`)
  return false
}

Person.prototype.getStatus = function () {
  return this.status
}

const p2 = new Person('emc', 'cpp', 35)
console.log(p2)
p2.display()
p1.display()

p1.age = 40 //age is internal var no edit possible
p1.firstName = 'changed name' // edit possible assigned to the same object
console.log(p1.getAge())
p1.display()
console.log(p1.getStatus()) // will return undefine because status is private
