function makeSeriesIterator(start = 0, end = Infinity, step = 1) {
  let nextIndex = start
  let count = 0

  const series = {
    next() {
      if (nextIndex <= end) {
        const result = { value: nextIndex, done: false }
        nextIndex += step
        count++
        return result
      }
      return { value: count, done: true }
    },
  }
  return series
}

const iterator = makeSeriesIterator(0, 10, 5)
let result = iterator.next()

while (!result.done) {
  console.log(result.value)
  result = iterator.next()
}

console.log('Secuence size:', result.value)

/*
  NOTE: la diferencia entre este y la otra forma con el [Symbol.iterator] es que este
  tengo que llamr a next() para obtener el siguiente valor, mientras que con el [Symbol.iterator]
  se llama directamente y puedo usar el for...of
*/
