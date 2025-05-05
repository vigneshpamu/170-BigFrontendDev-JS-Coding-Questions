/**
 * @param {HTMLElement} rootA
 * @param {HTMLElement} rootB - rootA and rootB are clone of each other
 * @param {HTMLElement} nodeA
 */
function findCorrespondingNode(original, cloned, target) {
  if (original === target) return cloned

  for (let i = 0; i < original.childNodes.length; i++) {
    const found = findCorrespondingNode(
      original.childNodes[i],
      cloned.childNodes[i],
      target
    )
    if (found) return found
  }

  return null
}
