// This is a JavaScript coding problem from BFE.dev

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args)
    } else {
      return function (...nextArgs) {
        return curried(...args, ...nextArgs)
      }
    }
  }
}

// Example usage:
const join = (a, b, c) => `${a}_${b}_${c}`
const curriedJoin = curry(join)

console.log(curriedJoin(1, 2, 3)) // '1_2_3'
console.log(curriedJoin(1)(2, 3)) // '1_2_3'
console.log(curriedJoin(1, 2)(3)) // '1_2_3'
console.log(curriedJoin(1)(2)(3)) // '1_2_3'
