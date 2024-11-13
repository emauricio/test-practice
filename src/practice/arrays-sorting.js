//basic js doc for editor support when no on the mood for ts
const names = ['pepe', 'jose', 'ana', 'maria']
const ages = [10, 20, 30, 40, 50]

/**
 * @param {string} name
 * @param {number} age
 * @returns {{name: string, age: number}}
 */
const personGenerator = (name, age) => ({ name, age })

/**
 * @param {number} [num=5]
 * @returns {Array.<{name: string, age: number, id: number}>}
 */
const randomPersonsGenerator = (num = 5) => {
  const persons = Array.from({ length: num }).map((_, index) => {
    const randomName = names[Math.floor(Math.random() * names.length)]
    const randomAge = ages[Math.floor(Math.random() * ages.length)]

    return {
      ...personGenerator(randomName, randomAge),
      id: index + 1,
    }
  })
  return persons
}

const persons = randomPersonsGenerator(5)

/**
 * Sorts the given array in ascending order.
 * @param {Array.<{name: string, age: number, id: number}>}
 * @returns {Array} sorted array
 */
function sortAsending(arr) {
  return arr.sort((a, b) => {
    return a.id - b.id
  })
}

console.log(sortAsending.call(this, persons))
