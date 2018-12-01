SAD.Background = function(opts) {
    opts = opts || {};
    var self = this;

    var init = function() {

        self.apps = [];

        chrome.browserAction.disable();

        chrome.runtime.onMessage.addListener(function(msgObj) {
            if (msgObj.action == 'getApps') {
                chrome.runtime.sendMessage({ action: "setApps", apps: self.apps, detectableApps: SHOPIFY_APPS });
                return true;
            } else if (msgObj.action =='setPageScripts') {
                self.detectScripts(msgObj.pageScripts, msgObj.pageUrl);
                return true;
            } else if (msgObj.action =='setLoading') {
                chrome.browserAction.disable();
                chrome.browserAction.setIcon({ path: 'img/icon.png' });
                chrome.browserAction.setBadgeText({
                    text: '..'
                });
                return true;
            } else {
                return false;
            }
         });

        chrome.tabs.onActivated.addListener(self.disable);
    };

    self.disable = function() {
        chrome.browserAction.setBadgeText({
            text: ''
        });
        chrome.browserAction.setIcon({ path: 'img/icon-disabled.png' });
        chrome.browserAction.disable();
    };

    self.detectScripts = function(scripts, pageUrl) {
        var detector = new SAD.Detector({ scripts: scripts, pageUrl: pageUrl });

        if (detector.isShopifyStore()) {
            self.apps = detector.detectApps();
            chrome.browserAction.setBadgeText({
                text: self.apps.length.toString()
            });
            chrome.browserAction.enable();
            chrome.browserAction.setIcon({ path: 'img/icon.png' });
        } else {
            self.disable();
        }

    }

    init();
};

new SAD.Background();
