const STATE = {
  PENDING: 'pending',
  FULFILLED: 'fulfilled',
  REJECTED: 'rejected',
}

// Utility to ensure execution in microtask queue
function asyncQueue(callback) {
  if (typeof queueMicrotask === 'function') {
    queueMicrotask(callback)
  } else {
    setTimeout(callback, 0) // fallback
  }
}

class MyPromise {
  constructor(executor) {
    this._state = STATE.PENDING
    this._value = undefined
    this._handlers = []

    const resolve = (value) => this._resolve(value)
    const reject = (reason) => this._reject(reason)

    try {
      executor(resolve, reject)
    } catch (error) {
      this._reject(error)
    }
  }

  // ==== Core Resolution Methods ====
  _resolve(value) {
    if (this._state !== STATE.PENDING) return

    // Handle thenables
    if (
      value instanceof MyPromise ||
      (value && typeof value.then === 'function')
    ) {
      try {
        value.then(this._resolve.bind(this), this._reject.bind(this))
      } catch (error) {
        this._reject(error)
      }
      return
    }

    this._state = STATE.FULFILLED
    this._value = value
    this._processHandlers()
  }

  _reject(reason) {
    if (this._state !== STATE.PENDING) return
    this._state = STATE.REJECTED
    this._value = reason
    this._processHandlers()
  }

  // ==== Handler Management ====
  _addHandler(handler) {
    this._handlers.push(handler)
    if (this._state !== STATE.PENDING) {
      this._processHandlers()
    }
  }

  _processHandlers() {
    if (this._state === STATE.PENDING) return

    asyncQueue(() => {
      this._handlers.forEach(({ onFulfilled, onRejected, resolve, reject }) => {
        try {
          if (this._state === STATE.FULFILLED) {
            if (typeof onFulfilled !== 'function') {
              resolve(this._value)
            } else {
              const result = onFulfilled(this._value)
              resolve(result)
            }
          } else if (this._state === STATE.REJECTED) {
            if (typeof onRejected !== 'function') {
              reject(this._value)
            } else {
              const result = onRejected(this._value)
              resolve(result)
            }
          }
        } catch (error) {
          reject(error)
        }
      })

      this._handlers = []
    })
  }

  // ==== Promise API ====
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      this._addHandler({ onFulfilled, onRejected, resolve, reject })
    })
  }

  catch(onRejected) {
    return this.then(null, onRejected)
  }

  finally(callback) {
    return this.then(
      (value) => MyPromise.resolve(callback()).then(() => value),
      (reason) =>
        MyPromise.resolve(callback()).then(() => {
          throw reason
        })
    )
  }

  // ==== Static Helpers ====
  static resolve(value) {
    if (value instanceof MyPromise) return value
    return new MyPromise((resolve) => resolve(value))
  }

  static reject(reason) {
    return new MyPromise((_, reject) => reject(reason))
  }
}

// ==== Example Usage ====

console.log('Start')

new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('Step 1')
  }, 1000)
})
  .then((res) => {
    console.log('Then 1:', res)
    return new MyPromise((resolve) => {
      setTimeout(() => {
        resolve(res + ' → Step 2')
      }, 1000)
    })
  })
  .then((res) => {
    console.log('Then 2:', res)
    throw new Error('Something went wrong in Step 3')
  })
  .catch((err) => {
    console.log('Catch:', err.message)
    return 'Recovered → Step 4'
  })
  .finally(() => {
    console.log('Finally (async) starting...')
    return new Promise((res) =>
      setTimeout(() => {
        console.log('Finally (async) done.')
        res()
      }, 1000)
    )
  })
  .then((res) => {
    console.log('Then 3:', res)
  })

console.log('End')
