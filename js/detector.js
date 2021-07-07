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
            } else if (self.windowTheme.name && self.windowTheme.name.match(/[a-z]+ \| [a-z]+ [0-9](\.[0-9](\.[0-9]))??/i)) {
                var themeName = self.windowTheme.name.split(' | ')[1].replace(/\s*[0-9](\.[0-9](\.[0-9]))??$/i, '');
                self.theme = { 
                    "name": themeName + " by OutOfTheSandbox",
                    "theme_store_url": "https://outofthesandbox.com/collections/themes",
                    "handle": themeName.toLowerCase(),
                    "style_handle": themeName.toLowerCase()
                }
                self.theme.fully_custom = false;
                return self.theme;
            }
        }

        return { name: self.windowTheme.name, custom_name: self.windowTheme.name, fully_custom: true};
    };

    self.detectPlatform = function() {
        // Skip this site - it's core shopify
        if (opts.pageUrl.match(/.*\.(shopify|magento|bigcommerce)\.[a-z]+/i)) return false;

        for (var i = 0; i < self.scripts.length; i++) {
            var script = self.scripts[i];
            if (script.match(/cdn[0-9]*\.bigcommerce\.[a-z]+/i)) {
                return 'bigcommerce';
            } else if (script.match(/cdn[0-9]*\.shopify\.[a-z]+/i)) {
                return 'shopify';
            } else if (script.match(/mage\/cookies\.js/i)) {
                return 'magento1';
            } else if (script.match(/mage\/polyfill(\.min)?\.js/i)) {
                return 'magento2';
            } else if (script.match(/woocommerce/i)) {
                return 'woocommerce';
            } else if (script.match(/services\/wix-/i)) {
                return 'wix';
            }
        }
        return false;
    };

    var detectApp = function(app) {
        var detectedMap = {};
        for (var i = 0; i < self.scripts.length; i++) {
            if (detectedMap[app.name]) continue; // Already detected this app

            var script = self.scripts[i];

            if (app.script_pattern instanceof RegExp) {
                if (!script.match(app.script_pattern)) continue;
            } else if (app.script_pattern.indexOf('/') === 0) {
                var regex_str = app.script_pattern.replace(/^\//, '').replace(/\/[igu]?$/, '');
                var regex = new RegExp(regex, 'ig');
                
                if (!script.match(regex)) continue;
            } else {
                if (script.indexOf(app.script_pattern) === -1) continue;
            }

            self.apps.push(app);
            detectedMap[app.name] = true;
        }
    };


    init();
};
