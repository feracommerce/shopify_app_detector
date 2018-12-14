// Last updated December 14, 2018.
var SHOPIFY_APPS = [
    {
        name: 'Fera.ai', // Keep this under 20 characters
        short_description: 'Real-time personalization (timers, social proof, counters, etc.)',  // Keep this under 75 characters
        long_description: 'Real-time personalization and conversion rate optimization platform with built-in promo bars, popups, timers, social proof, counters, etc.', 
        app_store_url: 'https://apps.shopify.com/fera', 
        website_url: "https://www.fera.ai",
        script_pattern: "bananastand.js",
        category: "Sales"
    },
    {
        name: "Tawk.to",
        short_description: "Live chat",
        app_store_url: "https://apps.shopify.com/tawk-to",
        website_url: "https://www.tawk.to",
        script_pattern: "embed.tawk.to",
        category: "Customer service"
    },
    {
        name: "Privy",
        short_description: "Free email popups, exit intent, targeted modals, wheels & more",
        app_store_url: "https://apps.shopify.com/privy",
        website_url: "https://www.privy.com",
        script_pattern: "shopify.privy.com/widget.js",
        category: "Marketing"
    },
    {
        name: "Hextom Shipping Bar",
        short_description: "Free shipping bar with updated cart goal to boost order value",
        app_store_url: "https://apps.shopify.com/free-shipping-bar",
        website_url: "https://hextom.com",
        script_pattern: "lastsecondcoupon/js/freeshippingbar.js",
        category: "Marketing"
    },
    {
        name: "PushOwl",
        short_description: "Recover Abandoned Carts via Push Notifications",
        app_store_url: "https://apps.shopify.com/pushowl",
        website_url: "https://pushowl.com",
        script_pattern: "sdks/pushowl-shopify.js",
        category: "Marketing"
    },
    {
        name: "Just Uno",
        short_description: "Pop Ups & Social Media Marketing Platform",
        app_store_url: "https://apps.shopify.com/justuno-social-email-leads",
        website_url: "https://www.justuno.com",
        script_pattern: "scripttags.justuno.com", 
        category: "Marketing"
    },
    {
        name: "Shogun",
        short_description: "Landing Page Builder",
        app_store_url: "https://apps.shopify.com/shogun",
        website_url: "https://getshogun.com",
        script_pattern: "cdn.getshogun.com/pixel.js",
        category: "Marketing"
    },
    {
        name: "Beeketing Apps (Multiple possibilites)",
        short_description: "Add urgency, sales popups, happy email, better coupon box, etc.",
        app_store_url: "https://apps.shopify.com/beeketing",
        website_url: "https://beeketing.com",
        script_pattern: "js/beeketing.js",
        category: "Marketing"
    },
    {
        name: "Omnisend",
        short_description: "Email & Marketing Automation",
        app_store_url: "https://apps.shopify.com/omnisend",
        website_url: "https://www.omnisend.com",
        script_pattern: "inShop/Embed/shopify.js",
        category: "Marketing"
    },
    {
        name: "Smile.io",
        short_description: "Loyalty Points, VIP, Referral Programs",
        app_store_url: "https://apps.shopify.com/smile-io",
        website_url: "https://smile.io",
        script_pattern: "smile-shopify.js",
        category: "Marketing"
    },
    {
        name: "Mailchimp",
        short_description: "Email & Marketing",
        app_store_url: "https://apps.shopify.com/mailchimp",
        website_url: "https://mailchimp.com",
        script_pattern: "mcjs-connected/js",
        category: "Marketing"
    },
    {
        name: "Spin‑a‑Sale",
        short_description: "Interactive email pop-up",
        app_store_url: "https://apps.shopify.com/spin-a-sale",
        website_url: "https://spinasale.com",
        script_pattern: "js/spin-v3.js",
        category: "Marketing"
    },
    {
        name: "FireApps Ali Reviews",
        short_description: "Import reviews from AliExpress, Photo & Site Reviews",
        app_store_url: "https://apps.shopify.com/ali-reviews",
        website_url: "https://fireapps.io",
        script_pattern: "js/frontend/comment.js",
        category: "Marketing"
    },
    {
        name: "Jilt",
        short_description: "Automated emails",
        app_store_url: "https://apps.shopify.com/jilt-cart-abandonment-solution",
        website_url: "https://jilt.com",
        script_pattern: "storefront/v1/jilt.js",
        category: "Marketing"
    },
    {
        name: "Conversio",
        short_description: "Email Marketing Automation. Make every email count",
        app_store_url: "https://apps.shopify.com/conversio",
        website_url: "https://conversio.com",
        script_pattern: "conversio.com/scripts/shopify.js",
        category: "Marketing"
    },
    {
        name: "Wheelio",
        short_description: "Gamified pop‑up",
        app_store_url: "https://apps.shopify.com/wheelio-first-interactive-exit-intent-pop-up",
        website_url: "http://wheelio.conversionpirate.com",
        script_pattern: "wheelio-a62f3.firebaseapp.com/scripttag.js",
        category: "Marketing"
    },
    {
        name: "MailChimp",
        short_description: "MailChimp list with exit intent popups and coupons",
        app_store_url: "https://apps.shopify.com/mailchimp-forms",
        website_url: "https://www.mailmunch.co",
        script_pattern: "a.mailmunch.co/widgets",
        category: "Marketing"
    },
    {
        name: "PageFly",
        short_description: "Advanced Page Builder",
        app_store_url: "https://apps.shopify.com/pagefly",
        website_url: "https://www.sellersmith.com",
        script_pattern: "pagefly/assets",
        category: "Marketing"
    },
    {
        name: "Clever Google Adwords",
        short_description: "Boost your marketing tactics with Google Ads by Clever Adwords",
        app_store_url: "https://apps.shopify.com/cleverppc",
        website_url: "https://www.cleverecommerce.com",
        script_pattern: "mc.js",
        category: "Marketing"
    },
    {
        name: "Swell",
        short_description: "Rewards and Referrals",
        app_store_url: "https://apps.shopify.com/swell",
        website_url: "http://www.swellrewards.com",
        script_pattern: "swellrewards.com/loader",
        category: "Marketing"
    },
    {
        name: "Email Collection Bar",
        short_description: "Grow your email list with customizable bar, and boost sales",
        app_store_url: "https://apps.shopify.com/email-collection-bar",
        website_url: "https://hextom.com",
        script_pattern: "lastsecondcoupon/js/emailcollectionbar.js",
        category: "Marketing"
    },
    {
        name: "Spur-i-t Popup Upsell",
        short_description: "Fully Customizable Popup",
        app_store_url: "https://apps.shopify.com/upsell-popup-on-exit-visit",
        website_url: "https://spur-i-t.com",
        script_pattern: "upsell-on-exit-visit/js/common.js",
        category: "Marketing"
    },
    {
        name: "MailMunch",
        short_description: "Email Popups with Exit Intent",
        app_store_url: "https://apps.shopify.com/mailmunch",
        website_url: "https://www.mailmunch.co",
        script_pattern: "widgets/site-519579-1d4a0439b676bb9b4e1159635561fda7fb2c0857.js",
        category: "Marketing"
    },
    {
        name: "Pixelpop",
        short_description: "Build your mailing list and boost sales with popups",
        app_store_url: "https://apps.shopify.com/popups-promos-banners-pixelpop",
        website_url: "http://pixelunion.net",
        script_pattern: "pixelpop.js",
        category: "Marketing"
    },
    {
        name: "Zotabox (Multiple possibilites)",
        short_description: "Header Bar or easy contact form",
        app_store_url: "https://apps.shopify.com/promo-bar",
        website_url: "https://info.zotabox.com",
        script_pattern: "static.zotabox.co",
        category: "Marketing"
    },
    {
        name: "WhatsApp Share + Chat",
        short_description: "Let your customer be your promoter, abandoned cart on whatsapp",
        app_store_url: "https://apps.shopify.com/whatsapp-sharing",
        website_url: "https://shopiapps.in",
        script_pattern: "whatsapp-share/inc/whatsapp-button.js",
        category: "Marketing"
    },
    {
        name: "OptinMate",
        short_description: "Email Collection, Coupons & Social Popups, Bards & Cards",
        app_store_url: "https://apps.shopify.com/optinmate-2",
        website_url: "https://optinmate.com",
        script_pattern: "optinmate.com",
        category: "Marketing"
    },
    {
        name: "Sumo",
        short_description: "Grow Sales & Conversio?",
        app_store_url: "https://apps.shopify.com/sumome",
        website_url: "https://sumo.com",
        script_pattern: "sumome-plugin/js/sumome.js",
        category: "Marketing"
    },
    {
        name: "Refersion",
        short_description: "Track referrals & pay commissions to affiliates + influencers",
        app_store_url: "https://apps.shopify.com/refersion",
        website_url: "https://www.refersion.com",
        script_pattern: "cdn.refersion.com/pixel.js",
        category: "Marketing"
    },
    {
        name: "Care Cart",
        short_description: "Recover Abandon Cart Orders by Sales & Marketing Automation",
        app_store_url: "https://apps.shopify.com/care-cart",
        website_url: "https://carecart.io",
        script_pattern: "api/abandoned-cart/js-script",
        category: "Marketing"
    },
    {
        name: "RetargetApp",
        short_description: "Get more sales and new customers with automated Facebook ads",
        app_store_url: "https://apps.shopify.com/retargetapp-facebook-retargeting",
        website_url: "http://retargetapp.com",
        script_pattern: "pixel/pixel.min.js",
        category: "Marketing"
    },
    {
        name: "Push Nova",
        short_description: "Web Push & Facebook Messenger Conversion Marketing",
        app_store_url: "https://apps.shopify.com/simple-push",
        website_url: "https://pushnova.streamlinedapps.com",
        script_pattern: "streamlined-apps-production/streamlined-push-assets/store-site-plugin/js/streamlined-push-plugin.production.min.js",
        category: "Marketing"
    },
    {
        name: "Sales Rocket",
        short_description: "All-in-1 scarcity, urgency and social proof",
        app_store_url: "https://apps.shopify.com/window-shoppers",
        website_url: "http://www.codeinero.net",
        script_pattern: "Scripts/windowshoppers.min.js",
        category: "Marketing"
    },
    {
        name: "Recart",
        short_description: "Facebook Messenger Marketing & Abandoned Cart App",
        app_store_url: "https://apps.shopify.com/recart",
        website_url: "https://recart.com",
        script_pattern: "messenger/loader.js",
        category: "Sales"
    },
    {
        name: "Consistent Cart",
        short_description: "Messenger Marketing & Abandoned Cart Recovery",
        app_store_url: "https://apps.shopify.com/consistent-cart",
        website_url: "https://www.consistentcart.com/",
        script_pattern: "consistent_cart_addon.min.js",
        category: "Sales"
    },
    {
        name: "Conversion+",
        short_description: "Free cart reservation countdown timer that increases sales",
        app_store_url: "https://apps.shopify.com/conversion",
        website_url: "https://trust.varinode.com/",
        script_pattern: "cv_initjs.php",
        category: "Sales"
    },
    {
        name: "Stamped.io",
        short_description: "Collect Product reviews, site reviews and photo/video reviews",
        app_store_url: "https://apps.shopify.com/product-reviews-addon",
        website_url: "https://stamped.io",
        script_pattern: "cdn-stamped-io.azureedge.net/files/shopify.v2.min.js",
        category: "Sales"
    },
    {
        name: "Product Reviews",
        short_description: "The simplest way to share your customers experiences.",
        app_store_url: "https://apps.shopify.com/product-reviews",
        website_url: "https://help.shopify.com/en/manual/apps/apps-by-shopify/product-reviews",
        script_pattern: "assets/v4/spr.js",
        category: "Sales"
    },
    {
        name: "Varinode",
        short_description: "Free Ad exchange to help you acquire high quality traffic",
        app_store_url: "https://apps.shopify.com/ads",
        website_url: "http://avs.varinode.com",
        script_pattern: "avjs.php",
        category: "Sales"
    },
    {
        name: "Loox",
        short_description: "Photo Reviews (Product Reviews)",
        app_store_url: "https://apps.shopify.com/loox",
        website_url: "https://loox.app",
        script_pattern: "loox.io/widget",
        category: "Sales"
    },
    {
        name: "Firepush",
        short_description: "Order recovery with SMS and FREE Web push notifications",
        app_store_url: "https://apps.shopify.com/firepush",
        website_url: "https://firepush.io/",
        script_pattern: "firepush.",
        category: "Sales"
    },
    {
        name: "Frequently Bought Together",
        short_description: "Amazon-like Bundle Recommendations, Upsell and Discounts",
        app_store_url: "https://apps.shopify.com/frequently-bought-together",
        website_url: "https://www.codeblackbelt.com",
        script_pattern: "js/modules/frequently-bought-together/main.min.js",
        category: "Sales"
    },
    {
        name: "Shophero",
        short_description: "Email Marketing & Push Notification",
        app_store_url: "https://apps.shopify.com/shophero",
        website_url: "https://shophero.io/",
        script_pattern: "shophero.",
        category: "Marketing"
    },
    {
        name: "LimeSpot",
        short_description: "Upsell, Cross-sell and Personalized Recommendations by AI",
        app_store_url: "https://apps.shopify.com/limespot",
        website_url: "https://www.limespot.com",
        script_pattern: "storefront/2.0.0/js/shopify/checkout-tracker.min.js",
        category: "Sales"
    },
    {
        name: "McAfee SECURE",
        short_description: "Show visitors your site is secure",
        app_store_url: "https://apps.shopify.com/mcafee-secure",
        website_url: "https://www.mcafeesecure.com/for-consumers",
        script_pattern: "ywxi.net/js/partner-shopify.js",
        category: "Sales"
    },
    {
        name: "Quick View",
        short_description: "Product preview in a click",
        app_store_url: "https://apps.shopify.com/quick-view",
        website_url: "https://www.secomapp.com",
        script_pattern: "assets/cdn/sca-qv-scripts-noconfig.js",
        category: "Sales"
    },
    {
        name: "Judge.me",
        short_description: "Product Reviews",
        app_store_url: "https://apps.shopify.com/judgeme",
        website_url: "https://judge.me/",
        script_pattern: "cdn.judge.me/assets/installed.js",
        category: "Sales"
    },
    {
        name: "Recharge",
        short_description: "Launch and scale your subscription and recurring business",
        app_store_url: "https://apps.shopify.com/subscription-payments",
        website_url: "https://rechargepayments.com",
        script_pattern: "static/js/recharge.js",
        category: "Sales"
    },
    {
        name: "Code Black Belt Also Bought",
        short_description: "Recommendations - Customers Who Bought This Item Also Bought",
        app_store_url: "https://apps.shopify.com/also-bought",
        website_url: "https://www.codeblackbelt.com",
        script_pattern: "js/modules/also-bought/main.min.js",
        category: "Sales"
    },
    {
        name: "Persistent Cart",
        short_description: "Remember customers' carts across their devices",
        app_store_url: "https://apps.shopify.com/remember-my-cart",
        website_url: "https://recovermycart.freshdesk.com/support/solutions/articles/33000213763-remember-my-cart-faq",
        script_pattern: "RememberMyCart/Manage/CartJS",
        category: "Sales"
    },
    {
        name: "Wishy",
        short_description: "A beautiful, advanced & customizable wishlist plugin",
        app_store_url: "https://apps.shopify.com/wishy",
        website_url: "",
        script_pattern: "wishy-placer.production.min.js",
        category: "Sales"
    },
    {
        name: "Bold Subscription",
        short_description: "Subscription Box and Recurring Orders",
        app_store_url: "https://apps.shopify.com/recurring-orders",
        website_url: "https://boldcommerce.com/bold-subscriptions",
        script_pattern: "v2_ui/js/ro.js",
        category: "Sales"
    },
    {
        name: "Bold Upsell",
        short_description: "Product Upsell, Cross-sell & Smart Upsells to make more money",
        app_store_url: "https://apps.shopify.com/product-upsell",
        website_url: "https://boldcommerce.com",
        script_pattern: "v2_ui/js/upsell.js",
        category: "Sales"
    },
    {
        name: "Yotpo",
        short_description: "Collect product reviews, site reviews, and photo reviews",
        app_store_url: "https://apps.shopify.com/yotpo-social-reviews",
        website_url: "https://www.yotpo.com",
        script_pattern: "staticw2.yotpo.com",
        category: "Sales"
    },
    {
        name: "Bizzy",
        short_description: "Create urgency with recent sales notifications",
        app_store_url: "https://apps.shopify.com/bizzy-social-proof",
        website_url: "https://www.pixelunion.net/",
        script_pattern: "pxu-recent-sales-apps.s3.amazonaws.com/recent-sales",
        category: "Sales"
    },
    {
        name: "MPS Buy Me",
        short_description: "Sticky Buy Button",
        app_store_url: "https://apps.shopify.com/mps-buy-me",
        website_url: "https://makeprosimp.com/",
        script_pattern: "buy-me.makeprosimp.com/app/js/app.js",
        category: "Sales"
    },
    {
        name: "Product Options",
        short_description: "Product options to one or one thousand products with a click!",
        app_store_url: "https://apps.shopify.com/product-options",
        website_url: "https://nexusmedia-ua.com",
        script_pattern: "js/options.js",
        category: "Sales"
    },
    {
        name: "Express Reviews",
        short_description: "Import reviews from AliExpress INSTANTLY",
        app_store_url: "https://apps.shopify.com/express-reviews",
        website_url: "https://appiversal.net/",
        script_pattern: "src/er.js",
        category: "Sales"
    },
    {
        name: "East Side Co Cart Convert",
        short_description: "Product Upsell & Cross-sell",
        app_store_url: "https://apps.shopify.com/cart-convert",
        website_url: "https://eastsideco.com/",
        script_pattern: "client.js",
        category: "Sales"
    },
    {
        name: "SMAR7",
        short_description: "Smart, adaptive & user friendly upsells",
        app_store_url: "https://apps.shopify.com/smar7-bundle-upsell",
        website_url: "https://smar7apps.com",
        script_pattern: "js/bundle-upsell.min.js",
        category: "Sales"
    },
    {
        name: "Supr-i-t Aban. Cart Rem.",
        short_description: "Bring Back Your Store Visitors with Abandoned Cart Reminds",
        app_store_url: "https://apps.shopify.com/abandoned-cart-reminder",
        website_url: "https://spur-i-t.com",
        script_pattern: "shopify-apps/abandoned-cart-reminder/js/common.js",
        category: "Sales"
    },
    {
        name: "Gift Wizard",
        short_description: "Gift Card Solutions, Loyalty and Rewards, Store Credit",
        app_store_url: "https://apps.shopify.com/giftwizard",
        website_url: "https://www.giftwizard.co/",
        script_pattern: "client-nextgen.js",
        category: "Sales"
    },
    {
        name: "Csell",
        short_description: "Hand-picked product recommendations",
        app_store_url: "https://apps.shopify.com/cross-sell",
        website_url: "https://csell.co",
        script_pattern: "assets/v2/js/core/xsell.js",
        category: "Sales"
    },
    {
        name: "Enorm Photo Reviews",
        short_description: "Review app for product reviews , photo reviews & site reviews",
        app_store_url: "https://apps.shopify.com/product-photo-reviews-by-enormapps",
        website_url: "https://www.enormapps.com",
        script_pattern: "productreviews/collection-embed.js",
        category: "Sales"
    },
    {
        name: "In Cart Upsell",
        short_description: "Laser targeted upsell offers in the shopping cart - no popups!",
        app_store_url: "https://apps.shopify.com/in-cart-upsell",
        website_url: "http://www.incartupsell.com",
        script_pattern: "incartupsell.com",
        category: "Sales"
    },
    {
        name: "Spur-i-t Social Proof",
        short_description: "Increase Sales & Create Urgency With SpurIT Social Proof App",
        app_store_url: "https://apps.shopify.com/social-proof-urgency",
        website_url: "https://spur-i-t.com",
        script_pattern: "shopify-extensions/social-proof/store/c54a5ad7c7b4a0069ca3eddae2a0406a.js",
        category: "Sales"
    },
    {
        name: "Recovermycart",
        short_description: "Prevent abandoned orders",
        app_store_url: "https://apps.shopify.com/recover-my-cart",
        website_url: "https://recovermycart.squarespace.com",
        script_pattern: "Manage/CartJS_v2",
        category: "Sales"
    },
    {
        name: "MinMaxify Order Limits",
        short_description: "Minimum - Maximum limits on your products, groups or entire cart",
        app_store_url: "https://apps.shopify.com/order-limits-minmaxify",
        website_url: "http://www.minmaxify.com/",
        script_pattern: "shopifyorderlimits.s3.amazonaws.com/limits",
        category: "Sales"
    },
    {
        name: "Zotabox Social Sharing",
        short_description: "Social Share and Messaging Buttons. Improve Your Communication",
        app_store_url: "https://apps.shopify.com/social-buttons",
        website_url: "https://info.zotabox.com",
        script_pattern: "a384d78e2f3e7d78c9d09a15f7f1b51e/widgets.js",
        category: "Social media"
    },
    {
        name: "Cartback",
        short_description: "Facebook Messenger Abandoned Cart app and Messenger Marketing",
        app_store_url: "https://apps.shopify.com/fb-messenger-remarketing",
        website_url: "",
        script_pattern: "messenger/js/exit_messenger.js",
        category: "Social media"
    },
    {
        name: "Apps2grow.us Shop Instagram",
        short_description: "Stunning Instagram galleries that sell",
        app_store_url: "https://apps.shopify.com/instagram-photos",
        website_url: "http://www.apps2grow.us/instaphotos",
        script_pattern: "files/1/0016/7591/9458/t/1/assets/ssw-libraries.js",
        category: "Social media"
    },
    {
        name: "Expertvillagemedia.com Instagram Feed & Gallery",
        short_description: "Top Instagram Gallery, Instagram Lookbook & Instagram Feed App",
        app_store_url: "https://apps.shopify.com/instagram-feed",
        website_url: "https://www.expertvillagemedia.com/shopify-apps/instafeed/",
        script_pattern: "expertvillagemedia.com/instagramfeed/embed.js",
        category: "Social media"
    },
    {
        name: "Covet.pics",
        short_description: "Lookbook, Instagram & Customer Galleries",
        app_store_url: "https://apps.shopify.com/covet-pics",
        website_url: "https://covet.pics",
        script_pattern: "embed_v1.js",
        category: "Social media"
    },
    {
        name: "Shopwave Reviews Wishlist",
        short_description: "Photos Reviews, Wishlist, Instagram, Loyalty and 7 apps in one",
        app_store_url: "https://apps.shopify.com/socialshopwave",
        website_url: "https://www.socialshopwave.com/",
        script_pattern: "scripts/socialshopwave",
        category: "Social media"
    },
    {
        name: "Oxi Social Login",
        short_description: "One click login with Facebook, Google and many more",
        app_store_url: "https://apps.shopify.com/oxi-social-login",
        website_url: "http://www.oxiapps.com",
        script_pattern: "social-login.oxiapps.com/api/init",
        category: "Social media"
    },
    {
        name: "Kudobuzz",
        short_description: "Testimonials and Reviews - Grow your business with social reviews",
        app_store_url: "https://apps.shopify.com/kudobuzz-testimonials",
        website_url: "https://kudobuzz.com/",
        script_pattern: "kudobuzz.com/widget",
        category: "Social media"
    },
    {
        name: "AddThis Share Buttons",
        short_description: "Grow your website with free tools trusted by over 15M sites",
        app_store_url: "https://apps.shopify.com/addthis-sharing-tool",
        website_url: "https://www.addthis.com",
        script_pattern: "addthis_widget.js",
        category: "Social media"
    },
    {
        name: "InstaShow or Yottie",
        short_description: "Instagram Feed or Embed any YouTube video and shaping video gallery",
        app_store_url: "https://apps.shopify.com/instashow",
        website_url: "https://elfsight.com",
        script_pattern: "shy.elfsight.com/p/platform.js",
        category: "Social media"
    },
    {
        name: "Foursixty.com Shoppable Instagram",
        short_description: "Shop Instagram. Shoppable UGC. Rights Management. Anywhere.",
        app_store_url: "https://apps.shopify.com/foursixty",
        website_url: "http://www.foursixty.com",
        script_pattern: "media/scripts/fs.embed.v2.5.js",
        category: "Social media"
    },
    {
        name: "Dvcloudsoftware.com Instagram In‑Shop",
        short_description: "Shop your instagram! Create an Instagram shop in minutes",
        app_store_url: "https://apps.shopify.com/instagram-in-shop",
        website_url: "http://instagram-shop.devcloudsoftware.com/support",
        script_pattern: "resource/resource.js",
        category: "Social media"
    },
    {
        name: "Web Desk Solution Smart Social Login",
        short_description: "Login with your social media accounts",
        app_store_url: "https://apps.shopify.com/smart-social-login",
        website_url: "http://webdesksolution.com",
        script_pattern: "loginwithsocialmedia//assets/scripts/custom/demo.js",
        category: "Social media"
    },
    {
        name: "Powr.io (Multiple possibilites)",
        short_description: "Social Media Feed or icons",
        app_store_url: "https://apps.shopify.com/powr-social-feed",
        website_url: "https://www.powr.io",
        script_pattern: "powr.js",
        category: "Social media"
    },
    {
        name: "99Commerce  Instagram Feed",
        short_description: "Instagram App to Add Instagram Gallery from Instagram Account",
        app_store_url: "https://apps.shopify.com/snapzy-the-instagram-feed",
        website_url: "http://www.99ecommerceexperts.com",
        script_pattern: "instagramfeedexperts.herokuapp.com/embed.js",
        category: "Social media"
    },
    {
        name: "Zotabox Social Mobile Share Bar",
        short_description: "Free Mobile Messaging via WhatsApp, Messenger, Skype. SMS etc",
        app_store_url: "https://apps.shopify.com/mobile-messaging-social-share-bar",
        website_url: "https://info.zotabox.com/",
        script_pattern: "a384d78e2f3e7d78c9d09a15f7f1b51e/widgets.js",
        category: "Social media"
    },
    {
        name: "Widgetic",
        short_description: "Facebook Like",
        app_store_url: "https://apps.shopify.com/facebook-like-by-widgetic",
        website_url: "https://widgetic.com",
        script_pattern: "sdk/sdk.js",
        category: "Social media"
    },
    {
        name: "AAAE Instagram Shop",
        short_description: "Shoppable Instagram, Instagram Feed & Instagram Look Book APP",
        app_store_url: "https://apps.shopify.com/insta-feed",
        website_url: "https://www.aaaecommerce.com",
        script_pattern: "aaa-insta-feed-script.js",
        category: "Social media"
    },
    {
        name: "Leadslide Social Media Tabs",
        short_description: "Design a Social Media Tab",
        app_store_url: "https://apps.shopify.com/social-media-tabs",
        website_url: "https://leadslide.com",
        script_pattern: "apps/leadslide-js",
        category: "Social media"
    },
    {
        name: "Okas Open SignIn",
        short_description: "Social Login - Use any Social Network platform to login to your store",
        app_store_url: "https://apps.shopify.com/open-signin",
        website_url: "",
        script_pattern: "open-signin.okasconcepts.com",
        category: "Social media"
    },
    {
        name: "Zestard Twitter Feed",
        short_description: "Responsive Widget to display tweets, follow button",
        app_store_url: "https://apps.shopify.com/twitter-feed",
        website_url: "https://www.zestard.com",
        script_pattern: "zestard_tweet_feed.js",
        category: "Social media"
    },
    {
        name: "Autoketing Facebook Chat",
        short_description: "Live chat with customers via Facebook Messenger",
        app_store_url: "https://apps.shopify.com/facebook-chat-box",
        website_url: "https://autoketing.com",
        script_pattern: "dist/fb-chat-embed.js",
        category: "Social media"
    },
    {
        name: "Elfsight Instagram",
        short_description: "Add to website shoppable Instagram photos with tagged items",
        app_store_url: "https://apps.shopify.com/elfsight-shoppable-feed",
        website_url: "https://elfsight.com",
        script_pattern: "assets/elfsight.shoppable.js",
        category: "Social media"
    },
    {
        name: "Likebtn.com",
        short_description: "Get tons of likes and boost sharing",
        app_store_url: "https://apps.shopify.com/like-button-rating",
        website_url: "https://likebtn.com",
        script_pattern: "w.likebtn.com/js/w/widget.js",
        category: "Social media"
    },
    {
        name: "Sketch ThemesInstagram Feed",
        short_description: "Add aliveness to your store by integrating Instagram's feeds",
        app_store_url: "https://apps.shopify.com/instagram-feed-by-sketch-themes",
        website_url: "",
        script_pattern: "live/instagram_feeds/js/instaapp_loadn.js",
        category: "Social media"
    },
    {
        name: "Sprbot Instagram Shop Feed",
        short_description: "Make your Instagram Feed Shop-able",
        app_store_url: "https://apps.shopify.com/dev-instagram-sell-1",
        website_url: "http://sprbot.com/instashop/",
        script_pattern: "instagram-sell/ins-shop.js",
        category: "Social media"
    },
    {
        name: "TagTray",
        short_description: "Shop Galleries Of Customer Generated Social Media Photos",
        app_store_url: "https://apps.shopify.com/tagtray",
        website_url: "https://www.tagtray.com/",
        script_pattern: "v3/tagtray.js",
        category: "Social media"
    },
    {
        name: "Code Back Belt Facebook Image Gallery",
        short_description: "Awesome & dynamic image gallery for your Facebook pictures",
        app_store_url: "https://apps.shopify.com/facebook-image-gallery",
        website_url: "https://www.codeblackbelt.com",
        script_pattern: "js/modules/facebook-image-gallery/main.min.js",
        category: "Social media"
    },
    {
        name: "CFF Shareable Cart",
        short_description: "Makes your cart shareable and transferrable between devices",
        app_store_url: "https://apps.shopify.com/portable-cart",
        website_url: "https://customerfirstfocus.com/",
        script_pattern: "cff.production.min.js",
        category: "Social media"
    },
    {
        name: "Green Frog Instagram",
        short_description: "Instagram pic in slider & grid in instagram",
        app_store_url: "https://apps.shopify.com/greenfrog-instashow",
        website_url: "https://greenfrogweb.com",
        script_pattern: "instashow/instashow.js",
        category: "Social media"
    },
    {
        name: "Roar Social Caller",
        short_description: "Social Caller gives you a hand, to increase your inbound calls",
        app_store_url: "https://apps.shopify.com/social-caller",
        website_url: "https://roartheme.com/",
        script_pattern: "socialcaller/lib/assets/socialcaller.js",
        category: "Social media"
    },
    {
        name: "Swym.it Wishlist Plus",
        short_description: "Help your customers pick up where they left off",
        app_store_url: "https://apps.shopify.com/swym-relay",
        website_url: "http://swym.it",
        script_pattern: "code/swym-shopify.js",
        category: "Customer service"
    },
    {
        name: "Tidiochat",
        short_description: "Live chat boosted with Bots and Marketing Automation",
        app_store_url: "https://apps.shopify.com/tidio-chat",
        website_url: "http://www.tidiochat.com",
        script_pattern: "tidiochat.com",
        category: "Customer service"
    },
    {
        name: "Chilli Abandonment Protector",
        short_description: "Email marketing automation & Popups with Exit intent",
        app_store_url: "https://apps.shopify.com/linkerfriend-lead-management-tools",
        website_url: "https://www.chilliapps.com",
        script_pattern: "main/chpmgr.js",
        category: "Customer service"
    },
    {
        name: "AWIO",
        short_description: "Contact Us Page Generator and Popup Contact Widget",
        app_store_url: "https://apps.shopify.com/improved-contact-form",
        website_url: "https://www.awio.com",
        script_pattern: "improvedcontactform.com/icf.js",
        category: "Customer service"
    },
    {
        name: "WhatsHelp.io",
        short_description: "Chat with website visitors via popular Messaging Apps",
        app_store_url: "https://apps.shopify.com/whatshelp-chat-button",
        website_url: "https://whatshelp.io/widget",
        script_pattern: "whatshelp.io/shopify/widget",
        category: "Customer service"
    },
    {
        name: "Facebook Live Chat1",
        short_description: "Customer Support via Facebook Live Chat",
        app_store_url: "https://apps.shopify.com/facebook-messenger-live-chat",
        website_url: "https://info.zotabox.com",
        script_pattern: "sdk/xfbml.customerchat.js#xfbml=1&version=v2.11",
        category: "Customer service"
    },
    {
        name: "Chatra",
        short_description: "Live chat and Facebook chat for your store",
        app_store_url: "https://apps.shopify.com/chatra",
        website_url: "https://chatra.io",
        script_pattern: "shopify?chatraId",
        category: "Customer service"
    },
    {
        name: "Hulk Contact Us Form",
        short_description: "Take Less Than 2 Minutes to Get In Touch With Your Customers",
        app_store_url: "https://apps.shopify.com/contact-us-by-hulkapps",
        website_url: "https://www.hulkcode.com",
        script_pattern: "skeletopapp.js",
        category: "Customer service"
    },
    {
        name: "AAAE Form Builder",
        short_description: "Form Builder App with Custom Registration Form and Order Form",
        app_store_url: "https://apps.shopify.com/form-builder",
        website_url: "https://www.aaaecommerce.com/",
        script_pattern: "formbuilder.aaawebstore.com/appfiles/aaa_form_builder_script_minify.js",
        category: "Customer service"
    },
    {
        name: "Zendesk Support",
        short_description: "Omnichannel customer service and engagement platform",
        app_store_url: "https://apps.shopify.com/zendesk",
        website_url: "https://www.zendesk.com",
        script_pattern: "zendesk-embeddable.js",
        category: "Customer service"
    },
    {
        name: "Re:amaze",
        short_description: "Customer support helpdesk with live chat, ticketing, and FAQ",
        app_store_url: "https://apps.shopify.com/reamaze",
        website_url: "https://www.reamaze.com",
        script_pattern: "reamaze.com/assets/reamaze.js",
        category: "Customer service"
    },
    {
        name: "Orderify",
        short_description: "Let customers edit, cancel and reorder instantly",
        app_store_url: "https://apps.shopify.com/orderify",
        website_url: "https://customerfirstfocus.com",
        script_pattern: "cffOrderEdit.production.min.js",
        category: "Customer service"
    },
    {
        name: "Etoile Ultimate FAQ",
        short_description: "A feature-rich and complete FAQ solution",
        app_store_url: "https://apps.shopify.com/ultimate-faqs",
        website_url: "https://www.etoilewebdesign.com",
        script_pattern: "ewd-ufaq-js.js",
        category: "Customer service"
    },
    {
        name: "Zendesk Chat",
        short_description: "Live chat provides a fast way to connect with customers",
        app_store_url: "https://apps.shopify.com/zendeskchatplus",
        website_url: "http://help.combidesk.com/instruction-manuals/shopify/instruction-manual-shopify-zendesk-chat-integration-formerly-zopim",
        script_pattern: "js/integration/shopify/zopim/widget.js",
        category: "Customer service"
    },
    {
        name: "Facebook Chat",
        short_description: "Turn your visitors into your customers with Facebook Messenger",
        app_store_url: "https://apps.shopify.com/facebook-chat-2-0",
        website_url: "",
        script_pattern: "chat/loader",
        category: "Customer service"
    },
    {
        name: "Pure Chat",
        short_description: "Easy-to-use live chat software with unlimited users and chats",
        app_store_url: "https://apps.shopify.com/pure-chat",
        website_url: "https://www.purechat.com/",
        script_pattern: "purechat.com",
        category: "Customer service"
    },
    {
        name: "Jivo Omnichannel Suite",
        short_description: "Finally! Chats, FB messages, calls & emails, all in one app",
        app_store_url: "https://apps.shopify.com/jivochat",
        website_url: "https://www.jivochat.com/",
        script_pattern: "jivosite.com/script/widget",
        category: "Customer service"
    },
    {
        name: "Custom Order Status",
        short_description: "Create and manage the status of your orders",
        app_store_url: "https://apps.shopify.com/ultimate-order-status",
        website_url: "http://www.w3trends.com",
        script_pattern: "js/orderlookup.js",
        category: "Customer service"
    },
    {
        name: "Mageworx Product Fees",
        short_description: "Add extra fees to incease your sales and average order value",
        app_store_url: "https://apps.shopify.com/product-fees",
        website_url: "https://appstore.mageworx.com/",
        script_pattern: "productfees/source.js",
        category: "Customer service"
    },
    {
        name: "Google Reviews",
        short_description: "Add Google Customer Reviews to your site, no coding required!",
        app_store_url: "https://apps.shopify.com/easy-google-customer-reviews",
        website_url: "https://unionworks.co.uk/shopify-apps/easy-google-customer-reviews/support",
        script_pattern: "scripts/google-customer-reviews-badge.js",
        category: "Customer service"
    },
    {
        name: "Intercom",
        short_description: "Catch, convert and keep more customers with modern live chat",
        app_store_url: "https://apps.shopify.com/intercom",
        website_url: "http://intercom.com",
        script_pattern: "intercomcdn.com/shim.f772198b.js",
        category: "Customer service"
    },
    {
        name: "Free Call",
        short_description: "Service for Direct Sales",
        app_store_url: "https://apps.shopify.com/free-call",
        website_url: "https://www.freecallinc.com",
        script_pattern: "freecall_trackdiv1.js",
        category: "Customer service"
    },
    {
        name: "Two Zillas Tracking Genie",
        short_description: "Tracking set on autopilot",
        app_store_url: "https://apps.shopify.com/trackinggenie",
        website_url: "http://www.twozillas.com",
        script_pattern: "trackinggenie.co",
        category: "Customer service"
    },
    {
        name: "Facebook Live Chat",
        short_description: "Chat with your shoppers via Facebook Messenger",
        app_store_url: "https://apps.shopify.com/facebook-messenger-live-chat-tracking",
        website_url: "https://roartheme.com",
        script_pattern: "fblivechat/lib/asset/script.js",
        category: "Customer service"
    },
    {
        name: "Spice Gems Returns",
        short_description: "Handle Return Requests & send Prepaid Shipping Labels",
        app_store_url: "https://apps.shopify.com/return-management-system",
        website_url: "https://spicegems.com",
        script_pattern: "assets/embedOrderLookup.js",
        category: "Customer service"
    },
    {
        name: "Raven Callback Request",
        short_description: "Turn website visitors into qualified sales calls",
        app_store_url: "https://apps.shopify.com/raven",
        website_url: "http://raven-callback.webflow.io",
        script_pattern: "raven-script/pipoldidik/raven-widget.js",
        category: "Customer service"
    },
    {
        name: "Formilla Live Chat",
        short_description: "Live chat with visitors in real-time",
        app_store_url: "https://apps.shopify.com/formilla-live-chat",
        website_url: "https://www.formilla.com",
        script_pattern: "loadFormilla.js",
        category: "Customer service"
    },
    {
        name: "Powerful Form Builder",
        short_description: "Create any kind of custom form with Powerful Form Builder app",
        app_store_url: "https://apps.shopify.com/powerful-form-builder",
        website_url: "http://www.globosoftware.net",
        script_pattern: "s/files/1/0016/7591/9458/t/1/assets/globoformbuilder_init.js",
        category: "Customer service"
    },
    {
        name: "Delivery Date Range",
        short_description: "Display the estimated delivery date range on the product page",
        app_store_url: "https://apps.shopify.com/delivery-date-range",
        website_url: "http://www.ecomstoreapps.com",
        script_pattern: "ddr_embed.js",
        category: "Customer service"
    },
    {
        name: "EastSideCo Forms",
        short_description: "Smart Contact Form Builder",
        app_store_url: "https://apps.shopify.com/contact-forms-1",
        website_url: "https://eastsideco.com",
        script_pattern: "widget/2.10.2/uploadcare/uploadcare.full.min.js",
        category: "Customer service"
    },
    {
        name: "Wholesale Simplified",
        short_description: "Merchants can offer discounts to different customer groups",
        app_store_url: "https://apps.shopify.com/wholesale-simplified",
        website_url: "http://support.solvercircle.com",
        script_pattern: "wholesale-simplified/scripts",
        category: "Customer service"
    },
    {
        name: "Develic Maps",
        short_description: "Add Google Maps with store locations to your Shopify store",
        app_store_url: "https://apps.shopify.com/maps-by-develic",
        website_url: "https://www.develic.com/",
        script_pattern: "maps.develic.com",
        category: "Customer service"
    },
    {
        name: "Estimated Delivery Date",
        short_description: "Displays the estimated delivery date on the product page",
        app_store_url: "https://apps.shopify.com/estimated-delivery-date",
        website_url: "http://www.estimateddelivery.com",
        script_pattern: "assets/js/countdown/moment.js",
        category: "Customer service"
    },
    {
        name: "Easy GDPR",
        short_description: "Get GDPR compliant with 1 click. Cookie bar",
        app_store_url: "https://apps.shopify.com/easy-gdpr",
        website_url: "https://www.easygdpr.io",
        script_pattern: "gdpr-app.firebaseapp.com/gdpr.min.js",
        category: "Customer service"
    },
    {
        name: "Smart Search",
        short_description: "Smart Search, Filters, Recommendations to boost conversion.",
        app_store_url: "https://apps.shopify.com/searchanise",
        website_url: "https://start.searchanise.com/shopify",
        script_pattern: "searchanise.com/widgets/shopify/init.js",
        category: "Sales"    
    },
    {
        name: "Hubspot",
        short_description: "Integrate marketing, sales, online data and more!",
        app_store_url: "https://apps.shopify.com/hubspot",
        website_url: "https://hubspot.com",
        script_pattern: "api.hubapi.com",
        category: "Marketing"    
    },
    {
        name: "Exto",
        short_description: "Increase sales with upsell and cross-sell recommendations",
        app_store_url: "https://apps.shopify.com/automatic-related-products",
        website_url: "http://shopify.exto.io/",
        script_pattern: "apps1.exto.io",
        category: "Sales"    
    },
    {
        name: "Back in Stock",
        short_description: "Stop losing sales with Back in Stock Notification alerts",
        app_store_url: "https://apps.shopify.com/back-in-stock",
        website_url: "https://backinstock.org",
        script_pattern: "app.backinstock.org",
        category: "Sales"    
    },
    {
        name: "SLoyalty",
        short_description: "Reward customers, build loyalty and grow referral sales.",
        app_store_url: "https://apps.shopify.com/s-loyalty",
        website_url: "https://www.sloyalty.com/",
        script_pattern: "sloyalty.shopify.js",
        category: "Marketing"    
    },
];
