/**
 * An authentication class
 */

function Authenticate (username,password){
    this.username=username;
    this.password=password;
 }

/**
 * A function validateUser
 * @param: username,password
 */
Authenticate.prototype.validateUser= function(user,pass){

   if (typeof user ==="string" && typeof pass ==="string"){

       if (user===this.username && pass===this.password){
           return true;
       }
       else{
           return false;
       }
   }
    else{
       return false;
   }
}