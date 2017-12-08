const coinMarketCap = require('../../lib/coinMarketCap')
const cache = require('memoizee')
const formatUSD = require('../../lib/formatUSD')

const getTicker = cache(() => coinMarketCap.get('/ticker/?limit=250'), {
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

function getChange(data) {
  const currentPrice = Number(data.price_usd)
  const percentChange = 1 + (Number(data.percent_change_7d) / 100)
  const startPrice = percentChange ? currentPrice / percentChange : currentPrice
  return currentPrice - startPrice
}

function getBTCPreForkValues(ticker) {
  const defaultRow = { price_usd: 0 }
  const btc = ticker.find(row => row.symbol === 'BTC') || defaultRow
  const bch = ticker.find(row => row.symbol === 'BCH') || defaultRow
  const btg = ticker.find(row => row.symbol === 'BTG') || defaultRow
  const market_cap_usd = Number(btc.market_cap_usd)
    + Number(bch.market_cap_usd)
    + Number(btg.market_cap_usd)
  btc.change = getChange(btc)
  bch.change = getChange(bch)
  btg.change = getChange(btg)
  const price_usd = Number(btc.price_usd) + Number(bch.price_usd) + Number(btg.price_usd)
  const change = btc.change + bch.change + btg.change
  const startPrice = price_usd - change
  const percentChange = ((change / startPrice) * 100).toFixed(2)
  return {
    price_usd,
    market_cap_usd,
    percent_change_7d: percentChange > 0 ? `+${percentChange}` : percentChange,
    delta: (change > 0) ? 'positive' : 'negative'
  }
}

module.exports = function ($) {
  $.title = 'My Crypto-Currency Net Worth'
  $.layout('website')
  getTicker().then(ticker => {
    $.ticker = []
    ticker.map(row => {
      const data = {
        rank: row.rank,
        id: row.id,
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
      // avoid confusion between bitcoin and bcash
      if (data.symbol === 'BCH') {
        data.name = 'Bcash'
      }
      // calculate bitcoin pre-fork values (i.e. casascius)
      if (data.symbol === 'BTC') {
        const btcPreFork = getBTCPreForkValues(ticker);
        $.ticker.push({
          rank: '-',
          name: 'Bitcoin (Pre-fork)',
          symbol: 'BTC+BCH+BTG',
          price: btcPreFork.price_usd,
          priceFormatted: formatPrice(btcPreFork.price_usd),
          delta: btcPreFork.delta,
          change: btcPreFork.percent_change_7d + '%'
        })
      }
      $.ticker.push(data)
    })
    $.render()
  })
}
