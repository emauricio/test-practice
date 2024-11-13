function fetchWeather() {
  const url =
    'https://api.open-meteo.com/v1/forecast?latitude=36.7202&longitude=-4.4203&hourly=temperature_2m,rain&timezone=auto&forecast_days=3'
  return fetch(url, { method: 'GET' }).then((response) => response.json())
}

function displayData(data) {
  console.log(data)
}

const callFetchWeather = () =>
  fetchWeather().then((data) => {
    // displayData(data)
    return 'done'
  })

//
const promiseResult = await callFetchWeather()
console.log(promiseResult === 'done')
// console.log(promiseResult.then((data) => console.log(data)))

const callAsyncFetchWeather = async () => {
  try {
    const data = await fetchWeather()
    // displayData(data)
    return 'done'
  } catch (e) {
    console.log(`error: ${e}`)
    return 'error'
  }
}

// el resultado de una asycn es una promesa, asi que si quiero verla
// debo usar await

// const asyncResult = await callAsyncFetchWeather()
// console.log(asyncResult)
