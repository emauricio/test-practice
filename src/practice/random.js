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
