const { uniq } = require('lodash')

class UniqLodash {
  constructor(value) {
    this.newValue = uniq(value)
  }
}

class UniqNative {
  constructor(value) {
    //this.newValue = [...new Set(value)]
    this.newValue = value.filter((item, index) => value.indexOf(item) === index)
  }
}

module.exports = { UniqLodash, UniqNative }
