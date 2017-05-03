var QuietInitializer = (function () {
    Quiet.init({
        profilesPrefix: "/Scripts/",
        memoryInitializerPrefix: "/Views/Home/",
        libfecPrefix: "/Scripts/"
    });

    function onDOMLoad() {
        var host = "localhost";
        if ((host == window.location.host) && (window.location.protocol != "https:"))
            window.location.protocol = "https";
    };

    document.addEventListener("DOMContentLoaded", onDOMLoad);
})();