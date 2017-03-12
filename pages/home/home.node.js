const coinMarketCap = require('../../lib/coinMarketCap')
const cache = require('memoizee')
const formatUSD = require('../../lib/formatUSD')

const getTicker = cache(() => coinMarketCap.get('/ticker/'), {
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

function formatPrice(price) {
  if (Number(price) > 1) {
    return formatUSD(price)
  }
  return '$' + Number(price).toPrecision(3)
}

module.exports = function ($) {
  $.title = 'My Crypto-Currency Net Worth'
  $.layout('website')
  getTicker().then(ticker => {
    $.ticker = ticker.slice(0, 150).map(row => {
      const data = {
        rank: row.rank,
        name: row.name,
        symbol: row.symbol,
        price: row.price_usd,
        priceFormatted: formatPrice(row.price_usd),
        supply: shortenLargeNumber(row.available_supply, 1),
        market_cap: shortenLargeNumber(row.market_cap_usd, 1),
        delta: 'negative',
        change: row.percent_change_7d + '%'
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
