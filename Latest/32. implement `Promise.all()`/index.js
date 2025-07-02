function all(promises) {
  return new Promise((resolve, reject) => {
    const results = []
    let completedCount = 0

    promises = Array.from(promises)

    console.log(promises)

    if (promises.length === 0) {
      resolve(results)
      return
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value
          completedCount++

          if (completedCount === promises.length) {
            resolve(results)
          }
        })
        .catch((error) => {
          reject(error)
        })
    })
  })
}

all([Promise.resolve(1), 2, Promise.reject('Error occurred')])
  .then(console.log)
  .catch(console.error)
