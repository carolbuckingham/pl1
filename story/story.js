// This is where I will put my js for the custom map

// [START maps_layer_bicycling]
function initMap() {
    const map = new google.maps.Map(
      document.getElementById("map"), {
        center: { lat: 42.3726399, lng: -71.1096528 },
        zoom: 14,
      }
    );
