function createCounter() {
  let internalCount = 0
  const counter = {}
  Object.defineProperty(counter, 'count', {
    get() {
      return internalCount++
    },
    set(val) {
      console.warn(
        'You cannot set the value of count directly. Use increment or decrement methods instead.'
      )
    },
    configurable: false,
    enumerable: true,
  })
}

// Ref - https://chatgpt.com/c/6826278b-86c0-8004-93a5-89d645a12b8b
