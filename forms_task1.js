const login = document.querySelector('.inplogin');
const passwd = document.querySelector('.inppasswd');
const btn = document.querySelector('.btn');

function handleKeybordPress(event) {
    if (event.keyCode === 13) {
        console.log('Login: ' +login.value + ' ; Passwd ' + passwd.value);
    }
    event.preventDefault();
}

function handleClick(event) {
   console.log('Login: ' +login.value + ' ; Passwd ' + passwd.value);
    event.preventDefault();
}

login.addEventListener("keyup", handleKeybordPress);
passwd.addEventListener("keyup", handleKeybordPress);
btn.addEventListener('click', handleClick);

