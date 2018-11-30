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
        chrome.runtime.sendMessage(
            { action: "setPageScripts", pageScripts: pageScripts }, 
            function(response) { }
        );

    };

    var attachEvents = function() {
        document.addEventListener("visibilitychange", function () {
          self.sendScriptsToSad();
        }, false);


        if(window.attachEvent) {
            window.attachEvent('onload', self.sendScriptsToSad);
        } else {
            window.addEventListener('load', self.sendScriptsToSad, false);
        }

    };

    init();
};

new SAD.Content();
