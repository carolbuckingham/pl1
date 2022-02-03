// This is where I will put my js for the custom map
let map;

function initMap() {
  // Javascript for dark mode map adapted from: https://developers.google.com/maps/documentation/javascript/examples/style-array
  const map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 44.245, lng: -76.545 },
      zoom: 13,
      styles: [
        { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
        { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
        {
          featureType: "administrative.locality",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "poi.park",
          elementType: "geometry",
          stylers: [{ color: "#263c3f" }],
        },
        {
          featureType: "poi.park",
          elementType: "labels.text.fill",
          stylers: [{ color: "#6b9a76" }],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [{ color: "#38414e" }],
        },
        {
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [{ color: "#212a37" }],
        },
        {
          featureType: "road",
          elementType: "labels.text.fill",
          stylers: [{ color: "#9ca5b3" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry",
          stylers: [{ color: "#746855" }],
        },
        {
          featureType: "road.highway",
          elementType: "geometry.stroke",
          stylers: [{ color: "#1f2835" }],
        },
        {
          featureType: "road.highway",
          elementType: "labels.text.fill",
          stylers: [{ color: "#f3d19c" }],
        },
        {
          featureType: "transit",
          elementType: "geometry",
          stylers: [{ color: "#2f3948" }],
        },
        {
          featureType: "transit.station",
          elementType: "labels.text.fill",
          stylers: [{ color: "#d59563" }],
        },
        {
          featureType: "water",
          elementType: "geometry",
          stylers: [{ color: "#17263c" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.fill",
          stylers: [{ color: "#515c6d" }],
        },
        {
          featureType: "water",
          elementType: "labels.text.stroke",
          stylers: [{ color: "#17263c" }],
        },
      ],
    }
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
