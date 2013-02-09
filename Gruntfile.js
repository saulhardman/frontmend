module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        requirejs: {
            compile: {
                options: {
                    appDir: "./",
                    baseUrl: "js",
                    dir: "dist",
                    mainConfigFile: "js/main.js",
                    paths: {
                        jquery: "empty:"
                    },
                    name: "main",
                    findNestedDependencies: true,
                    preserveLicenseComments: false,
                    optimizeCss: "none",
                    fileExclusionRegExp: /^\.|node_modules|Gruntfile|\.md|package.json|jade|scss|tests|modernizr/
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
        connect: {
            server: {
                options: {
                    keepalive: true,
                    port: 3000
                }
            }
        },
        watch: {
            files: "js/templates/*.hbs",
            tasks: ["handlebars"]
        }
    });

    // load tasks
    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-requirejs");
    grunt.loadNpmTasks("grunt-contrib-handlebars");

    // build the project using requirejs (r.js) and handlebars
    grunt.registerTask("build", ["handlebars", "requirejs"]);

    // run a basic http server (settings above)
    grunt.registerTask("server", ["connect"]);

};