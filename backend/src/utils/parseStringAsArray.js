module.exports = function parseStringAsArray(arrayAsString) {
  return arrayAsString.split(',').map(object => object.trim())
}