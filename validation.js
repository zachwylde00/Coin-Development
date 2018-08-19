const fs = require('fs')
const constants = require('./constants.js')

module.exports = {
  validateNumber : (value) => {
    if (isNaN(value) && +value >= 0) {
      console.log(`Please input a valid parameter.`.red)
      process.exit()
    }
    return +value
  },
  validatePorfolioConfigPath : (customPath) => {
    const path = customPath || constants.portfolioPath
    if (!fs.existsSync(path)) {
      console.log(`Please include a configuration file at ${path}.`.red)
      process.exit()
    }
    return path
  },
  validateConvertCurrency : (value) => {
    const convert = value.toUpperCase()
    const availableCurrencies = ['USD', 'AUD', 'BRL', 'CAD', 'CHF', 'CLP', 'CNY', 'CZK', 'DKK', 'EUR', 'GBP', 'HKD', 'HUF', 'IDR', 'ILS', 'INR', 'JPY', 'KRW', 'MXN', 'MYR', 'NOK', 'NZD', 'PHP', 'PKR', 'PLN', 'RUB', 'SEK', 'SGD', 'THB', 'TRY', 'TWD', 'ZAR', 'BTC']
    if (availableCurrencies.indexOf(convert) === -1) {
      console.log('We cannot convert to your currency.'.red)
      process.exit()
    }
    return convert
  }
}