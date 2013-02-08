define(["autotrack"], function () {
    if (config.debug === false && config.analytics !== undefined && config.analytics !== "UA-XXXXXXXX-X") {
        var _gaq = _gaq || [];
        _gaq.push(['_setAccount', config.analytics]);
        _gaq.push(['_trackPageview']);
        _gaq.push(['_trackPageLoadTime']);
    }
});