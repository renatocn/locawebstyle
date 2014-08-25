module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jasmine: {
      pivotal: {
        src: ['source/assets/javascripts/libs/*.js',
              'source/assets/javascripts/locastyle/_initializer.js',
              'source/assets/javascripts/locastyle/_datepicker.js',
              'source/assets/javascripts/locastyle/_popover.js',
              'source/assets/javascripts/locastyle/_templates.js',
              'source/assets/javascripts/locastyle/_collapse.js',
              'source/assets/javascripts/locastyle/_tabs.js',
              'source/assets/javascripts/locastyle/_dropdown.js',
              'source/assets/javascripts/locastyle/_general.js',
              'source/assets/javascripts/locastyle/_modal.js',
              'source/assets/javascripts/locastyle/_alert.js',
              'source/assets/javascripts/locastyle/_form.js',
              'source/assets/javascripts/locastyle/_dismiss.js',
              'source/assets/javascripts/locastyle/_custom-fields.js',
              'source/assets/javascripts/locastyle/_breakpoint-check.js',
              'source/assets/javascripts/locastyle/_topbar-curtain.js',
              'source/assets/javascripts/locastyle/_btn-group.js',
              'source/assets/javascripts/locastyle/_sidebars.js',
              'source/assets/javascripts/locastyle/_progress-bar.js',
              'source/assets/javascripts/locastyle/_char-counter.js',
              'source/assets/javascripts/locastyle/_track-events.js',
              'source/assets/javascripts/locastyle/_browser-unsupported-bar.js'],
        options: {
          vendor: 'spec/javascripts/libs/*.js',
          specs: 'spec/javascripts/*_spec.js',
          helpers: 'spec/javascripts/helpers/*.js'
        }
      }
    }
  });

  // load Jasmine tasks
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', [ 'jasmine' ]);

};
