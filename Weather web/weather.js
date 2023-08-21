const apikey = "c5940ae8328a99819c067446511b151d";

const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
// console.log(searchBox);
 const searchBtn = document.querySelector(".search button");
// const url = `http://api.weatherstack.com/current?access_key=47964677266f06bfe1ff239d89aca6de&query=London`;
// const options = {
// 	method: 'GET',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer 47964677266f06bfe1ff239d89aca6de`,
// }
// // 	headers: {
// // 		'X-RapidAPI-Key': '588d03d14emsha6f293ef4238053p153ab6jsn7155dab072fb',
// // 		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
// // 	}
// };
 
 

async function checkWeather(city){
  try {
	const response = await fetch(apiurl + city + `&appid=${apikey}`);
	const data = await response.json();
  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML = Math.round(data.main.temp )+"°C";
  document.querySelector(".humidity").innerHTML = data.main.humidity+"%";
  document.querySelector(".wind").innerHTML =data.wind.speed+"km/h";
} catch (error) {
	console.error(error);
}
}

searchBtn.addEventListener("click",()=>{
  checkWeather(searchBox.value);
  // console.log(searchBox.value);

})
// checkWeather();