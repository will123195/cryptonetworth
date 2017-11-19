module.exports = function ($) {
  $.js.push('/bower_components/semantic-ui/dist/semantic.min.js')
  $.css.push('/bower_components/semantic-ui/dist/semantic.min.css')
  $.css.push('/bower_components/semantic-ui-table/table.min.css')

  $.css.push('//maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css')
  $.js.push('//code.jquery.com/jquery-2.1.4.min.js')

  $.donationAddress = {
    LTC: 'M8Qj4mYWX5jtbxFVjFpZ3Ln2b4Jvvuy7E9',
    ETH: '0xe639c887349C45e69B0e03AE3243ED4A7C2F7cf3'
  }

  $.head = $.templates['partials/head']()
  $.layout('html5')
}