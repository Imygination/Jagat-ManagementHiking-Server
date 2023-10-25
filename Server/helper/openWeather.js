const API_OW = process.env.API_OW

const openWeather = (lat, lon) => {
  const queryUrl = "https://api.openweathermap.org/data/2.5/forecast?";
  const qlat = `lat=${lat}&`;
  const qlon = `lon=${lon}&`;
  const apiKey = `appid=${API_OW}`;
  // const apiOptions = "units=metric&exclude=minutely,alerts&";
  const query = queryUrl + qlat + qlon + apiKey;
  return query
};

module.exports = openWeather
