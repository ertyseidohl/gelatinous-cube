module.exports = function(grunt) {
	grunt.initConfig({
		concat: {
			options: {
				separator: ';',
			},
			js: {
				src: [
					'./bower_components/jquery/jquery.js',
					'./bower_components/bootstrap/dist/js/bootstrap.js',
					'./src/**.*',
				],
				dest: './public/index.js',
			}
		},
		uglify: {
			options: {
				mangle: false
			},
			js: {
				files: {
					'./public/index.js': './public/index.js',
				}
			}
		},
		mocha_require_phantom: {
			options: {
				base: './',
				main: './test_bootstrap.js',
				requireLib: './bower_components/requirejs/require.js',
				files: ['test/**/*.js'],
			},
		},
		watch: {
				js: {
					files: [
						"/src/**/*",
						"./public/index.html"
					],
					tasks: ['concat:js','uglify:js','mocha_require_phantom'],
					options: {
						livereload: true
					}
				},
			}
		});

	// Plugin loading
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-mocha-require-phantom');

	// Task definition
	grunt.registerTask('default', ['concat', 'uglify', 'mocha_require_phantom']);
	grunt.registerTask('test', ['mocha_require_phantom']);

};
