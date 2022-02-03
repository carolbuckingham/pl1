// This is where I will put my js for the custom map
// original code from clustering exercise
/*
function initMap() {
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 5,
      // updated map center and zoom to reflect Ontario vs Australia
      center: { lat: 49.078, lng: -84.960 },
    });
    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    const markers = locations.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
      });
    });
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
  }
  // changed out location variables for Park data 27 Jan 2022; CB
  const locations = []
*/

// [START maps_layer_bicycling]
function initMap() {
    const map = new google.maps.Map(
      document.getElementById("map"),
      {
        zoom: 14,
        center: { lat: 42.3726399, lng: -71.1096528 },
      }
    );
  
    const bikeLayer = new google.maps.BicyclingLayer();
  
    bikeLayer.setMap(map);
  }
  // [END maps_layer_bicycling]
  export { initMap };
