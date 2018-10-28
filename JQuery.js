$(document).ready(() => {
  var users = $('#users');
  var registration = $('.registration');
  var email = $('#email');
  var password = $('#password');
  var ConfirmPassword = $('#ConfirmPassword');
  registration.on('click', () => {
    var user = {
      email: email.val(),
      password: password.val(),
      ConfirmPassword: ConfirmPassword.val(),
    };
    $.ajax({
      type: 'POST',
      url: '/authentication/signup',
      data: user,
      success: (newUser) => {
        users.append('<li>name :' + newUser.email + '</li>');
      },
      error: () => {
        alert('error saving user');
      }
    });
  });
});