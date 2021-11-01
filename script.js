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
const htemp = document.querySelector(".tempha");
const ha = document.querySelector(".titleha");
const iconha = document.querySelector("#iconha");
const descha = document.querySelector(".descha");
const titlehb = document.querySelector(".titlehb");
const temphb = document.querySelector(".temphb");
const iconhb = document.querySelector("#iconhb");
const deschb = document.querySelector(".deschb");
const titlehc = document.querySelector(".titlehc");
const iconhc = document.querySelector("#iconhc");
const temphc = document.querySelector(".temphc");
const deschc = document.querySelector(".deschc");
const titlehd = document.querySelector(".titlehd");
const iconhd = document.querySelector("#iconhd");
const temphd = document.querySelector(".temphd");
const deschd = document.querySelector(".deschd");
const titlehe = document.querySelector(".titlehe");
const iconhe = document.querySelector("#iconhe");
const temphe = document.querySelector(".temphe");
const desche = document.querySelector(".desche");
const titlehf = document.querySelector(".titlehf");
const iconhf = document.querySelector("#iconhf");
const temphf = document.querySelector(".temphf");
const deschf = document.querySelector(".deschf");


const successCallback = (position) => {
    console.log(position);
};
const errorCallback = (error) => {
    console.log(error);
    let err = error.message;
    notificationElement.style.display = "block";
    notificationElement.innerHTML = error.message;
};

navigator.geolocation.watchPosition(successCallback, errorCallback);

// location Detecting
if(navigator.geolocation) { 
    //check if geolocation is available
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

// Hourly Data
if(navigator.geolocation) { 
    //check if geolocation is available
    navigator.geolocation.getCurrentPosition(function(position) {
      let pos1 = position.coords.latitude;
      let pos2 = position.coords.longitude;
      
      const Hapi = "https://api.openweathermap.org/data/2.5/onecall?lat="+pos1+"&lon="+pos2+"&units=metric&appid=1bffc22256ef642e8130ab1a1ff621ee";
      console.log(Hapi)
      fetch(Hapi)
      .then(response => response.json())
      .then(data => {
        let htempval1 = data['hourly'][0]['temp'];
        let iconhaV = data['hourly'][0]['weather'][0]['icon'];
        let deschaV = data['hourly'][0]['weather'][0]['description'];

        htemp.innerHTML = htempval1+"°"+"<span>C</span>";
        iconha.src = "./resources/icons/"+iconhaV+".png";
        descha.innerHTML = deschaV;


        let temphbV = data['hourly'][1]['temp'];
        let iconhbV = data['hourly'][1]['weather'][0]['icon'];
        let deschbV = data['hourly'][1]['weather'][0]['description'];

        temphb.innerHTML = temphbV+"°"+"<span>C</span>";
        iconhb.src = "./resources/icons/"+iconhbV+".png";
        deschb.innerHTML = deschbV;


        let temphcV = data['hourly'][2]['temp'];
        let iconhcV = data['hourly'][2]['weather'][0]['icon'];
        let deschcV = data['hourly'][2]['weather'][0]['description'];

        temphc.innerHTML = temphcV+"°"+"<span>C</span>";
        iconhc.src = "./resources/icons/"+iconhcV+".png";
        deschc.innerHTML = deschcV;


        let temphdV = data['hourly'][3]['temp'];
        let iconhdV = data['hourly'][3]['weather'][0]['icon'];
        let deschdV = data['hourly'][3]['weather'][0]['description'];

        temphd.innerHTML = temphdV+"°"+"<span>C</span>";
        iconhd.src = "./resources/icons/"+iconhdV+".png";
        deschd.innerHTML = deschdV;

        
        let tempheV = data['hourly'][4]['temp'];
        let iconheV = data['hourly'][4]['weather'][0]['icon'];
        let descheV = data['hourly'][4]['weather'][0]['description'];

        temphe.innerHTML = tempheV+"°"+"<span>C</span>";
        iconhe.src = "./resources/icons/"+iconheV+".png";
        desche.innerHTML = descheV;


        let temphfV = data['hourly'][4]['temp'];
        let iconhfV = data['hourly'][4]['weather'][0]['icon'];
        let deschfV = data['hourly'][4]['weather'][0]['description'];

        temphf.innerHTML = temphfV+"°"+"<span>C</span>";
        iconhf.src = "./resources/icons/"+iconhfV+".png";
        deschf.innerHTML = deschfV;


      })

    }
)};    

const today = new Date();
const hour = today.getHours();
const av = hour + 1;
const bv = hour + 2;
const cv = hour + 3;
const dv = hour + 4;
const ev = hour + 5;
const fv = hour + 6;

const hourin12 = av >= 13 ? av %12: av;
const hourinbv = bv >= 13 ? bv %12: bv;
const hourincv = cv >= 13 ? cv %12: cv;
const hourindv = dv >= 13 ? dv %12: dv;
const hourinev = ev >= 13 ? ev %12: ev;
const hourinfv = fv >= 13 ? fv %12: fv;
// const ampm = hours >=12 ? 'PM' : 'AM';



ha.innerHTML = hourin12;
titlehb.innerHTML = hourinbv;
titlehc.innerHTML = hourincv;
titlehd.innerHTML = hourindv;
titlehe.innerHTML = hourinev;
titlehf.innerHTML = hourinfv;
// titleh.innerHTML = hourincv;
