module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		cssmin: {
			options: {
				report: 'gzip'
			},
			full: {
				src: ['node_modules/leaflet/dist/leaflet.css'],
				dest: 'css/leaflet.css'
			},
			ie: {
				src: ['node_modules/leaflet/dist/leaflet.ie.css'],
				dest: 'css/leaflet.ie.css'
			}
		},
		concat: {
			first: {
				options: {
					banner: "(function(L){\n",
					footer: "\n})(L);"
				},
				src: ['src/css.js', 'src/builtCss.js'],
				dest: 'dist/css.js'
			},
			big: {
				src: ['node_modules/leaflet/dist/leaflet-src.js', 'dist/css.js'],
				dest: 'dist/leaflet.css.js'
			}


		},
		copy: {
			main: {
				files: [{
					cwd: 'node_modules/leaflet/dist/images/',
					src: ['*'],
					dest: 'dist/images/',
					filter: 'isFile',
					expand: true
				}]
			}
		},
		uglify: {
			options: {
				report: 'gzip'
			},
			all: {
				files: {
					'dist/leaflet.css.min.js': ['dist/leaflet.css.js']
				}
			}
		}
	});
	grunt.registerTask('makeCSS', function() {
		var main = grunt.file.read('css/leaflet.css').replace(/(')/g, "\\'");
		var ie = grunt.file.read('css/leaflet.ie.css').replace(/(')/g, "\\'");
		grunt.file.write('src/builtCss.js', "LCSS(['" + main + "','" + ie + "']);");
	});
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.registerTask('default', ['cssmin:full', 'cssmin:ie', 'makeCSS', 'concat:first', 'concat:big', 'copy','uglify']);
};