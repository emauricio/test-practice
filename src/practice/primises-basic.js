const fakeCall = ({ rejected }) =>
  new Promise((resolve, reject) => {
    setTimeout(rejected ? reject : resolve, 1000, rejected ? new Error('Rejected') : 'Resolved')
  })

const p1 = fakeCall({ rejected: false })
const p2 = fakeCall({ rejected: false })
const p3 = fakeCall({ rejected: true })

//then/catch
// Promise.all([p1, p2, p3])
//   .catch((e) => console.log(`error: ${e.message}`))
//   .then((r) => console.log(r))

// all settle will not throw the rejected promise
// is good to use when promises do not depend on each other
try {
  const result = await Promise.allSettled([p1, p2, p3])
  // console.log(result.map((r) => r.value))
  console.log(result)
} catch (e) {
  // never enters here
  console.log(e)
}

// try {
//   const result = await Promise.all([p1, p2, p3])
//   console.log(result)
// } catch (e) {
//   console.log(`error: ${e.message}`) // first rejected
// }
