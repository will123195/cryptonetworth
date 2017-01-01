function formatUSD(amount) {
  return amount.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD'
  })
}

function calculate(e) {
  var $this = $(this)
  var $tr = $this.parents('tr')
  var $total = $tr.find('input.total')
  var total = $this.val() * $tr.data('price')
  $total.attr('data-total', total)
  var totalUSD = formatUSD(total)
  $total.val(totalUSD)
  updateGrandTotal()
  saveQuantities()
}

function updateGrandTotal() {
  var grandTotal = 0
  $('table tr.crypto').each(function () {
    var subtotal = $(this).find('input.total').attr('data-total')
    if (subtotal) {
      grandTotal += Number(subtotal)
    }
  })
  $('.my-net-worth').html(formatUSD(grandTotal))
}

function saveQuantities() {
  var quantities = {}
  $('table tr.crypto').each(function () {
    var qty = $(this).find('input.qty').val()
    var symbol = $(this).data('symbol')
    if (qty) {
      quantities[symbol] = qty
    }
  })
  localStorage.setItem('quantities', JSON.stringify(quantities));
}

function loadQuantities() {
  var data = localStorage.getItem('quantities');
  var quantities = {}
  if (data) {
    quantities = JSON.parse(data)
  }
  var keys = Object.keys(quantities)
  if (!keys.length) return
  keys.forEach(function (key) {
    var $qty = $('tr.crypto.' + key + ' .qty')
    $qty.val(quantities[key])
    $qty.trigger('recalc')
  })
  updateGrandTotal()
}

function hoverRow() {
  $(this).addClass('hover')
}

$(document)
  .on('ready', loadQuantities)
  .on('change', 'input.qty', calculate)
  .on('keyup', 'input.qty', calculate)
  .on('recalc', 'input.qty', calculate)

$('tr.crypto').hover(function () {
  $(this).addClass('hover');
}, function () {
  $(this).removeClass('hover');
});