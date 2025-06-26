/**
 * @param {any} proto
 * @return {object}
 */
function myObjectCreate(proto) {
  if (typeof proto !== 'object' || proto === null) {
    throw new Error('Argument must be a non-null object')
  }

  function TempConstructor() {}
  TempConstructor.prototype = proto
  return new TempConstructor()
}

// tsest
