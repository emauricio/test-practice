export interface PowerGenerator {
  minPower: number
  maxPower: number
  base: number
  step: number
  direction: '>' | '<'
  superscripts: { [key: string]: string }
  toSuperscript: (num: number) => string
  log: (base: number, power: number, result: number) => void
  [Symbol.iterator](): Iterator<[number, number]>
}

export const powerGenerator: PowerGenerator = {
  minPower: 0,
  maxPower: 5,
  base: 2,
  direction: '>',
  step: 2,

  // logging
  superscripts: {
    '0': '⁰',
    '1': '¹',
    '2': '²',
    '3': '³',
    '4': '⁴',
    '5': '⁵',
    '6': '⁶',
    '7': '⁷',
    '8': '⁸',
    '9': '⁹',
  },
  toSuperscript(num) {
    return String(num)
      .split('')
      .map((char: string) => this.superscripts[char] || char)
      .join('')
  },

  log(base, power, result) {
    const superscript = this.toSuperscript(power)
    console.log(`${base}${superscript} = ${result}`)
  },
  [Symbol.iterator]() {
    let power = this.direction === '>' ? this.minPower : this.maxPower

    const isIncreasing = this.direction === '>'
    const endCondition = () =>
      isIncreasing ? power >= this.maxPower : power <= this.minPower

    return {
      next: (): IteratorResult<[number, number]> => {
        if (endCondition()) {
          return { value: undefined, done: true }
        }
        const value = Math.pow(this.base, power)
        const oldPow = power
        power = isIncreasing ? power + this.step : power - this.step
        return { value: [value, oldPow], done: false }
      },
    }
  },
}

// Test different configurations:
// console.log('Forward with step 2:')
// powerGenerator.direction = '>'
// powerGenerator.step = 1
// for (const [retulst, exponent] of powerGenerator) {
//   powerGenerator.log(powerGenerator.base, exponent, retulst)
// }

// console.log('\nBackward with step 2:')
// powerGenerator.direction = '<'
// powerGenerator.step = 1
// for (const [retulst, exponent] of powerGenerator) {
//   powerGenerator.log(powerGenerator.base, exponent, retulst)
// }
