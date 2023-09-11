const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;

 // const API = `https://api.openweathermap.org/data/2.5/weather?
    // q=${city}&appid=${API_KEY}&units=metric`
    // const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
const weather=document.querySelector("#weather");
const search=document.querySelector("#search");
const form=document.querySelector("form");
const startfetching=async(city) =>
{
    const API=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
     const start=await fetch(API);
     console.log(start);
     const data= await start.json();
     console.log(data);
     return yourweather(data);
     
}
const yourweather=(data)=>
{
  const temp=data.main.temp;
  const change=data.weather[0].main
    console.log(data);
    weather.innerHTML=` <div>
    <img id="image" src="image.png.jpg  " alt="" height="100" width="100" />
  </div>

  <div>
    <span>${temp}</span>
    <h4>${change}
  </div>`
  changeimg(change);
}
function changeimg(change) {
  const img = document.getElementById("image");
  if (change === "Clouds") {
    img.src = "rainy.jpg";
  } 
  else if (change==="Clear") {
    img.src="sunny.jpg";
  } 
  else if(change==="Haze"){
    img.src="spring.jpg";
  }
    
  
}






/*const weatheris=function(data)
{
    console.log(data);
    weather.innerhtml`<div>
          <img src="image.png.jpg  " alt="" height="100" width="100" />
        </div>

        <div>
          <h2>${data.main.temp} ℃</h2>
        </div>`
}*/
form.addEventListener(
    "submit",
     function(event)
    {
        
        startfetching(search.value)
        event.preventDefault();
        
    }
)