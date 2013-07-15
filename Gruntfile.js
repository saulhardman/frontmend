"use strict";

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        requirejs: {
            compile: {
                options: {
                    baseUrl: "js",
                    mainConfigFile: "js/main.js",
                    name: "main",
                    include: ["components/almond/almond.js"],
                    out: "js/main.min.js"
                }
            }
        },
        handlebars: {
            compile: {
                options: {
                    namespace: "templates",
                    amd: true,
                    processName: function (filename) {
                        var split = filename.split("/"),
                            len = split.length;
                        return split[len-1].toLowerCase().replace(".hbs", "");
                    }
                },
                files: {
                    "js/templates/templates.js": "js/templates/*.hbs"
                }
            }
        },
        jade: {
            development: {
                options: {
                    data: {
                        debug: true
                    },
                    pretty: true
                },
                files: [
                    {
                        expand: true,
                        cwd: "views/",
                        src: ["*.jade", "!layout.jade"],
                        ext: ".html"
                    },
                    {
                        expand: true,
                        cwd: "views/templates/",
                        src: ["*.jade"],
                        client: true,
                        dest: "js/templates/",
                        ext: ".hbs"
                    }
                ]
            },
            production: {
                options: {
                    data: {
                        debug: false
                    },
                    pretty: true
                },
                files: [
                    {
                        expand: true,
                        cwd: "views/",
                        src: ["*.jade", "!layout.jade"],
                        ext: ".html"
                    },
                    {
                        expand: true,
                        cwd: "views/templates/",
                        src: ["*.jade"],
                        client: true,
                        dest: "js/templates/",
                        ext: ".hbs"
                    }
                ]
            }
        },
        compass: {
            compile: {
                options: {
                    sassDir: "css/sass",
                    cssDir: "css",
                    outputStyle: "compressed"
                }
            }
        },
        manifest: {
            generate: {
                options: {
                    preferOnline: true
                },
                src: [
                    "*.html",
                    "js/*.min.js",
                    "css/*.css"
                ]
            }
        },
        watch: {
            handlebars: {
                files: "js/templates/*.hbs",
                tasks: ["handlebars"]
            },
            jade: {
                files: "views/**/*.jade",
                tasks: ["jade:development"]
            },
            compass: {
                files: "css/sass/*.scss",
                tasks: ["compass"]
            }
        },
        connect: {
            server: {}
        },
        jshint: {
            // lint /your/ JavaScript
            all: ["js/main.js", "js/modules/*.js"],
            options: {
                jshintrc: ".jshintrc"
            }
        },
        clean: {
            "default": ["manifest.appcache"]
        },
        modernizr: {
            devFile: "js/components/modernizr/modernizr.js",
            outputFile: "js/utilities/modernizr.min.js",
            extra: {
                load: false
            },
            files: [
                "js/main.min.js",
                "css/main.css"
            ]
        }
    });

    // load tasks
    grunt.loadNpmTasks("grunt-contrib-requirejs");
    grunt.loadNpmTasks("grunt-contrib-handlebars");
    grunt.loadNpmTasks("grunt-contrib-jade");
    grunt.loadNpmTasks("grunt-contrib-compass");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-modernizr");
    grunt.loadNpmTasks("grunt-manifest");

    // build the project using requirejs (r.js), handlebars, jade, sass and manifest generator
    grunt.registerTask("build", ["jshint", "handlebars", "jade:production", "compass", "requirejs", "modernizr", "manifest"]);

    grunt.registerTask("default", ["jade:development", "clean", "connect", "watch"]);

};