module.exports = function(grunt) {
	'use strict';

	require('load-grunt-tasks')(grunt);

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Setting directories
		dirs: {
			css: 'assets/css',
			js: 'assets/js',
		},

		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: '<%= dirs.css %>',
					src: [
						'*.css',
						'!*.min.css'
					],
					dest: '<%= dirs.css %>',
					ext: '.min.css'
				}]
			}
		},

		uglify: {
			options: {
				compress: {
					global_defs: {
						"EO_SCRIPT_DEBUG": false
					},
					dead_code: true
				},
				banner: '/*! <%= pkg.title %> <%= pkg.version %> <%= grunt.template.today("yyyy-mm-dd HH:MM") %> */\n'
			},
			build: {
				files: [{
					expand: true, // Enable dynamic expansion.
					src: [ // Actual pattern(s) to match.
						'<%= dirs.js %>/*.js',
						'!<%= dirs.js %>/*.min.js'
					],
					ext: '.min.js', // Destination filepaths will have this extension.
				}]
			}
		},

		// Check for JavaScript issues
		jshint: {
			options: {
				reporter: require('jshint-stylish'),
				globals: {
					"EO_SCRIPT_DEBUG": false,
				},
				'-W099': true, // Mixed spaces and tabs
				'-W083': true, // Fix functions within loop
				'-W082': true, // Declarations should not be placed in blocks
				'-W020': true, // Read only - error when assigning EO_SCRIPT_DEBUG a value.
			},
			all: [
				'<%= dirs.js %>/*.js',
				'!<%= dirs.js %>/*.min.js'
			]
		},

		// Watch for changes in assets
		watch: {
			scripts: {
				files: '<%= dirs.js %>/*.js',
				tasks: ['jshint', 'uglify'],
				options: {
					debounceDelay: 250,
				},
			},
			css: {
				files: '<%= dirs.css %>/*.css',
				tasks: ['css'],
			},
		},

		// Generate .pot file
		makepot: {
			target: {
				options: {
					cwd: '',
					domainPath: 'languages', // Where to save the POT file.
					exclude: [
						'releases',
						'node_modules',
					],
					mainFile: '<%= pkg.name %>.php',                                // Main project file.
					potComments: '# Copyright (c) {{year}} Your Name/Your Company', // The copyright at the beginning of the POT file.
					potFilename: '<%= pkg.name %>.pot',                             // Name of the POT file.
					type: 'wp-plugin',                                              // Type of project (wp-plugin or wp-theme).
					potHeaders: {
						'poedit': true,                                             // Includes common Poedit headers.
						'x-poedit-keywordslist': true,                              // Include a list of all possible gettext functions.
						'Report-Msgid-Bugs-To': 'https://yourdomain.com/',
						'language-team': 'Your Name <youremail@domain.com>',
						'language': 'en_US'
					},
					type: 'wp-plugin',                                              // Type of project.
					updateTimestamp: true,                                          // Whether the POT-Creation-Date should be updated without other changes.
				}
			}
		},

		// Check strings for localization issues
		checktextdomain: {
			options:{
				text_domain: '<%= pkg.name %>', // Project text domain.
				keywords: [
					'__:1,2d',
					'_e:1,2d',
					'_x:1,2c,3d',
					'esc_html__:1,2d',
					'esc_html_e:1,2d',
					'esc_html_x:1,2c,3d',
					'esc_attr__:1,2d',
					'esc_attr_e:1,2d',
					'esc_attr_x:1,2c,3d',
					'_ex:1,2c,3d',
					'_n:1,2,4d',
					'_nx:1,2,4c,5d',
					'_n_noop:1,2,3d',
					'_nx_noop:1,2,3c,4d'
				]
			},
			files: {
				src:  [
					'*.php',
					'**/*.php', // Include all files
					'!woo-dependencies/**', // Exclude woo-dependencies/
					'!node_modules/**', // Exclude node_modules/
					'!tmp/**', // Exclude tmp/
				],
				expand: true
			},
		},

		potomo: {
			dist: {
				options: {
					poDel: false
				},
				files: [{
					expand: true,
					cwd: 'languages',
					src: ['*.po'],
					dest: 'languages',
					ext: '.mo',
					nonull: false
				}]
			}
		},

		// Bump version numbers (replace with version in package.json)
		replace: {
			Version: {
				src: [
					'readme.txt',
					'<%= pkg.name %>.php'
				],
				overwrite: true,
				replacements: [
					{
						from: /Requires PHP:.*$/m,
						to: "Requires PHP:      <%= pkg.requires_php %>"
					},
					{
						from: /Requires at least:.*$/m,
						to: "Requires at least: <%= pkg.requires %>"
					},
					{
						from: /Tested up to:.*$/m,
						to: "Tested up to:      <%= pkg.tested_up_to %>"
					},
					{
						from: /Stable tag:.*$/m,
						to: "Stable tag: <%= pkg.version %>"
					},
					{
						from: /Version:.*$/m,
						to: "Version:     <%= pkg.version %>"
					},
					{
						from: /public \$version = \'.*.'/m,
						to: "public $version = '<%= pkg.version %>'"
					},
					{
						from: /public \$version      = \'.*.'/m,
						to: "public $version      = '<%= pkg.version %>'"
					}
				]
			}
		},

		// Copies the plugin to create deployable plugin.
		copy: {
			deploy: {
				src: [
					'**',
					'!.*',
					'!*.md',
					'!.*/**',
					'!.htaccess',
					'!Gruntfile.js',
					'!releases/**',
					'!node_modules/**',
					'!.DS_Store',
					'!npm-debug.log',
					'!*.json',
					'!*.sh',
					'!*.zip',
					'!*.jpg',
					'!*.jpeg',
					'!*.gif',
					'!*.png'
				],
				dest: '<%= pkg.name %>',
				expand: true,
				dot: true
			}
		},

		// Compresses the deployable plugin folder.
		compress: {
			zip: {
				options: {
					archive: './<%= pkg.name %>-v<%= pkg.version %>.zip',
					mode: 'zip'
				},
				files: [
					{
						expand: true,
						cwd: './<%= pkg.name %>/',
						src: '**',
						dest: '<%= pkg.name %>'
					}
				]
			}
		},

		// Deletes the deployable plugin folder once zipped up.
		clean: [ '<%= pkg.name %>' ]

	});

	// Set the default grunt command to run test cases.
	grunt.registerTask( 'default', [ 'test' ] );

	// Checks for errors with the JavaScript and check the text domain in strings match or not missing.
	grunt.registerTask( 'test', [ 'jshint', 'checktextdomain' ]);

	// Dev build
	grunt.registerTask( 'dev', [ 'replace', 'cssmin', 'newer:uglify', 'makepot' ]);

	// Build plugin.
	grunt.registerTask( 'build', [ 'replace', 'cssmin', 'newer:uglify', 'checktextdomain', 'makepot' ]);

	/**
	 * Run i18n related tasks.
	 *
	 * This includes extracting translatable strings, updating the master pot file.
	 * If this is part of a deploy process, it should come before zipping everything up.
	 */
	grunt.registerTask( 'update-pot', [ 'checktextdomain', 'makepot' ]);

	/**
	 * Creates a deployable plugin zipped up ready to upload
	 * and install on a WordPress installation.
	 */
	grunt.registerTask( 'zip', [ 'copy', 'compress', 'clean' ]);
};
