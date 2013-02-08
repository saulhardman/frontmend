define(function () {
    if (config.typekit !== undefined && config.typekit !== "XXXXX") {
        var timeout = setTimeout(fontsInactive(true), 3000);
        requirejs(["typekit"], function () {
            try {
                Typekit.load();
            } catch (e) {
                console.log("Error on Typekit.load():", e);
            }
            clearTimeout(timeout);
            console.log("Fonts loaded.");
        });
    } else {
        fontsInactive(false);
    }
    function fontsInactive (set) {
        var html = document.getElementsByTagName("html")[0];
        html.className = html.className.replace(/(\s|^)wf-loading(\s|$)/g, " ");
        if (set) {
            html.className += " wf-inactive";
        }
    }
});