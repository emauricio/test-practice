class Server {
  #item
  constructor(item) {
    this.#item = new WeakMap(item)
  }

  //set go here
  set(key, value) {
    console.log(`setting ${key}: ${value}`)
    this.#item.set(key, value)

    // this will allow chain of set
    return this
  }
  get(key) {
    console.log(`getting key: ${key.name}`)
    return this.#item.get(key)
  }
}

const server1 = { name: 'gondor' }
const ip = '111.11.11.11'
const svrInfo = [[server1, ip]]
const svrInstance = new Server(svrInfo)

const server2 = { name: 'mordor' }
svrInstance.set(server2, '222.22.22.22')

console.log(svrInstance.get(server1))
console.log(svrInstance.get(server2))
