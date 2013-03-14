Leaflet CSS
==========

small library to add the css for leaflet without having to bother including ugly conditional comments

to use, either include leaflet.css.js or leaflet.css.min.js scripts like a regular plugin and don't bother putting the css links in the head, or you can include leaflet.css.bundle.js or leaflet.css.bundle.min.js instead of leaflet.js, i.e. instead of :

```html
<link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.5.1/leaflet.css" />
<!--[if lte IE 8]>
    <link rel="stylesheet" href="http://cdn.leafletjs.com/leaflet-0.5.1/leaflet.ie.css" />
<![endif]-->

<script src="http://cdn.leafletjs.com/leaflet-0.5.1/leaflet.js"></script>
```

just include

```html
<script src="http://leaflet-extras.github.com/leaflet.css/dist/leaflet.css.bundle.min.js"></script>
```


if you want to call more css in the same way, like maybe for your own plugin, you can do

```javascript
L.css(["string of css (optional)","string of css for internet explorer, (also optional)"]);
```
build with 
```bash
npm install #install dependencies
cake build # if that gets you an error try this first
npm install -g coffee-script # you may need a sudo
```

The css from leaflet and licenced [per that project](https://raw.github.com/Leaflet/Leaflet/master/LICENSE) the rest is MIT licenced demo includes [leaflet.sprite](https://github.com/leaflet-extras/leaflet.sprite)