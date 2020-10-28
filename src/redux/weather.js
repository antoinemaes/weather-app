const API_KEY = 'e84005079e5a44ca4e71ab802bfc37cc';

function fetchWeather(latlng) {
  const url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&lat=' + latlng.lat + '&lon=' + latlng.lng + '&appid=' + API_KEY;
  return fetch(url).then(resp => (resp.json()));
}

export default fetchWeather;