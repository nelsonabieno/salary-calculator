
/**
 * A function validateuser
 * @param: username,password
 */
function validateuser(){

     var user=document.getElementById('Username');
     var pass=document.getElementById('Password');

       if (typeof user ==="string" && typeof pass ==="string"){

           if (user===this.username && pass===this.password){
               window.open('report.html');
           }
           else{
               alert('Username and Password doesnot exist!');
           }
       }
        else{
           alert('Only valid Input are expected!');
       }
}