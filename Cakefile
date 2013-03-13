fs = require 'fs'
coffee = require 'coffee-script'
uglifyjs = require 'uglify-js'
cssc = require 'css-condense'
async = require 'async'

task 'build', 'build it', () ->
	rf = (file, cb)->
		fs.readFile "./src/"+file, "utf8",cb
	async.map ["leaflet.css","leaflet.ie.css","leaflet.css.coffee"],rf, (e,files)->
		unless e
			css = JSON.stringify [cssc.compress(files[0]),cssc.compress(files[1])]
			cs = coffee.compile "cssFiles = #{ css }\n#{ files[2] }"
			fs.writeFile './dist/leaflet.css.js', cs
			console.log "compliled"
			ast = uglifyjs.parse cs
			ast.figure_out_scope();
			ast.compute_char_frequency();
			ast.mangle_names();
			fs.writeFile './dist/leaflet.css.min.js',  ast.print_to_string()
