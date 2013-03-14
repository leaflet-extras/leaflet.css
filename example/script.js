var m = L.map('map',{zoomControl:false}).setView([42.2, -71], 8)
var mq=L.tileLayer("http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.jpeg", {attribution:'Tiles Courtesy of <a href="http://www.mapquest.com/">MapQuest</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors', subdomains:'1234'}).addTo(m);
var lg = L.layerGroup().addTo(m);
var orig = L.marker([42.5,-71]).addTo(m);
var lc = L.control.layers({"Map Quest":mq},{"Sprite Markers":lg, "Regular Marker":orig}).addTo(m);
L.marker([42,-71], {icon: L.spriteIcon()}).addTo(lg);
L.marker([42,-71.5], {icon: L.spriteIcon("red")}).addTo(lg);
L.marker([42,-72], {icon: L.spriteIcon("green")}).addTo(lg);
L.marker([42,-72.5], {icon: L.spriteIcon("orange")}).addTo(lg);
L.marker([42.5,-72.5], {icon: L.spriteIcon("purple")}).addTo(lg);
L.marker([42.5,-72], {icon: L.spriteIcon("violet")}).addTo(lg);
L.marker([42.5,-71.5], {icon: L.spriteIcon("yellow")}).addTo(lg);
