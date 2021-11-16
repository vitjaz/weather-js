function $(el) {
  return document.querySelector(el);
}

const ui = new UI();
const weather = new Weather();

//получаем кнопку
const getWeatherBtn = $("#get-weather-btn");

getWeatherBtn.addEventListener("click", () => {
  let selectCity = $("#select-city").value;
  weather.getWeather(selectCity).then((data) => {
    console.log(data);
    ui.updateUI(data);
  });
});
