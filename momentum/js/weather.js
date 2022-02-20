

const API_KEY = "c8bf9b830ed849b23293b31574bd23b7";

function onGeoOk(position) {
    //콜백함수를 받아와서 퍼라미터(latitude, longitude)이용
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    //api로 위도 경도 숫자를 장소로 바꿔주는 url  //&units=metric: 섭씨로 단위변경 (url을 수정할 수 있음)
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //fetch로 url를 받아오고 then으로 응답을 받아옴
    fetch(url).then(response => response.json()).then(data => {

        const city = document.querySelector("#weather span:first-child");
        const weater = document.querySelector("#weather span:last-child");
        
        city.innerText = data.name;
        weater.innerText = `|| ${data.main.temp}℃ ${data.weather[0].main}`;
    });
}

function onGeoError() {
    //에러시 띄어줄 메세지
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
//Geolocation.getCurrentPosition() 메서드는 장치의 현재 위치를 가져옵니다.
//navigator.geolocation.getCurrentPosition(success, error)