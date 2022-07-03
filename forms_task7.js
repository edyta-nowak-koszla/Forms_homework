const login = document.querySelector('.inplogin');
const passwd = document.querySelector('.inppasswd');
const zarejestrujBtn = document.querySelector('.btn');
const zalogujBtn = document.querySelector('.btn1');
const container = document.querySelector('.container');
let btnExit = document.createElement('button');
let textArea = document.createElement('textarea');
let noteAdd = document.createElement('p');

let textToPresent=[];
let dataToSave={};

let data ={
    passwd:"",
    text:""
};
let readData ={
    passwd:"",
    text:[]
};

function startMainPageAndVerify(){
    readData=JSON.parse(window.localStorage.getItem(login.value));
    console.log(login.value);
    console.log(readData);
    if (readData!= null){
        if (readData.passwd===passwd.value){
            startMainPage()
        } else {
            console.log("Błędne dane logowania");
        }
    } else {
        console.log("Błędne dane logowania2");
    }
}

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

    readData =JSON.parse(window.localStorage.getItem(login.value));
    data.passwd=passwd.value;
    console.log(passwd.value + ',' + readData.text);
    textToPresent=readData.text;
    console.log(textToPresent);
    if (textToPresent!="") {
        noteAdd.innerHTML = textToPresent.sort().join("");
    }else{
        noteAdd.innerHTML = textToPresent;
    }
    
    document.body.appendChild(noteAdd);

}

function handleKeybordPress(event) {
    if (event.keyCode === 13) {
        console.log('Login: ' +login.value + ' ; Passwd ' + passwd.value);
        startMainPageAndVerify();
        event.preventDefault();
    }
}

function handleClick(event) {
    startMainPageAndVerify();
    event.preventDefault();
}

function handleClickZarejestruj(){
    console.log('zarejestruj');
    readData=JSON.parse(window.localStorage.getItem(login.value));
    console.log(readData);

    if (readData != null){
            console.log("Konto o takim loginie już istnieje");
            confirm("Konto o takim loginie już istnieje");
        }else{
            data.passwd=passwd.value;
            window.localStorage.setItem(login.value, JSON.stringify(data));
        }
}

function handleTextArea(event) {
    console.log('TEXT AREA');
    if (event.keyCode === 13) {
        console.log('TEXT AREA');
        textToPresent.push(textArea.value +"<br />");
        console.log(textToPresent);
        noteAdd.innerHTML = textToPresent.sort().join("");
        document.body.appendChild(noteAdd);
        textArea.value="";
    }
}

function handleClickExit() {
    console.log(textToPresent);
    data.text=textToPresent;
    window.localStorage.setItem(login.value, JSON.stringify(data));
    location.reload();
}

login.addEventListener("keyup", handleKeybordPress);
passwd.addEventListener("keyup", handleKeybordPress);
zarejestrujBtn.addEventListener('click', handleClickZarejestruj);
zalogujBtn.addEventListener('click', handleClick);
btnExit.addEventListener('click', handleClickExit);
textArea.addEventListener('keyup', handleTextArea);