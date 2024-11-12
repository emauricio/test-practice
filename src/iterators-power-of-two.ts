interface PowerGenerator {
  minPower: number
  maxPower: number
  base: number
  step: number
  direction: '>' | '<'
  description: string
  superscripts: { [key: string]: string }
  toSuperscript: (num: number) => string
  [Symbol.iterator](): Iterator<number>
}

export const powerGenerator: PowerGenerator = {
  minPower: 0,
  maxPower: 5,
  base: 2,
  direction: '>',
  step: 2,
  description: '',

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
  toSuperscript(num: number) {
    return String(num)
      .split('')
      .map((char: string) => this.superscripts[char] || char)
      .toString()
  },

  [Symbol.iterator](): Iterator<number> {
    let power = this.direction === '>' ? this.minPower : this.maxPower

    const isIncreasing = this.direction === '>'
    const endCondition = () =>
      isIncreasing ? power >= this.maxPower : power <= this.minPower

    return {
      next: (): IteratorResult<number> => {
        if (endCondition()) {
          return { value: undefined, done: true }
        }
        const value = Math.pow(this.base, power)
        power = isIncreasing ? power + this.step : power - this.step
        return { value, done: false }
      },
    }
  },
}

// Test different configurations:
console.log('Forward with step 2:')
powerGenerator.direction = '>'
powerGenerator.step = 1
for (const num of powerGenerator) {
  console.log(num)
}

console.log('\nBackward with step 2:')
powerGenerator.direction = '<'
powerGenerator.step = 1
for (const num of powerGenerator) {
  console.log(num)
}
