/**
 * @param {number} num
 */
function sum(num) {
  const func = function (newNum) {
    return sum(num + newNum)
  }

  func.valueOf = function () {
    return num
  }

  return func
}

const name = '100'
const num = 1
console.log(100 == name.valueOf())
console.log(num.valueOf())
