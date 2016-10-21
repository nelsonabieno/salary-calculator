
/**
 * A function validateuser
 * @param: username,password
 */
function validateuser(){

     var user=document.getElementById('Username').value;
     var pass=document.getElementById('Password').value;
           if (user=='admin' && pass=='admin'){
               window.open('report.html');
           }
           else{
               alert('Username and Password does not exist!');
           }
}