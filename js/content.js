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
        var windowTheme = locateThemeDataFromScripts($scripts);


        try {
            if (chrome.runtime) {
                chrome.runtime.sendMessage(
                    {
                        action: "setPageScripts", 
                        pageScripts: pageScripts, 
                        pageUrl: window.location.toString(), 
                        theme: windowTheme
                    }, 
                    function(response) { }
                );
            }
        } catch(e) {
            console.warn("Could not send setPageScripts message for some reason.", e);
        }
    };

    self.sendLoading = function() {
        if (chrome.runtime) {
            chrome.runtime.sendMessage(
                { action: "setLoading" }, 
                function(response) { }
            );
        }
    };

    var attachEvents = function() {
        document.addEventListener("visibilitychange", function () {
          if (typeof chrome !== 'undefined') self.sendScriptsToSad();
        }, false);

        if (document.readyState === "complete") {
            if (typeof chrome !== 'undefined') setTimeout(self.sendScriptsToSad, 1000);
        } else {
            if (typeof chrome !== 'undefined') self.sendLoading();

            if(window.attachEvent) {
                window.attachEvent('onload', function() { setTimeout(self.sendScriptsToSad, 1000); });
                window.attachEvent('unload', self.sendLoading);
            } else {
                window.addEventListener('load', function() { setTimeout(self.sendScriptsToSad, 1000); }, false);
            }

        }
    };

    var locateThemeDataFromScripts = function($scripts) {
        for (var i = 0; i < $scripts.length; i++) {
            var html = $scripts.get(i).innerHTML;
            if (!html || html === '') continue; // No content in this script
            if (html.length > 1000) continue; // Script too large to use regular expression parsing. Skip so we don't affect memory.
            if (html.indexOf('Shopify.theme') === -1) continue; // No theme definition in this script so it's not what we're looking for.

            var matchers = html.match(/Shopify\.theme\s*=\s*(\{.+\})\s*;?/gm);
            if (matchers.length < 1) continue;
            var json = matchers[0].replace(/Shopify\.theme\s*=\s*/gm, '').replace(/\}\s*;?\s*/gm, '}');
            return JSON.parse(json);
        };

        return {};
    };

    init();
};

new SAD.Content();
