const { toString } = require('lodash')

class StringLodash {
  constructor(value) {
    this.newValue = toString(value)
  }
}

class StringNative {
  constructor(value) {
    this.newValue = `${value}`
    //this.newValue = String(value)
  }
}

module.exports = { StringLodash, StringNative }
