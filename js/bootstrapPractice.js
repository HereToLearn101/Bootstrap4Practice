$(document).ready(function() {

  $('#add-button').on('click', function() {
    var email = $('#email').val();
    var pass = $('#password').val();

    var content = '<p>';
    content += 'You have given me ' + email + ' as the email, ';
    content += 'and ' + pass + ' as the password.';

    $('#content-div').append(content);
  });

});
