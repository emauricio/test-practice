const someText = 'javascript1.2'
const pattern = /(\w+)(\d)\.(\d)/i
const outcome = pattern.test(someText)
console.log(outcome)
