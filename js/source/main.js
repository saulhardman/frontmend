requirejs.config({
    paths: {
        "jquery": ["//ajax.googleapis.com/ajax/libs/jquery/1.9.0/jquery.min", "vendor/jquery-1.9.1.min"],
        "autotrack": "//www.google.com/js/gweb/analytics/autotrack",
        "typekit": "//use.typekit.net/" + config.typekit
    }
});

requirejs(["jquery",
           "plugins/jquery.retinafy",
           "log",
           "fonts",
           "analytics"], function ($) {

    var main = {
        init: function () {
            this.retinafy();
            console.log("Main initiated:", this);
        },
        retinafy: function () {
            $('body').retinafy();
            console.log('Retinafy fired.');
        }
    };

    $(document).ready(function () {
        console.log("Dom ready.");
        main.init();
    });

});