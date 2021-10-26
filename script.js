const btn = document.getElementById("btn");
const input = document.getElementById("city");
const cityName = document.querySelector(".cityName");
const desc = document.querySelector(".desc");
const temp = document.querySelector(".temp");
const iconElement = document.querySelector(".weather-icon");
const notificationElement = document.querySelector(".notification");
const wIcon = document.getElementById("w_icon");

// location Detecting
if (navigator.geolocation) { //check if geolocation is available
    navigator.geolocation.getCurrentPosition(function(position){
      console.log(position);
      let pos1 = position.coords.latitude;
      let pos2 = position.coords.longitude;
      const api = "https://api.openweathermap.org/data/2.5/weather?lat="+pos1+"&lon="+pos2+"&units=metric&appid=1bffc22256ef642e8130ab1a1ff621ee";
      fetch(api)
      .then(response => response.json())
      .then(data => {
          let cityVal = data['name'];

          cityName.innerHTML = cityVal;
      });
      console.log(api);
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
    
        cityName.innerHTML = cityVal;
        temp.innerHTML = tempVal+"°"+"<span>C</span>";
        desc.innerHTML = descVal;
        wIcon.src = "./resources/icons/"+iconVal+".png";
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


