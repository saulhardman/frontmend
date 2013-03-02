"use strict";
var path = require("path");
var lrSnippet = require("grunt-contrib-livereload/lib/utils").livereloadSnippet;

var folderMount = function folderMount (connect, point) {
    return connect["static"](path.resolve(point));
};

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
                    paths: {
                        jquery: "empty:",
                        ga: "empty:"
                    },
                    include: ["components/requirejs/require.js"],
                    out: "js/main.min.js"
                }
            }
        },
        handlebars: {
            compile: {
                options: {
                    namespace: "templates",
                    amd: true,
                    processName: function(filename) {
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
                        cwd: "jade/",
                        src: ["*.jade", "!layout.jade"],
                        ext: ".html"
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
                        cwd: "jade/",
                        src: ["*.jade", "!layout.jade"],
                        ext: ".html"
                    }
                ]
            }
        },
        sass: {
            compile: {
                options: {
                    style: "compressed",
                    cacheLocation: "css/sass/.sass-cache"
                },
                files: {
                    "css/main.css": "css/sass/main.scss"
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
        regarde: {
            handlebars: {
                files: "js/templates/*.hbs",
                tasks: ["handlebars"]
            },
            jade: {
                files: "jade/*.jade",
                tasks: ["jade:development"]
            },
            sass: {
                files: "css/sass/*.scss",
                tasks: ["sass"]
            },
            // Run livereload whenever any JavaScript, html or CSS files are compiled
            livereload: {
                files: ["js/**/*.js", "*.html", "css/**/*.css"],
                tasks: ["livereload"]
            }
        },
        connect: {
            livereload: {
                options: {
                    port: 9001,
                    middleware: function (connect, options) {
                        return [lrSnippet, folderMount(connect, ".")];
                    }
                }
            }
        }
    });

    // load tasks
    grunt.loadNpmTasks("grunt-contrib-requirejs");
    grunt.loadNpmTasks("grunt-contrib-handlebars");
    grunt.loadNpmTasks("grunt-contrib-jade");
    grunt.loadNpmTasks("grunt-contrib-sass");
    grunt.loadNpmTasks("grunt-manifest");
    grunt.loadNpmTasks("grunt-regarde");
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-livereload");

    // build the project using requirejs (r.js), handlebars, jade, sass and manifest generator
    grunt.registerTask("build", ["handlebars", "jade:production", "sass", "requirejs", "manifest"]);

    grunt.registerTask("default", ["livereload-start", "connect", "regarde"]);

};