module.exports = function(grunt) {

  // ===========================================================================
  // CONFIGURE GRUNT ===========================================================
  // ===========================================================================
  grunt.initConfig({

    // get the configuration info from package.json ----------------------------
    // this way we can use things like name and version (pkg.name)
    pkg: grunt.file.readJSON('package.json'),

    // all of our configuration will go here

    // configure cssmin to minify css files ------------------------------------
    cssmin: {
      options: {
        banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
      },
      build: {
        files: {
          'dist/css/custom.min.css': ['css/font-awesome.min.css', 'css/simpleGrid.css', 'css/custom.css']
        }
      }
    },

    jade: {
      compile: {
        options: {
          data: {
            debug: false,
            timestamp: "<%= new Date().getTime() %>"
          }
        },
        files: {
          "index.html": ["index.jade"]
        }
      }
    },

    watch: {
      css: {
        files: [
          'css/custom.css'
        ],
        tasks: ['cssmin']
      },
      jade: {
        files: [
          'index.jade',
          'includes/**/*.jade'
        ],
        tasks: ['jade']
      }
    }

  });

  grunt.registerTask('default', ['cssmin']);
  grunt.registerTask('dev', ['watch']);

  // ===========================================================================
  // LOAD GRUNT PLUGINS ========================================================
  // ===========================================================================
  // we can only load these if they are in our package.json
  // make sure you have run npm install so our app can find these
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');

};
