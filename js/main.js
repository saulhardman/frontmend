requirejs.config({
    paths: {
        jquery: "components/jquery/jquery",
        handlebars: "components/handlebars/handlebars.runtime",
        ga: "utilities/analytics",
        templates: "templates/templates"
    },
    shim: {
        handlebars: {
            exports: "Handlebars"
        },
        ga: {
            exports: "ga"
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

    $(window.document).ready(function () {
        app.init();
    });

});