
/**
 * A function validateuser
 * @param: username,password
 */
function validateuser(){

     var user=document.getElementById('Username');
     var pass=document.getElementById('Password');

       if (typeof user ==="string" && typeof pass ==="string"){

           if (user==='admin' && pass==='admin'){
               window.open('report.html');
           }
           else{
               alert('Username and Password does not exist!');
           }
       }
        else{
           alert('Only valid Input are expected!');
       }
}