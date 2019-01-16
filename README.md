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

# Current List of Detectable Apps (272)
1. Fera.ai - https://apps.shopify.com/fera
2. Tawk.to - https://apps.shopify.com/tawk-to
3. Privy - https://apps.shopify.com/privy
4. Hextom Shipping Bar - https://apps.shopify.com/free-shipping-bar
5. PushOwl - https://apps.shopify.com/pushowl
6. Just Uno - https://apps.shopify.com/justuno-social-email-leads
7. Shogun - https://apps.shopify.com/shogun
8. Beeketing Apps (Multiple possibilites) - https://apps.shopify.com/partners/brodev
9. Omnisend - https://apps.shopify.com/omnisend
10. Smile.io - https://apps.shopify.com/smile-io
11. Mailchimp - https://apps.shopify.com/mailchimp
12. Spin‑a‑Sale - https://apps.shopify.com/spin-a-sale
13. FireApps Ali Reviews - https://apps.shopify.com/ali-reviews
14. Jilt - https://apps.shopify.com/jilt-cart-abandonment-solution
15. Conversio - https://apps.shopify.com/conversio
16. Wheelio - https://apps.shopify.com/wheelio-first-interactive-exit-intent-pop-up
17. MailChimp - https://apps.shopify.com/mailchimp-forms
18. PageFly - https://apps.shopify.com/pagefly
19. Clever Google Adwords - https://apps.shopify.com/cleverppc
20. Swell - https://apps.shopify.com/swell
21. Email Collection Bar - https://apps.shopify.com/email-collection-bar
22. Spur-i-t Popup Upsell - https://apps.shopify.com/upsell-popup-on-exit-visit
23. MailMunch - https://apps.shopify.com/mailmunch
24. Pixelpop - https://apps.shopify.com/popups-promos-banners-pixelpop
25. Zotabox (Multiple possibilites) - https://apps.shopify.com/partners/zotabox
26. WhatsApp Share + Chat - https://apps.shopify.com/whatsapp-sharing
27. OptinMate - https://apps.shopify.com/optinmate-2
28. Sumo - https://apps.shopify.com/sumome
29. Refersion - https://apps.shopify.com/refersion
30. Care Cart - https://apps.shopify.com/care-cart
31. RetargetApp - https://apps.shopify.com/retargetapp-facebook-retargeting
32. Push Nova - https://apps.shopify.com/simple-push
33. Sales Rocket - https://apps.shopify.com/window-shoppers
34. Recart - https://apps.shopify.com/recart
35. Consistent Cart - https://apps.shopify.com/consistent-cart
36. Conversion+ - https://apps.shopify.com/conversion
37. Stamped.io - https://apps.shopify.com/product-reviews-addon
38. Product Reviews - https://apps.shopify.com/product-reviews
39. Varinode - https://apps.shopify.com/ads
40. Loox - https://apps.shopify.com/loox
41. Firepush - https://apps.shopify.com/firepush
42. Frequently Bought Together - https://apps.shopify.com/frequently-bought-together
43. LimeSpot - https://apps.shopify.com/limespot
44. McAfee SECURE - https://apps.shopify.com/mcafee-secure
45. Secomapp - https://apps.shopify.com/quick-view
46. Judge.me - https://apps.shopify.com/judgeme
47. Recharge - https://apps.shopify.com/subscription-payments
48. Code Black Belt Also Bought - https://apps.shopify.com/also-bought
49. Persistent Cart - https://apps.shopify.com/remember-my-cart
50. Wishy - https://apps.shopify.com/wishy
51. Bold Subscription - https://apps.shopify.com/recurring-orders
52. Bold Upsell - https://apps.shopify.com/product-upsell
53. Yotpo - https://apps.shopify.com/yotpo-social-reviews
54. Bizzy - https://apps.shopify.com/bizzy-social-proof
55. MPS Buy Me - https://apps.shopify.com/mps-buy-me
56. Nexusmedia-ua Product Options - https://apps.shopify.com/product-options
57. Express Reviews - https://apps.shopify.com/express-reviews
58. East Side Co Cart Convert - https://apps.shopify.com/cart-convert
59. SMAR7 - https://apps.shopify.com/smar7-bundle-upsell
60. Supr-i-t Aban. Cart Rem. - https://apps.shopify.com/abandoned-cart-reminder
61. Gift Wizard - https://apps.shopify.com/giftwizard
62. Csell - https://apps.shopify.com/cross-sell
63. Enorm Photo Reviews - https://apps.shopify.com/product-photo-reviews-by-enormapps
64. In Cart Upsell - https://apps.shopify.com/in-cart-upsell
65. Spur-i-t Social Proof - https://apps.shopify.com/social-proof-urgency
66. Recovermycart - https://apps.shopify.com/recover-my-cart
67. MinMaxify Order Limits - https://apps.shopify.com/order-limits-minmaxify
68. Zotabox Social Sharing - https://apps.shopify.com/social-buttons
69. Cartback - https://apps.shopify.com/fb-messenger-remarketing
70. Apps2grow.us Shop Instagram - https://apps.shopify.com/instagram-photos
71. Expertvillagemedia.com Instagram Feed & Gallery - https://apps.shopify.com/instagram-feed
72. Covet.pics - https://apps.shopify.com/covet-pics
73. Shopwave Reviews Wishlist - https://apps.shopify.com/socialshopwave
74. Oxi Social Login - https://apps.shopify.com/oxi-social-login
75. Kudobuzz - https://apps.shopify.com/kudobuzz-testimonials
76. AddThis Share Buttons - https://apps.shopify.com/addthis-sharing-tool
77. InstaShow or Yottie - https://apps.shopify.com/instashow
78. Foursixty.com Shoppable Instagram - https://apps.shopify.com/foursixty
79. Dvcloudsoftware.com Instagram In‑Shop - https://apps.shopify.com/instagram-in-shop
80. Web Desk Solution Smart Social Login - https://apps.shopify.com/smart-social-login
81. Powr.io (Multiple possibilites) - https://apps.shopify.com/partners/powr-io
82. 99Commerce  Instagram Feed - https://apps.shopify.com/snapzy-the-instagram-feed
83. Zotabox Social Mobile Share Bar - https://apps.shopify.com/mobile-messaging-social-share-bar
84. Widgetic - https://apps.shopify.com/facebook-like-by-widgetic
85. AAAE Instagram Shop - https://apps.shopify.com/insta-feed
86. Leadslide Social Media Tabs - https://apps.shopify.com/social-media-tabs
87. Okas Open SignIn - https://apps.shopify.com/open-signin
88. Zestard Twitter Feed - https://apps.shopify.com/twitter-feed
89. Autoketing Facebook Chat - https://apps.shopify.com/facebook-chat-box
90. Elfsight Instagram - https://apps.shopify.com/elfsight-shoppable-feed
91. Likebtn.com - https://apps.shopify.com/like-button-rating
92. Sketch ThemesInstagram Feed - https://apps.shopify.com/instagram-feed-by-sketch-themes
93. Sprbot Instagram Shop Feed - https://apps.shopify.com/dev-instagram-sell-1
94. TagTray - https://apps.shopify.com/tagtray
95. Code Back Belt Facebook Image Gallery - https://apps.shopify.com/facebook-image-gallery
96. CFF Shareable Cart - https://apps.shopify.com/portable-cart
97. Green Frog Instagram - https://apps.shopify.com/greenfrog-instashow
98. Roar Social Caller - https://apps.shopify.com/social-caller
99. Swym.it Wishlist Plus - https://apps.shopify.com/swym-relay
100. Tidio - https://apps.shopify.com/tidio-chat
101. Chilli Abandonment Protector - https://apps.shopify.com/linkerfriend-lead-management-tools
102. AWIO - https://apps.shopify.com/improved-contact-form
103. WhatsHelp.io - https://apps.shopify.com/whatshelp-chat-button
104. Zotabox FB Chat - https://apps.shopify.com/facebook-messenger-live-chat
105. Chatra - https://apps.shopify.com/chatra
106. Hulk Contact Us Form - https://apps.shopify.com/contact-us-by-hulkapps
107. AAAE Form Builder - https://apps.shopify.com/form-builder
108. Zendesk Support - https://apps.shopify.com/zendesk
109. Re:amaze - https://apps.shopify.com/reamaze
110. Orderify - https://apps.shopify.com/orderify
111. Etoile Ultimate FAQ - https://apps.shopify.com/ultimate-faqs
112. Zendesk Chat - https://apps.shopify.com/zendeskchatplus
113. Customer.guru Facebook Chat - https://apps.shopify.com/facebook-chat-2-0
114. Pure Chat - https://apps.shopify.com/pure-chat
115. Jivo Omnichannel Suite - https://apps.shopify.com/jivochat
116. W3Trends Custom Order Status - https://apps.shopify.com/ultimate-order-status
117. Mageworx Product Fees/Charges - https://apps.shopify.com/product-fees
118. Unionworks Google Reviews - https://apps.shopify.com/easy-google-customer-reviews
119. Intercom - https://apps.shopify.com/intercom
120. Free Call - https://apps.shopify.com/free-call
121. Two Zillas Tracking Genie - https://apps.shopify.com/trackinggenie
122. Roartheme Live Chat Tracking - https://apps.shopify.com/facebook-messenger-live-chat-tracking
123. Spice Gems Returns - https://apps.shopify.com/return-management-system
124. Raven Callback Request - https://apps.shopify.com/raven
125. Formilla Live Chat - https://apps.shopify.com/formilla-live-chat
126. Powerful Form Builder - https://apps.shopify.com/powerful-form-builder
127. Delivery Date Range - https://apps.shopify.com/delivery-date-range
128. EastSideCo Forms - https://apps.shopify.com/contact-forms-1
129. Wholesale Simplified - https://apps.shopify.com/wholesale-simplified
130. Develic Maps - https://apps.shopify.com/maps-by-develic
131. Estimated Delivery Date - https://apps.shopify.com/estimated-delivery-date
132. Easy GDPR - https://apps.shopify.com/easy-gdpr
133. Shophero - https://apps.shopify.com/shophero
134. Smart Search - https://apps.shopify.com/searchanise
135. Hubspot - https://apps.shopify.com/hubspot
136. Exto - https://apps.shopify.com/automatic-related-products
137. Back in Stock - https://apps.shopify.com/back-in-stock
138. SLoyalty - https://apps.shopify.com/s-loyalty
139. Trackify - https://apps.shopify.com/trackify-1
140. Adroll - https://apps.shopify.com/adroll-retargeting
141. Carts Guru - https://apps.shopify.com/cartsguru
142. East Side Co Back In Stock - https://eastsideco.com/shopify-apps
143. LeadDyno - https://apps.shopify.com/leaddyno
144. Signifyd - https://apps.shopify.com/signifyd
145. ShopMessage - https://apps.shopify.com/shopmessage
146. Smart Wishlist - https://apps.shopify.com/smart-wishlist
147. Hypervisual - https://apps.shopify.com/hypervisual
148. Fomo - https://apps.shopify.com/fomo
149. Currency Converter - https://apps.shopify.com/doubly-currency-converter
150. Klaviyo - https://apps.shopify.com/klaviyo-email-marketing
151. Credible - https://apps.shopify.com/credible
152. Discount Direct - https://apps.shopify.com/discount-direct
153. Affiliatly - https://apps.shopify.com/affiliatly
154. Product Filter - https://apps.shopify.com/product-filter-search
155. Hive - https://apps.shopify.com/hive
156. Nosto - https://apps.shopify.com/nosto-personalization-for-shopify
157. Coin - https://apps.shopify.com/coin
158. Riskified - https://www.riskified.com
159. Upsell X - https://apps.shopify.com/direct-upsell-by-eri
160. Retention Rocket - https://retentionrocket.com/
161. Appifiny - https://apps.shopify.com/recently
162. Octane AI Messenger - https://apps.shopify.com/octane-ai-messenger-marketing
163. GeoIP Country Redirect - https://apps.shopify.com/geoip-country-redirect
164. Please Stay - https://apps.shopify.com/please-stay
165. NeatTracker - https://apps.shopify.com/neattracker
166. Automatic Discount - https://apps.shopify.com/automatic-discount-rules
167. Cart Notifications - https://apps.shopify.com/cart-notifications
168. SimplyTick - https://apps.shopify.com/simplytick
169. Free Gifts - https://apps.shopify.com/freegifts
170. Bold Sales Motivator - https://apps.shopify.com/the-motivator
171. Product Labels - https://apps.shopify.com/product-labels
172. Order Deadline - https://apps.shopify.com/order-deadline
173. GDPR Banner - https://apps.shopify.com/smart-eu-cookie-banner
174. Dealio - https://apps.shopify.com/dealio-gamified-product-page-up-sell-app
175. Custom Pricing - https://apps.shopify.com/customer-pricing
176. Easy Messenger - https://apps.shopify.com/easymessenger-livechat-messenger-as-a-live-chat
177. Code Black Belt Currency Converter - https://apps.shopify.com/currency-converter-plus
178. TrustBadges - https://apps.shopify.com/trust-by-kamozi
179. Appsolve Trustful - https://apps.shopify.com/trust-seals-badges
180. Bold Quantity Break - https://apps.shopify.com/quantity-breaks
181. Shopper & Stock Counter - https://apps.shopify.com/pressure-cooker
182. Recomify - https://apps.shopify.com/recomify
183. Bought Together - https://apps.shopify.com/product-bundles-by-vitals
184. Sales Pop - https://apps.shopify.com/sales-pop-master
185. Sales Notification - https://apps.shopify.com/mps-sales-notification
186. Trust Badge - https://apps.shopify.com/trust-badge
187. Trust Hero - https://apps.shopify.com/trust-hero
188. Full Page Zoom - https://apps.shopify.com/full-page-zoom
189. Checkout Share - https://apps.shopify.com/checkout-share
190. ReCharge - https://apps.shopify.com/subscription-payments
191. Klarna Payments - https://www.klarna.com/international/business/shopify
192. Back in Stock Alerts - https://apps.shopify.com/in-stock-reminder
193. Analytics - https://gator.io
194. Recomatic Related Products - https://apps.shopify.com/recomatic
195. Pixel Union Countdown - https://apps.shopify.com/countdown-timers
196. Loyalty Rewards - https://apps.shopify.com/referral-loyalty
197. EggViews - https://apps.shopify.com/eggviews
198. Sales Booster - https://apps.shopify.com/checkout-booster
199. Kount - https://kount.com
200. Multi Vendor - https://apps.shopify.com/multi-vendor-marketplace
201. Pixlee - https://apps.shopify.com/pixlee
202. Infinite Options - https://apps.shopify.com/custom-options
203. Variant Image Automator - https://apps.shopify.com/variant-image-automator
204. Variant Descriptions - https://apps.shopify.com/variant-descriptions-by-starapps
205. Announcement Bar - https://apps.shopify.com/quick-announcement-bar-always-keep-your-customers-informed
206. Ultimate Sales Boost - https://apps.shopify.com/ultimate-sales-boost
207. PartnerStack - https://apps.shopify.com/growsumo
208. Preorderly - https://apps.shopify.com/preorderly
209. Messenger - https://apps.shopify.com/messenger
210. Shipping Rates Calculator - https://apps.shopify.com/shipping-rates-calculator-plus
211. NS8 Visitors - https://apps.shopify.com/visitors
212. Shoelace Retargeting Journeys - https://apps.shopify.com/shoelace-retargeting
213. Quantity Discount - https://apps.shopify.com/pricing-by-quantity
214. Sticky Add To Cart  - https://apps.shopify.com/sticky-add-to-cart-bar
215. Product Accessories - https://apps.shopify.com/product-accessories
216. Tobi - https://apps.shopify.com/tobi
217. Gift Reggie - https://apps.shopify.com/gift-reggie-by-eshop-admin
218. Bold Brain - https://apps.shopify.com/the-bold-brain
219. OptiMonk - https://apps.shopify.com/optimonk
220. NoFraud - https://apps.shopify.com/nofraud-chargeback-prevention-and-protection
221. Product Customizer - https://apps.shopify.com/product-customizer
222. Verge - https://apps.shopify.com/seo-json-ld-boost-by-verge
223. Varinode Trust - https://apps.shopify.com/trust
224. Pre‑Order Hero - https://apps.shopify.com/pre-order-hero
225. Custom Product Options - https://apps.shopify.com/best-custom-product-options
226. Globo - https://apps.shopify.com/straight-to-checkout-skip-cart
227. Skip Cart - https://apps.shopify.com/skip-cart-the-fast-way-to-checkout
228. Metrilo - https://apps.shopify.com/metrilo
229. W3 Store Locator - https://apps.shopify.com/store-locator-w3
230. Marsello Loyalty - https://apps.shopify.com/marsello
231. Uploadery - https://apps.shopify.com/uploadery
232. Cooki - https://apps.shopify.com/cooki
233. Giftship - https://apps.shopify.com/giftship
234. EasyVideo - https://apps.shopify.com/easyvideo
235. Email Before Download - https://apps.shopify.com/email-before-download
236. Pixel Perfect - https://apps.shopify.com/pixel-perfect
237. Teelaunch - https://apps.shopify.com/teelaunch-1
238. Timer Plus - https://apps.shopify.com/timer-plus
239. JetPrint Fulfillment - https://apps.shopify.com/jetprint-fulfillment
240. Uplinkly - https://apps.shopify.com/sticky-cart-by-uplinkly
241. Smart Push Marketing - https://apps.shopify.com/web-push-notification
242. Yeps - https://apps.shopify.com/yeps-io
243. Instagram Feed - https://apps.shopify.com/instafeed
244. ID Discount - https://apps.shopify.com/military-discount
245. AuthentiPix - https://apps.shopify.com/instagration
246. Sky Pilot - https://apps.shopify.com/sky-pilot
247. Carts Guru - https://apps.shopify.com/cartsguru
248. Kiwi Size Chart - https://apps.shopify.com/kiwi-sizing
249. Shop The Look - https://apps.shopify.com/shop-the-look-4
250. Smart eu cookie banner - https://apps.shopify.com/smart-eu-cookie-banner
251. Broadcast Bar - https://apps.shopify.com/broadcast-bar
252. Getbread - https://shopify.getbread.com
253. ReConvert - https://apps.shopify.com/reconvert
254. Sales Countdown Timer - https://apps.shopify.com/sales-countdown-timer-bar
255. Klevu Search - https://apps.shopify.com/klevu-smart-search
256. AdNabu - https://apps.shopify.com/partners/adnabu-inc
257. Pop‑Up Builder - https://apps.shopify.com/pop-up-builder
258. Add to cart button - https://apps.shopify.com/add-to-cart
259. Sky Watcher - https://apps.shopify.com/sky-watcher
260. ProFit - https://apps.shopify.com/alomafit-vfr-light-1
261. XE Currency Converter - https://apps.shopify.com/xe-currency-converter
262. All‑in‑one Bar - https://apps.shopify.com/all-in-one-bar
263. Sitejabber - https://apps.shopify.com/sitejabber-free-store-reviews-traffic-leads
264. Multi Currency Converter - https://apps.shopify.com/multi-currency-converter
265. Cool Image Magnifier - https://apps.shopify.com/cool-image-magnifier
266. Bold Loyalty Points - https://apps.shopify.com/loyalty-points-by-bold
267. App1pro - https://apps.shopify.com/related-products-pro
268. Leadslide (Multiple possibilites) - https://apps.shopify.com/partners/developer-dd332b77623f4d86
269. Seguno - https://apps.shopify.com/coupon-banner-with-countdown-carousel
270. Countdown Timer - https://apps.shopify.com/cowntdown-timer-by-revy
271. Revy UpSell - https://apps.shopify.com/sales-booster-upsell-cross-sell-by-revy-shopify-apps
272. Hide PayPal in Cart - https://apps.shopify.com/hide-paypal-in-cart

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
5. Visit https://github.com/feracommerce/shpoify_app_detector and you'll see an option to create a pull request from your forked branch to the master. Create a pull request.
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

