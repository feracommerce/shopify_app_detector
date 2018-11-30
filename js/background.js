SAD.Background = function(opts) {
    opts = opts || {};
    var self = this;

    var init = function() {

        self.apps = [];

        chrome.runtime.onMessage.addListener(function(msgObj) {
            if (msgObj.action == 'getApps') {
                chrome.runtime.sendMessage({ action: "setApps", apps: self.apps });
                return true;
            } else if (msgObj.action =='setPageScripts') {
                self.detectScripts(msgObj.pageScripts);
                return true;
            } else {
                return false;
            }
         });
    };

    self.detectScripts = function(scripts) {
        var detector = new SAD.Detector({ scripts: scripts });

        if (detector.isShopify()) {
            self.apps = detector.detectApps();
            chrome.browserAction.setBadgeText({
                text: self.apps.length.toString()
            });
            chrome.browserAction.enable();
        } else {
            chrome.browserAction.setBadgeText({
                text: ''
            });
            chrome.browserAction.disable();
        }

    }

    init();
};

new SAD.Background();
