const allSettled = (promises) => {
  return new Promise((resolve) => {
    const result = []
    let completedCount = 0

    promises = Array.from(promises)
    if (promises.length === 0) {
      resolve(result)
      return
    }
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          result[index] = { status: 'fulfilled', value }
        })
        .catch((reason) => {
          result[index] = { status: 'rejected', reason }
        })
        .finally(() => {
          completedCount++
          if (completedCount === promises.length) {
            resolve(result)
          }
        })
    })
  })
}

// Example usage
allSettled([Promise.resolve(1), Promise.reject('Error occurred'), 2])
  .then(console.log)
  .catch(console.error)
