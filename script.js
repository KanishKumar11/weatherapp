const btn = document.getElementById("btn");
const input = document.getElementById("city");
const cityName = document.querySelector(".cityName");
const desc = document.querySelector(".desc");
const temp = document.querySelector(".temp");
const iconElement = document.querySelector(".weather-icon");
const notificationElement = document.querySelector(".notification");
const wIcon = document.getElementById("w_icon");
const min = document.querySelector(".min");
const max = document.querySelector(".max");
const successCallback = (position) =>
{
    console.log(position);
};
const errorCallback = (error) => {
    console.log(error);
    let err = error.message;
    // notificationElement.p = "err";
    // console.log(err);
    notificationElement.style.display = "block";
    notificationElement.innerHTML = error.message;
};

navigator.geolocation.watchPosition(successCallback, errorCallback);

// location Detecting
if(navigator.geolocation) { //check if geolocation is available
    navigator.geolocation.getCurrentPosition(function(position) {
      let pos1 = position.coords.latitude;
      let pos2 = position.coords.longitude;

      const api = "https://api.openweathermap.org/data/2.5/weather?lat="+pos1+"&lon="+pos2+"&units=metric&appid=1bffc22256ef642e8130ab1a1ff621ee";
      fetch(api)
      .then(response => response.json())
      .then(data => {
        let cityVal = data['name']+","+data['sys']['country'];
        let tempVal = data['main']['temp'];
        let descVal = data['weather'][0]['description'];
        let iconVal = data['weather'][0]['icon'];
        let minVal = data['main']['temp_min'];
        let maxVal = data['main']['temp_max'];
    
        cityName.innerHTML = cityVal;
        temp.innerHTML = tempVal+"°"+"<span>C</span>";
        desc.innerHTML = descVal;
        wIcon.src = "./resources/icons/"+iconVal+".png";
        input.value = cityVal;
        min.innerHTML = "Min :" + minVal + "°"+"<span>C</span> &nbsp &nbsp &nbsp";
        max.innerHTML = "Max :" + maxVal + "°"+"<span>C</span>";

      });
    })

}
// Data Fetching
btn.addEventListener('click',function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=1bffc22256ef642e8130ab1a1ff621ee')
    .then(response => response.json())
    .then(data => {
        let cityVal = data['name']+","+data['sys']['country'];
        let tempVal = data['main']['temp'];
        let descVal = data['weather'][0]['description'];
        let iconVal = data['weather'][0]['icon'];
        let minVal = data['main']['temp_min'];
        let maxVal = data['main']['temp_max'];
    
        cityName.innerHTML = cityVal;
        temp.innerHTML = tempVal+"°"+"<span>C</span>";
        desc.innerHTML = descVal;
        wIcon.src = "./resources/icons/"+iconVal+".png";
        min.innerHTML = "Min :" + minVal + "°"+"<span>C</span> &nbsp &nbsp &nbsp";
        max.innerHTML = "Max :" + maxVal + "°"+"<span>C</span>";
    })
   
    
.catch(err => alert("Wrong city Name!"))
});

// Enter key will work as button clicked once
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        btn.click();

//[0] will not come when not located
}
});


