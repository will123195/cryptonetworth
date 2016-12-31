module.exports = function ($) {
  $.js.push('/bower_components/semantic-ui/dist/semantic.min.js')
  $.css.push('/bower_components/semantic-ui/dist/semantic.min.css')
  $.css.push('/bower_components/semantic-ui-table/table.min.css')

  $.css.push('//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css')
  $.js.push('//code.jquery.com/jquery-2.1.4.min.js')

  $.head = $.templates['partials/head']()
  $.layout('html5')
}