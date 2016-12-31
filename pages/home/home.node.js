const coinMarketCap = require('../../lib/coinMarketCap')
const cache = require('memoizee')

const getTicker = cache(() => coinMarketCap.get('/ticker'), {
  promise: true,
  maxAge: 1000 * 60 // 1 minute
})

function shortenLargeNumber(num, digits) {
  var units = ['k', 'M', 'B', 'T'];
  var decimal;
  for(var i=units.length-1; i>=0; i--) {
    decimal = Math.pow(1000, i+1);
    if(num <= -decimal || num >= decimal) {
      return +(num / decimal).toFixed(digits) + units[i];
    }
  }
  return num;
}

module.exports = function ($) {
  $.layout('website')
  getTicker().then(ticker => {
    $.ticker = ticker.slice(0, 150).map(row => {
      const data = {
        rank: row.rank,
        name: row.name,
        symbol: row.symbol,
        price: Number(row.price_usd).toPrecision(4),
        supply: shortenLargeNumber(row.available_supply, 1),
        market_cap: shortenLargeNumber(row.market_cap_usd, 1),
        delta: 'negative',
        change: row.percent_change_7d + '%'
      }
      if (data.price > 1) {
        data.price = Number(data.price).toFixed(2)
      }
      if (Number(row.percent_change_7d) > 0) {
        data.change = '+' + row.percent_change_7d + '%'
        data.delta = 'positive'
      }
      if (!row.percent_change_7d || Number(row.percent_change_7d) === 0) {
        data.delta = ''
        data.change = '-'
      }
      return data
    })
    $.render()
  })
}