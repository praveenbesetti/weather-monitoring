document.querySelector(".city").innerHtml=data.name;
document.querySelector(".temp").innerHtml=Math.random(data.main.temp)+"°C ";
document.querySelector(".humidity1").innerHtml=data.main.humidity;
document.querySelector(".wind").innerHtml=data.wind.speed+"km/h";

if(data.weather[0]=="Clouds")
weather.src="clouds.png";
else  if(data.weather[0]=="rain")
weather.src="rain.png";
else   if(data.weather[0]=="Drizzle")
weather.src="drizzle.png.png";
else   if(data.weather[0]=="Snow")
weather.src="Snow.png";
else    if(data.weather[0]=="Mist")
weather.src="mist.png";


searchbtn.addEventListener("click", ()=>{
    checkweather(search.value);
});