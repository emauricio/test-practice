//basic js doc for editor support when no on the mood for ts
const names = ['pepe', 'jose', 'ana', 'maria']
const ages = [10, 20, 30, 40, 50]
const grades = ['A', 'B', 'C', 'D', 'F']

/**
 * @param {string} name
 * @param {number} age
 * @returns {{name: string, age: number, grades: string}}
 */
const personGenerator = (name, age, grades) => ({ name, age, grades })

/**
 * @param {number} [num=5]
 * @returns {Array.<{name: string, age: number, id: number}>}
 */
const randomPersonsGenerator = (num = 5) => {
  const persons = Array.from({ length: num }).map((_, index) => {
    const randomName = names[Math.floor(Math.random() * names.length)]
    const randomAge = ages[Math.floor(Math.random() * ages.length)]
    const randomGrade = grades[Math.floor(Math.random() * grades.length)]

    return {
      ...personGenerator(randomName, randomAge, randomGrade),
      id: index + 1,
    }
  })
  return persons
}

const persons = randomPersonsGenerator(5)

/**
 * Sorts the given array in ascending order.
 * @param {Array.<{name: string, age: number, id: number, grades: string}>} arr
 * @returns {Array} sorted array
 */
function sortAscendingBySubstraction(arr) {
  return arr.sort((a, b) => {
    return a.age - b.age
  })
}

function sortAscendingByComparison(arr) {
  return arr.sort((a, b) => {
    if (a.age > b.age) return 1
    if (a.age < b.age) return -1
    return 0
  })
}

/**
 * @param {Array.<{name: string, age: number, id: number, grades: string}>} arr
 * @returns {Array} sorted array
 */
function sortByGradeThenAge(arr) {
  return arr.sort((a, b) => {
    // cuando las notas son iguales sort por age
    if (a.grades === b.grades) {
      // el viejo primero (descending order)
      return b.age - a.age
    }

    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
    return a.grades.localeCompare(b.grades)
  })
}

const morePersons = randomPersonsGenerator(5)

console.log(sortAscendingBySubstraction.call(this, persons))
console.log(sortAscendingByComparison.call(this, persons))
console.log(sortByGradeThenAge([...persons, ...morePersons]))

// el sort por defecto es ascending
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
