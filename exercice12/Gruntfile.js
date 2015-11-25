module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    files: {
      js: ["source/js/**/*.js"],
      destination:"dist/"
    },
    uglify: {
      dist: {
        files: {
        "<%= files.destination %>js/main.min.js": ["<%= files.js %>"]
    }
  }
},

    copy: {
      dist: {
        files: [{
          expand: true,
          cwd: "source/",
          src:["*.html"],
          dest: "<%= files.destination %>"
        }],
      },
    },
    connect: {
      server: {
        options: {
        port:8000,
        hostname: "*",
        base: "<%= files.destination %>"
        }
      }
    },
    watch: {
      options: {
      livereload:true,
    },
      js: {
        files: "<%= files.js %>",
        tasks: ["uglify"]
      },
      html: {
        files: "source/*.html",
        tasks: ["copy:dist"]
      }
    },
});

grunt.loadNpmTasks("grunt-contrib-uglify");
grunt.loadNpmTasks("grunt-contrib-copy");
grunt.loadNpmTasks("grunt-contrib-connect");
grunt.loadNpmTasks("grunt-contrib-watch");
  // Default task(s).
grunt.registerTask("default", ["uglify:dist", "copy:dist", "connect", "watch"]);

};
