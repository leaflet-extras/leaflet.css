L.spriteIcon = (color="blue")->
	L.divIcon({className:"leaflet-sprite leaflet-sprite-#{color}",iconSize:[42, 41],iconAnchor:[12,41]})
css = """.leaflet-sprite{background:url(sprites.png) no-repeat top left;}
          .leaflet-sprite-blue{ background-position: 0 0; width: 42px; height: 41px; } 
.leaflet-sprite-green{ background-position: 0 -91px; width: 42px; height: 41px; } 
.leaflet-sprite-orange{ background-position: 0 -182px; width: 42px; height: 41px; } 
.leaflet-sprite-purple{ background-position: 0 -273px; width: 42px; height: 41px; } 
.leaflet-sprite-red{ background-position: 0 -364px; width: 42px; height: 41px; } 
.leaflet-sprite-violet{ background-position: 0 -455px; width: 42px; height: 41px; } 
.leaflet-sprite-yellow{ background-position: 0 -546px; width: 42px; height: 41px; } 
            """
L.css([css])