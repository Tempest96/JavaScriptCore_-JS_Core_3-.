   /* Task 2 */
var login;
var password;

login = prompt('Who`s there?');

if (login == 'Admin' || login == 'admin'){
    password = prompt('Password?')
        if (password == 'TheMaster'){
            console.log('Welcome')
        }
        else if (password === null){
            console.log('Canceled')
        }
        else{
            console.log('Wrong password')
        }
}
else if (login === null){
    console.log('Canceled')
}
else {
    console.log('I don`t know you')
}

 
