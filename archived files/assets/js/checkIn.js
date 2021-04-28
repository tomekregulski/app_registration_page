var weatherBtn = document.getElementById('weatherBtn');
var city = document.getElementById('city');
var cityName = document.getElementById('cityName');
var temperature = document.getElementById('temperature');
var humidity = document.getElementById('humidity');
var windSpeed = document.getElementById('windSpeed');
var uvIndex = document.getElementById('uvIndex');
var savedCities = document.getElementById('savedCities');
var btnClass;
var iconDailyDiv;
var iconDailyAppend;
var savedCitiesArray = JSON.parse(localStorage.getItem("savedCities")) || [];

weatherBtn.addEventListener('click', getLocation);

// loadSavedCities();

// function loadSavedCities() {
//     for (var i = 0; i < savedCitiesArray.length; i++) {
//         var savedCityButton = document.createElement('button');
//         savedCityButton.innerText = savedCitiesArray[i];
//         savedCityButton.setAttribute('class', 'btn btn-block btn-light text-left border');
//         savedCityButton.setAttribute('type', 'button');
//         savedCities.appendChild(savedCityButton);
//         savedCityButton.addEventListener('click', weatherLink);
//     }
// };

// function getWeather(event) {
//     event.preventDefault();
//     getApi(city.value); // capitalize first letter
//     saveCity(city.value);

//     displayWeather();
// }

function getLocation() {
  window.navigator.geolocation.getCurrentPosition((location) => {
        console.log(location);
        console.log(location.timestamp);
        var timestamp = location.timestamp;
        console.log(moment(timestamp, 'x').format('H m'));
        console.log(location.coords.latitude);
        console.log(location.coords.longitude);
        var lonLat = [location.coords.longitude, location.coords.latitude];
        console.log(lonLat);
        lonLatConv = fromLonLat();
    })
};

var map = new ol.Map({
  target: 'map',
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM()
    })
  ],
  view: new ol.View({
    center: ol.proj.fromLonLat([37.41, 8.82]),
    zoom: 4
  })
});

// function saveCity(city) {
//     createCity(city);
//     function createCity(city) {
//         var cityName = city;
//         savedCitiesArray.push(cityName);
//         localStorage.setItem("savedCities", JSON.stringify(savedCitiesArray));
//         var savedCityButton = document.createElement('button');
//         savedCityButton.innerText = cityName;
//         savedCityButton.setAttribute('class', 'btn btn-block btn-light text-left border');
//         savedCityButton.setAttribute('type', 'button');
//         savedCities.appendChild(savedCityButton);
//         savedCityButton.addEventListener('click', weatherLink);
//     }
// };



// const center = map.getView().getCenter();
// const pinnedLocation = ol.proj.transform(center, 'EPSG:3857', 'EPSG:4326');
// const feature = new ol.Feature(new ol.geom.Point(center));

// const pinLayer = new ol.layer.Vector ({
//   source: new ol.source.Vector ({
//     features: [feature]
//   }),
//   style: new ol.style.Style ({
//     image: new ol.style.Icon({
//       src: "../assets/images/pin3.png"
//     })
//   })
// });
// map.addLayer (pinLayer);

