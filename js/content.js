SAD.Content = function(opts) {
    opts = opts || {};
    var self = this;

    var init = function() {
        attachEvents();
    };

    self.sendScriptsToSad = function() {
        if (document.hidden) return;

        var $scripts = $('script');
        var pageScripts = $scripts.map(function(i) { return $(this).attr('src'); }).toArray();
        if (chrome.runtime) chrome.runtime.sendMessage(
            { action: "setPageScripts", pageScripts: pageScripts, pageUrl: window.location.toString() }, 
            function(response) { }
        );

    };

    self.sendLoading = function() {
        chrome.runtime.sendMessage(
            { action: "setLoading" }, 
            function(response) { }
        );
    };

    var attachEvents = function() {
        document.addEventListener("visibilitychange", function () {
          if (typeof chrome !== 'undefined') self.sendScriptsToSad();
        }, false);

        if (document.readyState === "complete") {
            if (typeof chrome !== 'undefined') self.sendScriptsToSad();
        } else {
            if (typeof chrome !== 'undefined') self.sendLoading();

            if(window.attachEvent) {
                window.attachEvent('onload', self.sendScriptsToSad);
                window.attachEvent('unload', self.sendLoading);
            } else {
                window.addEventListener('load', self.sendScriptsToSad, false);
            }

        }
    };

    init();
};

new SAD.Content();
