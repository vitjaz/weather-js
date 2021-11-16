class Weather {
  constructor() {
    this.api_key = "c6aaee1b4d15426fa09c9609d9a1c708";
  }

  async getWeather(city) {
    const weatherResponce = await fetch(
      `https://api.weatherbit.io/v2.0/current?city=${city}&lang=ru&key=${this.api_key}&include=minutely`
    );

    const weatherData = await weatherResponce.json();

    return {
      weather: weatherData,
    };
  }
}
