let map;
let vehicleMarker;
let routePath;
let infoWindow;

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 17.385044, lng: 78.486671 },
    zoom: 15
  });

  vehicleMarker = new google.maps.Marker({
    map: map,
    icon: {
      url: 'http://maps.google.com/mapfiles/kml/shapes/cabs.png', // Use a custom red car icon URL
      scaledSize: new google.maps.Size(32, 32)
    }
  });

  routePath = new google.maps.Polyline({
    path: [],
    geodesic: true,
    strokeColor: '#FF0000',
    strokeOpacity: 1.0,
    strokeWeight: 2
  });

  routePath.setMap(map);

  infoWindow = new google.maps.InfoWindow();

  fetchVehicleData();
}

function fetchVehicleData() {
  fetch('/api/vehicle-data')
    .then(response => response.json())
    .then(data => {
      const path = data.map(point => {
        return { lat: point.latitude, lng: point.longitude };
      });

      routePath.setPath(path);
      const lastPosition = path[path.length - 1];
      vehicleMarker.setPosition(lastPosition);

      google.maps.event.addListener(vehicleMarker, 'click', () => {
        const lastPoint = data[data.length - 1];
        const contentString = `
          <div>
            <p><strong>Vehicle Configuration:</strong></p>
            <p>Latitude: ${lastPoint.latitude}</p>
            <p>Longitude: ${lastPoint.longitude}</p>
            <p>Timestamp: ${new Date(lastPoint.timestamp).toLocaleString()}</p>
          </div>
        `;

        infoWindow.setContent(contentString);
        infoWindow.open(map, vehicleMarker);
      });
    })
    .catch(error => console.error('Error fetching vehicle data:', error));

  setTimeout(fetchVehicleData, 5000); // Fetch data every 5 seconds
}
