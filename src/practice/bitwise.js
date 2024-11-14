var x = 9
x = x >> 2
console.log(x)
x = x << 2
console.log(x)
x = x ^ 3
console.log(x)

const READ = 1
const WRITE = 2
const EXECUTE = 4

let permissions = 0
permissions |= READ
console.log(permissions)

permissions |= WRITE
console.log(permissions)

console.log(!!(permissions & READ)) // true
console.log(!!(permissions & WRITE)) // true
console.log(!!(permissions & EXECUTE)) // false
