SAD.Background = function(opts) {
    opts = opts || {};
    var self = this;

    var init = function() {
        self.apps = [];

        chrome.action.disable();

        chrome.runtime.onMessage.addListener(function(msgObj) {
            if (msgObj.action == 'getApps') {
                chrome.runtime.sendMessage({
                    action: "setApps",
                    apps: self.apps,
                    detectableApps: SHOPIFY_APPS,
                    detectableThemes: SHOPIFY_THEMES,
                    theme: self.theme,
                    platform: self.platform
                });
                return true;
            } else if (msgObj.action =='setPageScripts') {
                self.detectScripts(msgObj.pageScripts, msgObj.pageUrl, msgObj.theme);
                return true;
            } else if (msgObj.action =='setLoading') {
                self.setLoading();
                return true;
            } else {
                return false;
            }
         });

        chrome.tabs.onActivated.addListener(self.disable);
    };

    self.setLoading = function() {
        chrome.action.disable();
        chrome.action.setIcon({ path: 'img/icons/detector.png' });
        chrome.action.setBadgeText({
            text: '..'
        });
    };

    self.disable = function() {
        chrome.action.setBadgeText({
            text: ''
        });
        chrome.action.setIcon({ path: 'img/icons/detector-disabled.png' });
        chrome.action.disable();
    };

    self.detectScripts = function(scripts, pageUrl, windowTheme) {
        var detector = new SAD.Detector({ scripts: scripts, pageUrl: pageUrl, windowTheme: windowTheme });
        self.platform = detector.detectPlatform();

        if (self.platform) {
            self.apps = detector.detectApps();
            self.theme = detector.detectTheme();

            chrome.action.setBadgeText({
                text: self.apps.length.toString()
            });
            chrome.action.enable();
            chrome.action.setIcon({ path: 'img/icons/' + self.platform + '.png' });
            return true;
        } else {
            self.disable();
            return false;
        }

    }

    init();
};

new SAD.Background();
