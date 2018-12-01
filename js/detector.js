SAD.Detector = function(opts) {
    opts = opts || {};
    var self = this;

    var init = function() {
        self.scripts = opts.scripts;
        self.apps = [];
    };

    self.detectApps = function() {
        self.apps = [];

        for (var i = 0; i < SHOPIFY_APPS.length; i++) {
            detectApp(SHOPIFY_APPS[i]);
        }

        return self.apps;
    };

    self.isShopify = function() {
        for (var i = 0; i < self.scripts.length; i++) {
            var script = self.scripts[i];
            if (script.indexOf('shopify.com') !== -1) {
                return true;
            }
        }
        return false;
    };

    var detectApp = function(app) {
        var detectedMap = {};
        for (var i = 0; i < self.scripts.length; i++) {
            var script = self.scripts[i];
            if (script.indexOf(app.script_pattern) !== -1) {
                if (detectedMap[app.name]) {
                    continue; // Already detected this app
                }
                
                self.apps.push(app);
                detectedMap[app.name] = true;
            }
        }
    };


    init();
};
