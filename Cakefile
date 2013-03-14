fs = require 'fs'
coffee = require 'coffee-script'
uglifyjs = require 'uglify-js'
cssc = require 'css-condense'
async = require 'async'
request = require 'request'

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

task 'master', 'make it from master', () ->
	rf = (file, cb)->
		if file[0] is "file"
			fs.readFile "./src/"+file[1], "utf8",cb
		else if file[0] is "url"
			request file[1], (e,r,b)->
				cb e, b
	async.map [["url","https://raw.github.com/Leaflet/Leaflet/master/dist/leaflet.css"],["url","https://raw.github.com/Leaflet/Leaflet/master/dist/leaflet.ie.css"],["file","leaflet.css.coffee"]],rf, (e,files)->
		unless e
			css = JSON.stringify [cssc.compress(files[0]),cssc.compress(files[1])]
			cs = coffee.compile "cssFiles = #{ css }\n#{ files[2] }"
			fs.writeFile './dist/leaflet.css.master.js', cs
			console.log "compliled"
			ast = uglifyjs.parse cs
			ast.figure_out_scope();
			ast.compute_char_frequency();
			ast.mangle_names();
			fs.writeFile './dist/leaflet.css.master.min.js',  ast.print_to_string()

task 'stable', 'make it from stable', () ->
	rf = (file, cb)->
		if file[0] is "file"
			fs.readFile "./src/"+file[1], "utf8",cb
		else if file[0] is "url"
			request file[1], (e,r,b)->
				cb e, b
	async.map [["url","https://raw.github.com/Leaflet/Leaflet/stable/dist/leaflet.css"],["url","https://raw.github.com/Leaflet/Leaflet/stable/dist/leaflet.ie.css"],["file","leaflet.css.coffee"]],rf, (e,files)->
		unless e
			css = JSON.stringify [cssc.compress(files[0]),cssc.compress(files[1])]
			cs = coffee.compile "cssFiles = #{ css }\n#{ files[2] }"
			fs.writeFile './dist/leaflet.css.5.1.js', cs
			console.log "compliled"
			ast = uglifyjs.parse cs
			ast.figure_out_scope();
			ast.compute_char_frequency();
			ast.mangle_names();
			fs.writeFile './dist/leaflet.css.5.1.min.js',  ast.print_to_string()

task 'bundle-master', 'bundle it', () ->
	rf = (file, cb)->
		if file[0] is "file"
			fs.readFile "./src/"+file[1], "utf8",cb
		else if file[0] is "url"
			request file[1], (e,r,b)->
				cb e, b
	async.map [["url","https://raw.github.com/Leaflet/Leaflet/master/dist/leaflet.css"],["url","https://raw.github.com/Leaflet/Leaflet/master/dist/leaflet.ie.css"],["file","leaflet.css.coffee"],["url","https://raw.github.com/Leaflet/Leaflet/master/dist/leaflet-src.js"]],rf, (e,files)->
		unless e
			css = JSON.stringify [cssc.compress(files[0]),cssc.compress(files[1])]
			cst = coffee.compile "cssFiles = #{ css }\n#{ files[2] }"
			cs = files[3]+"\n"+cst
			fs.writeFile './dist/leaflet.css.bundle.master.js', cs
			console.log "compliled"
			ast = uglifyjs.parse cs
			ast.figure_out_scope();
			ast.compute_char_frequency();
			ast.mangle_names();
			fs.writeFile './dist/leaflet.css.bundle.master.min.js',  ast.print_to_string()
			
task 'bundle-stable', 'bundle it', () ->
	rf = (file, cb)->
		if file[0] is "file"
			fs.readFile "./src/"+file[1], "utf8",cb
		else if file[0] is "url"
			request file[1], (e,r,b)->
				cb e, b
	async.map [["url","https://raw.github.com/Leaflet/Leaflet/stable/dist/leaflet.css"],["url","https://raw.github.com/Leaflet/Leaflet/stable/dist/leaflet.ie.css"],["file","leaflet.css.coffee"],["url","https://raw.github.com/Leaflet/Leaflet/stable/dist/leaflet-src.js"]],rf, (e,files)->
		unless e
			css = JSON.stringify [cssc.compress(files[0]),cssc.compress(files[1])]
			cst = coffee.compile "cssFiles = #{ css }\n#{ files[2] }"
			cs = files[3]+"\n"+cst
			fs.writeFile './dist/leaflet.css.bundle.5.1.js', cs
			console.log "compliled"
			ast = uglifyjs.parse cs
			ast.figure_out_scope();
			ast.compute_char_frequency();
			ast.mangle_names();
			fs.writeFile './dist/leaflet.bundle.5.1.min.js',  ast.print_to_string()