define(["ga"], function (ga) {

    var analytics = {

        init: function (Events) {

            this.Events = Events;

            ga("create", "UA-XXXXXXXX-X");

            ga("send", "pageview");

        }

    };

    return analytics;
    
});