
function register($form) {

  $.ajax({
    type: $form.attr('method'),
    url: $form.attr('action'),
    data: $form.serialize(),
    cache: false,
    dataType: 'json',
    contentType: 'application/json; charset=utf-8',
    error: function (err) { alert('Could not connect to the registration server. Please try again later.') },
    success: function (data) {
      $('#mc-embedded-subscribe').val('Submit')
      if (data.result === 'success') {
        // Yeahhhh Success
        console.log(data.msg)
       $('#mce-EMAIL').css('borderColor', '#ffffff')
        $('.subscribe-result').css('color', 'rgb(53, 114, 210)')
        $('.subscribe-result').html('<p>Thank you for subscribing.</p>')
        $('#mce-EMAIL').val('')
      } else {
        // Something went wrong, do something to notify the user.
        console.log(data.msg)
        $('#mce-EMAIL').css('borderColor', '#ccc')
        $('.subscribe-result').css('color', '#ccc')
        $('.subscribe-result').html('<p>' + data.msg.replace(/<a\b[^>]*>(.*?)<\/a>/i,"") + '</p>')
      }
    }
  })
};
