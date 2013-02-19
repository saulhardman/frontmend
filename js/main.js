var config = {
    debug: (location.hostname === "localhost") ? true : false
};

requirejs.config({
    paths: {
        jquery: ["//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min", "components/jquery/jquery.min"],
        handlebars: "components/handlebars/handlebars.runtime",
        ga: "//google-analytics.com/ga"
    },
    shim: {
        handlebars: {
            exports: "Handlebars"
        },
        ga: {
            exports: "_gaq"
        }
    }
});

requirejs(["jquery", "templates/templates", "modules/analytics", "utilities/log"], function ($, templates, analytics) {

    var main = {
        init: function () {
            console.log("Hello World! Welcome to Frontmend.");
            $("body").prepend(templates.example());
        }
    };

    $(document).ready(function () {
        main.init();
    });

});