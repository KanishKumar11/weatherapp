const btn = document.getElementById("btn");
const input = document.getElementById("city");
const cityName = document.querySelector(".cityName");
const desc = document.querySelector(".desc");
const temp = document.querySelector(".temp");
const iconElement = document.querySelector(".weather-icon")
const notificationElement = document.querySelector(".notification")

const weather = {};

// location Detecting
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(showPosition, showError);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Not Supported</p> "
}
function showPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}
function showError(error){
    notificationElement.style.display = "block";
    notificationElement.innerHTML = `<p> ${error.message} </p>`;
}
function getWeather(latitude, longitude){
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=1bffc22256ef642e8130ab1a1ff621ee`;

    fetch(api)
        .then(function(response){
            let data = response.json();
            return data;
        })
        // console.log(api)
        .then(function(data){
            weather.temp.value = data.main.temp;
            weather.desc = data.weather[0].description;
            weather.iconId = data.weathe[0].icon;
            weather.city = data.name;
            weather.country = data.sys.country;
        })
    
        .then(function(){
            displayWeather();
        });
}
function displayWeather(){
    iconElement.innerHTML = `<img src="resources/icons/black/png/128x128/${weather.iconId}.png" />`;
    temp.innerHTML = temp.value;
    desc.innerHTML = weather.description;
    cityName.innerHTML = `${weather.city}, ${weather.country}`;
};
// Data Fetching
btn.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=1bffc22256ef642e8130ab1a1ff621ee')
    .then(response => response.json())
    .then(data => {
        let cityVal = data['name']+","+data['sys']['country'];
        let tempVal = data['main']['temp'];
        let descVal = data['weather'][0]['description'];
    
        cityName.innerHTML = cityVal;
        temp.innerHTML = tempVal+"°"+"<span>C</span>";
        desc.innerHTML = descVal;
    })
   
    
.catch(err => alert("Wrong city Name!"))
});

// Enter key will work as button click once
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btn.click();
    }
});


