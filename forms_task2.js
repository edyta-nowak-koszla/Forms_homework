const login = document.querySelector('.inplogin');
const passwd = document.querySelector('.inppasswd');
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

function handleKeybordPress(event) {
    if (event.keyCode === 13) {
        console.log('Login: ' +login.value + ' ; Passwd ' + passwd.value);
    }
    event.preventDefault();
    
}

function handleClick(event) {

    let messageAutoLogin=document.createElement('div');
    let messageEmail=document.createElement('p');
    messageEmail.innerHTML= "Zostałeś automatycznie zalogowany! E-mail: "  +login.value;
    messageAutoLogin.appendChild(messageEmail);

    console.log('Login: ' +login.value + ' ; Passwd ' + passwd.value);
    event.preventDefault();
    container.setAttribute("hidden", "");
    document.body.appendChild(messageAutoLogin);

}

login.addEventListener("keyup", handleKeybordPress);
passwd.addEventListener("keyup", handleKeybordPress);
btn.addEventListener('click', handleClick);


