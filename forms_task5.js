const login = document.querySelector('.inplogin');
const passwd = document.querySelector('.inppasswd');
const btn = document.querySelector('.btn');
const container = document.querySelector('.container');
let btnExit = document.createElement('button');
let textArea = document.createElement('textarea');
let noteAdd = document.createElement('p');
let textToPresent=[];

function startMainPage(){
    let messageAutoLogin=document.createElement('div');
    let messageEmail=document.createElement('p');

    messageEmail.innerHTML= "E-mail: "  +login.value;
    btnExit.innerHTML = "Wyloguj";
 
    messageAutoLogin.appendChild(messageEmail);
    messageAutoLogin.appendChild(btnExit);

    console.log('Login: ' +login.value + ' ; Passwd ' + passwd.value);

    container.setAttribute("hidden", "");

    document.body.appendChild(messageAutoLogin);
    document.body.appendChild(textArea);

}

function handleKeybordPress(event) {
    if (event.keyCode === 13) {
        console.log('Login: ' +login.value + ' ; Passwd ' + passwd.value);
        startMainPage();
        event.preventDefault();
    }
    
}

function handleClick(event) {

    startMainPage();
    event.preventDefault();

}

function handleTextArea(event) {
    console.log('TEXT AREA');
    if (event.keyCode === 13) {
        console.log('TEXT AREA');
        textToPresent.push(textArea.value +"<br />");
        noteAdd.innerHTML = textToPresent.sort().join("");
        document.body.appendChild(noteAdd);
        textArea.value="";
    }
}


function handleClickExit() {

    location.reload();
}


login.addEventListener("keyup", handleKeybordPress);
passwd.addEventListener("keyup", handleKeybordPress);
btn.addEventListener('click', handleClick);
btnExit.addEventListener('click', handleClickExit);
textArea.addEventListener('keyup', handleTextArea);