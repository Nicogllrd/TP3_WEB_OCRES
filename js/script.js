
// Fonction appelée lors du click du bouton
function start(city) {
  // Création de l'objet apiWeather
  const apiWeather = new API_WEATHER();
  // Appel de la fonction fetchTodayForecast
  if(city != null && city != ""){
    apiWeather.setCity(city);
  }

  apiWeather
    .fetchTodayForecast()
    .then(function(response) {
      // Récupère la donnée d'une API
      const data = response.data;
      // On récupère l'information principal
      const main = data.weather[0].main;
      const description = data.weather[0].description;
      const temp = data.main.temp;
      const icon = apiWeather.getHTMLElementFromIcon(data.weather[0].icon);

      // Modifier le DOM
      document.getElementById('today-forecast-main').innerHTML = main;
      document.getElementById('today-forecast-more-info').innerHTML = description;
      document.getElementById('today-icon-weather-container').innerHTML = icon;
      document.getElementById('today-forecast-temp').innerHTML = `${temp}°C`;
      
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });

    apiWeather
    .getThreeDayForcast()
    .then(function(response){
      const data= response.data.list;

      const main = data[0].weather[0].main;
      const description = data[0].weather[0].description;
      const temp = data[0].feels_like.day;
      const icon = apiWeather.getHTMLElementFromIcon(data[0].weather[0].icon);

      document.getElementById('tomorrow-forecast-main').innerHTML = main;
      document.getElementById('tomorrow-forecast-more-info').innerHTML = description;
      document.getElementById('tomorrow-icon-weather-container').innerHTML = icon;
      document.getElementById('tomorrow-forecast-temp').innerHTML = `${temp}°C`;
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });

    apiWeather
    .getThreeDayForcast()
    .then(function(response){
      const data= response.data.list;

      const main = data[1].weather[0].main;
      const description = data[1].weather[0].description;
      const temp = data[1].feels_like.day;
      const icon = apiWeather.getHTMLElementFromIcon(data[1].weather[0].icon);

      document.getElementById('after-tomorrow-forecast-main').innerHTML = main;
      document.getElementById('after-tomorrow-forecast-more-info').innerHTML = description;
      document.getElementById('after-tomorrow-icon-weather-container').innerHTML = icon;
      document.getElementById('after-tomorrow-forecast-temp').innerHTML = `${temp}°C`;
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });

    apiWeather
    .getThreeDayForcast()
    .then(function(response){
      const data= response.data.list;

      const main = data[2].weather[0].main;
      const description = data[2].weather[0].description;
      const temp = data[2].feels_like.day;
      const icon = apiWeather.getHTMLElementFromIcon(data[2].weather[0].icon);

      document.getElementById('2xafter-tomorrow-forecast-main').innerHTML = main;
      document.getElementById('2xafter-tomorrow-forecast-more-info').innerHTML = description;
      document.getElementById('2xafter-tomorrow-icon-weather-container').innerHTML = icon;
      document.getElementById('2xafter-tomorrow-forecast-temp').innerHTML = `${temp}°C`;
    })
    .catch(function(error) {
      // Affiche une erreur
      console.error(error);
    });
}

function changeCity(){
  city = document.getElementById("city-input").value;
  start(city);
}
