Leaflet CSS
==========

small library to add the css for leaflet without having to bother including ugly conditional comments

to use, instead of including the css files for leaflet in the head, include this after you include leaflet

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