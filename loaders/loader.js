/**
 * @file output content
 */

module.exports = function (content) {
  console.log(this.data.value, content)
  this.callback(null, content)
}

module.exports.pitch = function (remaining, preceding, data) {
  data.value = "get source file \n"
}