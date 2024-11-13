import { powerGenerator } from './iterators-power-of-two'

const safetyHandler = {
  set(target, key, value) {
    if (key === 'direction') {
      if (value !== '>' && value !== '<') {
        throw new Error('direction must be ">" or "<"')
      }
    }

    target[key] = value
    return true
  },
}

try {
  const safePowerGenerator = new Proxy(powerGenerator, safetyHandler)
  safePowerGenerator.direction = 'x'
} catch (err) {
  console.log(`Error: ${err.message}`)
}
