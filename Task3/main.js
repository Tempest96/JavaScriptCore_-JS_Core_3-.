 /* Task 3*/

var login;
var password;

login = prompt ('Who`s there?');

switch(login){
    case 'Admin': case 'admin': {
       password = prompt('Password?')
       
       switch(password){
           case 'TheMaster' : {
               console.log('Welcome')
               break;
           }
           case null : {
               console.log('Canceled')
               break;
           }
           default : {
               console.log('Wrong Password')
               break;
           }
       }
    }
        break;

    case null : {
        console.log('Canceled');
        break;
    }
    default : {
        console.log('I don`t know you');
        break;
    }
}
