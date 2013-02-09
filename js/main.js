var config = {
    debug: (location.hostname === "localhost") ? true : false
};

requirejs.config({
    paths: {
        "jquery": ["//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min", "components/jquery/jquery"],
        "analytics": "components/analytics/analytics",
        "handlebars": "components/handlebars-amd/handlebars.runtime",
        "templates": "templates/templates"
    }
});

requirejs(["jquery", "templates", "analytics", "utilities/log"], function ($, templates, analytics) {

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