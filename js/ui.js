class UI {
  constructor() {
    // output elements
    this.cityName = document.querySelector("#city-name");
    this.tableContainer = document.querySelector("#table-container");
  }

  updateUI(responce) {
    this.cityName.textContent = responce.weather.data[0].city_name;
    this.tableContainer.innerHTML = `
    <table class="table table-hover text-center">
      <thead>
        <tr>
          <th scope="col">Параметр</th>
          <th scope="col">Значение</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Время последнего замера</th>
          <td>${responce.weather.data[0].ob_time}</td>
        </tr>
        <tr>
          <th scope="row">Температура</th>
          <td>${responce.weather.data[0].temp}&deg;C</td>
        </tr>    
        <tr>
          <th scope="row">По ощущениям как</th>
          <td>${responce.weather.data[0].app_temp}&deg;C</td>
        </tr>  
        <tr>
          <th scope="row">Небо</th>
          <td>${responce.weather.data[0].weather.description}</td>
        </tr>  
        <tr>
          <th scope="row">Направление ветра</th>
          <td>${responce.weather.data[0].wind_cdir_full}</td>
        </tr>  
        <tr>
          <th scope="row">Скорость ветра</th>
          <td>${Math.round(
            responce.weather.data[0].wind_spd
          )} метров в секунду</td>
        </tr>  
        <tr>
          <th scope="row">Влажность</th>
          <td>${Math.round(responce.weather.data[0].rh)}%</td>
        </tr>  
        <tr>
          <th scope="row">УФ-индекс</th>
          <td>${responce.weather.data[0].uv}</td>
        </tr>  
      </tbody>
    </table>`;
  }
}
