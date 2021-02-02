SAD.Detector = function(opts) {
    opts = opts || {};
    var self = this;

    var init = function() {
        self.scripts = opts.scripts;
        self.windowTheme = opts.windowTheme;
        self.apps = [];
    };

    self.detectApps = function() {
        self.apps = [];

        for (var i = 0; i < SHOPIFY_APPS.length; i++) {
            detectApp(SHOPIFY_APPS[i]);
        }

        return self.apps;
    };

    self.detectTheme = function() {
        for (var i = 0; i < SHOPIFY_THEMES.length; i++) {
            if (parseInt(self.windowTheme.theme_store_id) == parseInt(SHOPIFY_THEMES[i].id)) {
                self.theme = SHOPIFY_THEMES[i];
                self.theme.custom_name = self.windowTheme.name;
                self.theme.fully_custom = false;
                return self.theme;
            }
        }

        return { name: self.windowTheme.name, custom_name: self.windowTheme.name, fully_custom: true};
    };

    self.isShopifyStore = function() {
        // Skip this site - it's core shopify
        if (opts.pageUrl.match(/.*\.shopify\..*/i)) return false;

        for (var i = 0; i < self.scripts.length; i++) {
            var script = self.scripts[i];
            if (!script.match(/.*\.shopify\..*/i)) {
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
