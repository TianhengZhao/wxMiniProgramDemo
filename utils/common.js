var common = {
  hideLongStr : function (str, len) {
    if (str.length > len) {
      return str.substr(0, len) + '...'
    }
    return str
  }
}
module.exports = common