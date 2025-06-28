// This is a JavaScript coding problem from BFE.dev

/**
 * @param { (...args: any[]) => any } fn
 * @returns { (...args: any[]) => any }
 */

const sub = (a, b) => a - b

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args)
    } else {
      return function (...remainingArgs) {
        return curried(...args, ...remainingArgs)
      }
    }
  }
}

const curriedSub = curry(sub)
console.log(curriedSub(10)(5)) // 5
