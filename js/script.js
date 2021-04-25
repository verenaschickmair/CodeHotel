/*MAP*/
let map = L.map("mapid", {
  center: [45.55, -122.65], // latitude, longitude in decimal degrees
  zoom: 12, // can be 0-22, higher is closer
  scrollWheelZoom: false // don't zoom the map on scroll
});

/*GREEN PIN*/
var greenIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

/*LAYOUT OF MAP*/
L.tileLayer(
  "https://stamen-tiles-{s}.a.ssl.fastly.net/toner/{z}/{x}/{y}{r}.{ext}",
  {
    attribution:
      'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: "abcd",
    minZoom: 0,
    maxZoom: 20,
    ext: "png"
  }
).addTo(map);

/*SETS POSITION*/
navigator.geolocation.watchPosition(position, onError, {
    enableHighAccuracy: true
});

//GEO LOCATION IN PORTLAND
function position(data) {
 L.marker([45.55, -122.65], {icon: greenIcon}).addTo(map);
}

//ERROR
function onError(error) {
  console.error(error);
}
