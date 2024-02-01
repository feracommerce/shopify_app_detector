# Fera.ai Shopify App Detector
This is a Chrome extension that lets you detect what Shopify apps a store is running in **its frontend**. It also tells you which theme the store is running.

Note: This cannot (and probably _should_ not) detect back-end apps that a store is running unless those apps include scripts or unique components in the frontend.

<img src="https://uploads.fera.ai/shopify_app_detector/Shopify+App+Detector+5.1.0+Screenshot.png?v=1" height="500">

# Installation
### From the chrome app store
To install the app simply visit the chrome app store: https://chrome.google.com/webstore/detail/feraai-shopify-app-detect/lhfdhjladfcmghahdbcmlceajdlbkale

### Manually
1. Download the latest packed version of the extension from here: https://uploads.fera.ai/shopify_app_detector/shopify_app_detector.crx
2. Navigate to `chrome://extensions/` in your chrome.
3. Drag and drop the file into your extensions section.

### For development
1. Clone the repo somewhere
2. Navigate to `chrome://extensions/` and turn on developer mode
3. Load unpacked extension and select the cloned repo directory

# Support
It is supported by the community and [fera.ai](https://www.fera.ai?ref=fera_ai_shopify_app_detector), a real-time personalization and conversion rate optimization platform for Shopify. Please post questions or concerns about this chrome extension [here](https://github.com/feracommerce/shopify_app_detector/issues).


# Adding an app detection
* To add an app detection, add an entry in the data/shopify_apps.js file. You can submit a pull request with the addition and one of the community contributers will update it.

## Updating theme list
* To generate a list of themes from the app store and update data/shopify_themes.js , you can use this Ruby script:
```ruby
page = 1;
list = []
while (links = Nokogiri::HTML(HTTParty.get("https://themes.shopify.com/themes?page=#{page}")).css('.grid-item--theme .theme-info a')).any?
    puts "Parsing page #{page}..."
    links.each do |link|
        list << {
            name: link.text.strip,
            theme_store_url: "https://themes.shopify.com/" + link.attributes['href'].value,
            id: link.attributes['data-trekkie-theme-id'].value.to_i,
            handle: link.attributes['data-trekkie-theme-handle'].value,
            style_id: link.attributes['data-trekkie-style-id'].value.to_i,
            style_handle: link.attributes['data-trekkie-style-handle'].value
        }
    end
    page +=1
    sleep(0.5.seconds) # To avoid rate limiting
end
puts JSON.pretty_generate(list)

```

# Current List of Detectable Apps (300)
1. 99Commerce  Instagram Feed - https://apps.shopify.com/snapzy-the-instagram-feed
1. AAAE Form Builder - https://apps.shopify.com/form-builder
1. AAAE Instagram Shop - https://apps.shopify.com/insta-feed
1. Add to cart button - https://apps.shopify.com/add-to-cart
1. AddThis Share Buttons - https://apps.shopify.com/addthis-sharing-tool
1. AdNabu - https://apps.shopify.com/partners/adnabu-inc
1. Adroll - https://apps.shopify.com/adroll-retargeting
1. Affiliatly - https://apps.shopify.com/affiliatly
1. All‑in‑one Bar - https://apps.shopify.com/all-in-one-bar
1. Analytics - https://gator.io
1. Announcement Bar - https://apps.shopify.com/1. quick-announcement-bar-always-keep-your-customers-informed
1. App1pro - https://apps.shopify.com/related-products-pro
1. Appifiny - https://apps.shopify.com/recently
1. Apps2grow.us Shop Instagram - https://apps.shopify.com/instagram-photos
1. Appsolve Trustful - https://apps.shopify.com/trust-seals-badges
1. AuthentiPix - https://apps.shopify.com/instagration
1. AutoCommerce - https://apps.shopify.com/orcinus-product-recommendation
1. Autoketing Facebook Chat - https://apps.shopify.com/facebook-chat-box
1. Automatic Discount - https://apps.shopify.com/automatic-discount-rules
1. AWIO - https://apps.shopify.com/improved-contact-form
1. Back in Stock - https://apps.shopify.com/back-in-stock
1. Back in Stock Alerts - https://apps.shopify.com/in-stock-reminder
1. Beeketing Apps (Multiple possibilites) - https://apps.shopify.com/partners/brodev
1. Bizzy - https://apps.shopify.com/bizzy-social-proof
1. Bold Brain - https://apps.shopify.com/the-bold-brain
1. Bold Loyalty Points - https://apps.shopify.com/loyalty-points-by-bold
1. Bold Product Options - https://apps.shopify.com/product-options
1. Bold Quantity Break - https://apps.shopify.com/quantity-breaks
1. Bold Sales Motivator - https://apps.shopify.com/the-motivator
1. Bold Subscription - https://apps.shopify.com/recurring-orders
1. Bold Upsell - https://apps.shopify.com/product-upsell
1. Bought Together - https://apps.shopify.com/product-bundles-by-vitals
1. Broadcast Bar - https://apps.shopify.com/broadcast-bar
1. Care Cart - https://apps.shopify.com/care-cart
1. Cart Activity - https://apps.shopify.com/cart-activity
1. Cart Notifications - https://apps.shopify.com/cart-notifications
1. Cartback - https://apps.shopify.com/fb-messenger-remarketing
1. Carts Guru - https://apps.shopify.com/cartsguru
1. Carts Guru - https://apps.shopify.com/cartsguru
1. CFF Shareable Cart - https://apps.shopify.com/portable-cart
1. Chatra - https://apps.shopify.com/chatra
1. Checkout Share - https://apps.shopify.com/checkout-share
1. Chilli Abandonment Protector - https://apps.shopify.com/1. linkerfriend-lead-management-tools
1. Clever Google Adwords - https://apps.shopify.com/cleverppc
1. Code Back Belt Facebook Image Gallery - https://apps.shopify.com/facebook-image-gallery
1. Code Black Belt Also Bought - https://apps.shopify.com/also-bought
1. Code Black Belt Currency Converter - https://apps.shopify.com/currency-converter-plus
1. Coin - https://apps.shopify.com/coin
1. Consistent Cart - https://apps.shopify.com/consistent-cart
1. Conversio - https://apps.shopify.com/conversio
1. Conversion+ - https://apps.shopify.com/conversion
1. Cooki - https://apps.shopify.com/cooki
1. Cool Image Magnifier - https://apps.shopify.com/cool-image-magnifier
1. Countdown Timer - https://apps.shopify.com/cowntdown-timer-by-revy
1. Covet.pics - https://apps.shopify.com/covet-pics
1. Credible - https://apps.shopify.com/credible
1. Csell - https://apps.shopify.com/cross-sell
1. Currency Converter - https://apps.shopify.com/doubly-currency-converter
1. Custom Pricing - https://apps.shopify.com/customer-pricing
1. Custom Product Options - https://apps.shopify.com/best-custom-product-options
1. Customer.guru Facebook Chat - https://apps.shopify.com/facebook-chat-2-0
1. Dealio - https://apps.shopify.com/dealio-gamified-product-page-up-sell-app
1. Delivery Date Range - https://apps.shopify.com/delivery-date-range
1. Develic Maps - https://apps.shopify.com/maps-by-develic
1. Discount Direct - https://apps.shopify.com/discount-direct
1. Dvcloudsoftware.com Instagram In‑Shop - https://apps.shopify.com/instagram-in-shop
1. East Side Co Back In Stock - https://eastsideco.com/shopify-apps
1. East Side Co Cart Convert - https://apps.shopify.com/cart-convert
1. EastSideCo Forms - https://apps.shopify.com/contact-forms-1
1. Easy GDPR - https://apps.shopify.com/easy-gdpr
1. Easy Messenger - https://apps.shopify.com/1. easymessenger-livechat-messenger-as-a-live-chat
1. EasyVideo - https://apps.shopify.com/easyvideo
1. EggViews - https://apps.shopify.com/eggviews
1. Elfsight Instagram - https://apps.shopify.com/elfsight-shoppable-feed
1. Email Before Download - https://apps.shopify.com/email-before-download
1. Email Collection Bar - https://apps.shopify.com/email-collection-bar
1. Enorm Photo Reviews - https://apps.shopify.com/product-photo-reviews-by-enormapps
1. Estimated Delivery Date - https://apps.shopify.com/estimated-delivery-date
1. Etoile Ultimate FAQ - https://apps.shopify.com/ultimate-faqs
1. EU Cookie Bar - https://apps.shopify.com/eu-cookie-bar
1. Expertvillagemedia.com Instagram Feed & Gallery - https://apps.shopify.com/1. instagram-feed
1. Express Reviews - https://apps.shopify.com/express-reviews
1. Exto - https://apps.shopify.com/automatic-related-products
1. Fera.ai - https://apps.shopify.com/fera
1. FireApps Ali Reviews - https://apps.shopify.com/ali-reviews
1. Firepush - https://apps.shopify.com/firepush
1. Fomo - https://apps.shopify.com/fomo
1. Formilla Live Chat - https://apps.shopify.com/formilla-live-chat
1. Foursixty.com Shoppable Instagram - https://apps.shopify.com/foursixty
1. Free Call - https://apps.shopify.com/free-call
1. Free Gifts - https://apps.shopify.com/freegifts
1. Frequently Bought Together - https://apps.shopify.com/frequently-bought-together
1. Full Page Zoom - https://apps.shopify.com/full-page-zoom
1. GDPR Banner - https://apps.shopify.com/smart-eu-cookie-banner
1. GDPR Cookie Compiler - https://apps.shopify.com/eu-cookie-compiler
1. GeoIP Country Redirect - https://apps.shopify.com/geoip-country-redirect
1. Getbread - https://shopify.getbread.com
1. Gift Reggie - https://apps.shopify.com/gift-reggie-by-eshop-admin
1. Gift Wizard - https://apps.shopify.com/giftwizard
1. Giftship - https://apps.shopify.com/giftship
1. Globo - https://apps.shopify.com/straight-to-checkout-skip-cart
1. Green Frog Instagram - https://apps.shopify.com/greenfrog-instashow
1. Hextom Shipping Bar - https://apps.shopify.com/free-shipping-bar
1. Hide PayPal in Cart - https://apps.shopify.com/hide-paypal-in-cart
1. Hive - https://apps.shopify.com/hive
1. Hubspot - https://apps.shopify.com/hubspot
1. Hulk Contact Us Form - https://apps.shopify.com/contact-us-by-hulkapps
1. Hypervisual - https://apps.shopify.com/hypervisual
1. ID Discount - https://apps.shopify.com/military-discount
1. In Cart Upsell - https://apps.shopify.com/in-cart-upsell
1. In‑Store Reserver - https://apps.shopify.com/reserve-in-store-by-fera
1. Infinite Options - https://apps.shopify.com/custom-options
1. Instagram Feed - https://apps.shopify.com/instafeed
1. Instant Brand Page - https://apps.shopify.com/instant-brand-page
1. InstaShow or Yottie - https://apps.shopify.com/instashow
1. Intercom - https://apps.shopify.com/intercom
1. JetPrint Fulfillment - https://apps.shopify.com/jetprint-fulfillment
1. Jilt - https://apps.shopify.com/jilt-cart-abandonment-solution
1. Jivo Omnichannel Suite - https://apps.shopify.com/jivochat
1. Judge.me - https://apps.shopify.com/judgeme
1. Just Uno - https://apps.shopify.com/justuno-social-email-leads
1. Kiwi Size Chart - https://apps.shopify.com/kiwi-sizing
1. Klarna Payments - https://www.klarna.com/international/business/shopify
1. Klaviyo - https://apps.shopify.com/klaviyo-email-marketing
1. Klevu Search - https://apps.shopify.com/klevu-smart-search
1. Kount - https://kount.com
1. Kudobuzz - https://apps.shopify.com/kudobuzz-testimonials
1. LeadDyno - https://apps.shopify.com/leaddyno
1. Leadslide (Multiple possibilites) - https://apps.shopify.com/partners/1. developer-dd332b77623f4d86
1. Leadslide Social Media Tabs - https://apps.shopify.com/social-media-tabs
1. Lifter Apps Pop‑Up Window - https://apps.shopify.com/pop-up-window
1. Likebtn.com - https://apps.shopify.com/like-button-rating
1. LimeSpot - https://apps.shopify.com/limespot
1. Loox - https://apps.shopify.com/loox
1. Loyalty Rewards - https://apps.shopify.com/referral-loyalty
1. Mageworx Advanced Bundle Products - https://apps.shopify.com/grouped-products
1. Mageworx Product Fees/Charges - https://apps.shopify.com/product-fees
1. Mailchimp - https://apps.shopify.com/mailchimp
1. MailChimp - https://apps.shopify.com/mailchimp-forms
1. MailMunch - https://apps.shopify.com/mailmunch
1. Marsello Loyalty - https://apps.shopify.com/marsello
1. McAfee SECURE - https://apps.shopify.com/mcafee-secure
1. Message Mate Texting Platform - https://apps.shopify.com/message-mate
1. Messenger - https://apps.shopify.com/messenger
1. Metrilo - https://apps.shopify.com/metrilo
1. MinMaxify Order Limits - https://apps.shopify.com/order-limits-minmaxify
1. MPS Buy Me - https://apps.shopify.com/mps-buy-me
1. Multi Currency Converter - https://apps.shopify.com/multi-currency-converter
1. Multi Vendor - https://apps.shopify.com/multi-vendor-marketplace
1. NDNAPPS Banner Slider - https://apps.shopify.com/banner-slider-1
1. NeatTracker - https://apps.shopify.com/neattracker
1. Nextsale - https://apps.shopify.com/nextsale
1. NoFraud - https://apps.shopify.com/nofraud-chargeback-prevention-and-protection
1. Nosto - https://apps.shopify.com/nosto-personalization-for-shopify
1. NS8 Visitors - https://apps.shopify.com/visitors
1. Octane AI Messenger - https://apps.shopify.com/octane-ai-messenger-marketing
1. Okas Open SignIn - https://apps.shopify.com/open-signin
1. Omega Instant Search - https://apps.shopify.com/omega-instant-search
1. Omnisend - https://apps.shopify.com/omnisend
1. OptiMonk - https://apps.shopify.com/optimonk
1. OptinMate - https://apps.shopify.com/optinmate-2
1. Order Deadline - https://apps.shopify.com/order-deadline
1. Orderify - https://apps.shopify.com/orderify
1. OrderLogic - https://apps.shopify.com/orderlogic
1. Oxi Social Login - https://apps.shopify.com/oxi-social-login
1. PageFly - https://apps.shopify.com/pagefly
1. Panda Language Translate - https://apps.shopify.com/translate
1. PartnerStack - https://apps.shopify.com/growsumo
1. Persistent Cart - https://apps.shopify.com/remember-my-cart
1. Pixel Perfect - https://apps.shopify.com/pixel-perfect
1. Pixel Union Countdown - https://apps.shopify.com/countdown-timers
1. Pixel Union Ultimate Special Offers - https://apps.shopify.com/special-offers
1. Pixelpop - https://apps.shopify.com/popups-promos-banners-pixelpop
1. Pixlee - https://apps.shopify.com/pixlee
1. Please Stay - https://apps.shopify.com/please-stay
1. Pop‑Up Builder - https://apps.shopify.com/pop-up-builder
1. Post Purchase Upselly - https://apps.shopify.com/upsell-pop
1. Powerful Form Builder - https://apps.shopify.com/powerful-form-builder
1. Powr.io (Multiple possibilites) - https://apps.shopify.com/partners/powr-io
1. Pre‑Order Hero - https://apps.shopify.com/pre-order-hero
1. Preorderly - https://apps.shopify.com/preorderly
1. Privy - https://apps.shopify.com/privy
1. Product Accessories - https://apps.shopify.com/product-accessories
1. Product Customizer - https://apps.shopify.com/product-customizer
1. Product Discount - https://apps.shopify.com/discount-master
1. Product Filter - https://apps.shopify.com/product-filter-search
1. Product Labels - https://apps.shopify.com/product-labels
1. Product Reviews - https://apps.shopify.com/product-reviews
1. ProFit - https://apps.shopify.com/alomafit-vfr-light-1
1. Pure Chat - https://apps.shopify.com/pure-chat
1. Push Nova - https://apps.shopify.com/simple-push
1. PushOwl - https://apps.shopify.com/pushowl
1. Quantity Discount - https://apps.shopify.com/pricing-by-quantity
1. Raven Callback Request - https://apps.shopify.com/raven
1. Re:amaze - https://apps.shopify.com/reamaze
1. Recart - https://apps.shopify.com/recart
1. Recharge - https://apps.shopify.com/subscription-payments
1. ReCharge - https://apps.shopify.com/subscription-payments
1. Recomatic Related Products - https://apps.shopify.com/recomatic
1. Recomify - https://apps.shopify.com/recomify
1. ReConvert - https://apps.shopify.com/reconvert
1. Recovermycart - https://apps.shopify.com/recover-my-cart
1. Refersion - https://apps.shopify.com/refersion
1. RetargetApp - https://apps.shopify.com/retargetapp-facebook-retargeting
1. Retention Rocket - https://retentionrocket.com/
1. Revy Unlimited Bundles and Discounts - https://apps.shopify.com/1. product-bundles-discounts-by-revy
1. Revy UpSell - https://apps.shopify.com/1. sales-booster-upsell-cross-sell-by-revy-shopify-apps
1. Riskified - https://www.riskified.com
1. Roar Social Caller - https://apps.shopify.com/social-caller
1. Roartheme Live Chat Tracking - https://apps.shopify.com/1. facebook-messenger-live-chat-tracking
1. Sales Booster - https://apps.shopify.com/checkout-booster
1. Sales Countdown Timer - https://apps.shopify.com/sales-countdown-timer-bar
1. Sales Notification - https://apps.shopify.com/mps-sales-notification
1. Sales Notifications pop up - https://apps.shopify.com/livebar
1. Sales Pop - https://apps.shopify.com/sales-pop-master
1. Sales Pop up Notifications - https://apps.shopify.com/1. recent-sales-popup-notifications-1
1. Sales Rocket - https://apps.shopify.com/window-shoppers
1. Secomapp - https://apps.shopify.com/quick-view
1. Secomapp Currency Switcher - https://apps.shopify.com/currency-switcher
1. Seguno - https://apps.shopify.com/coupon-banner-with-countdown-carousel
1. Shipping Rates Calculator - https://apps.shopify.com/shipping-rates-calculator-plus
1. Shoelace Retargeting Journeys - https://apps.shopify.com/shoelace-retargeting
1. Shogun - https://apps.shopify.com/shogun
1. Shop The Look - https://apps.shopify.com/shop-the-look-4
1. Shophero - https://apps.shopify.com/shophero
1. ShopMessage - https://apps.shopify.com/shopmessage
1. Shopper & Stock Counter - https://apps.shopify.com/pressure-cooker
1. Shopwave Reviews Wishlist - https://apps.shopify.com/socialshopwave
1. Signifyd - https://apps.shopify.com/signifyd
1. SimplyTick - https://apps.shopify.com/simplytick
1. Sitejabber - https://apps.shopify.com/sitejabber-free-store-reviews-traffic-leads
1. Sketch ThemesInstagram Feed - https://apps.shopify.com/instagram-feed-by-sketch-themes
1. Skip Cart - https://apps.shopify.com/skip-cart-the-fast-way-to-checkout
1. Sky Pilot - https://apps.shopify.com/sky-pilot
1. Sky Watcher - https://apps.shopify.com/sky-watcher
1. SLoyalty - https://apps.shopify.com/s-loyalty
1. SMAR7 - https://apps.shopify.com/smar7-bundle-upsell
1. Smart eu cookie banner - https://apps.shopify.com/smart-eu-cookie-banner
1. Smart Push Marketing - https://apps.shopify.com/web-push-notification
1. Smart Search - https://apps.shopify.com/searchanise
1. Smart Wishlist - https://apps.shopify.com/smart-wishlist
1. Smile.io - https://apps.shopify.com/smile-io
1. Spice Gems Returns - https://apps.shopify.com/return-management-system
1. Spin‑a‑Sale - https://apps.shopify.com/spin-a-sale
1. Sprbot Instagram Shop Feed - https://apps.shopify.com/dev-instagram-sell-1
1. Spur-i-t Popup Upsell - https://apps.shopify.com/upsell-popup-on-exit-visit
1. Spur-i-t Social Proof - https://apps.shopify.com/social-proof-urgency
1. Stamped.io - https://apps.shopify.com/product-reviews-addon
1. Sticky Add To Cart  - https://apps.shopify.com/sticky-add-to-cart-bar
1. Sumo - https://apps.shopify.com/sumome
1. Supr-i-t Aban. Cart Rem. - https://apps.shopify.com/abandoned-cart-reminder
1. Swell - https://apps.shopify.com/swell
1. Swym.it Wishlist Plus - https://apps.shopify.com/swym-relay
1. TagTray - https://apps.shopify.com/tagtray
1. Tawk.to - https://apps.shopify.com/tawk-to
1. Teelaunch - https://apps.shopify.com/teelaunch-1
1. Tidio - https://apps.shopify.com/tidio-chat
1. Tidio.co - https://apps.shopify.com/tidio-chat
1. Timer Plus - https://apps.shopify.com/timer-plus
1. Tobi - https://apps.shopify.com/tobi
1. Trackify - https://apps.shopify.com/trackify-1
1. Trust Badge - https://apps.shopify.com/trust-badge
1. Trust Badge Master - https://apps.shopify.com/badge-master-by-hulkapps
1. Trust Hero - https://apps.shopify.com/trust-hero
1. TrustBadges - https://apps.shopify.com/trust-by-kamozi
1. Two Zillas Tracking Genie - https://apps.shopify.com/trackinggenie
1. Ultimate Sales Boost - https://apps.shopify.com/ultimate-sales-boost
1. Ultimate Upsell - https://apps.shopify.com/ultimate-upsell
1. Unionworks Google Reviews - https://apps.shopify.com/easy-google-customer-reviews
1. Uplinkly - https://apps.shopify.com/sticky-cart-by-uplinkly
1. Uploadery - https://apps.shopify.com/uploadery
1. Upsell Cross‑Sell - https://apps.shopify.com/upsell-cross-sell-smart-tool
1. Upsell KAD Systems - https://apps.shopify.com/upsell-system
1. Upsell X - https://apps.shopify.com/direct-upsell-by-eri
1. Variant Descriptions - https://apps.shopify.com/variant-descriptions-by-starapps
1. Variant Image Automator - https://apps.shopify.com/variant-image-automator
1. Varinode - https://apps.shopify.com/ads
1. Varinode Trust - https://apps.shopify.com/trust
1. Verge - https://apps.shopify.com/seo-json-ld-boost-by-verge
1. Volume and Tiered Discounts - https://apps.shopify.com/volume-discount-by-hulkapps
1. W3 Store Locator - https://apps.shopify.com/store-locator-w3
1. W3Trends Custom Order Status - https://apps.shopify.com/ultimate-order-status
1. Web Desk Solution Smart Social Login - https://apps.shopify.com/smart-social-login
1. WhatsApp Share + Chat - https://apps.shopify.com/whatsapp-sharing
1. WhatsHelp.io - https://apps.shopify.com/whatshelp-chat-button
1. Wheelio - https://apps.shopify.com/wheelio-first-interactive-exit-intent-pop-up
1. Wholesale Simplified - https://apps.shopify.com/wholesale-simplified
1. Widgetic - https://apps.shopify.com/facebook-like-by-widgetic
1. Wishy - https://apps.shopify.com/wishy
1. WooHoo - https://apps.shopify.com/woohoo
1. XE Currency Converter - https://apps.shopify.com/xe-currency-converter
1. Yeps - https://apps.shopify.com/yeps-io
1. Yotpo - https://apps.shopify.com/yotpo-social-reviews
1. Zendesk Chat - https://apps.shopify.com/zendeskchatplus
1. Zendesk Support - https://apps.shopify.com/zendesk
1. Zestard Twitter Feed - https://apps.shopify.com/twitter-feed
1. Zotabox (Multiple possibilites) - https://apps.shopify.com/partners/zotabox
1. Zotabox FB Chat - https://apps.shopify.com/facebook-messenger-live-chat
1. Zotabox Social Mobile Share Bar - https://apps.shopify.com/1. mobile-messaging-social-share-bar
1. Zotabox Social Sharing - https://apps.shopify.com/social-buttons

# Contributing to the Repo

### Setting Up Local Development
To work on the code simply:
1. Pull down the repo somewhere
2. Navigate to [chrome://extensions/](chrome://extensions/)
3. On the top right flip the switch to turn on developer mode.
4. Click on Load Unpacked Extension and select the directory that contains this repo's code.

### How to contribute
To contribute to the repository:

1. Fork the repository.
2. Clone the forked repository locally.
3. Create a branch descriptive of your work. For example "my_new_feature_xyz".
4. When you're done work, push up that branch to **your own forked repository** (not the feracommerce/shpoify_app_detector one).
5. Visit https://github.com/feracommerce/shopify_app_detector and you'll see an option to create a pull request from your forked branch to the master. Create a pull request.
6. Fill out the pull request template with everything it asks for and assign the pull request to someone to review.
7. Set the reviewee as yourself and the requested reviewer as whomever you want to review your PR.
8. Once the PR merges into master then it is ready for production and should be treated as such. It will be deployed to staging within minutes.


Henceforth the root master repo (`feracommerce/shpoify_app_detector`) will be referred to as `upstream` and your own fork will be referred to as `origin`.

For example if you're working on `some_large_feature_x` you could create the branch, push to `upstream/some_large_feature_x` and then developer A and developer B can both submit PRs against `upstream/some_large_feature_x`.
Then when that feature is ready for merge into master, you just submit a single PR from `upstream/some_large_feature_x` to `upstream/master`


### Getting your PR approved
A few key things to note:
* PRs must pass the test suite before they can be merged (using Side CI). It will tell you in the Pull Request whether it is OK to merge yet.
* PRs must be approved by at least one requested reviewers before you can merge.
* After you implement changes requested from a reviewer then post back with a :recycle: to say something like `:recyle: Ready for you to look again at it please.`. **Note:** If you do not do this then you PR may not ever get re-reviewed after comments are taken into acocunt.
* If a PR comment starts with a :beer: `:beer:` then it is just a suggestion and preference of the reviewer and the comment is NON-blocking. That is, your PR may still be approved with these comments.
* If a PR comment starts with a :tipping_hand_man: `:tipping_hand_man:` then it is just informative and requires no action. It's like a "FYI"
* All other PR comments probably need to be addressed unless otherwise agreed by the reviewer.
* After a PR has been approved then you are free to merge.
* For contractors, your PR must be approved and merged before you may bill for your work on that component.
* PR reviews will happen ASAP but generally within 24 hours.


### Making a release
For now the maintainers of the repo can only make a release public, but they will follow the following steps:
1. Update the version in manifest.json
2. Zip the package and upload it to the chrome extension store.

## JavaScript Style Guide
We use an object-oriented approach to JavaScript (as object-oriented as we can).

Use four spaces for JavaScript. Use the following style guide: https://github.com/airbnb/javascript

Use [JSDoc](http://usejsdoc.org/about-getting-started.html) to document methods inside JavaScript classes.

