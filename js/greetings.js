//document에서 login-form이라는 id를 가져오고 그 안에 있는
//input 과 button을 가져옴 -> form사용해서 다른 기능 사용
//const loginButton = document.querySelector("#login-form button");

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";  //string을 저장하고 싶을 때 관습적으로 변수는 대문자로 지정
const USERNAME_KEY = "username";

function loginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    greeting.innerText = `Hello ${username}`; //"Hello " + username
    greeting.classList.remove(HIDDEN_CLASSNAME)
};

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
};

const saveUsername = localStorage.getItem(USERNAME_KEY);

if(saveUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginSubmit);
} else {
    paintGreetings(saveUsername);
}
