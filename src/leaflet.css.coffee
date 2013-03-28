class LCCS
	constructor : (css)->
		imagePath = L.Icon.Default.imagePath
		css[0] = css[0].replace "url(images", "url(#{ imagePath }"
		@addStyle css

	addStyle : (styles)->
		if document.createStyleSheet
			styleSheet = document.createStyleSheet()
			if  L.Browser.vml
				styleSheet.cssText = styles.join("\n")
			else
				styleSheet.cssText = styles[0]
		else
			head = document.getElementsByTagName("head")[0]
			styleElt = document.createElement "style"
			head.appendChild styleElt
			styleElt.innerHTML = styles[0]
		true;
	
L.CSS = LCCS

L.css = (params...)->
	return new L.CSS(params...)
	
L.css(cssFiles)