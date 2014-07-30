/*
 * grunt-requireall
 * https://github.com/takumi4ichi/grunt-requireall
 *
 * Copyright (c) 2014 takumi4ichi
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    jshint: {
      all: [
        'Gruntfile.js',
        'tasks/*.js',
        '<%= nodeunit.tests %>'
      ],
      options: {
        jshintrc: '.jshintrc'
      }
    },

    autoversion: {
      all:{
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['test/fixtures/build/']
    },

    // Configuration to be run (and then tested).
    requireall: {
      default_target: {
        options: {},
        files:[{
          'build': ['src/*.debug.js']
        }]
      },
      test_target: {
        options: {
          assetRootPath: './test/fixtures/assets',
        },
        src: './test/fixtures/src/*.js',
        dest: './test/fixtures/build/',
      }
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/*_test.js']
    }

  });

  // Actually load this plugin's task(s).
  grunt.loadTasks('tasks');

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-autoversion');

  // Whenever the "test" task is run, first clean the "tmp" dir, then run this
  // plugin's task(s), then test the result.
  grunt.registerTask('test', ['clean', 'requireall']);

  // By default, lint and run all tests.
  grunt.registerTask('default', ['jshint', 'autoversion', 'test']);

};
