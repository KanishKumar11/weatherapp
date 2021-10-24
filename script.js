const btn = document.getElementById("btn");
const input = document.getElementById("city");
const cityName = document.querySelector(".cityName");
const desc = document.querySelector(".desc");
const temp = document.querySelector(".temp");
const iconElement = document.querySelector(".weather-icon")
const notificationElement = document.querySelector(".notification")

// location Detecting
function geolocation() {
    if ('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(showPosition);
}else{
    notificationElement.style.display = "block";
    notificationElement.innerHTML = "<p>Browser not supports</p>";
}
}

function showPosition(position) {
    desc.innerHTML = position.coords.latitude;
}
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


