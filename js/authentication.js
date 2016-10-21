
/**
 * A function validateuser
 * @param: username,password
 */
function validateuser(){
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  if (username=='jack' && password=='sparrow'){
      alert('Welcome, you have successfully logged in.')
      var loginDiv = document.getElementById('login');
      var calcDiv = document.getElementById('calc');

      loginDiv.remove();
      calcDiv.style.display = 'block';
  } else {
    alert('Invalid username/password!');
  }
}