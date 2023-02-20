class Forecast {
  constructor() {
    this.apiKey = "kcilU8mVi82KVtoAjQoUQ4DQQg0VVvhI";
    this.citySearchURI =
      "http://dataservice.accuweather.com/locations/v1/cities/search";
    this.getTempURI =
      "http://dataservice.accuweather.com/currentconditions/v1/";
  }
  async updateData(city) {
    const cityDets = await this.getCity(city);
    const cityKey = String(cityDets.Key);
    const weather = await this.getWeather(cityKey);
    return { cityDets, weather };
  }
  async getCity(city) {
    const query = `?apikey=${this.apiKey}&q=${city}`;
    const response = await fetch(this.citySearchURI + query);
    const data = await response.json();
    return data[0];
  }
  async getWeather(id) {
    const query = `${id}?apikey=${this.apiKey}`;
    const response = await fetch(this.getTempURI + query);
    const data = await response.json();
    return data[0];
  }
}
