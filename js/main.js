var config = {
    debug: (location.hostname === "localhost") ? true : false
};

requirejs.config({
    paths: {
        jquery: ["//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min", "components/jquery/jquery.min"],
        handlebars: "components/handlebars/handlebars.runtime",
        analytics: "components/analytics/analytics",
        templates: "templates/templates",
        log: "utilities/log"
    },
    shim: {
        handlebars: {
            exports: "Handlebars"
        }
    }
});

requirejs(["jquery", "templates", "analytics", "log"], function ($, templates, analytics) {

    var main = {
        init: function () {
            console.log("Hello World! Welcome to Frontmend.");
            this.analytics();
            $("body").prepend(templates.example());
        },
        analytics: function () {
            if (config.debug === false) {
                analytics.initialize({
                    "Google Analytics" : {
                        apiKey: "UA-XXXXXXX-X"
                    }
                });
                analytics.pageview();
            }
        }
    };

    $(document).ready(function () {
        main.init();
    });

});