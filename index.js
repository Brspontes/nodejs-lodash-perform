const Benchmark = require('benchmark')
const { StringLodash, StringNative } = require('./src/string/string')
const { NumberLodash, NumberNative } = require('./src/number/number')
const { IntegerLodash, IntegerNative } = require('./src/integer/integer')
const { UniqLodash, UniqNative } = require('./src/unique/unique')
const { FirstLodash, FirstNative } = require('./src/first-rest/first')
const {
  DifferenceLodash,
  DifferenceNative,
} = require('./src/difference/difference')

const chalk = require('chalk')

const suiteString = new Benchmark.Suite()
const suiteNumber = new Benchmark.Suite()
const suiteInteger = new Benchmark.Suite()
const suiteUniq = new Benchmark.Suite()
const suiteFirstRest = new Benchmark.Suite()
const suiteDiff = new Benchmark.Suite()
const array = [4, 10, 2, 10, 2, 4, 7, 9, 0]

// STRING
suiteString
  .add(`${chalk.green('[STRING] - LodashMethods')}`, function () {
    new StringLodash('Willbank')
  })
  .add(`${chalk.blue('[STRING] - NativeMethods')}`, function () {
    new StringNative('Willbank')
  })
  .on('cycle', (event) => console.log(String(event.target)))
  .on('complete', function () {
    console.log(`Mais rápido: ${this.filter('fastest').map('name')}`)
  })
  .run()

//NUMBER
suiteNumber
  .add(`${chalk.green('[NUMBER] - LodashMethods')}`, function () {
    new NumberLodash('123456')
  })
  .add(`${chalk.blue('[NUMBER] - NativeMethods')}`, function () {
    new NumberNative('123456')
  })
  .on('cycle', (event) => console.log(String(event.target)))
  .on('complete', function () {
    console.log(`Mais rápido: ${this.filter('fastest').map('name')}`)
  })
  .run()

//INTEGER
suiteInteger
  .add(`${chalk.green('[INTEGER] - LodashMethods')}`, function () {
    new IntegerLodash('123456')
  })
  .add(`${chalk.blue('[INTEGER] - NativeMethods')}`, function () {
    new IntegerNative('123456')
  })
  .on('cycle', (event) => console.log(String(event.target)))
  .on('complete', function () {
    console.log(`Mais rápido: ${this.filter('fastest').map('name')}`)
  })
  .run()

//UNIQUE
suiteUniq
  .add(`${chalk.green('[UNIQUE] - LodashMethods')}`, function () {
    new UniqLodash(array)
  })
  .add(`${chalk.blue('[UNIQUE] - NativeMethods')}`, function () {
    new UniqNative(array)
  })
  .on('cycle', (event) => console.log(String(event.target)))
  .on('complete', function () {
    console.log(`Mais rápido: ${this.filter('fastest').map('name')}`)
  })
  .run()

//FIRST
suiteFirstRest
  .add(`${chalk.green('[FIRST-REST] - LodashMethods')}`, function () {
    new FirstLodash(array)
  })
  .add(`${chalk.blue('[FIRST-REST] - NativeMethods')}`, function () {
    new FirstNative(array)
  })
  .on('cycle', (event) => console.log(String(event.target)))
  .on('complete', function () {
    console.log(`Mais rápido: ${this.filter('fastest').map('name')}`)
  })
  .run()

//DIFFERENCE
const array1 = [1, 2, 3, 4, 5]
const array2 = [4, 10, 2]

suiteDiff
  .add(`${chalk.green('[DIFFERENCE] - LodashMethods')}`, function () {
    new DifferenceLodash(array1, array2)
  })
  .add(`${chalk.blue('[DIFFERENCE] - NativeMethods')}`, function () {
    new DifferenceNative(array1, array2)
  })
  .on('cycle', (event) => console.log(String(event.target)))
  .on('complete', function () {
    console.log(`Mais rápido: ${this.filter('fastest').map('name')}`)
  })
  .run()
