const login = document.querySelector('.inplogin');
const passwd = document.querySelector('.inppasswd');
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
let btnExit = document.createElement('button');

function handleKeybordPress(event) {
    if (event.keyCode === 13) {
        console.log('Login: ' +login.value + ' ; Passwd ' + passwd.value);
    }
    event.preventDefault();

}

function handleClick(event) {

    let messageAutoLogin=document.createElement('div');
    let messageEmail=document.createElement('p');

    messageEmail.innerHTML= "E-mail: "  +login.value;
    btnExit.innerHTML = "Wyloguj";
    messageAutoLogin.appendChild(messageEmail);
    messageAutoLogin.appendChild(btnExit);

    console.log('Login: ' +login.value + ' ; Passwd ' + passwd.value);
    event.preventDefault();

    container.setAttribute("hidden", "");

    document.body.appendChild(messageAutoLogin);
    event.preventDefault();

}

function handleClickExit() {

    location.reload();
}

login.addEventListener("keyup", handleKeybordPress);
passwd.addEventListener("keyup", handleKeybordPress);
btn.addEventListener('click', handleClick);
btnExit.addEventListener('click', handleClickExit);
