//id를 이용해서 element 가져오기
// const a = document.getElementById("site");
// site.innerText="Got you!"
// console.log(a);

//TagName를 이용 -> array를 가져옴
const b = document.getElementsByTagName("h1");
console.log(b);

//ClassName 이용 -> array를 가져옴
const c = document.getElementsByClassName("hello");
console.log(c);

//QuerySelector를 이용 -> 오직 첫번째 해당 element만 가져옴
const d = document.querySelector(".hello h1");
console.log(d);

//QuerySelectorAll를 이용 -> 해당하는 element들을 가져옴
const e = document.querySelectorAll(".hello h1");
console.log(e);


// Event
// first-child 개념 ????
//dir : 더 많은 요소들을 나열
const me = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    me.style.color = "blue";
    console.log("title was clicked!")
};
function handleMouseEnter() {
    me.innerText = "mouse is here!";
    console.log("mouse is here!");
}
function handleMouseLeave() {
    me.innerText = "mouse is gone!";
    console.log("mouse is gone!");
}
//event를 실행하는 2가지 방법
me.onclick = handleTitleClick;
me.addEventListener("mouseenter", handleMouseEnter);
me.addEventListener("mouseleave", handleMouseLeave);
// ("어떤 행동을 했을 때", 어떤 함수가 실행되는지)

//more event
//브라우저 자체에 내장된 window 사용한 event
function handleWindowResize() {
    document.body.style.backgroundColor = "tomato";
};
function handleWindowCopy() {
    alert("copier!");
}
function handleWindowOffline() {
    alert("SOS no wifi!");
}
function handleWindowOnline() {
    alert("wifi is good!");
}
window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);