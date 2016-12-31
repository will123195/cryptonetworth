module.exports = function ($) {
  $.css.push('//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css')
  $.js.push('//code.jquery.com/jquery-2.1.4.min.js')
  $.head = $.templates['partials/head']()
  $.layout('html5')
}