// Last updated April 28, 2019.
var SHOPIFY_APPS = [
    {
        name: 'Fera.ai', // Keep this under 20 characters
        short_description: 'Customer reviews, photos, counters, events, etc',  // Keep this under 75 characters
        long_description: 'Collect and grow your customer reviews, photos, videos, testimonials, and more.',
        app_store_url: 'https://apps.shopify.com/fera',
        website_url: "https://www.fera.ai",
        script_pattern: /cdn\.fera\.ai|bananastand\.js|fera\.js/,
        category: "Sales"
    },
    {
        name: 'Reserve In-store',
        short_description: 'Let customers reserve products online for in-store pickup',
        app_store_url: 'https://apps.shopify.com/reserve-in-store-by-fera',
        website_url: "https://www.reserveinstore.com",
        script_pattern: /cdn\.reserveinstore\.com/,
        category: "Orders and shipping"
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
        name: "Smile.io",
        short_description: "Loyalty Points, VIP, Referral Programs",
        app_store_url: "https://apps.shopify.com/smile-io",
        website_url: "https://smile.io",
        script_pattern: "sweettooth.io",
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
        script_pattern: "cdn-loyalty.yotpo.com",
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
        app_store_url: "https://apps.shopify.com/partners/zotabox",
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
        script_pattern: "api.recart.com",
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
        script_pattern: "stamped-io",
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
        script_pattern: "ywxi.net",
        category: "Trust and security"
    },
    {
        name: "Quick View",
        short_description: "Product preview in a click",
        app_store_url: "https://apps.shopify.com/quick-view",
        website_url: "https://www.secomapp.com",
        script_pattern: "sca-qv-scripts-noconfig.js",
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
        script_pattern: "buy-me-cdn.makeprosimp.com",
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
        script_pattern: ".cartconvert.eastsideapps.io",
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
        script_pattern: "storefront.giftwizard.co/gift.js",
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
        name: "Dvcloudsoftware Instagram",
        short_description: "Shop your instagram! Create an Instagram shop in minutes",
        app_store_url: "https://apps.shopify.com/instagram-in-shop",
        website_url: "http://instagram-shop.devcloudsoftware.com/support",
        script_pattern: "resource/resource.js",
        category: "Social media"
    },
    {
        name: "Powr.io (Multiple possibilites)",
        short_description: "Social Media Feed or icons",
        app_store_url: "https://apps.shopify.com/partners/powr-io",
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
        name: "CFF Shareable Cart",
        short_description: "Makes your cart shareable and transferrable between devices",
        app_store_url: "https://apps.shopify.com/portable-cart",
        website_url: "https://customerfirstfocus.com/",
        script_pattern: "cff.production.min.js",
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
        script_pattern: "reamaze.com",
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
        script_pattern: "gdpr.min.js",
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
        short_description: "Upsell and cross-sell recommendations",
        app_store_url: "https://apps.shopify.com/automatic-related-products",
        website_url: "http://shopify.exto.io/",
        script_pattern: "apps1.exto.io",
        category: "Sales"
    },
    {
        name: "Back in Stock",
        short_description: "Back in Stock Notification alerts",
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
    {
        name: "Trackify",
        short_description: "Pixel App and Facebook Audience Builder",
        long_description: "All-in-one Facebook pixel app that lets you integrate multiple pixels, add advanced event data, and see your ROI take off.",
        app_store_url: "https://apps.shopify.com/trackify-1",
        website_url: "http://help.redretarget.com/trackify",
        script_pattern: "trackify_script.js",
        category: "Marketing"
    },
    {
        name: "Adroll",
        short_description: "Retargeting",
        app_store_url: "https://apps.shopify.com/adroll-retargeting",
        website_url: "http://www.adroll.com",
        script_pattern: ".adroll.com",
        category: "Advertising"
    },
    {
        name: "Carts Guru",
        short_description: "Shopping cart abandonment",
        app_store_url: "https://apps.shopify.com/cartsguru",
        website_url: "http://carts.guru",
        script_pattern: "carts.guru",
        category: "Sales"
    },
    {
        name: "East Side Co - Back In Stock",
        short_description: "Email and SMS Out of Stock alerts",
        app_store_url: "https://apps.shopify.com/out-of-stock-1",
        website_url: "https://eastsideco.com/shopify-apps",
        script_pattern: "intlTelInput.js",
        category: "Sales"
    },
    {
        name: "Lead Dyno",
        short_description: "Affiliate and influencer marketing",
        app_store_url: "https://apps.shopify.com/leaddyno",
        website_url: "http://leaddyno.com",
        script_pattern: "leaddyno.com",
        category: "Affiliate"
    },
    {
        name: "Signifyd",
        short_description: "Guaranteed fraud and chargeback protection",
        app_store_url: "https://apps.shopify.com/signifyd",
        website_url: "https://www.signifyd.com",
        script_pattern: "cdn-scripts.signifyd.com",
        category: "Sales"
    },
    {
        name: "ShopMessage",
        short_description: "FB Messenger",
        app_store_url: "https://apps.shopify.com/shopmessage",
        website_url: "https://www.shopmessage.me",
        script_pattern: "shopmessage_platform.js",
        category: "Marketing"
    },
    {
        name: "Smart Wishlist",
        short_description: "Wishlist",
        app_store_url: "https://apps.shopify.com/smart-wishlist",
        website_url: "https://www.webmarked.net",
        script_pattern: "smartwishlist.js",
        category: "Marketing"
    },
    {
        name: "Hypervisual",
        short_description: "Beautiful landing and product pages",
        app_store_url: "https://apps.shopify.com/hypervisual",
        website_url: "https://gethypervisual.com",
        script_pattern: "hypervisual.js",
        category: "Store Design"
    },
    {
        name: "Fomo",
        short_description: "Increase Conversions with Social Proof Automation",
        app_store_url: "https://apps.shopify.com/fomo",
        website_url: "https://fomo.com/",
        script_pattern: "load.fomo.com",
        category: "Sales"
    },
    {
        name: "Currency Converter",
        short_description: "Show prices in customers local currency",
        app_store_url: "https://apps.shopify.com/doubly-currency-converter",
        website_url: "",
        script_pattern: "doubly.js",
        category: "Store Design"
    },
    {
        name: "Klaviyo",
        short_description: "Email and social campaigns",
        app_store_url: "https://apps.shopify.com/klaviyo-email-marketing",
        website_url: "https://www.klaviyo.com/",
        script_pattern: "klaviyo.js",
        category: "Marketing"
    },
    {
        name: "Credible",
        short_description: "Sales Booster",
        app_store_url: "https://apps.shopify.com/credible",
        website_url: "http://convertwithcredible.com",
        script_pattern: "credible.js",
        category: "Sales"
    },
    {
        name: "Hektor Commerce - Discount Direct",
        short_description: "Automatically apply discounts through a custom URL",
        app_store_url: "https://apps.shopify.com/discount-direct",
        website_url: "",
        script_pattern: "discountdirect.js",
        category: "Marketing"
    },
    {
        name: "Affiliatly",
        short_description: "Affiliate tracking",
        app_store_url: "https://apps.shopify.com/affiliatly",
        website_url: "https://www.affiliatly.com",
        script_pattern: "affiliatly.com",
        category: "Affiliate"
    },
    {
        name: "Product Filter",
        short_description: "Product filter & search",
        app_store_url: "https://apps.shopify.com/product-filter-search",
        website_url: "https://boostcommerce.net",
        script_pattern: "bc-sf-filter.js",
        category: "Store Design"
    },
    {
        name: "Hive",
        short_description: "Send targeted email campaigns",
        app_store_url: "https://apps.shopify.com/hive",
        website_url: "https://www.hive.co",
        script_pattern: "cdn-prod.hive.co",
        category: "Marketing"
    },
    {
        name: "Nosto",
        short_description: "Powerful Personalization",
        app_store_url: "https://apps.shopify.com/nosto-personalization-for-shopify",
        website_url: "http://nosto.com",
        script_pattern: "connect.nosto.com",
        category: "Sales"
    },
    {
        name: "Coin",
        short_description: "Automatic currency conversion",
        app_store_url: "https://apps.shopify.com/coin",
        website_url: "https://www.theshoppad.com/coin-for-shopify",
        script_pattern: "coin.js",
        category: "Store Design"
    },
    {
        name: "Riskified",
        short_description: "Fraud prevention",
        app_store_url: "https://www.riskified.com",
        website_url: "https://www.riskified.com",
        script_pattern: "beacon.riskified.com",
        category: "Marketing"
    },
    {
        name: "Retention Rocket",
        short_description: "Retention Marketing",
        app_store_url: "https://retentionrocket.com/",
        website_url: "https://retentionrocket.com/",
        script_pattern: "cdn.retentionrock.com",
        category: "Marketing"
    },
    {
        name: "Appifiny - Recently",
        short_description: "Recently purchased popup notifications",
        app_store_url: "https://apps.shopify.com/recently",
        website_url: "https://appifiny.co.uk",
        script_pattern: "recently.appifiny.io",
        category: "Sales"
    },
    {
        name: "Octane - AI Messenger",
        short_description: "Facebook Messenger",
        app_store_url: "https://apps.shopify.com/octane-ai-messenger-marketing",
        website_url: "https://octaneai.com",
        script_pattern: "octaneai.com",
        category: "Sales"
    },
    {
        name: "GeoIP",
        short_description: "Redirect Visitors based on their IP Address",
        app_store_url: "https://apps.shopify.com/geoip-country-redirect",
        website_url: "https://spicegems.com",
        script_pattern: "conditional-redirect.spicegems.com/js/scripttags",
        category: "Store Design"
    },
    {
        name: "Lamify- Please Stay",
        short_description: "Recover Sales with Your Tab",
        app_store_url: "https://apps.shopify.com/please-stay",
        website_url: "https://www.pleasestay.co",
        script_pattern: "pleasestay.js",
        category: "Sales"
    },
    {
        name: "Automatic Discount",
        short_description: "Apply automatic discounts",
        app_store_url: "https://apps.shopify.com/automatic-discount-rules",
        website_url: "https://desk.zoho.com/portal/tabarnapp/home",
        script_pattern: "wallsh_dp.min.js",
        category: "Marketing"
    },
    {
        name: "Cart Notifications",
        short_description: "Stylish favicon notification to reduce cart abandonment",
        app_store_url: "https://apps.shopify.com/cart-notifications",
        website_url: "",
        script_pattern: "cart-notifications",
        category: "Store Design"
    },
    {
        name: "SimplyTick",
        short_description: "Reporting",
        app_store_url: "https://apps.shopify.com/simplytick",
        website_url: "https://simplytick.com/",
        script_pattern: "simplytick.com",
        category: "Sales"
    },
    {
        name: "Secomapp Free Gifts",
        short_description: "Free Gifts",
        app_store_url: "https://apps.shopify.com/freegifts",
        website_url: "https://secomapp.com/",
        script_pattern: "freegifts/app/freegifts",
        category: "Marketing"
    },
    {
        name: "Bold Sales Motivator",
        short_description: "Increase the amount of every order",
        app_store_url: "https://apps.shopify.com/the-motivator",
        website_url: "http://boldcommerce.com/",
        script_pattern: "motivate.boldapps.net/motivator.php",
        category: "Sales"
    },
    {
        name: "Product Labels",
        short_description: "Product Labels",
        app_store_url: "https://apps.shopify.com/product-labels",
        website_url: "https://secomapp.com",
        script_pattern: "cdn.secomapp.com/product_label",
        category: "Store Design"
    },
    {
        name: "Order Deadline",
        short_description: "Order Deadline",
        app_store_url: "https://apps.shopify.com/order-deadline",
        website_url: "https://www.evilegg.co.uk",
        script_pattern: "order-deadline.min.js",
        category: "Sales"
    },
    {
        name: "Dealio",
        short_description: "Gamified Up-Sell",
        app_store_url: "https://apps.shopify.com/dealio-gamified-product-page-up-sell-app",
        website_url: "http://www.dealio-app.com",
        script_pattern: "dealioapp.azurewebsites.net",
        category: "Sales"
    },
    {
        name: "Bold - Custom Pricing",
        short_description: "Custom Pricing ‑ Wholesale",
        app_store_url: "https://apps.shopify.com/customer-pricing",
        website_url: "https://boldcommerce.com/custom-pricing",
        script_pattern: "customer_pricing.php",
        category: "Sales"
    },
    {
        name: "Easy Messenger",
        short_description: "Live Chat",
        app_store_url: "https://apps.shopify.com/easymessenger-livechat-messenger-as-a-live-chat",
        website_url: "https://nexusmedia-ua.com",
        script_pattern: "easybot.js",
        category: "Customer service"
    },
    {
        name: "Code Black Belt Currency Converter",
        short_description: "Currency Converter for Multi Currency Stores",
        app_store_url: "https://apps.shopify.com/currency-converter-plus",
        website_url: "https://www.codeblackbelt.com",
        script_pattern: "currency-converter-plus/main.min.js",
        category: "Store Design"
    },
    {
        name: "TrustBadges",
        short_description: "Authenticate And Build Trust",
        app_store_url: "https://apps.shopify.com/trust-by-kamozi",
        website_url: "https://kamozi.io/trust",
        script_pattern: "kamozi_trusted.js",
        category: "Trust and security"
    },
    {
        name: "Bold Quantity Break",
        short_description: "Quantity Breaks,Tiered Pricing and Bulk Discounts",
        app_store_url: "https://apps.shopify.com/quantity-breaks",
        website_url: "https://boldcommerce.com/quantity-breaks",
        script_pattern: "quantity_breaks.php",
        category: "Sales"
    },
    {
        name: "Stock Counter",
        short_description: "Social Proof and Scarcity",
        app_store_url: "https://apps.shopify.com/pressure-cooker",
        website_url: "https://websiteondemand.ca",
        script_pattern: "pressure-cooker.js",
        category: "Sales"
    },
    {
        name: "Recomify",
        short_description: "Related Products",
        app_store_url: "https://apps.shopify.com/recomify",
        website_url: "https://www.recomify.com",
        script_pattern: "app.recomify.com/script_tag.js",
        category: "Sales"
    },
    {
        name: "Sales Pop",
        short_description: "Automatically show recent transaction",
        app_store_url: "https://apps.shopify.com/sales-pop-master",
        website_url: "https://autoketing.com",
        script_pattern: "sales-pop-dot-autoketing-production-sdk.appspot.com",
        category: "Sales"
    },
    {
        name: "Sales Notification",
        short_description: "Recent sales",
        app_store_url: "https://apps.shopify.com/mps-sales-notification",
        website_url: "https://makeprosimp.com",
        script_pattern: "sales-notification.makeprosimp.com",
        category: "Sales"
    },
    {
        name: "Trust Badge",
        short_description: "Beautiful payment badges",
        app_store_url: "https://apps.shopify.com/trust-badge",
        website_url: "",
        script_pattern: "hektorcommerce.com/apps/trustbadge",
        category: "Trust and security"
    },
    {
        name: "Trust Hero",
        short_description: "More Trust, More Sales",
        app_store_url: "https://apps.shopify.com/trust-hero",
        website_url: "",
        script_pattern: "assets/trust_hero",
        category: "Trust and security"
    },
    {
        name: "Full Page Zoom",
        short_description: "High quality full screen image zoom for high quality images",
        app_store_url: "https://apps.shopify.com/full-page-zoom",
        website_url: "https://www.codeblackbelt.com",
        script_pattern: "cdn.codeblackbelt.com/js/modules/full-page-zoom/main.min.js",
        category: "Store Design"
    },
    {
        name: "Checkout Share",
        short_description: "Turn every conversion into a conversation",
        app_store_url: "https://apps.shopify.com/checkout-share",
        website_url: "https://spacesquirrel.co/checkout-share",
        script_pattern: "checkoutshare.spacesquirrel.net/embed_share_a_purchase.js",
        category: "Sales"
    },
    {
        name: "ReCharge",
        short_description: "Subscriptions by ReCharge",
        app_store_url: "https://apps.shopify.com/subscription-payments",
        website_url: "https://rechargepayments.com",
        script_pattern: "rechargeassets-bootstrapheroes-rechargeapps.netdna-ssl.com",
        category: "Sales"
    },
    {
        name: "Klarna",
        short_description: "Klarna Payments",
        app_store_url: "https://www.klarna.com/international/business/shopify",
        website_url: "https://www.klarna.com/international/business/shopify",
        script_pattern: "www.klarnapayments.com/assets/upstream.js",
        category: "Sales"
    },
    {
        name: "Back in Stock Alerts",
        short_description: "Set Up Back in Stock Notifications for Out of Stock Products",
        app_store_url: "https://apps.shopify.com/in-stock-reminder",
        website_url: "https://spur-i-t.com",
        script_pattern: "in-stock-reminder/js/common.js",
        category: "Marketing"
    },
    {
        name: "Analytics",
        short_description: "Data Management",
        app_store_url: "https://gator.io",
        website_url: "https://gator.io",
        script_pattern: "api.gator.io/v1/analytics",
        category: "Marketing"
    },
    {
        name: "Recomatic Related Products",
        short_description: "Product recommendations",
        app_store_url: "https://apps.shopify.com/recomatic",
        website_url: "http://www.recomaticapp.com",
        script_pattern: "recomaticapp2-wordsensesas.netdna-ssl.com",
        category: "Sales"
    },
    {
        name: "Pixel Union Countdown",
        short_description: "Countdown Sales Timer",
        app_store_url: "https://apps.shopify.com/countdown-timers",
        website_url: "https://www.pixelunion.net",
        script_pattern: "apps.pixelunion.net/scripts/js/countdown/bundle.min.js",
        category: "Sales"
    },
    {
        name: "Loyalty Rewards",
        short_description: "Loyalty Rewards Referral Point",
        app_store_url: "https://apps.shopify.com/referral-loyalty",
        website_url: "https://www.aaaecommerce.com",
        script_pattern: "aaa-refferal-script.js",
        category: "Marketing"
    },
    {
        name: "EggViews",
        short_description: "Product Reviews",
        app_store_url: "https://apps.shopify.com/eggviews",
        website_url: "https://www.gowebbaby.com",
        script_pattern: "eggViewsScript_v2.js",
        category: "Sales"
    },
    {
        name: "Sales Booster",
        short_description: "Boost sales- BOGO and upsell",
        app_store_url: "https://apps.shopify.com/checkout-booster",
        website_url: "https://www.aaaecommerce.com/",
        script_pattern: "checkoutbooster_v1.js",
        category: "Sales"
    },
    {
        name: "Kount",
        short_description: "Fraud Prevention and Detection",
        app_store_url: "https://kount.com",
        website_url: "https://kount.com",
        script_pattern: "shopify.kount.net",
        category: "Sales"
    },
    {
        name: "Multi Vendor",
        short_description: "Convert your ECommerce Store",
        app_store_url: "https://apps.shopify.com/multi-vendor-marketplace",
        website_url: "https://webkul.com",
        script_pattern: "shopify.webkul.com/multivendor/js/download_prod.js",
        category: "Products"
    },
    {
        name: "Pixlee",
        short_description: "UGC + Shoppable IG",
        app_store_url: "https://apps.shopify.com/pixlee",
        website_url: "https://www.pixlee.com",
        script_pattern: "pixlee.shopify.v2.prod.js",
        category: "Sales"
    },
    {
        name: "Infinite Options",
        short_description: "Customize your products",
        app_store_url: "https://apps.shopify.com/custom-options",
        website_url: "https://www.theshoppad.com/infinite-options-for-shopify",
        script_pattern: "customizery.js",
        category: "Store Design"
    },
    {
        name: "Variant Image Automator",
        short_description: "Show multiple images of variants",
        app_store_url: "https://apps.shopify.com/variant-image-automator",
        website_url: "",
        script_pattern: "variant-image-automator.starapps.studio/product_variants.js",
        category: "Store Design"
    },
    {
        name: "Variant Descriptions",
        short_description: "Show Variant Specific Details",
        app_store_url: "https://apps.shopify.com/variant-descriptions-by-starapps",
        website_url: "",
        script_pattern: "variant-descriptions.starapps.studio/apps.js",
        category: "Store Design"
    },
    {
        name: "Announcement Bar",
        short_description: "Promote discounts on an announcement bar",
        app_store_url: "https://apps.shopify.com/quick-announcement-bar-always-keep-your-customers-informed",
        website_url: "https://hextom.com",
        script_pattern: "quickannouncementbar.js",
        category: "Store Design"
    },
    {
        name: "Ultimate Sales Boost",
        short_description: "Increase sales with scarcity, urgency, trust",
        app_store_url: "https://apps.shopify.com/ultimate-sales-boost",
        website_url: "https://hextom.com",
        script_pattern: "ultimatesalesboost.js",
        category: "Sales"
    },
    {
        name: "Preorderly",
        short_description: "Pre orders",
        app_store_url: "https://apps.shopify.com/preorderly",
        website_url: "http://www.codeinero.net",
        script_pattern: "preorderly.azurewebsites.net/Scripts/preorder.min.js",
        category: "Orders"
    },
    {
        name: "Messenger",
        short_description: "Sell products and provide customer support from Messenger",
        app_store_url: "https://apps.shopify.com/messenger",
        website_url: "",
        script_pattern: "messenger_commerce/assets/new_message_us",
        category: "Customer service"
    },
    {
        name: "Shipping Rates Calculator",
        short_description: "Shipping rates calculator with geolocation",
        app_store_url: "https://apps.shopify.com/shipping-rates-calculator-plus",
        website_url: "https://www.codeblackbelt.com",
        script_pattern: "cdn.codeblackbelt.com/js/modules/shipping-rates-calculator-plus",
        category: "Orders"
    },
    {
        name: "Shoelace",
        short_description: "Retargeting Journeys",
        app_store_url: "https://apps.shopify.com/shoelace-retargeting",
        website_url: "https://shoelace.com",
        script_pattern: "lace.shoelace.com",
        category: "Marketing"
    },
    {
        name: "Quantity Discount",
        short_description: "Add Quantity Discount or Tiered Pricing",
        app_store_url: "https://apps.shopify.com/pricing-by-quantity",
        website_url: "https://spur-i-t.com",
        script_pattern: "pricing-by-quantity/js/clear-cart.js",
        category: "Sales"
    },
    {
        name: "Sticky Add To Cart",
        short_description: "Dramatically enhance your ADD TO CART and CHECKOUT process",
        app_store_url: "https://apps.shopify.com/sticky-add-to-cart-bar",
        website_url: "http://www.codeinero.net",
        script_pattern: "stickyaddtocartbar.azurewebsites.net/Scripts/satcb.min.js",
        category: "Store Design"
    },
    {
        name: "Product Accessories",
        short_description: "Show related Product Accessories directly on your product page",
        app_store_url: "https://apps.shopify.com/product-accessories",
        website_url: "http://www.w3trends.com",
        script_pattern: "accessories.js",
        category: "Sales"
    },
    {
        name: "Tobi",
        short_description: "SMS + FREE Facebook Messenger",
        app_store_url: "https://apps.shopify.com/tobi",
        website_url: "https://tobi.ai",
        script_pattern: "tobi.ai",
        category: "Customer Service"
    },
    {
        name: "Gift Reggie",
        short_description: "Gift Registry and Wishlist",
        app_store_url: "https://apps.shopify.com/gift-reggie-by-eshop-admin",
        website_url: "https://gift-reggie.eshopadmin.com",
        script_pattern: "gift-reggie.eshopadmin.com",
        category: "Sales"
    },
    {
        name: "Bold Brain",
        short_description: "Product recomendations",
        app_store_url: "https://apps.shopify.com/the-bold-brain",
        website_url: "https://boldcommerce.com",
        script_pattern: "brain-assets.boldapps.net/js/analytics.js",
        category: "Sales"
    },
    {
        name: "OptiMonk",
        short_description: "Exit intent popups",
        app_store_url: "https://apps.shopify.com/optimonk",
        website_url: "http://optimonk.com",
        script_pattern: "front.optimonk.com",
        category: "Marketing"
    },
    {
        name: "No Fraud",
        short_description: "Prevent Fraud Chargebacks, Accept More Orders",
        app_store_url: "https://apps.shopify.com/nofraud-chargeback-prevention-and-protection",
        website_url: "https://www.nofraud.com",
        script_pattern: "services.nofraud.com/js/device.js",
        category: "Orders and shipping"
    },
    {
        name: "Product Customizer",
        short_description: "Easily add options, variants & customization to your products",
        app_store_url: "https://apps.shopify.com/product-customizer",
        website_url: "http://productcustomizer.com",
        script_pattern: "shopify-product-customizer.js",
        category: "Store Design"
    },
    {
        name: "Verge",
        short_description: "SEO JSON‑LD Boost",
        app_store_url: "https://apps.shopify.com/seo-json-ld-boost-by-verge",
        website_url: "https://vergegraphics.com",
        script_pattern: "verge-json-ld.js",
        category: "Marketing"
    },
    {
        name: "Varinode Trust",
        short_description: "Trust seals and review tools",
        app_store_url: "https://apps.shopify.com/trust",
        website_url: "https://trust.varinode.com",
        script_pattern: "verify.varinode.com/ts_js.php",
        category: "Trust and security"
    },
    {
        name: "Custom Product Options",
        short_description: "Product options",
        app_store_url: "https://apps.shopify.com/best-custom-product-options",
        website_url: "https://www.relentlessapps.com",
        script_pattern: "best_custom_product_options.js",
        category: "Store Design"
    },
    {
        name: "Globo",
        short_description: "Straight to Checkout",
        app_store_url: "https://apps.shopify.com/straight-to-checkout-skip-cart",
        website_url: "http://globosoftware.net",
        script_pattern: "globocheckout_init.js",
        category: "Store Design"
    },
    {
        name: "Skip Cart",
        short_description: "Faster Checkouts to Reduce Abandoned Carts",
        app_store_url: "https://apps.shopify.com/skip-cart-the-fast-way-to-checkout",
        website_url: "",
        script_pattern: "skipcart.js",
        category: "Store Design"
    },
    {
        name: "Metrilo",
        short_description: "Marketing Platform",
        app_store_url: "https://apps.shopify.com/metrilo",
        website_url: "https://www.metrilo.com",
        script_pattern: "shoparty.metrilo.com",
        category: "Marketing"
    },
    {
        name: "W3 - Store Locator",
        short_description: "Easily add locations to a map for your customers to find you",
        app_store_url: "https://apps.shopify.com/store-locator-w3",
        website_url: "http://www.w3trends.com",
        script_pattern: "storelocator.w3apps.co/js/include.js",
        category: "Store Design"
    },
    {
        name: "Marsello - Loyalty",
        short_description: "Sell more with a loyalty program and automated email marketing",
        app_store_url: "https://apps.shopify.com/marsello",
        website_url: "https://www.marsello.com",
        script_pattern: "app.marsello.com",
        category: "Marketing"
    },
    {
        name: "Uploadery",
        short_description: "Give your customers the ability to send files with their order",
        app_store_url: "https://apps.shopify.com/uploadery",
        website_url: "https://www.theshoppad.com/uploadery-for-shopify",
        script_pattern: "uploadery.js",
        category: "Store Design"
    },
    {
        name: "Cooki",
        short_description: "Easy GDPR compliance",
        app_store_url: "https://apps.shopify.com/cooki",
        website_url: "https://www.theshoppad.com/uploadery-for-shopify",
        script_pattern: "cookihq.com",
        category: "Trust and Security"
    },
    {
        name: "Giftship",
        short_description: "Ship to Multiple Addresses, Gift Messages",
        app_store_url: "https://apps.shopify.com/giftship",
        website_url: "https://appsbypix.com/",
        script_pattern: "giftship.4.2.10.js",
        category: "Sales"
    },
    {
        name: "EasyVideo",
        short_description: "Easily add product videos",
        app_store_url: "https://apps.shopify.com/easyvideo",
        website_url: "https://nexusmedia-ua.com/pages/contact",
        script_pattern: "easyvideo_v2.js",
        category: "Store Design"
    },
    {
        name: "Pixel Perfect",
        short_description: "Product Feeds and Audiences made Simple",
        app_store_url: "https://apps.shopify.com/pixel-perfect",
        website_url: "https://www.wyred-up.com",
        script_pattern: "pixel-perfect.js",
        category: "Marketing"
    },
    {
        name: "Teelaunch",
        short_description: "Print on Demand",
        app_store_url: "https://apps.shopify.com/teelaunch-1",
        website_url: "https://teelaunch.com",
        script_pattern: "teelaunch-scripts.js",
        category: "Products"
    },
    {
        name: "Timer Plus",
        short_description: "Countdown",
        app_store_url: "https://apps.shopify.com/timer-plus",
        website_url: "",
        script_pattern: "timerplus/files/js/timer.js",
        category: "Sales"
    },
    {
        name: "JetPrint Fulfillment",
        short_description: "Print-On-Demand Fulfillment",
        app_store_url: "https://apps.shopify.com/jetprint-fulfillment",
        website_url: "https://www.jetprintapp.com",
        script_pattern: "customization.jetprintapp.com",
        category: "Store Design"
    },
    {
        name: "Uplinkly",
        short_description: "Sticky Cart",
        app_store_url: "https://apps.shopify.com/sticky-cart-by-uplinkly",
        website_url: "https://www.uplinkly.com",
        script_pattern: "sticky-cart.uplinkly-static.com",
        category: "Store Design"
    },
    {
        name: "Smart Push Marketing",
        short_description: "Web push notifications",
        app_store_url: "https://apps.shopify.com/web-push-notification",
        website_url: "https://hextom.com",
        script_pattern: "smartpushmarketing.js",
        category: "Marketing"
    },
    {
        name: "Yeps",
        short_description: "Shipping & announcement bar",
        app_store_url: "https://apps.shopify.com/yeps-io",
        website_url: "https://yeps.io",
        script_pattern: "app.yeps.io",
        category: "Store Design"
    },
    {
        name: "Nfcube",
        short_description: "Instagram Feed",
        app_store_url: "https://apps.shopify.com/instafeed",
        website_url: "https://shopify.nfcube.com",
        script_pattern: "instafeed.nfcube.com",
        category: "Marketing"
    },
    {
        name: "ID Discount",
        short_description: "Military Discount",
        app_store_url: "https://apps.shopify.com/military-discount",
        website_url: "https://id.discount",
        script_pattern: "cdn.id.discount/seller/launcher.js",
        category: "Marketing"
    },
    {
        name: "Sky Pilot",
        short_description: "Seamless File and Video Delivery",
        app_store_url: "https://apps.shopify.com/sky-pilot",
        website_url: "https://www.skypilotapp.com",
        script_pattern: "sky_pilot.js",
        category: "Orders and shipping"
    },
    {
        name: "Carts Guru",
        short_description: "Retargeting",
        app_store_url: "https://apps.shopify.com/cartsguru",
        website_url: "http://carts.guru",
        script_pattern: "api.carts.guru",
        category: "Sales"
    },
    {
        name: "Kiwi Size Chart",
        short_description: "Manage all your size charts",
        app_store_url: "https://apps.shopify.com/kiwi-sizing",
        website_url: "",
        script_pattern: "kiwishopapps.com",
        category: "Store Design"
    },
    {
        name: "Shop The Look",
        short_description: "Help your customers Buy the Look and purchase multiple items",
        app_store_url: "https://apps.shopify.com/shop-the-look-4",
        website_url: "https://shopthelookapp.com",
        script_pattern: "shopthelook.js",
        category: "Sales"
    },
    {
        name: "Smart eu cookie banner",
        short_description: "Banner, Block Cookies",
        app_store_url: "https://apps.shopify.com/smart-eu-cookie-banner",
        website_url: "",
        script_pattern: "smarteucookiebanner.upsell-apps.com",
        category: "Trust and security"
    },
    {
        name: "Broadcast Bar",
        short_description: "Display your broadcast news",
        app_store_url: "https://apps.shopify.com/broadcast-bar",
        website_url: "https://www.zestard.com",
        script_pattern: "broadcast-bar/public/js/newsticker-app.js",
        category: "Store Design"
    },
    {
        name: "Getbread",
        short_description: "Place Bread checkout buttons",
        app_store_url: "https://shopify.getbread.com",
        website_url: "https://www.getbread.com",
        script_pattern: "shopify.getbread.com",
        category: "Store Design"
    },
    {
        name: "ReConvert",
        short_description: "ReConvert post purchase",
        app_store_url: "https://apps.shopify.com/reconvert",
        website_url: "https://stilyoapps.info",
        script_pattern: "store_reconvert.js",
        category: "Sales"
    },
    {
        name: "Sales Countdown Timer",
        short_description: "Countdown Timer",
        app_store_url: "https://apps.shopify.com/sales-countdown-timer-bar",
        website_url: "https://spur-i-t.com",
        script_pattern: "sales-countdown-timer/js/common.js",
        category: "Sales"
    },
    {
        name: "Klevu Search",
        short_description: "Instant smart search",
        app_store_url: "https://apps.shopify.com/klevu-smart-search",
        website_url: "https://www.klevu.com",
        script_pattern: "js.klevu.com",
        category: "Store Design"
    },
    {
        name: "AdNabu",
        short_description: "Google Ads",
        app_store_url: "https://apps.shopify.com/partners/adnabu-inc",
        website_url: "https://www.adnabu.com",
        script_pattern: "storage.googleapis.com/adnabu-shopify",
        category: "Marketing"
    },
    {
        name: "Pop‑Up Builder",
        short_description: "Pop‑Up Builder",
        app_store_url: "https://apps.shopify.com/pop-up-builder",
        website_url: "https://www.lumifish.com",
        script_pattern: "lumifish-pop-up.appspot.com/popup.js",
        category: "Store Design"
    },
    {
        name: "Add to cart button",
        short_description: "Add to cart button and buy button",
        app_store_url: "https://apps.shopify.com/add-to-cart",
        website_url: "https://www.goldendev.win/shopify/add-to-cart/support",
        script_pattern: "add-to-cart.js",
        category: "Store Design"
    },
    {
        name: "ProFit",
        short_description: "Virtual Fitting Room For Online Fashion Stores",
        app_store_url: "https://apps.shopify.com/alomafit-vfr-light-1",
        website_url: "https://www.alomafit.com",
        script_pattern: ".alomafit.com/sticky_try.js",
        category: "Store Design"
    },
    {
        name: "XE",
        short_description: "Currency Converter",
        app_store_url: "https://apps.shopify.com/xe-currency-converter",
        website_url: "https://www.xe.com",
        script_pattern: "xecurrency.js",
        category: "Store Design"
    },
    {
        name: "All‑in‑one Bar",
        short_description: "Announcement bar",
        app_store_url: "https://apps.shopify.com/all-in-one-bar",
        website_url: "",
        script_pattern: "all-in-one-bar.js",
        category: "Store Design"
    },
    {
        name: "Sitejabber",
        short_description: "Store Reviews",
        app_store_url: "https://apps.shopify.com/sitejabber-free-store-reviews-traffic-leads",
        website_url: "https://www.sitejabber.com",
        script_pattern: ".sitejabber.com",
        category: "Sales"
    },
    {
        name: "Currency Converter",
        short_description: "Provide localized shopping experience, increase global sales",
        app_store_url: "https://apps.shopify.com/multi-currency-converter",
        website_url: "https://hextom.com",
        script_pattern: "lastsecondcoupon/js/multicurrencyconverter.js",
        category: "Store Design"
    },
    {
        name: "Cool Image Magnifier",
        short_description: "Magnifier-like zoom for your product images",
        app_store_url: "https://apps.shopify.com/cool-image-magnifier",
        website_url: "https://www.codeblackbelt.com",
        script_pattern: ".codeblackbelt.com/js/modules/cool-image-magnifier",
        category: "Store Design"
    },
    {
        name: "Bold Loyalty Points",
        short_description: "Flexible loyalty program",
        app_store_url: "https://apps.shopify.com/loyalty-points-by-bold",
        website_url: "https://boldcommerce.com/loyalty-points",
        script_pattern: "loy.boldapps.net",
        category: "Marketing"
    },
    {
        name: "App1pro",
        short_description: "Related Products",
        app_store_url: "https://apps.shopify.com/related-products-pro",
        website_url: "http://app1pro.com",
        script_pattern: "app1pro.b-cdn.net/relatedproduct/js/relatedproduct.min.js",
        category: "Sales"
    },
    {
        name: "Leadslide (Multiple possibilites)",
        short_description: "Coupon Popup, Upsells, Shipping Bar",
        app_store_url: "https://apps.shopify.com/partners/developer-dd332b77623f4d86",
        website_url: "https://leadslide.com",
        script_pattern: "leadslide-js",
        category: "Sales"
    },
    {
        name: "Seguno",
        short_description: "Dynamic Banner Suite",
        app_store_url: "https://apps.shopify.com/coupon-banner-with-countdown-carousel",
        website_url: "https://www.seguno.com",
        script_pattern: ".seguno.com",
        category: "Store Design"
    },
    {
        name: "Countdown Timer",
        short_description: "Add Countdown Timer your Store & generate Urgency",
        app_store_url: "https://apps.shopify.com/cowntdown-timer-by-revy",
        website_url: "https://revy.io",
        script_pattern: "api.revy.io/timer.js",
        category: "Sales"
    },
    {
        name: "Revy - UpSell",
        short_description: "Increase & Maximize average order value and sales with UpSell",
        app_store_url: "https://apps.shopify.com/sales-booster-upsell-cross-sell-by-revy-shopify-apps",
        website_url: "https://revy.io",
        script_pattern: "api.revy.io/upsell.js",
        category: "Sales"
    },
    {
        name: "Hide PayPal in Cart",
        short_description: "Hide PayPal button to improve customer checkout experience",
        app_store_url: "https://apps.shopify.com/hide-paypal-in-cart",
        website_url: "https://inscoder.com",
        script_pattern: "hidepaypal2-static.inscoder.com",
        category: "Store Design"
    },
    {
        name: "Secomapp Currency Switcher",
        short_description: "Currency Switcher",
        app_store_url: "https://apps.shopify.com/currency-switcher",
        website_url: "https://www.secomapp.com/currency-switcher-app",
        script_pattern: "cdn.secomapp.com/currency_switcher",
        category: "Store Design"
    },
    {
        name: "Cart Activity",
        short_description: "Get a newsfeed of what shoppers are doing on your site",
        app_store_url: "https://apps.shopify.com/cart-activity",
        website_url: "https://www.secomapp.com/currency-switcher-app",
        script_pattern: ".cartactivity.com/assets/recent_activities.js",
        category: "Sales"
    },
    {
        name: "Panda",
        short_description: "Language Translate",
        app_store_url: "https://apps.shopify.com/translate",
        website_url: "https://pandaapps.in",
        script_pattern: "pandaapps.in/apps/languagepanda",
        category: "Store Design"
    },
    {
        name: "Lifter Apps",
        short_description: "Pop‑Up Window",
        app_store_url: "https://apps.shopify.com/pop-up-window",
        website_url: "https://lifterapps.com",
        script_pattern: "popup4.lifterpopup.com",
        category: "Marketing"
    },
    {
        name: "AutoCommerce",
        short_description: "Amazon-like product recommendations",
        app_store_url: "https://apps.shopify.com/orcinus-product-recommendation",
        website_url: "http://autocommerce.io",
        script_pattern: "rec.autocommerce.io/recommender_javascript",
        category: "Sales"
    },
    {
        name: "WooHoo",
        short_description: "Gamified Email Popups",
        app_store_url: "https://apps.shopify.com/woohoo",
        website_url: "https://getwoohoo.com",
        script_pattern: "app.getwoohoo.com",
        category: "Sales"
    },
    {
        name: "Tidio.co",
        short_description: "Live chat boosted with Bots and Marketing Automation",
        app_store_url: "https://apps.shopify.com/tidio-chat",
        website_url: "http://tidio.co",
        script_pattern: "code.tidio.co",
        category: "Customer service"
    },
    {
        name: "Upsell - KAD Systems",
        short_description: "Generate more sales through upsells with our simple upsell app",
        app_store_url: "https://apps.shopify.com/upsell-system",
        website_url: "https://kad.systems",
        script_pattern: "upsell.kad.systems",
        category: "Sales"
    },
    {
        name: "Nextsale",
        short_description: "Social Proof, Increase Sales Pop Timers Social Proof and hurry",
        app_store_url: "https://apps.shopify.com/nextsale",
        website_url: "https://nextsale.io",
        script_pattern: "cdn.nextsale.io",
        category: "Sales"
    },
    {
        name: "Revy Unlimited Bundles",
        short_description: "Bundle products together with discounts and make more sales!",
        app_store_url: "https://apps.shopify.com/product-bundles-discounts-by-revy",
        website_url: "https://revy.io",
        script_pattern: "api.revy.io/bundle.js",
        category: "Store Design"
    },
    {
        name: "NDNAPPS Banner Slider",
        short_description: "Responsive banner slider, slideshow, image gallery",
        app_store_url: "https://apps.shopify.com/banner-slider-1",
        website_url: "https://www.ndnapps.com",
        script_pattern: "ndnapps.com/ndnapps/banner-slider",
        category: "Store Design"
    },
    {
        name: "Volume and Tiered Discounts",
        short_description: "Ultimate Quantity Discounts & Tiered Pricing Rule for Products",
        app_store_url: "https://apps.shopify.com/volume-discount-by-hulkapps",
        website_url: "https://www.hulkapps.com",
        script_pattern: "volumediscount.hulkapps.com",
        category: "Sales"
    },
    {
        name: "Trust Badge Master",
        short_description: "Establish trust and security to increase sales conversions",
        app_store_url: "https://apps.shopify.com/badge-master-by-hulkapps",
        website_url: "https://www.hulkapps.com",
        script_pattern: "badgemaster.hulkapps.com",
        category: "Sales"
    },
    {
        name: "Ultimate Upsell",
        short_description: "Upsell Bundles, Before Checkout or After Payment",
        app_store_url: "https://apps.shopify.com/ultimate-upsell",
        website_url: "https://tabarnapp.com/ultimate-upsell-shopify",
        script_pattern: "ultimate-upsells/selectorTool.min.js",
        category: "Sales"
    },
    {
        name: "Advanced Bundle Products",
        short_description: "Product bundles: make higher value offers and get more sales!",
        app_store_url: "https://apps.shopify.com/grouped-products",
        website_url: "https://appstore.mageworx.com",
        script_pattern: "files-shpf.mageworx.com/groupedproducts",
        category: "Sales"
    },
    {
        name: "Message Mate Texting Platform",
        short_description: "Convert more customers with the convenience of texting",
        app_store_url: "https://apps.shopify.com/message-mate",
        website_url: "https://ownerlistens.com",
        script_pattern: "ownerlistens.com",
        category: "Sales"
    },
    {
        name: "OrderLogic",
        short_description: "Simple min and max product and order limits plus much more",
        app_store_url: "https://apps.shopify.com/orderlogic",
        website_url: "https://www.orderlogicapp.com",
        script_pattern: "orderlogicapp.com",
        category: "Store Design"
    },
    {
        name: "EU Cookie Bar",
        short_description: "Provide a cookie bar to European customers",
        app_store_url: "https://apps.shopify.com/eu-cookie-bar",
        website_url: "",
        script_pattern: "booster-eu-cookie",
        category: "Sales"
    },
    {
        name: "Omega Instant Search",
        short_description: "Improve store search and boost your sales",
        app_store_url: "https://apps.shopify.com/omega-instant-search",
        website_url: "https://omegacommerce.com/search",
        script_pattern: "search.omegacommerce.com",
        category: "Store Design"
    },
    {
        name: "Sales Notifications pop up",
        short_description: "Recent Sales Notifications popup for urgency and social proof",
        app_store_url: "https://apps.shopify.com/livebar",
        website_url: "",
        script_pattern: "app.livebar.io",
        category: "Sales"
    },
    {
        name: "GDPR Cookie Compiler",
        short_description: "Get GDPR Cookie Compliance Easier",
        app_store_url: "https://apps.shopify.com/eu-cookie-compiler",
        website_url: "https://www.metizsoft.com",
        script_pattern: "metizapps.com/eucookie",
        category: "Trust and Security"
    },
    {
        name: "Sales Pop up Notifications",
        short_description: "Sales Pop to boost sale & social proof with live sales pop up",
        app_store_url: "https://apps.shopify.com/recent-sales-popup-notifications-1",
        website_url: "https://carecart.io",
        script_pattern: "sales-pop.carecart.io/lib/salesnotifier.js",
        category: "Sales"
    },
    {
        name: "Pixel Union Ultimate Special Offers",
        short_description: "All your sales, discounts, and promotions in one place",
        app_store_url: "https://apps.shopify.com/special-offers",
        website_url: "https://www.pixelunion.net",
        script_pattern: "storefront.cdn.pxu.co/apps/uso.js",
        category: "Sales"
    },
    {
        name: "Product Discount",
        short_description: "Quantity Discounts/Tiered, Countdown Timer, Stock Countdown",
        app_store_url: "https://apps.shopify.com/discount-master",
        website_url: "https://autoketing.com",
        script_pattern: "product-discount-dot-autoketing-production-sdk.appspot.com/dist/product-discount-embed.js",
        category: "Sales"
    },
    {
        name: "Upsell Cross‑Sell",
        short_description: "Upsell Product, Cross-sell, Discounted Upsells, Upsell Bundles",
        app_store_url: "https://apps.shopify.com/upsell-cross-sell-smart-tool",
        website_url: "https://autoketing.com",
        script_pattern: "upsell-master-dot-autoketing-production-sdk.appspot.com/dist/upsell-master-embed.js",
        category: "Sales"
    },
    {
        name: "Instant Brand Page",
        short_description: "A-Z Brand Index Page and Favourites Slider",
        app_store_url: "https://apps.shopify.com/instant-brand-page",
        website_url: "http://lowfruitsolutions.com",
        script_pattern: "cdn.instantbrandpage.lowfruitsolutions.com",
        category: "Sales"
    },
    {
        name: "Back In Stock by Appikon",
        short_description: "Back In Stock product notifications via email, SMS, FB Messenger and Push",
        app_store_url: "https://apps.shopify.com/customer-back-in-stock-alert-user-notification-app",
        website_url: "http://appikon.com",
        script_pattern: "subscribe-it.js",
    },
    {
        name: "Okendo",
        short_description: "Product reviews",
        app_store_url: "https://apps.shopify.com/okendo-reviews",
        website_url: "https://www.okendo.io/",
        script_pattern: "reviewsWidget.min.js",
        category: "Sales"
    },
    {
        name: "Hulk Apps Reviews",
        short_description: "Product reviews",
        app_store_url: "https://apps.shopify.com/product-reviews-by-hulkapps",
        website_url: "https://www.hulkapps.com/blogs/product-reviews/",
        script_pattern: "reviews-by-hulkapps.js",
        category: "Sales"
    },
    {
        name: "Reviews.io",
        short_description: "Product reviews",
        app_store_url: "https://apps.shopify.com/reviews-co-uk-product-and-merchant-review-collection",
        website_url: "https://www.reviews.io",
        script_pattern: ".reviews.io",
        category: "Sales"
    },
    {
        name: "Junip",
        short_description: "Product reviews",
        app_store_url: "https://apps.shopify.com/junip",
        website_url: "https://www.juniphq.com",
        script_pattern: "scripts.juniphq.com",
    },
    {
        name: "GeReviews",
        short_description: "Product reviews",
        app_store_url: "https://apps.shopify.com/getreviews",
        website_url: "https://www.dsreviews.net",
        script_pattern: "api.dsreviews.net",
    },
    {
        name: "PickyStory",
        short_description: "Automate Upsell & Cross-Sell of Bundles, Kits, and Looks",
        long_description: "Generate more revenue from every store visit. Sell Shopify product Bundles, Kits, and Looks with one app. It’s easy and done in a few clicks.",
        app_store_url: "https://apps.shopify.com/product-kits-bundles-pickystory",
        website_url: "https://pickystory.com/",
        category: "Sales",
        script_pattern: /cdn\.pickystory\.com\/widget\/dist\/latest\/pickystory-widget\.min\.js/,
    }
];
