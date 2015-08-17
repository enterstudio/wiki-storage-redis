module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-git-authors');

  grunt.initConfig({

    authors: {
      prior: [
        "Christian Smith <smith@anvil.io>",
        "Paul Rodwell <paul.rodwell@btinternet.com>"
      ]
    },
  });

  grunt.registerTask('default', ['update-authors']);

};
