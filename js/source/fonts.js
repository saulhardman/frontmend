define(function () {
    if (config.typekit !== undefined && config.typekit !== "XXXXX") {
        var html = document.getElementsByTagName("html")[0],
            timeout = setTimeout(function () {
                html.className = html.className.replace(/(\s|^)wf-loading(\s|$)/g, " ");
                html.className += " wf-inactive";
            }, 3000);
        requirejs(["typekit"], function () {
            try {
                Typekit.load();
            } catch (e) {
                console.log("Error on Typekit.load():", e);
            }
            clearTimeout(timeout);
            console.log("Fonts loaded.");
        });
    }
});