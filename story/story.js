// This is where I will put my js for the custom map
let map;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 44.245, lng: -76.545 },
      zoom: 13,
    });
    
  // Javascript for marker accessibility was adapted from: https://developers.google.com/maps/documentation/javascript/examples/marker-accessibility
  // I had to remove the cycling section included in the template "const walkLocs: [google.maps.LatLngLiteral, string][]"
  const walkLocs = [
    [{ lat: 44.26037915976495, lng: -76.5413786093249 }, "Cataraqui Cemetery"],
    [{ lat: 44.222401646687636, lng: -76.49854321741287 }, "Breakwater Park"],
    [{ lat: 44.22579286847256, lng: -76.4815015272718 }, "Battery Park"],
    [{ lat: 44.2803694367451, lng: -76.56433475010915 }, "Kingston & Pembroke Rail Trail Connector - Centennial"],
    [{ lat: 44.23346254217058, lng: -76.60991762529308 }, "Lemoine Point"],
  ];

  // Creates an info window to share between markers
  const infoWindow = new google.maps.InfoWindow();

  // Creates the markers
  walkLocs.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
    });

    // Adds a click listener for each marker, and set up the info window
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}
