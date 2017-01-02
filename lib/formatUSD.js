module.exports = function formatUSD(amount) {
  var value = Number(amount).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
  if (amount > 1000) {
    return value.split('.')[0]
  }
  return value
}
