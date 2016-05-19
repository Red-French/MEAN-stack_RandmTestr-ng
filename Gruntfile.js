module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      files: ['./public/controllers/**/*.js']
    },
    watch: {
      javascripts: {
        files: ['./public/controllers/**/*.js'],
        tasks: ['jshint']
      }
    }
  });
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', [ 'jshint', 'watch' ]);
};
