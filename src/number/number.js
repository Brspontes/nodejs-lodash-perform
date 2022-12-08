const { toNumber } = require('lodash')

class NumberLodash {
  constructor(value) {
    this.newValue = toNumber(value)
  }
}

class NumberNative {
  constructor(value) {
    this.newValue = Number(value)
  }
}

module.exports = { NumberLodash, NumberNative }
