
/**
 * A function validateuser
 * @param: username,password
 */
function validateuser(){

     var user=document.getElementById('Username');
     var pass=document.getElementById('Password');

           if (user==='admin' && pass==='admin'){
               window.open('report.html');
           }
           else{
               alert('Username and Password does not exist!');
           }
}