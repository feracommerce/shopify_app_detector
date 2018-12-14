SAD.Popup = function(opts) {
    opts = opts || {};
    var self = this;

    var $themeSummary, $themeCustomNameContainer, $customName, $themeName, $fullyCustomTheme, $existingTheme, $fullyCustomThemeNameSection;

    var init = function() {
         self.apps = [];

        chrome.runtime.onMessage.addListener(function(msgObj) {
            if (msgObj.action == 'setApps') {
              self.apps = msgObj.apps;
              self.detectableApps = msgObj.detectableApps;
              self.detectableThemes = msgObj.detectableThemes;
              self.theme = msgObj.theme;
              self.displayApps();
            } else if (msgObj.action == 'setLoading') {
                $('#appsTable').css('opacity', 0.5);
            }
         });

         chrome.runtime.sendMessage({ action: "getApps"});
    };

    self.displayApps = function() {
        var $table = $('#appsTable');
        var $body = $table.find('tbody');
        var $num = $('.num-detections');

        updateDetectableCounts();

        showThemeDetection();

        generateTable($body);

        $num.html(self.apps.length + " app" + (self.apps.length == 1 ? '' : 's'));

        if (self.apps.length < 1) {
            $table.hide();
        } else {
            $table.css('opacity', 1);
            $table.show();
        }
    }

    // Private Methods //

    var selectDocumentElements = function() {
        $themeSummary = $('.theme-statement');
        $themeCustomNameContainer = $('.theme-custom-name-container');
        $customName = $('.theme-custom-name');
        $themeName = $('.theme-name');
        $fullyCustomTheme = $('.fully-custom-theme');
        $existingTheme = $('.existing-theme');
        $fullyCustomThemeNameSection = $('.theme-custom-name-section');
    };

    var showThemeDetection = function() {
        selectDocumentElements();

        if (self.theme) {
            $themeSummary.show();

            if (self.theme.fully_custom) {
                $fullyCustomTheme.show();
                $existingTheme.hide();

                if (self.theme.custom_name && self.theme.custom_name.trim() !== '') {
                    $customName.text('"' + self.theme.custom_name.trim() + '"');
                    $fullyCustomThemeNameSection.show();
                } else {
                    $fullyCustomThemeNameSection.hide();
                }
            } else {
                $fullyCustomTheme.hide();
                $existingTheme.show();

                $themeName.text(self.theme.name);
                $themeName.attr('href', self.theme.theme_store_url);
                if (typeof self.theme.custom_name === 'string' && self.theme.custom_name.trim() !== self.theme.name.trim() && self.theme.custom_name !== '') {
                    $themeCustomNameContainer.show();
                    $customName.text('"' + self.theme.custom_name.trim() + '"');
                } else {
                    $themeCustomNameContainer.hide();
                    $customName.text('');
                }
            }
        } else {
            $themeSummary.hide();
            $themeName.text('shopify');
            $themeName.attr('href', '#');
        }
    };

    var displayFullyCustomTheme = function() {
        // TODO
    };
    var displayExistingTheme = function() {
        // TODO
    };

    var hideThemeDetection = function() {
        $themeSummary.hide();
        $themeName.text('shopify');
        $themeName.attr('href', '#');
    };

    var updateDetectableCounts = function() {
        if (self.detectableApps) {
            $('.num-detectable-apps').text(self.detectableApps.length);
        }

        if (self.detectableThemes) {
            $('.num-detectable-themes').text(self.detectableThemes.length);
        }
    };

    var generateTable = function($body) {
        for (var i = 0; i < self.apps.length; i++) {
            $body.append(generateTableRow(i, self.apps[i]));
        }
    };

    var generateTableRow = function(i, app) {
        return '<tr class="app-row">' +
                    '<td class="app-name">' + 
                      '<span class="app-num">' + (i + 1) + '. </span>' + app.name + '</div>' +
                    '</td>' +
                    '<td>' + app.short_description + '</td>' +
                    '<td>' +
                      '<div class="app-links">' + 
                        (app.website_url && app.website_url !== '' ? (' <a href="' + app.website_url + '?ref=fera_ai_app_detector" target="website_' + i + '">website</a>') : '') + 
                        '<a href="' + app.app_store_url + '?ref=fera_ai_app_detector" target="_blank">app store</a>' + 
                      '</div>' +
                    '</td>' +
                '</tr>';
    };

    init();
};

new SAD.Popup();
