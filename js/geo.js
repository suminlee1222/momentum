const geo = document.querySelector('.geo');
const API_KEY = 'e83d4ba5e1e7aa41cfa34f6f9132b38d';
function handleGeoSucc(position) {
    console.log(position);
    const latitude = position.coords.latitude;  // 경도  
    const longitude = position.coords.longitude;  // 위도
    getWeather(latitude, longitude);
}

function handleGeoErr(err) {
    console.log("geo err! " + err);
}
function requestCoords() {
navigator.geolocation.getCurrentPosition(handleGeoSucc, handleGeoErr);
}

function getWeather(lat, lon) {
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
    .then(res => res.json())
    .then(data => {
        const temp = data.main.temp;
        const weathers = data.weather[data.weather.length -1];
        geo.innerHTML = `${temp}&#176;C ${weathers.main}`;
    });
}




requestCoords();
