// This is where I will put my js for the custom map
let map;

function initMap() {
  // Javascript for styled map adapted from: https://developers.google.com/maps/documentation/javascript/examples/maptype-styled-simple
  const styledMapType = new google.maps.StyledMapType(
    [
      { elementType: "geometry", stylers: [{ color: "#ebe3cd" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#523735" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#f5f1e6" }] },
      {
        featureType: "administrative",
        elementType: "geometry.stroke",
        stylers: [{ color: "#c9b2a6" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "geometry.stroke",
        stylers: [{ color: "#dcd2be" }],
      },
      {
        featureType: "administrative.land_parcel",
        elementType: "labels.text.fill",
        stylers: [{ color: "#ae9e90" }],
      },
      {
        featureType: "landscape.natural",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#93817c" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry.fill",
        stylers: [{ color: "#a5b076" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#447530" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#f5f1e6" }],
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ color: "#fdfcf8" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#f8c967" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#e9bc62" }],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry",
        stylers: [{ color: "#e98d58" }],
      },
      {
        featureType: "road.highway.controlled_access",
        elementType: "geometry.stroke",
        stylers: [{ color: "#db8555" }],
      },
      {
        featureType: "road.local",
        elementType: "labels.text.fill",
        stylers: [{ color: "#806b63" }],
      },
      {
        featureType: "transit.line",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.fill",
        stylers: [{ color: "#8f7d77" }],
      },
      {
        featureType: "transit.line",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#ebe3cd" }],
      },
      {
        featureType: "transit.station",
        elementType: "geometry",
        stylers: [{ color: "#dfd2ae" }],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [{ color: "#b9d3c2" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#92998d" }],
      },
    ],
    { name: "freeStyle" }
  );

  const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 44.245, lng: -76.545 },
      zoom: 13,
    // add in the callback for map style options
      mapTypeControlOptions: {
        mapTypeIds: ["roadmap", "satellite", "hybrid", "terrain", "freeStyle"],
      },
  });
    
  // Associate the styled map with the MapTypeId and set it to display
  map.mapTypes.set("freeStyle", styledMapType);
  map.setMapTypeId("freestyle");
  
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
