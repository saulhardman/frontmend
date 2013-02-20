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

requirejs(["jquery", "modules/example", "modules/analytics", "utilities/log"], function ($, example, analytics) {

    var app = {
        Modules: {
            example: example,
            analytics: analytics
        },
        Events: $({}),
        init: function () {
            var i;
            for (i in this.Modules) {
                this.Modules[i].init(this.Events);
            }
            this.Events.trigger("render");
            console.log("Hello World! Welcome to Frontmend.");
        }
    };

    $(document).ready(function () {
        app.init();
    });

});