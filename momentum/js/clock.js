const clock = document.querySelector("h2#clock")

function getClock() {
    const date = new Date();
    
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");

    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock() //사이트가 열리자 마자 함수 실행 하게 한 뒤에
setInterval(getClock, 1000); //일정 간격으로 함수 실행

//setInterval(sayHello, 5000);  -> 일정 간격으로 함수 실행
//setTimeout(sayHello, 5000);   -> 일정 시간이 지난 후에 함수 실행