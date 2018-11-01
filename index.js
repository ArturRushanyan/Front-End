$(document).ready(() => {
  var $email = $('#email');
  var $password = $('#password');

  var $registration = $('#registration');
  var $ConfirmPassword = $('#ConfirmPassword');
  $registration.on('click', function() {
    var user = {
      email: $email.val(),
      password: $password.val(),
      confirmPassword: $ConfirmPassword.val(),
    };
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/authentication/signup',
      data: user,
      success: function(newUser) {
        alert('you are logged in whit this email ' + newUser.email);
        return;
      },
      error: function(err) {
        alert('errrrrr');
      }
    });
  });
  //////////////////////////////////////////////////////////////
  var $login = $('#login');
  $login.on('click', function() {
    var user = {
      email: $email.val(),
      password: $password.val(),
    };
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/authentication/login',
      date: user,
      success: function() {
        alert('You are logged in');
        return;
      },
      error: function(err) {
        alert('errrrr');
      }
    });
  });
  //////////////////////////////////////////////////////////////
  var $add = $('#button');
  var $type = $('#type');
  var $title = $('#title');
  var $price = $('#price');
  var $count = $('#count');

  $add.on('click', function() {
    var item = {
      type: $type.val(),
      title: $title.val(),
      price: $price.val(),
      count: $count.val(),
    }
    var $items = $("#items");
    $.ajax({
      type: 'POST',
      url: 'http://localhost:3000/api/V1/item/',
      date: item,
      success: function() {
        alert('Item added');
        return;
      },
      error: function(err) {
        alert('errrr');
        return;
      } 
    });
  });



});