function debounce(func, delay) {
  let timeoutId

  return function (...args) {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

// Ref - https://chatgpt.com/c/682623a2-0d70-8004-ac77-b534f7835562
