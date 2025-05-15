function findTwo(arr) {
  // your code here

  if (arr.length < 1) return null
  if (arr.length === 1) return null
  const obj = {}

  for (let i = 0; i < arr.length; i++) {
    const currentNum = arr[i]
    const complement = 0 - currentNum

    if (obj[complement] !== undefined) {
      return [i, obj[complement]]
    }

    obj[currentNum] = i
  }

  return null
}
