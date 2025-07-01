function throttle(func, delay) {
  let lastCall = 0

  return function (...args) {
    const now = new Date().getTime()

    if (now - lastCall >= delay) {
      lastCall = now
      func.apply(this, args)
    }
  }
}

function debounce(func, delay) {
  let timeoutId
  return function (...args) {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      func(...args)
    }, delay)
  }
}

const search = (q) => {
  console.log('search: ', q)
}

const debouncedSearch = debounce(search, 300)

debouncedSearch('apple')

debouncedSearch('banana')

debouncedSearch('cherry')

debouncedSearch('date')
