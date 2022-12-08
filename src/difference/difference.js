const { difference } = require('lodash')

class DifferenceLodash {
  constructor(value1, value2) {
    this.newValue = difference(value1, value2)
  }
}

class DifferenceNative {
  constructor(value1, value2) {
    this.newValue = [value1, value2].reduce((a, b) =>
      a.filter((c) => !b.includes(c))
    )
  }
}

module.exports = { DifferenceLodash, DifferenceNative }
