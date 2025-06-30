/**
 * @param {any} arg
 * @returns {any}
 */

// Method 1
function undefinedToNull(arg) {
  if (arg === undefined) return null

  if (Array.isArray(arg)) {
    return arg.map((item) => undefinedToNull(item))
  }

  if (arg !== null && typeof arg === 'object') {
    const result = {}
    for (const key in arg) {
      if (Object.hasOwn(arg, key)) {
        result[key] = undefinedToNull(arg[key])
      }
    }
    return result
  }

  return arg
}

function undefinedToNull(arg) {
  if (arg === undefined) return null

  if (Array.isArray(arg)) {
    return arg.map((item) => undefinedToNull(item))
  }

  if (arg != null && typeof arg === 'object') {
    const result = {}
    for (const key in arg) {
      if (Object.hasOwn(arg, key)) {
        result[key] = undefinedToNull(arg[key])
      }
    }
    return result
  }

  return arg
}

// Method 2
function undefinedToNull(arg) {
  return JSON.parse(
    JSON.stringify(arg, (key, value) => (value === undefined ? null : value))
  )
}
