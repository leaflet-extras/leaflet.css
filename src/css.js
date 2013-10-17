function LCSS(css){
	if(!(this instanceof LCSS)){
		return new LCSS(css);
	}
		var imagePath = L.Icon.Default.imagePath;
		css[0] = css[0].replace("url(images", "url("+imagePath);
		this.addStyle(css);
}
LCSS.prototype.addStyle = function(styles){
	var styleSheet,head,styleElt;
	if(document.createStyleSheet){
			styleSheet = document.createStyleSheet();
			if(L.Browser.vml){
				styleSheet.cssText = styles.join("\n");
			}else{
				styleSheet.cssText = styles[0];
			}
	}else{
			head = document.getElementsByTagName("head")[0];
			styleElt = document.createElement("style");
			head.appendChild(styleElt);
			styleElt.innerHTML = styles[0];
	}
};
L.css = LCSS;