module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine: {
      pivotal: {
        src: 'source/assets/javascripts/**/*.js',
        options: {
          specs: 'spec/javascripts/*_spec.js',
          helpers: 'spec/javascripts/helpers/*.js',
        }
      }
    }
  });

  // load Jasmine tasks
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', [ 'jasmine' ]);

};
