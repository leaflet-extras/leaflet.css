(function() {

var cssRegular, cssRetina;

L.spriteIcon = function(color) {
  if (color == null) {
    color = "blue";
  }
  return L.divIcon({
    className: "leaflet-sprite leaflet-sprite-" + color,
    iconSize: [42, 41],
    iconAnchor: [12, 41]
  });
};

cssRegular = ".leaflet-sprite{background:url(sprites.png) no-repeat top left;}\n.leaflet-sprite-blue{ background-position: 0 -132px; width: 41px; height: 41px; } \n.leaflet-sprite-green{ background-position: 0 -355px; width: 41px; height: 41px; } \n.leaflet-sprite-orange{ background-position: 0 -578px; width: 41px; height: 41px; } \n.leaflet-sprite-purple{ background-position: 0 -801px; width: 41px; height: 41px; } \n.leaflet-sprite-red{ background-position: 0 -1024px; width: 41px; height: 41px; } \n.leaflet-sprite-violet{ background-position: 0 -1247px; width: 41px; height: 41px; } \n.leaflet-sprite-yellow{ background-position: 0 -1470px; width: 41px; height: 41px; } ";

cssRetina = ".leaflet-sprite{\nbackground:url(sprites.png) no-repeat top left;\nbackground-size:41px, 41px\n}\n .leaflet-sprite-blue{ background-position: 0 0; width: 82px; height: 82px; } \n .leaflet-sprite-green{ background-position: 0 -111px; width: 82px; height: 82px; } \n .leaflet-sprite-orange{ background-position: 0 -223px; width: 82px; height: 82px; } \n .leaflet-sprite-purple{ background-position: 0 -334px; width: 82px; height: 82px; } \n .leaflet-sprite-red{ background-position: 0 -446px; width: 82px; height: 82px; } \n .leaflet-sprite-violet{ background-position: 0 -557px; width: 82px; height: 82px; } \n .leaflet-sprite-yellow{ background-position: 0 -669px; width: 82px; height: 82px; } ";

if (L.Browser.retina) {
  L.css([cssRetina]);
} else {
  L.css([cssRegular]);
}
}).call(this);