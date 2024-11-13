class Animal {
  #origin = 'japan'
  static species = 'mammal'
  constructor(name, health = 100, energy = 100) {
    this.name = name
    this.health = health
    this.energy = energy
  }

  static get species() {
    return this.species
  }

  get origin() {
    return this.#origin
  }

  set origin(value) {
    this.#origin = value
  }

  eat() {
    this.health += 10
  }

  sleep() {
    this.energy += 10
  }

  play() {
    this.energy -= 10
  }

  status() {
    console.log(`Name: ${this.name}`)
    console.log(`Health: ${this.health}`)
    console.log(`Energy: ${this.energy}`)
  }
}

class Cat extends Animal {
  constructor(name, health = 100, color = 'white', weight = 5) {
    super(name, health)
    this.color = color
    this.weight = weight
  }

  play() {
    super.play()
    this.energy -= this.weight
  }
}

const neko = new Cat('neko')
neko.play()
neko.status()
console.log(neko.origin)
neko.origin = 'america'
console.log(neko.origin)

console.log(Animal.species)
console.log(neko.species) // undefined
