function any(promises) {
  return new Promise((resolve, reject) => {
    let errors = []
    let rejectedCount = 0
    const total = promises.length

    if (total === 0) {
      return reject(new AggregateError([], 'All promises were rejected'))
    }

    promises = Array.from(promises)

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          resolve(value) // ✅ As soon as one fulfills
        })
        .catch((err) => {
          errors[index] = err
          rejectedCount++

          if (rejectedCount === total) {
            reject(new AggregateError(errors, 'All promises were rejected'))
          }
        })
    })
  })
}

any([
  Promise.reject('Fail 1'),
  Promise.reject('Fail 2'),
  Promise.resolve('Success!'),
])
  .then(console.log)
  .catch(console.error)
