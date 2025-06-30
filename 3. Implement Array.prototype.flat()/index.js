/**
 * @param { Array } arr
 * @param { number } depth
 * @returns { Array }
 */

function flat(arr, depth = 1) {
  const result = []

  for (let i = 0; i < arr.length; i++) {
    if (!arr.hasOwnProperty(i)) continue // handle sparse arrays

    const item = arr[i]

    if (Array.isArray(item) && depth > 0) {
      result.push(...flat(item, depth - 1))
    } else {
      result.push(item)
    }
  }

  return result
}

Array.prototype.myFlat2 = function (depth = 1) {
  const result = []

  for (let i = 0; i < this.length; i++) {
    if (!Object.hasOwn(this, i)) continue // skip holes (sparse)

    const item = this[i]

    if (Array.isArray(item) && depth > 0) {
      result.push(...item.myFlat2(depth - 1))
    } else {
      result.push(item)
    }
  }

  return result
}

const arr = [1, [2, [3, [4]]]]
console.log(arr.myFlat2(3))
