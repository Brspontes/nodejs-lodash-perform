const { toInteger } = require('lodash')

class IntegerLodash {
  constructor(value) {
    this.newValue = toInteger(value)
  }
}

class IntegerNative {
  constructor(value) {
    this.newValue = Number(value)
  }
}

module.exports = { IntegerLodash, IntegerNative }
