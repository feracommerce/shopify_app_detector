SAD.Popup = function(opts) {
    opts = opts || {};
    var self = this;

    var init = function() {

         self.apps = [];

        chrome.runtime.onMessage.addListener(function(msgObj) {
            console.log("Got message: ", msgObj);

            if (msgObj.action == 'setApps') {
              self.apps = msgObj.apps;
              self.displayApps();
            }
         });

         chrome.runtime.sendMessage({ action: "getApps"});


    };

    self.displayApps = function() {
        for (var i = 0; i < self.apps.length; i++) {
            var app = self.apps[i];
            $('#AppsDetected').append('<div class="detectedApp">' + app.name + '</div>');
        }

        if (self.apps.length < 1) {
            $('#AppsDetected') .html('<div class="noAppsCaption">No apps detected.</div>');
        }
    }

    init();
};

new SAD.Popup();
