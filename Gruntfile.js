module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        requirejs: {
            compile: {
                options: {
                    baseUrl: "js",
                    mainConfigFile: "js/main.js",
                    skipDirOptimize: true,
                    name: "main",
                    paths: {
                        jquery: "empty:",
                        ga: "empty:"
                    },
                    include: ["components/requirejs/require.js"],
                    out: "js/main.min.js",
                    preserveLicenseComments: false
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
            compile: {
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
        watch: {
            handlebars: {
                files: "js/templates/*.hbs",
                tasks: ["handlebars"]
            },
            jade: {
                files: "jade/*.jade",
                tasks: ["jade"]
            }
        },
        connect: {
            server: {
                options: {
                    port: 3000
                }
            }
        }
    });

    // load tasks
    grunt.loadNpmTasks("grunt-contrib-requirejs");
    grunt.loadNpmTasks("grunt-contrib-handlebars");
    grunt.loadNpmTasks("grunt-contrib-jade");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-connect");

    // build the project using requirejs (r.js) and handlebars
    grunt.registerTask("build", ["handlebars", "requirejs"]);

    grunt.registerTask("default", ["connect", "watch"]);

};