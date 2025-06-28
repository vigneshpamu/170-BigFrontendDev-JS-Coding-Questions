/**
 * @param {number[]} arr
 * @return {number[]}
 */
function findTwo(arr) {
  // your code here
  if (arr.length < 1) return null
  if (arr.length === 1) return null
  let length = arr.length
  const obj = {}

  for (let i = 0; i < length; i++) {
    const num = arr[i]
    const complement = 0 - num

    if (obj[complement] !== undefined) {
      return [i, obj[complement]]
    }

    obj[num] = i
  }

  return null
}
