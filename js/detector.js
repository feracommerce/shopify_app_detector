SAD.Detector = function(opts) {
    opts = opts || {};
    var self = this;

    var init = function() {
        self.scripts = opts.scripts;
        self.apps = [];
    };


    self.detectApps = function() {
        self.apps = [];
        detectFera();
        return self.apps;
    };

    // DETECTIONS GO HERE:

    self.isShopify = function() {
        for (var i = 0; i < self.scripts.length; i++) {
            var script = self.scripts[i];
            if (script.indexOf('shopify.com') !== -1) {
                return true;
            }
        }
        return false;
    };

    var detectFera = function() {
        var detectedMap = {};
        for (var i = 0; i < self.scripts.length; i++) {
            var script = self.scripts[i];
            if (script.indexOf('bananastand.js') !== -1 && !detectedMap['Fera.ai']) {
                self.apps.push({ name: 'Fera.ai', description: 'abc', url: 'http' });
                detectedMap['Fera.ai'] = true;
            }
        }
    };


    init();
};
