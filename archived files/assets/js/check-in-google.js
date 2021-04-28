// Initialize and add the map
var marker;
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
var weatherBtn = document.getElementById('weatherBtn');
var uluru;

function initMap() {
    // The location of Uluru
    uluru = { lat: 40.713, lng: -74.006 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
    });
    // The marker, positioned at Uluru
    marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

function getLocation() {
    window.navigator.geolocation.getCurrentPosition((location) => {
          console.log(location);
          alert(`your coordinates are ${location.coords.latitude}, ${location.coords.longitude}`);
          console.log(location.timestamp);
          var timestamp = location.timestamp;
          console.log(moment(timestamp, 'x').format('hh:mm a'));
          console.log(location.coords.latitude);
          console.log(location.coords.longitude);
          var latNew = location.coords.latitude;
          var lonNew = location.coords.longitude;
          newPin(latNew, lonNew);
        //   var lonLat = [location.coords.longitude, location.coords.latitude];
        //   console.log(lonLat);
      })
  };

function newPin(latNew, lonNew) {
    uluru = { lat: latNew, lng: lonNew };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: uluru,
    });
    // The marker, positioned at Uluru
    marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
}

weatherBtn.addEventListener('click', getLocation);