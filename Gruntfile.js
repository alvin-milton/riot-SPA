module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({
        // Metadata
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= props.license %> */\n',
        // Task configuration
        sass: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'css',
                    src: ['*.scss'],
                    dest: 'css',
                    ext: '.css'
                }]
            }
        },
        'http-server': {
            root: 'index.html',
            port: 8282,
            host: "127.0.0.1",
            cache: 10,
            showDir : true,
            autoIndex: true,
            ext: "html",
            runInBackground: true|false,
            cors: true,
            // logFn: requestLogger,
            https: {
                cert: "<file>",
                key:  "<file>"
            }
        }
    });

    
    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-http-server');

    // Default task
    grunt.registerTask('default', ['sass', 'http-server']);
};

