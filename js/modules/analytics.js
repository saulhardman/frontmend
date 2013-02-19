define(["ga"], function (ga) {
    var analytics = {
        init: function () {
            if (config.debug === false) {
                ga.push(["_setAccount", "UA-XXXXXXXX-X"]);
                ga.push(["_trackPageview"]);
                ga.push(["_trackPageLoadTime"]);
                return ga;
            } else {
                return this;
            }
        }
    };
    return analytics.init();
});