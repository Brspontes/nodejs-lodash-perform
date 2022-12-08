const { first } = require('lodash')

class FirstLodash {
  constructor(value) {
    this.firstValue = first(value)
  }
}

class FirstNative {
  constructor(value) {
    this.firstValue = value[0]
  }
}

module.exports = { FirstLodash, FirstNative }
