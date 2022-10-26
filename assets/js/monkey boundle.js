var _gaq = _gaq || [];

// Google Analytics (Universal) Setup
(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', '__ga');

//<![CDATA[
window.$S = {};
$S.global_conf = {
    "premium_apps": ["HtmlApp", "EcwidApp", "MailChimpApp", "CeleryApp", "LocuApp"],
    "environment": "production",
    "env": "production",
    "host_suffix": "strikingly.com",
    "asset_url": "https:\/\/static-assets.strikinglycdn.com",
    "locale": "fr",
    "in_china": false,
    "browser_locale": null,
    "is_sxl": false,
    "china_optimization": false,
    "enable_live_chat": true,
    "user_image_cdn": {
        "qn": "\/\/user-assets.sxlcdn.com",
        "s": "\/\/user-images.strikinglycdn.com"
    },
    "GROWINGIO_API_KEY": null,
    "BAIDU_API_KEY": null,
    "SEGMENTIO_API_KEY": "eb3txa37hi",
    "FACEBOOK_APP_ID": "138736959550286",
    "WECHAT_APP_ID": null,
    "WECHAT_MP_APP_ID": "",
    "KEEN_IO_PROJECT_ID": "5317e03605cd66236a000002",
    "KEEN_IO_WRITE_KEY": "efd460f8e282891930ff1957321c12b64a6db50694fd0b4a01d01f347920dfa3ce48e8ca249b5ea9917f98865696cfc39bc6814e4743c39af0a4720bb711627d9cf0fe63d5d52c3866c9c1c3178aaec6cbfc1a9ab62a3c9a827d2846a9be93ecf4ee3d61ebee8baaa6a1d735bff6e37b",
    "FIREBASE_URL": "bobcat.firebaseIO.com",
    "CLOUDINARY_CLOUD_NAME": "hrscywv4p",
    "CLOUDINARY_PRESET": "oxbxiyxl",
    "rollout": {
        "background_for_all_sections": false,
        "crm_livechat": true,
        "stripe_payer_email": false,
        "stripe_alipay": true,
        "stripe_wechatpay": true,
        "paynow_unionpay": true,
        "new_checkout_design": true,
        "new_section_selector": true,
        "s6_feature": true,
        "advanced_section_layout_setting": true,
        "new_blog_editor": true,
        "new_blog_editor_disabled": false,
        "new_blog_layout": true,
        "new_store_layout": true,
        "gallery_section_2021": true,
        "strikingly_618": false,
        "nav_2021": true,
        "nav_2021_off": false,
        "pbs_i18n": true,
        "support_sca": false,
        "wechat_sharing": false,
        "new_wechat_oauth": false,
        "midtrans_payments": false,
        "pbs_variation_b": true,
        "all_currencies": true
    },
    "cookie_categories": {
        "necessary": ["_claim_popup_ref", "member_name", "authenticationToken", "_pbs_i18n_ab_test", "__strk_cookie_notification", "__is_open_strk_necessary_cookie", "__is_open_strk_analytics_cookie", "__is_open_strk_preferences_cookie", "site_id", "crm_chat_token", "authenticationToken", "member_id", "page_nocache", "page_password", "page_password_uid", "return_path_after_verification", "return_path_after_page_verification", "is_submitted_email"],
        "preferences": ["__strk_cookie_comment_name", "__strk_cookie_comment_email"],
        "analytics": ["__strk_session_id"]
    },
    "WEITIE_APP_ID": null,
    "WEITIE_MP_APP_ID": null,
    "BUGSNAG_FE_API_KEY": "",
    "honeypot": "honeypot"
};
$S.app_instances = [];
$S.nav = [{
    "name": "\/home",
    "uid": "dbf686b1-b23a-4561-a09c-aaefcd0a520e",
    "memberOnly": false,
    "hasPassword": false,
    "isHomePage": true
}, {
    "name": "\/events",
    "uid": "03799797-7a1b-49bd-a5b5-5e643771427d",
    "memberOnly": false,
    "hasPassword": false,
    "isHomePage": true
}];
$S.conf = {
    "SUPPORTED_CURRENCY": [{
        "code": "AED",
        "symbol": "\u062f.\u0625",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "dirham des \u00c9mirats arabes unis"
    }, {
        "code": "AFN",
        "symbol": "\u060b",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Afghan afghani"
    }, {
        "code": "ALL",
        "symbol": "Lek",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "lek albanais"
    }, {
        "code": "AMD",
        "symbol": "\u058f",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "dram arm\u00e9nien"
    }, {
        "code": "ANG",
        "symbol": "\u0192",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "florin antillais"
    }, {
        "code": "AOA",
        "symbol": "Kz",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "kwanza angolais"
    }, {
        "code": "ARS",
        "symbol": "$",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "peso argentin"
    }, {
        "code": "AUD",
        "symbol": "A$",
        "decimal": ".",
        "thousand": " ",
        "precision": 2,
        "name": "Dollar Australien"
    }, {
        "code": "AWG",
        "symbol": "\u0192",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "florin arubais"
    }, {
        "code": "AZN",
        "symbol": "\u20bc",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "manat az\u00e9ri"
    }, {
        "code": "BAM",
        "symbol": "KM",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "mark convertible bosniaque"
    }, {
        "code": "BBD",
        "symbol": "$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "dollar barbadien"
    }, {
        "code": "BDT",
        "symbol": "Tk",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Taka bangladais"
    }, {
        "code": "BGN",
        "symbol": "\u043b\u0432",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "lev bulgare"
    }, {
        "code": "BHD",
        "symbol": ".\u062f.\u0628",
        "decimal": ".",
        "thousand": ",",
        "precision": 3,
        "name": "Bahraini dinar"
    }, {
        "code": "BIF",
        "symbol": "FBu",
        "decimal": ".",
        "thousand": ",",
        "precision": 0,
        "name": "franc burundais"
    }, {
        "code": "BMD",
        "symbol": "$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "dollar bermudien"
    }, {
        "code": "BND",
        "symbol": "$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "dollar brun\u00e9ien"
    }, {
        "code": "BOB",
        "symbol": "$b",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "boliviano bolivien"
    }, {
        "code": "BRL",
        "symbol": "R$",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "r\u00e9el Br\u00e9silien",
        "format": "%s %v"
    }, {
        "code": "BSD",
        "symbol": "$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "dollar baham\u00e9en"
    }, {
        "code": "BTN",
        "symbol": "Nu.",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Bhutanese ngultrum"
    }, {
        "code": "BWP",
        "symbol": "P",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "pula botswanais"
    }, {
        "code": "BYN",
        "symbol": "Br",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Belarusian ruble"
    }, {
        "code": "BZD",
        "symbol": "BZ$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "dollar b\u00e9liz\u00e9en"
    }, {
        "code": "CAD",
        "symbol": "$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Dollar Canadien"
    }, {
        "code": "CDF",
        "symbol": "FC",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "franc congolais"
    }, {
        "code": "CHF",
        "symbol": "CHF",
        "decimal": ".",
        "thousand": "'",
        "precision": 2,
        "name": "Franc Suisse",
        "format": "%s %v"
    }, {
        "code": "CLP",
        "symbol": "$",
        "decimal": "",
        "thousand": ".",
        "precision": 0,
        "name": "Peso chilien"
    }, {
        "code": "CNY",
        "symbol": "\u00a5",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Yuan Chinois"
    }, {
        "code": "COP",
        "symbol": "$",
        "decimal": ".",
        "thousand": ",",
        "precision": 0,
        "name": "Peso colombien"
    }, {
        "code": "CRC",
        "symbol": "\u20a1",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "col\u00f3n costaricain"
    }, {
        "code": "CUP",
        "symbol": "$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Cuban peso"
    }, {
        "code": "CVE",
        "symbol": "$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "escudo capverdien"
    }, {
        "code": "CZK",
        "symbol": "K\u010d",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "Couronne tch\u00e8que",
        "format": "%v %s"
    }, {
        "code": "DJF",
        "symbol": "Fdj",
        "decimal": ".",
        "thousand": ",",
        "precision": 0,
        "name": "franc djiboutien"
    }, {
        "code": "DKK",
        "symbol": "kr",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Couronne danoise",
        "format": "%v %s"
    }, {
        "code": "DOP",
        "symbol": "RD$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "peso dominicain"
    }, {
        "code": "DZD",
        "symbol": "\u062f\u062c",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "dinar alg\u00e9rien"
    }, {
        "code": "EGP",
        "symbol": "E\u00a3",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "livre \u00e9gyptienne"
    }, {
        "code": "ERN",
        "symbol": "Nkf",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Eritrean nakfa"
    }, {
        "code": "ETB",
        "symbol": "Br",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "birr \u00e9thiopien"
    }, {
        "code": "EUR",
        "symbol": "\u20ac",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "Euro",
        "format": "%v %s"
    }, {
        "code": "FJD",
        "symbol": "$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "dollar fidjien"
    }, {
        "code": "FKP",
        "symbol": "\u00a3",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "livre des \u00eeles Malouines"
    }, {
        "code": "GBP",
        "symbol": "\u00a3",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Livre Sterling"
    }, {
        "code": "GEL",
        "symbol": "\u10da",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "lari g\u00e9orgien"
    }, {
        "code": "GGP",
        "symbol": "\u00a3",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Guernsey pound"
    }, {
        "code": "GHS",
        "symbol": "GH\u20b5",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Ghanaian cedi"
    }, {
        "code": "GIP",
        "symbol": "\u00a3",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "livre de Gibraltar"
    }, {
        "code": "GMD",
        "symbol": "D",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "dalasi gambien"
    }, {
        "code": "GNF",
        "symbol": "\u20a3",
        "decimal": ".",
        "thousand": ",",
        "precision": 0,
        "name": "franc guin\u00e9en"
    }, {
        "code": "GTQ",
        "symbol": "Q",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "quetzal guat\u00e9malt\u00e8que"
    }, {
        "code": "GYD",
        "symbol": "G$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "dollar du Guyana"
    }, {
        "code": "HKD",
        "symbol": "HK$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Dollar de Hong Kong"
    }, {
        "code": "HNL",
        "symbol": "L",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "lempira hondurien"
    }, {
        "code": "HRK",
        "symbol": "kn",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "kuna croate"
    }, {
        "code": "HTG",
        "symbol": "G",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "gourde ha\u00eftienne"
    }, {
        "code": "HUF",
        "symbol": "Ft",
        "decimal": "",
        "thousand": ",",
        "precision": 0,
        "name": "Forint hongrois",
        "format": "%v %s"
    }, {
        "code": "IDR",
        "symbol": "Rp ",
        "decimal": "",
        "thousand": ".",
        "precision": 0,
        "name": "Rupiah indon\u00e9sien"
    }, {
        "code": "ILS",
        "symbol": "\u20aa",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Nouveau shekel isra\u00e9lien"
    }, {
        "code": "IMP",
        "symbol": "\u00a3",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Isle of Man pound"
    }, {
        "code": "INR",
        "symbol": "\u20b9",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Roupie indienne"
    }, {
        "code": "IQD",
        "symbol": "\u062f.\u0639",
        "decimal": ".",
        "thousand": ",",
        "precision": 3,
        "name": "Iraqi dinar"
    }, {
        "code": "IRR",
        "symbol": "\u062a\u0648\u0645\u0627\u0646",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Iranian rial"
    }, {
        "code": "ISK",
        "symbol": "kr",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "couronne islandaise"
    }, {
        "code": "JEP",
        "symbol": "\u00a3",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Jersey pound"
    }, {
        "code": "JMD",
        "symbol": "J$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Jamaican Dollar"
    }, {
        "code": "JOD",
        "symbol": "JD",
        "decimal": ".",
        "thousand": ",",
        "precision": 3,
        "name": "dinar jordanien"
    }, {
        "code": "JPY",
        "symbol": "\u00a5",
        "decimal": "",
        "thousand": ",",
        "precision": 0,
        "name": "Yen Japonais",
        "format": "%s %v"
    }, {
        "code": "KES",
        "symbol": "KSh",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "shilling k\u00e9nyan"
    }, {
        "code": "KGS",
        "symbol": "\u043b\u0432",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "som kirghize"
    }, {
        "code": "KHR",
        "symbol": "\u17db",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "riel cambodgien"
    }, {
        "code": "KMF",
        "symbol": "CF",
        "decimal": ".",
        "thousand": ",",
        "precision": 0,
        "name": "franc comorien"
    }, {
        "code": "KPW",
        "symbol": "\u20a9",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "North Korean won"
    }, {
        "code": "KRW",
        "symbol": "\uc6d0",
        "decimal": "",
        "thousand": ",",
        "precision": 0,
        "name": "Won sud-cor\u00e9en",
        "format": "%v %s"
    }, {
        "code": "KWD",
        "symbol": "\u062f.\u0643",
        "decimal": ".",
        "thousand": ",",
        "precision": 3,
        "name": "dinar kowe\u00eftien"
    }, {
        "code": "KYD",
        "symbol": "CI$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "dollar des \u00eeles Ca\u00efmans"
    }, {
        "code": "KZT",
        "symbol": "\u20b8",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "tenge kazakh"
    }, {
        "code": "LAK",
        "symbol": "\u20ad",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "kip loatien"
    }, {
        "code": "LBP",
        "symbol": "LL",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "livre libanaise"
    }, {
        "code": "LKR",
        "symbol": "\u20a8",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "roupie srilankaise"
    }, {
        "code": "LRD",
        "symbol": "LR$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "dollar lib\u00e9rien"
    }, {
        "code": "LSL",
        "symbol": "M",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "loti lesothan"
    }, {
        "code": "LYD",
        "symbol": "LD",
        "decimal": ".",
        "thousand": ",",
        "precision": 3,
        "name": "Libyan dinar"
    }, {
        "code": "MAD",
        "symbol": "\u062f.\u0645.",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "dirham marocain"
    }, {
        "code": "MDL",
        "symbol": "L",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "leu moldave"
    }, {
        "code": "MGA",
        "symbol": "Ar",
        "decimal": ".",
        "thousand": ",",
        "precision": 0,
        "name": "ariary malgache"
    }, {
        "code": "MKD",
        "symbol": "\u0434\u0435\u043d",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "denar mac\u00e9donien"
    }, {
        "code": "MMK",
        "symbol": "Ks",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "kyat myanmarais"
    }, {
        "code": "MNT",
        "symbol": "\u20ae",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "tugrik mongol"
    }, {
        "code": "MOP",
        "symbol": "MOP$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "pataca macanaise"
    }, {
        "code": "MRO",
        "symbol": "UM",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "ouguiya mauritanien"
    }, {
        "code": "MRU",
        "symbol": "UM",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Mauritanian ouguiya"
    }, {
        "code": "MUR",
        "symbol": "\u20a8",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "roupie mauricienne"
    }, {
        "code": "MVR",
        "symbol": "Rf",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "rufiyaa maldivien"
    }, {
        "code": "MWK",
        "symbol": "K",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "kwacha malawite"
    }, {
        "code": "MXN",
        "symbol": "$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Peso Mexicain"
    }, {
        "code": "MYR",
        "symbol": "RM",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Ringgit malaisien"
    }, {
        "code": "MZN",
        "symbol": "MT",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "metical mozambicain"
    }, {
        "code": "NAD",
        "symbol": "N$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "dollar namibien"
    }, {
        "code": "NGN",
        "symbol": "\u20a6",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "naira nig\u00e9rian"
    }, {
        "code": "NIO",
        "symbol": "C$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "c\u00f3rdoba oro nicaraguayen"
    }, {
        "code": "NOK",
        "symbol": "kr",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "Couronne Norv\u00e9gienne",
        "format": "%v %s"
    }, {
        "code": "NPR",
        "symbol": "\u20a8",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "roupie n\u00e9palaise"
    }, {
        "code": "NZD",
        "symbol": "$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Dollar N\u00e9o-Z\u00e9landais"
    }, {
        "code": "OMR",
        "symbol": "\u0631.\u0639.",
        "decimal": ".",
        "thousand": ",",
        "precision": 3,
        "name": "Omani rial"
    }, {
        "code": "PAB",
        "symbol": "B\/.",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "balboa panam\u00e9en"
    }, {
        "code": "PEN",
        "symbol": "S\/.",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Sol p\u00e9ruvien"
    }, {
        "code": "PGK",
        "symbol": "K",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "kina papouan-n\u00e9o-guin\u00e9en"
    }, {
        "code": "PHP",
        "symbol": "\u20b1",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Peso philippin"
    }, {
        "code": "PKR",
        "symbol": "\u20a8",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "roupie pakistanaise"
    }, {
        "code": "PLN",
        "symbol": "z\u0142",
        "decimal": ",",
        "thousand": " ",
        "precision": 2,
        "name": "Zloty polonais",
        "format": "%v %s"
    }, {
        "code": "PYG",
        "symbol": "\u20b2",
        "decimal": ",",
        "thousand": ".",
        "precision": 0,
        "name": "guaran\u00ed paraguayen"
    }, {
        "code": "QAR",
        "symbol": "\u0631.\u0642",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "rial qatari"
    }, {
        "code": "RON",
        "symbol": "lei",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "leu roumain"
    }, {
        "code": "RSD",
        "symbol": "\u0434\u0438\u043d",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "dinar serbe"
    }, {
        "code": "RUB",
        "symbol": "\u20bd",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "Rouble russe",
        "format": "%v %s"
    }, {
        "code": "RWF",
        "symbol": "FRw",
        "decimal": ".",
        "thousand": ",",
        "precision": 0,
        "name": "franc rwandais"
    }, {
        "code": "SAR",
        "symbol": "\u0631.\u0633",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "rial saoudien"
    }, {
        "code": "SBD",
        "symbol": "SI$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "dollar des \u00eeles Salomon"
    }, {
        "code": "SCR",
        "symbol": "SRe",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "roupie des Seychelles"
    }, {
        "code": "SDG",
        "symbol": "SDG",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Sudanese pound"
    }, {
        "code": "SEK",
        "symbol": "kr",
        "decimal": ".",
        "thousand": " ",
        "precision": 2,
        "name": "Couronne Su\u00e9doise",
        "format": "%v %s"
    }, {
        "code": "SGD",
        "symbol": "S$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Dollar de Singapour"
    }, {
        "code": "SHP",
        "symbol": "\u00a3",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "livre de Sainte-H\u00e9l\u00e8ne"
    }, {
        "code": "SLL",
        "symbol": "Le",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "leone sierra-l\u00e9onais"
    }, {
        "code": "SOS",
        "symbol": "S",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "shilling somalien"
    }, {
        "code": "SRD",
        "symbol": "$",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "dollar surinamais"
    }, {
        "code": "SSP",
        "symbol": "SS\u00a3",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "South Sudanese pound"
    }, {
        "code": "STD",
        "symbol": "Db",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "dobra santom\u00e9en"
    }, {
        "code": "STN",
        "symbol": "Db",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "S\u00e3o Tom\u00e9 and Pr\u00edncipe dobra"
    }, {
        "code": "SYP",
        "symbol": "LS",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Syrian pound"
    }, {
        "code": "SZL",
        "symbol": "E",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "lilangeni swazi"
    }, {
        "code": "THB",
        "symbol": "\u0e3f",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Baht Tha\u00eflandais"
    }, {
        "code": "TJS",
        "symbol": "SM",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "somoni tadjik"
    }, {
        "code": "TMT",
        "symbol": "T",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Turkmenistan manat"
    }, {
        "code": "TND",
        "symbol": "\u062f.\u062a",
        "decimal": ".",
        "thousand": ",",
        "precision": 3,
        "name": "Tunisian dinar"
    }, {
        "code": "TOP",
        "symbol": "T$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "pa\u2019anga tongan"
    }, {
        "code": "TRY",
        "symbol": "\u20ba",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "livre turque"
    }, {
        "code": "TTD",
        "symbol": "TT$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "dollar trinidadien"
    }, {
        "code": "TWD",
        "symbol": "NT$",
        "decimal": ".",
        "thousand": ",",
        "precision": 0,
        "name": "Nouveau Dollar Taiwan"
    }, {
        "code": "TZS",
        "symbol": "Tsh",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "shilling tanzanien"
    }, {
        "code": "UAH",
        "symbol": "\u20b4",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "hryvnia ukrainienne"
    }, {
        "code": "UGX",
        "symbol": "USh",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "shilling ougandais"
    }, {
        "code": "USD",
        "symbol": "$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Dollar Am\u00e9ricain"
    }, {
        "code": "UYU",
        "symbol": "$U",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "peso uruguayen"
    }, {
        "code": "UZS",
        "symbol": "\u043b\u0432",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "sum ouzbek"
    }, {
        "code": "VES",
        "symbol": "Bs.S.",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Venezuelan bol\u00edvar soberano"
    }, {
        "code": "VND",
        "symbol": "\u20ab",
        "decimal": "",
        "thousand": ".",
        "precision": 0,
        "name": "Dong vietnamien",
        "format": "%v%s"
    }, {
        "code": "VUV",
        "symbol": "VT",
        "decimal": ".",
        "thousand": ",",
        "precision": 0,
        "name": "vatu vanuatuan"
    }, {
        "code": "WST",
        "symbol": "WS$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "tala samoan"
    }, {
        "code": "XAF",
        "symbol": "FCFA",
        "decimal": ".",
        "thousand": ",",
        "precision": 0,
        "name": "franc CFA (BEAC)"
    }, {
        "code": "XCD",
        "symbol": "EC$",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "dollar des Cara\u00efbes orientales"
    }, {
        "code": "XDR",
        "symbol": "SDR",
        "decimal": ".",
        "thousand": "",
        "precision": 0,
        "name": "Special drawing rights"
    }, {
        "code": "XOF",
        "symbol": "CFA",
        "decimal": ".",
        "thousand": ",",
        "precision": 0,
        "name": "franc CFA (BCEAO)"
    }, {
        "code": "XPF",
        "symbol": "\u20a3",
        "decimal": ".",
        "thousand": ",",
        "precision": 0,
        "name": "franc CFP"
    }, {
        "code": "YER",
        "symbol": "\u0631.\u064a",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "rial y\u00e9m\u00e9nite"
    }, {
        "code": "ZAR",
        "symbol": "R",
        "decimal": ".",
        "thousand": ",",
        "precision": 2,
        "name": "Rand sud-africain"
    }, {
        "code": "ZMW",
        "symbol": "K",
        "decimal": ",",
        "thousand": ".",
        "precision": 2,
        "name": "kwacha zambien"
    }],
    "pages_show_static_path": "https:\/\/static-assets.strikinglycdn.com\/pages_show_static-b187b00d082bd714b915a916546f4b89103892b126838fed3660b8e7eb278716.js",
    "keenio_collection": "strikingly_pageviews",
    "keenio_collection_sharding": "strikingly_pageviews-16600001-16700000",
    "keenio_pbs_impression_collection": "strikingly_pbs_impression",
    "keenio_pbs_conversion_collection": "strikingly_pbs_conversion",
    "keenio_pageservice_imageshare_collection": "strikingly_pageservice_imageshare",
    "keenio_page_socialshare_collection": "strikingly_page_socialshare",
    "keenio_page_framing_collection": "strikingly_page_framing",
    "keenio_file_download_collection": "strikingly_file_download",
    "keenio_ecommerce_buyer_landing": "strikingly_ecommerce_buyer_landing",
    "keenio_ecommerce_buyer_viewed_checkout_dialog": "strikingly_ecommerce_buyer_viewed_checkout_dialog",
    "keenio_ecommerce_buyer_completed_shipping_address": "strikingly_ecommerce_buyer_completed_shipping_address",
    "keenio_ecommerce_buyer_selected_payment_method": "strikingly_ecommerce_buyer_selected_payment_method",
    "keenio_ecommerce_buyer_canceled_order": "strikingly_ecommerce_buyer_canceled_order",
    "keenio_ecommerce_buyer_added_item_to_cart": "strikingly_ecommerce_buyer_added_item_to_cart",
    "keenio_events_collection": "strikingly_events",
    "is_screenshot_rendering": false,
    "ecommerce_stripe_alipay": false,
    "headless_render": null,
    "wx_instant_follow": false,
    "is_google_analytics_enabled": true,
    "is_strikingly_analytics_enabled": true,
    "is_from_site_to_app": false,
    "is_weitie": false,
    "weitie_post_id": null,
    "weitie_meta_info": null,
    "weitie_slogan": "\u65e0\u9700\u6ce8\u518c\u7684\u53d1\u5e16\u795e\u5668",
    "gdpr_compliance_feature": false,
    "strikingly_live_chat_settings": null
};
$S.fonts = null;
$S.user_meta = {
    "user_type": "",
    "live_chat_branding": false
};
$S.country_list = {
    "europe": {
        "name": "Europe",
        "continent": "europe"
    },
    "asia": {
        "name": "Asie",
        "continent": "asia"
    },
    "northamerica": {
        "name": "Am\u00e9rique du Nord",
        "continent": "northamerica"
    },
    "southamerica": {
        "name": "Am\u00e9rique du sud",
        "continent": "southamerica"
    },
    "australia": {
        "name": "Australie",
        "continent": "australia"
    },
    "antarctica": {
        "name": "Antarctique",
        "continent": "antarctica"
    },
    "africa": {
        "name": "Afrique",
        "continent": "africa"
    },
    "ad": {
        "name": "Andorre",
        "continent": "europe"
    },
    "ae": {
        "name": "\u00c9mirats arabes unis",
        "continent": "asia"
    },
    "af": {
        "name": "Afghanistan",
        "continent": "asia"
    },
    "ag": {
        "name": "Antigua-et-Barbuda",
        "continent": "northamerica"
    },
    "ai": {
        "name": "Anguilla",
        "continent": "northamerica"
    },
    "al": {
        "name": "Albanie",
        "continent": "europe"
    },
    "am": {
        "name": "Arm\u00e9nie",
        "continent": "asia"
    },
    "an": {
        "name": "Pays-Bas Antilles",
        "continent": "northamerica"
    },
    "ao": {
        "name": "Angola",
        "continent": "africa"
    },
    "aq": {
        "name": "Antarctique",
        "continent": "antarctica"
    },
    "ar": {
        "name": "Argentine",
        "continent": "southamerica"
    },
    "as": {
        "name": "Samoa am\u00e9ricaines",
        "continent": "australia"
    },
    "at": {
        "name": "Autriche",
        "continent": "europe"
    },
    "au": {
        "name": "Australie",
        "continent": "australia"
    },
    "aw": {
        "name": "Aruba",
        "continent": "northamerica"
    },
    "ax": {
        "name": "\u00c5land, \u00celes",
        "continent": "europe"
    },
    "az": {
        "name": "Azerba\u00efdjan",
        "continent": "asia"
    },
    "ba": {
        "name": "Bosnie-Herz\u00e9govine",
        "continent": "europe"
    },
    "bb": {
        "name": "Barbade",
        "continent": "northamerica"
    },
    "bd": {
        "name": "Bangladesh",
        "continent": "asia"
    },
    "be": {
        "name": "Belgique",
        "continent": "europe"
    },
    "bf": {
        "name": "Burkina Faso",
        "continent": "africa"
    },
    "bg": {
        "name": "Bulgarie",
        "continent": "europe"
    },
    "bh": {
        "name": "Bahre\u00efn",
        "continent": "asia"
    },
    "bi": {
        "name": "Burundi",
        "continent": "africa"
    },
    "bj": {
        "name": "B\u00e9nin",
        "continent": "africa"
    },
    "bl": {
        "name": "Saint-Barth\u00e9lemy",
        "continent": "northamerica"
    },
    "bm": {
        "name": "Bermudes",
        "continent": "northamerica"
    },
    "bn": {
        "name": "Brun\u00e9i Darussalam",
        "continent": "asia"
    },
    "bo": {
        "name": "Bolivie, \u00e9tat plurinational de",
        "continent": "southamerica"
    },
    "bq": {
        "name": "Bonaire, Saint-Eustache et Saba",
        "continent": "northamerica"
    },
    "br": {
        "name": "Br\u00e9sil",
        "continent": "southamerica"
    },
    "bs": {
        "name": "Bahamas",
        "continent": "northamerica"
    },
    "bt": {
        "name": "Bhoutan",
        "continent": "asia"
    },
    "bv": {
        "name": "Bouvet, \u00cele",
        "continent": "antarctica"
    },
    "bw": {
        "name": "Botswana",
        "continent": "africa"
    },
    "by": {
        "name": "B\u00e9larus",
        "continent": "europe"
    },
    "bz": {
        "name": "Belize",
        "continent": "northamerica"
    },
    "ca": {
        "name": "Canada",
        "continent": "northamerica"
    },
    "cc": {
        "name": "Cocos (Keeling), \u00celes",
        "continent": "asia"
    },
    "cd": {
        "name": "R\u00e9publique d\u00e9mocratique du Congo",
        "continent": "africa"
    },
    "cf": {
        "name": "Centrafricaine, R\u00e9publique",
        "continent": "africa"
    },
    "cg": {
        "name": "Congo",
        "continent": "africa"
    },
    "ch": {
        "name": "Suisse",
        "continent": "europe"
    },
    "ci": {
        "name": "C\u00f4te d'Ivoire",
        "continent": "africa"
    },
    "ck": {
        "name": "Cook, \u00celes",
        "continent": "australia"
    },
    "cl": {
        "name": "Chili",
        "continent": "southamerica"
    },
    "cm": {
        "name": "Cameroun",
        "continent": "africa"
    },
    "cn": {
        "name": "Chine",
        "continent": "asia"
    },
    "co": {
        "name": "Colombie",
        "continent": "southamerica"
    },
    "cr": {
        "name": "Costa Rica",
        "continent": "northamerica"
    },
    "cu": {
        "name": "Cuba",
        "continent": "northamerica"
    },
    "cv": {
        "name": "Cap-Vert",
        "continent": "africa"
    },
    "cw": {
        "name": "Cura\u00e7ao",
        "continent": "northamerica"
    },
    "cx": {
        "name": "Christmas, \u00cele",
        "continent": "asia"
    },
    "cy": {
        "name": "Chypre",
        "continent": "asia"
    },
    "cz": {
        "name": "Tch\u00e8que, R\u00e9publique",
        "continent": "europe"
    },
    "de": {
        "name": "Allemagne",
        "continent": "europe"
    },
    "dj": {
        "name": "Djibouti",
        "continent": "africa"
    },
    "dk": {
        "name": "Danemark",
        "continent": "europe"
    },
    "dm": {
        "name": "Dominique",
        "continent": "northamerica"
    },
    "do": {
        "name": "Dominicaine, R\u00e9publique",
        "continent": "northamerica"
    },
    "dz": {
        "name": "Alg\u00e9rie",
        "continent": "africa"
    },
    "ec": {
        "name": "\u00c9quateur",
        "continent": "southamerica"
    },
    "ee": {
        "name": "Estonie",
        "continent": "europe"
    },
    "eg": {
        "name": "\u00c9gypte",
        "continent": "africa"
    },
    "eh": {
        "name": "Sahara Occidental",
        "continent": "africa"
    },
    "er": {
        "name": "\u00c9rythr\u00e9e",
        "continent": "africa"
    },
    "es": {
        "name": "Espagne",
        "continent": "europe"
    },
    "et": {
        "name": "\u00c9thiopie",
        "continent": "africa"
    },
    "fi": {
        "name": "Finlande",
        "continent": "europe"
    },
    "fj": {
        "name": "Fidji",
        "continent": "australia"
    },
    "fk": {
        "name": "Falkland, \u00celes (Malvinas)",
        "continent": "southamerica"
    },
    "fm": {
        "name": "Micron\u00e9sie, \u00c9tats f\u00e9d\u00e9r\u00e9s de",
        "continent": "australia"
    },
    "fo": {
        "name": "F\u00e9ro\u00e9, \u00celes",
        "continent": "europe"
    },
    "fr": {
        "name": "France",
        "continent": "europe"
    },
    "ga": {
        "name": "Gabon",
        "continent": "africa"
    },
    "gb": {
        "name": "Royaume-Uni",
        "continent": "europe"
    },
    "gd": {
        "name": "Grenade",
        "continent": "northamerica"
    },
    "ge": {
        "name": "G\u00e9orgie",
        "continent": "asia"
    },
    "gf": {
        "name": "Guyane fran\u00e7aise",
        "continent": "southamerica"
    },
    "gg": {
        "name": "Guernesey",
        "continent": "europe"
    },
    "gh": {
        "name": "Ghana",
        "continent": "africa"
    },
    "gi": {
        "name": "Gibraltar",
        "continent": "europe"
    },
    "gl": {
        "name": "Gro\u00ebnland",
        "continent": "northamerica"
    },
    "gm": {
        "name": "Gambie",
        "continent": "africa"
    },
    "gn": {
        "name": "Guin\u00e9e",
        "continent": "africa"
    },
    "gp": {
        "name": "Guadeloupe",
        "continent": "northamerica"
    },
    "gq": {
        "name": "Guin\u00e9e \u00c9quatoriale",
        "continent": "africa"
    },
    "gr": {
        "name": "Gr\u00e8ce",
        "continent": "europe"
    },
    "gs": {
        "name": "G\u00e9orgie du Sud et les \u00eeles Sandwich du Sud",
        "continent": "antarctica"
    },
    "gt": {
        "name": "Guatemala",
        "continent": "northamerica"
    },
    "gu": {
        "name": "Guam",
        "continent": "australia"
    },
    "gw": {
        "name": "Guin\u00e9e-Bissau",
        "continent": "africa"
    },
    "gy": {
        "name": "Guyana",
        "continent": "southamerica"
    },
    "hk": {
        "name": "Hong Kong SAR China",
        "continent": "asia"
    },
    "hm": {
        "name": "Heard, \u00cele et McDonald, \u00celes",
        "continent": "antarctica"
    },
    "hn": {
        "name": "Honduras",
        "continent": "northamerica"
    },
    "hr": {
        "name": "Croatie",
        "continent": "europe"
    },
    "ht": {
        "name": "Ha\u00efti",
        "continent": "northamerica"
    },
    "hu": {
        "name": "Hongrie",
        "continent": "europe"
    },
    "id": {
        "name": "Indon\u00e9sie",
        "continent": "asia"
    },
    "ie": {
        "name": "Irlande",
        "continent": "europe"
    },
    "il": {
        "name": "Isra\u00ebl",
        "continent": "asia"
    },
    "im": {
        "name": "\u00cele de Man",
        "continent": "europe"
    },
    "in": {
        "name": "Inde",
        "continent": "asia"
    },
    "io": {
        "name": "Oc\u00e9an Indien, Territoire britannique de l'",
        "continent": "asia"
    },
    "iq": {
        "name": "Irak",
        "continent": "asia"
    },
    "ir": {
        "name": "Iran, R\u00e9publique islamique d'",
        "continent": "asia"
    },
    "is": {
        "name": "Islande",
        "continent": "europe"
    },
    "it": {
        "name": "Italie",
        "continent": "europe"
    },
    "je": {
        "name": "Jersey",
        "continent": "europe"
    },
    "jm": {
        "name": "Jama\u00efque",
        "continent": "northamerica"
    },
    "jo": {
        "name": "Jordanie",
        "continent": "asia"
    },
    "jp": {
        "name": "Japon",
        "continent": "asia"
    },
    "ke": {
        "name": "Kenya",
        "continent": "africa"
    },
    "kg": {
        "name": "Kirghizistan",
        "continent": "asia"
    },
    "kh": {
        "name": "Cambodge",
        "continent": "asia"
    },
    "ki": {
        "name": "Kiribati",
        "continent": "australia"
    },
    "km": {
        "name": "Comores",
        "continent": "africa"
    },
    "kn": {
        "name": "Saint-Kitts-et-Nevis",
        "continent": "northamerica"
    },
    "kp": {
        "name": "Cor\u00e9e, R\u00e9publique populaire d\u00e9mocratique de",
        "continent": "asia"
    },
    "kr": {
        "name": "Cor\u00e9e, R\u00e9publique de",
        "continent": "asia"
    },
    "kw": {
        "name": "Kowe\u00eft",
        "continent": "asia"
    },
    "ky": {
        "name": "Ca\u00efman, \u00celes",
        "continent": "northamerica"
    },
    "kz": {
        "name": "Kazakhstan",
        "continent": "asia"
    },
    "la": {
        "name": "Lao, R\u00e9publique d\u00e9mocratique populaire",
        "continent": "asia"
    },
    "lb": {
        "name": "Liban",
        "continent": "asia"
    },
    "lc": {
        "name": "Sainte-Lucie",
        "continent": "northamerica"
    },
    "li": {
        "name": "Liechtenstein",
        "continent": "europe"
    },
    "lk": {
        "name": "Sri Lanka",
        "continent": "asia"
    },
    "lr": {
        "name": "Lib\u00e9ria",
        "continent": "africa"
    },
    "ls": {
        "name": "Lesotho",
        "continent": "africa"
    },
    "lt": {
        "name": "Lituanie",
        "continent": "europe"
    },
    "lu": {
        "name": "Luxembourg",
        "continent": "europe"
    },
    "lv": {
        "name": "Lettonie",
        "continent": "europe"
    },
    "ly": {
        "name": "Libye",
        "continent": "africa"
    },
    "ma": {
        "name": "Maroc",
        "continent": "africa"
    },
    "mc": {
        "name": "Monaco",
        "continent": "europe"
    },
    "md": {
        "name": "Moldova, R\u00e9publique de",
        "continent": "europe"
    },
    "me": {
        "name": "Mont\u00e9n\u00e9gro",
        "continent": "europe"
    },
    "mf": {
        "name": "Saint-Martin (partie fran\u00e7aise)",
        "continent": "northamerica"
    },
    "mg": {
        "name": "Madagascar",
        "continent": "africa"
    },
    "mh": {
        "name": "\u00celes Marshall",
        "continent": "australia"
    },
    "mk": {
        "name": "Mac\u00e9doine, R\u00e9publique de",
        "continent": "europe"
    },
    "ml": {
        "name": "Mali",
        "continent": "africa"
    },
    "mm": {
        "name": "Myanmar",
        "continent": "asia"
    },
    "mn": {
        "name": "Mongolie",
        "continent": "asia"
    },
    "mo": {
        "name": "Macao SAR China",
        "continent": "asia"
    },
    "mp": {
        "name": "Mariannes du Nord, \u00celes",
        "continent": "australia"
    },
    "mq": {
        "name": "Martinique",
        "continent": "northamerica"
    },
    "mr": {
        "name": "Mauritanie",
        "continent": "africa"
    },
    "ms": {
        "name": "Montserrat",
        "continent": "northamerica"
    },
    "mt": {
        "name": "Malte",
        "continent": "europe"
    },
    "mu": {
        "name": "Maurice",
        "continent": "africa"
    },
    "mv": {
        "name": "Maldives",
        "continent": "asia"
    },
    "mw": {
        "name": "Malawi",
        "continent": "africa"
    },
    "mx": {
        "name": "Mexique",
        "continent": "northamerica"
    },
    "my": {
        "name": "Malaisie",
        "continent": "asia"
    },
    "mz": {
        "name": "Mozambique",
        "continent": "africa"
    },
    "na": {
        "name": "Namibie",
        "continent": "africa"
    },
    "nc": {
        "name": "Nouvelle-Cal\u00e9donie",
        "continent": "australia"
    },
    "ne": {
        "name": "Niger",
        "continent": "africa"
    },
    "nf": {
        "name": "Norfolk, \u00cele",
        "continent": "australia"
    },
    "ng": {
        "name": "Nigeria",
        "continent": "africa"
    },
    "ni": {
        "name": "Nicaragua",
        "continent": "northamerica"
    },
    "nl": {
        "name": "Pays-Bas",
        "continent": "europe"
    },
    "no": {
        "name": "Norv\u00e8ge",
        "continent": "europe"
    },
    "np": {
        "name": "N\u00e9pal",
        "continent": "asia"
    },
    "nr": {
        "name": "Nauru",
        "continent": "australia"
    },
    "nu": {
        "name": "Nioue",
        "continent": "australia"
    },
    "nz": {
        "name": "Nouvelle-Z\u00e9lande",
        "continent": "australia"
    },
    "om": {
        "name": "Oman",
        "continent": "asia"
    },
    "pa": {
        "name": "Panama",
        "continent": "northamerica"
    },
    "pe": {
        "name": "P\u00e9rou",
        "continent": "southamerica"
    },
    "pf": {
        "name": "Polyn\u00e9sie fran\u00e7aise",
        "continent": "australia"
    },
    "pg": {
        "name": "Papouasie-Nouvelle-Guin\u00e9e",
        "continent": "australia"
    },
    "ph": {
        "name": "Philippines",
        "continent": "asia"
    },
    "pk": {
        "name": "Pakistan",
        "continent": "asia"
    },
    "pl": {
        "name": "Pologne",
        "continent": "europe"
    },
    "pm": {
        "name": "Saint-Pierre-et-Miquelon",
        "continent": "northamerica"
    },
    "pn": {
        "name": "Pitcairn",
        "continent": "australia"
    },
    "pr": {
        "name": "Porto Rico",
        "continent": "northamerica"
    },
    "ps": {
        "name": "Palestine, \u00c9tat de",
        "continent": "asia"
    },
    "pt": {
        "name": "Portugal",
        "continent": "europe"
    },
    "pw": {
        "name": "Palaos",
        "continent": "australia"
    },
    "py": {
        "name": "Paraguay",
        "continent": "southamerica"
    },
    "qa": {
        "name": "Qatar",
        "continent": "asia"
    },
    "re": {
        "name": "R\u00e9union, \u00cele de la",
        "continent": "africa"
    },
    "ro": {
        "name": "Roumanie",
        "continent": "europe"
    },
    "rs": {
        "name": "Serbie",
        "continent": "europe"
    },
    "ru": {
        "name": "Russie, F\u00e9d\u00e9ration de",
        "continent": "europe"
    },
    "rw": {
        "name": "Rwanda",
        "continent": "africa"
    },
    "sa": {
        "name": "Arabie saoudite",
        "continent": "asia"
    },
    "sb": {
        "name": "Salomon, \u00celes",
        "continent": "australia"
    },
    "sc": {
        "name": "Seychelles",
        "continent": "africa"
    },
    "sd": {
        "name": "Soudan",
        "continent": "africa"
    },
    "se": {
        "name": "Su\u00e8de",
        "continent": "europe"
    },
    "sg": {
        "name": "Singapour",
        "continent": "asia"
    },
    "sh": {
        "name": "Sainte-H\u00e9l\u00e8ne, Ascension et Tristan da Cunha",
        "continent": "africa"
    },
    "si": {
        "name": "Slov\u00e9nie",
        "continent": "europe"
    },
    "sj": {
        "name": "Svalbard et \u00eele Jan Mayen",
        "continent": "europe"
    },
    "sk": {
        "name": "Slovaquie",
        "continent": "europe"
    },
    "sl": {
        "name": "Sierra Leone",
        "continent": "africa"
    },
    "sm": {
        "name": "San Marin",
        "continent": "europe"
    },
    "sn": {
        "name": "S\u00e9n\u00e9gal",
        "continent": "africa"
    },
    "so": {
        "name": "Somalie",
        "continent": "africa"
    },
    "sr": {
        "name": "Surinam",
        "continent": "southamerica"
    },
    "ss": {
        "name": "Soudan du Sud",
        "continent": "africa"
    },
    "st": {
        "name": "Sao Tom\u00e9-et-Principe",
        "continent": "africa"
    },
    "sv": {
        "name": "El Salvador",
        "continent": "northamerica"
    },
    "sx": {
        "name": "Saint-Martin (partie n\u00e9erlandaise)",
        "continent": "northamerica"
    },
    "sy": {
        "name": "Syrienne, R\u00e9publique arabe",
        "continent": "asia"
    },
    "sz": {
        "name": "Swaziland",
        "continent": "africa"
    },
    "tc": {
        "name": "Turks et Ca\u00efques, \u00celes",
        "continent": "northamerica"
    },
    "td": {
        "name": "Tchad",
        "continent": "africa"
    },
    "tf": {
        "name": "Terres australes fran\u00e7aises",
        "continent": "antarctica"
    },
    "tg": {
        "name": "Togo",
        "continent": "africa"
    },
    "th": {
        "name": "Tha\u00eflande",
        "continent": "asia"
    },
    "tj": {
        "name": "Tadjikistan",
        "continent": "asia"
    },
    "tk": {
        "name": "Tokelau",
        "continent": "australia"
    },
    "tl": {
        "name": "Timor-Leste",
        "continent": "asia"
    },
    "tm": {
        "name": "Turkm\u00e9nistan",
        "continent": "asia"
    },
    "tn": {
        "name": "Tunisie",
        "continent": "africa"
    },
    "to": {
        "name": "Tonga",
        "continent": "australia"
    },
    "tr": {
        "name": "Turquie",
        "continent": "europe"
    },
    "tt": {
        "name": "Trinit\u00e9-et-Tobago",
        "continent": "northamerica"
    },
    "tv": {
        "name": "Tuvalu",
        "continent": "australia"
    },
    "tw": {
        "name": "Taiwan",
        "continent": "asia"
    },
    "tz": {
        "name": "Tanzanie, R\u00e9publique unie de",
        "continent": "africa"
    },
    "ua": {
        "name": "Ukraine",
        "continent": "europe"
    },
    "ug": {
        "name": "Ouganda",
        "continent": "africa"
    },
    "um": {
        "name": "\u00celes mineures \u00e9loign\u00e9es des \u00c9tats-Unis d'Am\u00e9rique",
        "continent": "australia"
    },
    "us": {
        "name": "\u00c9tats-Unis",
        "continent": "northamerica"
    },
    "uy": {
        "name": "Uruguay",
        "continent": "southamerica"
    },
    "uz": {
        "name": "Ouzb\u00e9kistan",
        "continent": "asia"
    },
    "va": {
        "name": "Saint-Si\u00e8ge (\u00e9tat de la cit\u00e9 du Vatican)",
        "continent": "europe"
    },
    "vc": {
        "name": "Saint-Vincent-et-les Grenadines",
        "continent": "northamerica"
    },
    "ve": {
        "name": "V\u00e9n\u00e9zuela, r\u00e9publique bolivarienne du",
        "continent": "southamerica"
    },
    "vg": {
        "name": "\u00celes Vierges britanniques",
        "continent": "northamerica"
    },
    "vi": {
        "name": "\u00celes Vierges des \u00c9tats-Unis",
        "continent": "northamerica"
    },
    "vn": {
        "name": "Viet Nam",
        "continent": "asia"
    },
    "vu": {
        "name": "Vanuatu",
        "continent": "australia"
    },
    "wf": {
        "name": "Wallis et Futuna",
        "continent": "australia"
    },
    "ws": {
        "name": "Samoa",
        "continent": "australia"
    },
    "ye": {
        "name": "Y\u00e9men",
        "continent": "asia"
    },
    "yt": {
        "name": "Mayotte",
        "continent": "africa"
    },
    "za": {
        "name": "Afrique du Sud",
        "continent": "africa"
    },
    "zm": {
        "name": "Zambie",
        "continent": "africa"
    },
    "zw": {
        "name": "Zimbabwe",
        "continent": "africa"
    }
};
$S.state_list = {
    "us": [{
        "name": "Alabama",
        "abbr": "AL"
    }, {
        "name": "Alaska",
        "abbr": "AK"
    }, {
        "name": "American Samoa",
        "abbr": "AS"
    }, {
        "name": "Arizona",
        "abbr": "AZ"
    }, {
        "name": "Arkansas",
        "abbr": "AR"
    }, {
        "name": "California",
        "abbr": "CA"
    }, {
        "name": "Colorado",
        "abbr": "CO"
    }, {
        "name": "Connecticut",
        "abbr": "CT"
    }, {
        "name": "Delaware",
        "abbr": "DE"
    }, {
        "name": "District de Columbia",
        "abbr": "DC"
    }, {
        "name": "Florida",
        "abbr": "FL"
    }, {
        "name": "Georgia",
        "abbr": "GA"
    }, {
        "name": "Guam",
        "abbr": "GU"
    }, {
        "name": "Hawaii",
        "abbr": "HI"
    }, {
        "name": "Idaho",
        "abbr": "ID"
    }, {
        "name": "Illinois",
        "abbr": "IL"
    }, {
        "name": "Indiana",
        "abbr": "IN"
    }, {
        "name": "Iowa",
        "abbr": "IA"
    }, {
        "name": "Kansas",
        "abbr": "KS"
    }, {
        "name": "Kentucky",
        "abbr": "KY"
    }, {
        "name": "Louisiana",
        "abbr": "LA"
    }, {
        "name": "Maine",
        "abbr": "ME"
    }, {
        "name": "Maryland",
        "abbr": "MD"
    }, {
        "name": "Massachusetts",
        "abbr": "MA"
    }, {
        "name": "Michigan",
        "abbr": "MI"
    }, {
        "name": "Minnesota",
        "abbr": "MN"
    }, {
        "name": "Mississippi",
        "abbr": "MS"
    }, {
        "name": "Missouri",
        "abbr": "MO"
    }, {
        "name": "Montana",
        "abbr": "MT"
    }, {
        "name": "Nebraska",
        "abbr": "NE"
    }, {
        "name": "Nevada",
        "abbr": "NV"
    }, {
        "name": "New Hampshire",
        "abbr": "NH"
    }, {
        "name": "New Jersey",
        "abbr": "NJ"
    }, {
        "name": "New Mexico",
        "abbr": "NM"
    }, {
        "name": "New York",
        "abbr": "NY"
    }, {
        "name": "Caroline du Nord",
        "abbr": "NC"
    }, {
        "name": "Dakota du Nord",
        "abbr": "ND"
    }, {
        "name": "\u00celes Mariannes du Nord",
        "abbr": "MP"
    }, {
        "name": "Ohio",
        "abbr": "OH"
    }, {
        "name": "Oklahoma",
        "abbr": "OK"
    }, {
        "name": "Oregon",
        "abbr": "OR"
    }, {
        "name": "Pennsylvania",
        "abbr": "PA"
    }, {
        "name": "Puerto Rico",
        "abbr": "PR"
    }, {
        "name": "Rhode Island",
        "abbr": "RI"
    }, {
        "name": "Caroline du Sud",
        "abbr": "SC"
    }, {
        "name": "Dakota du Sud",
        "abbr": "SD"
    }, {
        "name": "Tennessee",
        "abbr": "TN"
    }, {
        "name": "Texas",
        "abbr": "TX"
    }, {
        "name": "Utah",
        "abbr": "UT"
    }, {
        "name": "Vermont",
        "abbr": "VT"
    }, {
        "name": "Virgin Islands",
        "abbr": "VI"
    }, {
        "name": "Virginia",
        "abbr": "VA"
    }, {
        "name": "Washington",
        "abbr": "WA"
    }, {
        "name": "West Virginia",
        "abbr": "WV"
    }, {
        "name": "Wisconsin",
        "abbr": "WI"
    }, {
        "name": "Wyoming",
        "abbr": "WY"
    }],
    "ca": [{
        "name": "Alberta",
        "abbr": "AB"
    }, {
        "name": "British Columbia",
        "abbr": "BC"
    }, {
        "name": "Manitoba",
        "abbr": "MB"
    }, {
        "name": "Nouveau-Brunswick",
        "abbr": "NB"
    }, {
        "name": "Terre-Neuve-et-Labrador",
        "abbr": "NL"
    }, {
        "name": "Nouvelle-\u00c9cosse",
        "abbr": "NS"
    }, {
        "name": "Territoires du Nord-Ouest",
        "abbr": "NT"
    }, {
        "name": "Nunavut",
        "abbr": "NU"
    }, {
        "name": "Ontario",
        "abbr": "ON"
    }, {
        "name": "\u00cele du Prince-\u00c9douard",
        "abbr": "PE"
    }, {
        "name": "Quebec",
        "abbr": "QC"
    }, {
        "name": "Saskatchewan",
        "abbr": "SK"
    }, {
        "name": "Yukon",
        "abbr": "YT"
    }],
    "cn": [{
        "name": "Beijing",
        "abbr": "Beijing"
    }, {
        "name": "Tianjin",
        "abbr": "Tianjin"
    }, {
        "name": "Hebei",
        "abbr": "Hebei"
    }, {
        "name": "Shanxi",
        "abbr": "Shanxi"
    }, {
        "name": "Nei Mongol",
        "abbr": "Nei Mongol"
    }, {
        "name": "Liaoning",
        "abbr": "Liaoning"
    }, {
        "name": "Jilin",
        "abbr": "Jilin"
    }, {
        "name": "Heilongjiang",
        "abbr": "Heilongjiang"
    }, {
        "name": "Shanghai",
        "abbr": "Shanghai"
    }, {
        "name": "Jiangsu",
        "abbr": "Jiangsu"
    }, {
        "name": "Zhejiang",
        "abbr": "Zhejiang"
    }, {
        "name": "Anhui",
        "abbr": "Anhui"
    }, {
        "name": "Fujian",
        "abbr": "Fujian"
    }, {
        "name": "Jiangxi",
        "abbr": "Jiangxi"
    }, {
        "name": "Shandong",
        "abbr": "Shandong"
    }, {
        "name": "Henan",
        "abbr": "Henan"
    }, {
        "name": "Hubei",
        "abbr": "Hubei"
    }, {
        "name": "Hunan",
        "abbr": "Hunan"
    }, {
        "name": "Guangdong",
        "abbr": "Guangdong"
    }, {
        "name": "Guangxi",
        "abbr": "Guangxi"
    }, {
        "name": "Hainan",
        "abbr": "Hainan"
    }, {
        "name": "Chongqing",
        "abbr": "Chongqing"
    }, {
        "name": "Sichuan",
        "abbr": "Sichuan"
    }, {
        "name": "Guizhou",
        "abbr": "Guizhou"
    }, {
        "name": "Yunnan",
        "abbr": "Yunnan"
    }, {
        "name": "Xizang",
        "abbr": "Xizang"
    }, {
        "name": "Shaanxi",
        "abbr": "Shaanxi"
    }, {
        "name": "Gansu",
        "abbr": "Gansu"
    }, {
        "name": "Qinghai",
        "abbr": "Qinghai"
    }, {
        "name": "Ningxia",
        "abbr": "Ningxia"
    }, {
        "name": "Xinjiang",
        "abbr": "Xinjiang"
    }]
};
$S.stores = {
    "fonts_v2": [{
        "name": "chewy",
        "fontType": "google",
        "displayName": "Chewy",
        "cssValue": "chewy, helvetica",
        "settings": {
            "weight": "400"
        },
        "hidden": false,
        "cssFallback": "sans-serif",
        "disableBody": true,
        "isSuggested": true
    }, {
        "name": "sue ellen francisco",
        "fontType": "google",
        "displayName": "Sue Ellen Francisco",
        "cssValue": "sue ellen francisco",
        "settings": {
            "weight": "400"
        },
        "hidden": false,
        "cssFallback": "sans-serif",
        "disableBody": true,
        "isSuggested": true
    }, {
        "name": "pt sans narrow",
        "fontType": "google",
        "displayName": "PT Sans Narrow",
        "cssValue": "\"pt sans narrow\"",
        "settings": {
            "weight": "400,700",
            "google_embed_name": "PT Sans Narrow"
        },
        "hidden": false,
        "cssFallback": "sans-serif",
        "disableBody": null,
        "isSuggested": true
    }],
    "showStatic": {
        "footerLogoSeoData": {
            "anchor_link": "https:\/\/www.strikingly.com\/?ref=logo\u0026permalink=site-4457359-9149-5379\u0026custom_domain=\u0026utm_campaign=footer_pbs\u0026utm_content=https%3A%2F%2Fsite-4457359-9149-5379.mystrikingly.com%2F\u0026utm_medium=user_page\u0026utm_source=4457359\u0026utm_term=pbs_b",
            "anchor_text": "Best website builder"
        },
        "isEditMode": false
    },
    "pageData": {
        "type": "Site",
        "id": "f_11060da1-72ad-4e27-af37-69cc1fe28f01",
        "defaultValue": null,
        "horizontal": false,
        "fixedSocialMedia": false,
        "new_page": true,
        "showMobileNav": true,
        "showCookieNotification": false,
        "showTermsAndConditions": false,
        "showPrivacyPolicy": false,
        "activateGDPRCompliance": false,
        "multi_pages": false,
        "live_chat": false,
        "showNav": true,
        "showFooter": false,
        "showStrikinglyLogo": false,
        "showNavigationButtons": false,
        "showShoppingCartIcon": true,
        "showButtons": true,
        "navFont": "",
        "titleFont": "chewy",
        "logoFont": "",
        "bodyFont": "pt sans narrow",
        "buttonFont": "pt sans narrow",
        "headingFont": "sue ellen francisco",
        "bodyFontWeight": null,
        "theme": "fresh",
        "templateVariation": "",
        "templatePreset": "",
        "termsText": null,
        "privacyPolicyText": null,
        "fontPreset": null,
        "GDPRHtml": null,
        "pages": [{
            "type": "Page",
            "id": "f_3fc41de8-c9f8-4540-89d2-6f3f3ce08471",
            "defaultValue": null,
            "sections": [{
                "type": "Slide",
                "id": "f_4b871ddc-bcab-465e-a9ed-89bc2f5426a6",
                "defaultValue": null,
                "template_id": null,
                "template_name": "hero",
                "template_version": "s6",
                "components": {
                    "slideSettings": {
                        "type": "SlideSettings",
                        "id": "f_f44a345d-b82a-45f7-b8ef-b757ef2969d9",
                        "defaultValue": null,
                        "show_nav": false,
                        "show_nav_multi_mode": null,
                        "nameChanged": true,
                        "hidden_section": null,
                        "name": "HOME",
                        "sync_key": null,
                        "layout_variation": "button-left",
                        "display_settings": {},
                        "layout_config": {
                            "width": "normal",
                            "content_align": "center_left",
                            "height": "full"
                        }
                    },
                    "background1": {
                        "type": "Background",
                        "id": "f_0c959bd3-7d8b-48ab-b942-846a38086767",
                        "defaultValue": false,
                        "url": "!",
                        "textColor": "",
                        "backgroundVariation": "",
                        "sizing": "contain",
                        "userClassName": "",
                        "linkUrl": null,
                        "linkTarget": null,
                        "videoUrl": "",
                        "videoHtml": "",
                        "storageKey": "4457359\/430843_352900",
                        "storage": "s",
                        "format": "png",
                        "h": 1180,
                        "w": 1197,
                        "s": 985988,
                        "useImage": true,
                        "noCompression": true,
                        "focus": null,
                        "backgroundColor": {
                            "id": "f_4f52d06b-14b6-4f58-9ad4-3d0013d4304f",
                            "value": "#030716",
                            "type": "highlight2",
                            "themeColorRangeIndex": 4
                        }
                    },
                    "text1": {
                        "type": "RichText",
                        "id": "f_b279546f-8975-4f66-927a-a1c1d8322d24",
                        "defaultValue": false,
                        "value": "\u003cdiv\u003e\u003cdiv\u003e\u003ch1 style=\"font-size:48px;\"\u003e\u003cspan class=\"#(className)\" style=\"color:#ffffff;\"\u003ekenzoshitzu\u003c\/span\u003e\u003c\/h1\u003e\u003c\/div\u003e\u003c\/div\u003e",
                        "backupValue": null,
                        "version": 1
                    },
                    "text2": {
                        "type": "RichText",
                        "id": "f_c384603a-e24a-408b-a3a8-09f9eee4fa61",
                        "defaultValue": false,
                        "value": "\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003ch3 style=\"font-size:24px;\"\u003e\u003cspan class=\"#(className)\" style=\"color:#ffffff;\"\u003e\u003cstrong\u003eComing from the far far \u003c\/strong\u003e\u003c\/span\u003e\u003cspan class=\"#(className)\" style=\"color:#ffffff;\"\u003e\u003cstrong\u003espace, KenzoShitzu,\u003c\/strong\u003e\u003c\/span\u003e\u003cspan class=\"#(className)\" style=\"color:#ffffff;\"\u003e\u003cstrong\u003eone of the most popular\u003c\/strong\u003e\u003c\/span\u003e\u003c\/h3\u003e\u003ch3 style=\"font-size:24px;\"\u003e\u003cspan class=\"#(className)\" style=\"color:#ffffff;\"\u003e\u003cstrong\u003edogs, is coming \u003c\/strong\u003e\u003c\/span\u003e\u003c\/h3\u003e\u003ch3 style=\"font-size:24px;\"\u003e\u003cspan class=\"#(className)\" style=\"color:#ffffff;\"\u003e\u003cstrong\u003eto the Crypto space\u003c\/strong\u003e\u003c\/span\u003e\u003c\/h3\u003e\u003cp style=\"font-size: 130%; text-align: justify;\"\u003e\u0026nbsp;\u003c\/p\u003e\u003cp style=\"font-size: 130%;\"\u003e\u003cstrong\u003e\u003cspan class=\"#(className)\" style=\"color:#ffffff;\"\u003eSTAY TUNED\u003c\/span\u003e\u003c\/strong\u003e\u003c\/p\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e",
                        "backupValue": null,
                        "version": 1
                    },
                    "block1": {
                        "type": "BlockComponent",
                        "id": "036b28d7-a4f4-4320-bbd5-6ec67447601f",
                        "defaultValue": null,
                        "items": [{
                            "type": "BlockComponentItem",
                            "id": "f_9c1bbb9e-9402-475f-9817-2f390939325a",
                            "name": "rowBlock",
                            "components": {
                                "block1": {
                                    "type": "BlockComponent",
                                    "id": "a50e2ca8-fb3f-406d-ade7-d83c274df0ea",
                                    "items": [{
                                        "type": "BlockComponentItem",
                                        "id": "8c280c58-e9ce-4473-b113-3b885b39ce70",
                                        "name": "columnBlock",
                                        "components": {
                                            "block1": {
                                                "type": "BlockComponent",
                                                "id": "f_43311872-c2d7-4959-ab3e-c973acb4b430",
                                                "items": [{
                                                    "type": "BlockComponentItem",
                                                    "id": "0c851bc5-67ab-401c-87b2-d49f2d5f980b",
                                                    "defaultValue": null,
                                                    "name": "title",
                                                    "components": {
                                                        "text1": {
                                                            "type": "RichText",
                                                            "id": "8863f956-47c2-4159-988e-657a09f4e56b",
                                                            "defaultValue": false,
                                                            "value": "\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003ch3 class=\"h3Tag\"\u003eArbitrum Bored Ape Yacht Club\u003c\/h3\u003e\u003c\/div\u003e\u003cdiv\u003e\u0026nbsp;\u003c\/div\u003e\u003cdiv class=\"normalDiv\"\u003enot affiliated with BAYC\u003c\/div\u003e\u003cdiv class=\"normalDiv\"\u003e\u0026nbsp;\u003c\/div\u003e\u003cdiv\u003e\u0026nbsp;\u003c\/div\u003e\u003ch3 style=\"font-size:24px;\"\u003e\u0026nbsp;\u003c\/h3\u003e\u003ch3 style=\"font-size:24px;\"\u003e\u0026nbsp;\u003c\/h3\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e",
                                                            "backupValue": null,
                                                            "version": 1
                                                        }
                                                    }
                                                }, {
                                                    "type": "Media",
                                                    "id": "f_6e1244d2-b24d-4c75-b3a2-dd11a756fd10",
                                                    "defaultValue": true,
                                                    "video": {
                                                        "type": "Video",
                                                        "id": "f_17e0ec51-2b2b-4af0-bbe3-08e3d21207ea",
                                                        "defaultValue": true,
                                                        "html": "",
                                                        "url": "https:\/\/vimeo.com\/18150336",
                                                        "thumbnail_url": null,
                                                        "maxwidth": 700,
                                                        "description": null
                                                    },
                                                    "image": {
                                                        "type": "Image",
                                                        "id": "f_43effa9e-4e62-4287-a558-468282fbe1b9",
                                                        "defaultValue": true,
                                                        "link_url": "",
                                                        "thumb_url": "\/images\/icons\/transparent.png",
                                                        "url": "\/images\/icons\/transparent.png",
                                                        "caption": "",
                                                        "description": "",
                                                        "storageKey": null,
                                                        "storage": null,
                                                        "storagePrefix": null,
                                                        "format": null,
                                                        "h": null,
                                                        "w": null,
                                                        "s": null,
                                                        "new_target": true,
                                                        "noCompression": null,
                                                        "cropMode": null,
                                                        "focus": null
                                                    },
                                                    "current": "image"
                                                }],
                                                "inlineLayout": null
                                            }
                                        }
                                    }],
                                    "inlineLayout": "12"
                                }
                            }
                        }],
                        "inlineLayout": "1"
                    }
                }
            }, {
                "type": "Slide",
                "id": "f_d43b161b-e8d9-4b7f-b9ca-1a8f9dcf0cb6",
                "defaultValue": null,
                "template_id": null,
                "template_name": "rows",
                "components": {
                    "slideSettings": {
                        "type": "SlideSettings",
                        "id": "f_d3d667f4-3784-4eb4-be3a-d8a47e1852ba",
                        "defaultValue": null,
                        "show_nav": true,
                        "nameChanged": true,
                        "hidden_section": false,
                        "name": "ArbiBAYC",
                        "sync_key": null,
                        "layout_variation": "row-medium1-text-right"
                    },
                    "background1": {
                        "type": "Background",
                        "id": "f_51aae97c-9efa-40f7-8136-9d04560f3c7b",
                        "defaultValue": false,
                        "url": "",
                        "textColor": "",
                        "backgroundVariation": "",
                        "sizing": "",
                        "userClassName": "",
                        "videoUrl": "",
                        "videoHtml": "",
                        "storageKey": null,
                        "storage": null,
                        "format": null,
                        "h": null,
                        "w": null,
                        "s": null,
                        "useImage": false,
                        "focus": null,
                        "backgroundColor": {
                            "id": "f_2e54c38a-8f51-4a5a-b83b-98c38690a956",
                            "value": "#030716",
                            "type": "highlight2",
                            "themeColorRangeIndex": 4
                        }
                    },
                    "text1": {
                        "type": "RichText",
                        "id": "f_c88b3684-1536-4ad9-8d9c-a79820608678",
                        "defaultValue": false,
                        "value": "\u003cp\u003e\u003cb\u003eArbitrum BAYC\u003c\/b\u003e\u003c\/p\u003e",
                        "backupValue": null,
                        "version": 1
                    },
                    "text2": {
                        "type": "RichText",
                        "id": "f_469d04f5-04f2-4178-8936-72b92d367927",
                        "defaultValue": false,
                        "value": "\u003cdiv\u003e\u003ch4 style=\"font-size: 48px;\" class=\"h4Tag\"\u003eBe a BAYC holder on Arbitrum\u003c\/h4\u003e\u003c\/div\u003e",
                        "backupValue": null,
                        "version": 1
                    },
                    "repeatable1": {
                        "type": "Repeatable",
                        "id": "f_f359b670-f306-41a6-b9a7-e03ecbfbd51d",
                        "defaultValue": false,
                        "list": [{
                            "type": "RepeatableItem",
                            "id": "f_3958a750-3a32-4ebf-b2a6-53c7f2840474",
                            "defaultValue": true,
                            "components": {
                                "button1": {
                                    "type": "Button",
                                    "id": "f_e584a0ee-7ef2-4b4a-bc27-2e62b3cf1b7c",
                                    "defaultValue": true,
                                    "text": "",
                                    "url": "",
                                    "new_target": null
                                },
                                "media1": {
                                    "type": "Media",
                                    "id": "f_258f9a07-e736-40d8-ade8-798392e03112",
                                    "defaultValue": true,
                                    "video": {
                                        "type": "Video",
                                        "id": "f_98326bc6-dd85-4876-929f-64a3a8b4d051",
                                        "defaultValue": true,
                                        "html": "",
                                        "url": "https:\/\/vimeo.com\/18150336",
                                        "thumbnail_url": null,
                                        "maxwidth": 700,
                                        "description": null
                                    },
                                    "image": {
                                        "type": "Image",
                                        "id": "f_f6f78c53-e7fa-43fc-9396-2f5317d0754a",
                                        "defaultValue": true,
                                        "link_url": "",
                                        "thumb_url": "!",
                                        "url": "!",
                                        "caption": "",
                                        "description": "",
                                        "storageKey": "4457359\/7109_929285",
                                        "storage": "s",
                                        "storagePrefix": null,
                                        "format": "gif",
                                        "h": 394,
                                        "w": 393,
                                        "s": 53302,
                                        "new_target": true,
                                        "focus": null
                                    },
                                    "current": "image"
                                },
                                "text1": {
                                    "type": "RichText",
                                    "id": "f_d2a253cc-d27f-4627-a9d8-fe06c5b203d9",
                                    "defaultValue": false,
                                    "value": "\u003ch2 style=\"font-size:28px;\"\u003e\u003cb\u003eWe are a fork of the official BAYC project on arbitrum with a fantastic roadmap ahead.\u003c\/b\u003e\u003c\/h2\u003e\u003cdiv\u003e\u0026nbsp;\u003c\/div\u003e\u003ch3 class=\"h3Tag\"\u003e\u003cb\u003eOur ArbiBAYC NFT's are community lead and will bring the first main stream NFT's to Arbitrum\u003c\/b\u003e\u003c\/h3\u003e\u003ch3 class=\"h3Tag\"\u003e\u0026nbsp;\u003c\/h3\u003e\u003ch3 class=\"h3Tag\"\u003e\u003cb\u003eHolding ArbBAYC not only gives you access to the first BAYC project on Arbitrum, but provides you with exclusive rewards and benefits that increase over time.\u003c\/b\u003e\u003c\/h3\u003e\u003cdiv\u003e\u0026nbsp;\u003c\/div\u003e\u003cdiv\u003e\u003cb\u003eWe plan on dedicating:\u003c\/b\u003e\u003c\/div\u003e\u003cdiv\u003e\u0026nbsp;\u003c\/div\u003e\u003cdiv\u003e\u003cb\u003e30% of the funds for marketing and to onboard influencers.\u003c\/b\u003e\u003c\/div\u003e\u003cdiv\u003e\u003cb\u003e20% for giveaways to increase the community\u003c\/b\u003e\u003c\/div\u003e\u003cdiv\u003e\u003cb\u003e10% will be for our treasury need\u003c\/b\u003e\u003c\/div\u003e\u003cdiv\u003e\u003cb\u003e50% to build exclusive membership benefits for our community\u003c\/b\u003e\u003c\/div\u003e\u003cdiv\u003e\u0026nbsp;\u003c\/div\u003e\u003cdiv\u003e\u003cb\u003eYou will be able to trade your ArbiBAYC as soon as Opensea releases its Arbitrum L2 \u003c\/b\u003e\u003c\/div\u003e\u003cdiv\u003e\u0026nbsp;\u003c\/div\u003e\u003cdiv\u003e\u003cb\u003eTrading in our Disord will be available soon.\u003c\/b\u003e\u003c\/div\u003e",
                                    "backupValue": null,
                                    "version": 1
                                },
                                "text2": {
                                    "type": "RichText",
                                    "id": "f_bae2de18-7628-4a28-b59e-84f799d767e7",
                                    "defaultValue": false,
                                    "value": "",
                                    "backupValue": null,
                                    "version": 1
                                },
                                "text3": {
                                    "type": "RichText",
                                    "id": "f_ce204c73-1fa9-4cd6-be35-b22b8aaedb38",
                                    "defaultValue": false,
                                    "value": "\u003cp\u003e\u0026nbsp;\u003c\/p\u003e\u003cp style=\"text-align: center;\"\u003e\u0026nbsp;\u003c\/p\u003e\u003cp\u003e\u0026nbsp;\u003c\/p\u003e\u003cdiv style=\"font-size:83%;\"\u003e\u0026nbsp;\u003c\/div\u003e",
                                    "backupValue": null,
                                    "version": 1
                                }
                            }
                        }],
                        "components": {
                            "button1": {
                                "type": "Button",
                                "id": "f_2bfd7b32-d91c-40a6-a2f9-ddf640f6c108",
                                "defaultValue": true,
                                "text": "",
                                "url": "",
                                "new_target": null
                            },
                            "media1": {
                                "type": "Media",
                                "id": "f_02a49847-e91a-44d6-b0f9-f11e05485752",
                                "defaultValue": true,
                                "video": {
                                    "type": "Video",
                                    "id": "f_7dc18890-86e5-4150-8735-624e664d170f",
                                    "defaultValue": true,
                                    "html": "",
                                    "url": "https:\/\/vimeo.com\/18150336",
                                    "thumbnail_url": null,
                                    "maxwidth": 700,
                                    "description": null
                                },
                                "image": {
                                    "type": "Image",
                                    "id": "f_928efcfe-65ed-4601-bb57-487c8cf5916e",
                                    "defaultValue": true,
                                    "link_url": null,
                                    "thumb_url": "\/\/uploads.strikinglycdn.com\/static\/backgrounds\/striking-pack-3\/7.jpg",
                                    "url": "\/\/uploads.strikinglycdn.com\/static\/backgrounds\/striking-pack-3\/7.jpg",
                                    "caption": "",
                                    "description": "",
                                    "new_target": true
                                },
                                "current": "image"
                            },
                            "text1": {
                                "type": "RichText",
                                "id": "f_581ccf61-2c83-4861-820f-e0584dc8c542",
                                "defaultValue": true,
                                "value": "Titre du texte",
                                "backupValue": null,
                                "version": null
                            },
                            "text2": {
                                "type": "RichText",
                                "id": "f_4b112588-5ed4-4323-8af8-77f364b0725d",
                                "defaultValue": true,
                                "value": "Un petit slogan",
                                "backupValue": null,
                                "version": null
                            },
                            "text3": {
                                "type": "RichText",
                                "id": "f_a2a23af5-b425-4d70-9795-5d682f9b5d52",
                                "defaultValue": true,
                                "value": "Une phrase ou deux d\u00e9crivant cette partie. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.",
                                "backupValue": null,
                                "version": null
                            }
                        }
                    }
                }
            }, {
                "type": "Slide",
                "id": "f_21b19925-ec6e-4a6e-975d-36126d10e36e",
                "defaultValue": null,
                "template_id": null,
                "template_name": "hero",
                "components": {
                    "slideSettings": {
                        "type": "SlideSettings",
                        "id": "f_7a608c2f-425f-4d11-a470-86492a043e0e",
                        "defaultValue": null,
                        "show_nav": true,
                        "nameChanged": true,
                        "hidden_section": false,
                        "name": "Mint",
                        "sync_key": null,
                        "layout_variation": "signup-right"
                    },
                    "background1": {
                        "type": "Background",
                        "id": "f_ef4468f0-2bbc-4137-ab25-726efcd6991b",
                        "defaultValue": false,
                        "url": "",
                        "textColor": "",
                        "backgroundVariation": "",
                        "sizing": "",
                        "userClassName": "",
                        "videoUrl": "",
                        "videoHtml": "",
                        "storageKey": null,
                        "storage": null,
                        "format": null,
                        "h": null,
                        "w": null,
                        "s": null,
                        "useImage": false,
                        "focus": null,
                        "backgroundColor": {
                            "value": "#030716",
                            "type": "highlight2",
                            "themeColorRangeIndex": 4
                        }
                    },
                    "text1": {
                        "type": "RichText",
                        "id": "f_4744569d-e89c-4cdd-977f-fbbd9f337f02",
                        "defaultValue": false,
                        "value": "\u003cp\u003eMint your ArbiBAY\u003c\/p\u003e",
                        "backupValue": null,
                        "version": 1
                    },
                    "text2": {
                        "type": "RichText",
                        "id": "f_4a13b965-5d43-4f51-acf9-9a9537c916c3",
                        "defaultValue": false,
                        "value": "",
                        "backupValue": null,
                        "version": 1
                    },
                    "button1": {
                        "type": "Button",
                        "id": "f_51c2a2fe-691a-4c4b-8a75-da78ce8f262b",
                        "defaultValue": false,
                        "text": "Mint",
                        "size": "medium",
                        "style": "",
                        "alignment": "flex-end",
                        "color": "#afc2f8",
                        "url": "",
                        "new_target": null
                    },
                    "email1": {
                        "type": "EmailForm",
                        "id": "f_03e5fe47-9406-4119-b3b2-31504c5fc0ff",
                        "defaultValue": false,
                        "hideMessageBox": false,
                        "hide_name": false,
                        "hide_email": false,
                        "hide_phone_number": true,
                        "name_label": "Choosehow many ArbiBAYC",
                        "email_label": "[...]",
                        "phone_number_label": "T\u00e9l\u00e9phone",
                        "message_label": "Message",
                        "submit_label": "Mint",
                        "thanksMessage": "",
                        "recipient": "",
                        "label": ""
                    },
                    "image1": {
                        "type": "Image",
                        "id": "f_a78d0df9-5eb5-4cc9-9993-e5044a7c6c53",
                        "defaultValue": null,
                        "link_url": null,
                        "thumb_url": null,
                        "url": "\/\/assets.strikingly.com\/static\/icons\/app-badges\/apple-ios.png",
                        "caption": "",
                        "description": "",
                        "new_target": true
                    },
                    "image2": {
                        "type": "Image",
                        "id": "f_105e625d-c0f5-4312-974f-b3572ab303a0",
                        "defaultValue": null,
                        "link_url": null,
                        "thumb_url": null,
                        "url": "\/\/assets.strikingly.com\/static\/icons\/app-badges\/android2.png",
                        "caption": "",
                        "description": "",
                        "new_target": true
                    },
                    "media1": {
                        "type": "Media",
                        "id": "f_27ff43f4-8ae3-4f34-aa79-2e0249e9d45f",
                        "defaultValue": null,
                        "video": {
                            "type": "Video",
                            "id": "f_b6e8635f-66ca-4a49-9b9f-535b4c685d18",
                            "defaultValue": null,
                            "html": "",
                            "url": "http:\/\/vimeo.com\/18150336",
                            "thumbnail_url": null,
                            "maxwidth": 700,
                            "description": null
                        },
                        "image": {
                            "type": "Image",
                            "id": "f_40f669e6-fe62-4973-b8ee-538c71f88cde",
                            "defaultValue": true,
                            "link_url": null,
                            "thumb_url": "!",
                            "url": "!",
                            "caption": "",
                            "description": "",
                            "storageKey": "4457359\/737632_227957",
                            "storage": "s",
                            "storagePrefix": null,
                            "format": "png",
                            "h": 631,
                            "w": 631,
                            "s": 94042,
                            "new_target": true,
                            "focus": null
                        },
                        "current": "image"
                    }
                }
            }, {
                "type": "Slide",
                "id": "f_8b0315fa-ec62-4e09-8864-bf22023db2c2",
                "defaultValue": true,
                "template_id": null,
                "template_name": "info",
                "template_version": "s6",
                "components": {
                    "slideSettings": {
                        "type": "SlideSettings",
                        "id": "f_0d19b26e-0edb-46ad-9783-0656467f5032",
                        "defaultValue": true,
                        "show_nav": true,
                        "nameChanged": true,
                        "hidden_section": false,
                        "name": "FAQ",
                        "sync_key": null,
                        "layout_variation": "box-one-text",
                        "layout_config": {
                            "content_align": "center",
                            "height": "minimum",
                            "width": "small"
                        }
                    },
                    "background1": {
                        "type": "Background",
                        "id": "f_2afb17c8-dd6c-4a03-aae0-5d5e4a7dc935",
                        "defaultValue": false,
                        "url": "",
                        "textColor": "",
                        "backgroundVariation": "",
                        "sizing": "",
                        "userClassName": "",
                        "videoUrl": "",
                        "videoHtml": "",
                        "storageKey": null,
                        "storage": null,
                        "format": null,
                        "h": null,
                        "w": null,
                        "s": null,
                        "useImage": false,
                        "focus": null,
                        "backgroundColor": {
                            "themeColorRangeIndex": 4,
                            "type": "highlight2",
                            "value": "#030716",
                            "id": "f_82e85226-375c-4ee4-bc21-0ff455eee490"
                        }
                    },
                    "text1": {
                        "type": "RichText",
                        "id": "f_572e0013-f1f5-4088-ac4a-07c8cb6a80d7",
                        "defaultValue": false,
                        "value": "\u003cp\u003e\u003cstrong\u003eTokenomics\u003c\/strong\u003e\u003c\/p\u003e",
                        "backupValue": null,
                        "version": 1
                    },
                    "text2": {
                        "type": "RichText",
                        "id": "f_c5056cfd-cbf6-44d1-87a4-fc4f4a34d197",
                        "defaultValue": false,
                        "value": "\u003cp\u003e\u003cstrong\u003eStrong tokenomics and a rug proof contract\u003c\/strong\u003e\u003c\/p\u003e",
                        "backupValue": null,
                        "version": 1
                    },
                    "block1": {
                        "type": "BlockComponent",
                        "id": "23587ddc-d315-4900-a3f3-fcfb4abc6f5d",
                        "defaultValue": null,
                        "items": [{
                            "type": "BlockComponentItem",
                            "id": "f_a08fb687-9fa2-408f-a554-f7a3182c3bbf",
                            "name": "rowBlock",
                            "components": {
                                "block1": {
                                    "type": "BlockComponent",
                                    "id": "a17a9719-ae8c-44ee-9527-86cbce4693bb",
                                    "items": [{
                                        "type": "BlockComponentItem",
                                        "id": "d54b71de-4348-4bfb-815a-abfb0c60e983",
                                        "name": "columnBlock",
                                        "components": {
                                            "block1": {
                                                "type": "BlockComponent",
                                                "id": "f_c01adfe7-5251-4505-97f2-77e7f505fb88",
                                                "items": [{
                                                    "type": "BlockComponentItem",
                                                    "id": "49b58e68-0933-4bda-9459-9909d66fa952",
                                                    "defaultValue": null,
                                                    "name": "title",
                                                    "components": {
                                                        "text1": {
                                                            "type": "RichText",
                                                            "id": "688861f4-0738-4102-8399-f7960adb9d2c",
                                                            "defaultValue": false,
                                                            "value": "\u003ch1 class=\"s-title s-font-title\" style=\"font-size:48px;\"\u003e\u003cstrong\u003eFAQ\u003c\/strong\u003e\u003c\/h1\u003e",
                                                            "backupValue": null,
                                                            "version": 1
                                                        }
                                                    }
                                                }],
                                                "inlineLayout": null
                                            }
                                        }
                                    }],
                                    "inlineLayout": "12"
                                }
                            }
                        }, {
                            "type": "BlockComponentItem",
                            "id": "f_213c2f77-bd96-4c4c-a333-47bba5ae7bde",
                            "name": "rowBlock",
                            "components": {
                                "block1": {
                                    "type": "BlockComponent",
                                    "id": "3ed9f0d3-7d20-4128-a18e-4a800885d989",
                                    "items": [{
                                        "type": "BlockComponentItem",
                                        "id": "bbd33862-04c2-48a8-9c2d-f6b3c63d81ae",
                                        "name": "columnBlock",
                                        "components": {
                                            "block1": {
                                                "type": "BlockComponent",
                                                "id": "f_a2a47853-122b-4903-9085-051cb3af8531",
                                                "items": [{
                                                    "type": "BlockComponentItem",
                                                    "id": "f_1b0955f5-4adf-4a7d-b27d-6f99607b14b5",
                                                    "defaultValue": true,
                                                    "name": "textBox",
                                                    "components": {
                                                        "button1": {
                                                            "type": "Button",
                                                            "id": "f_3d26911a-d3bb-4225-8d0e-a75c9e129d3c",
                                                            "defaultValue": true,
                                                            "text": "",
                                                            "url": "",
                                                            "new_target": null
                                                        },
                                                        "text1": {
                                                            "type": "RichText",
                                                            "id": "f_8c9c4c08-8d65-4767-81d0-3b37b0232348",
                                                            "defaultValue": false,
                                                            "value": "\u003cp style=\"text-align: center;\"\u003e\u003cb\u003eHow many ArbiBAYC will be released ?\u003c\/b\u003e\u003c\/p\u003e",
                                                            "backupValue": null,
                                                            "version": 1
                                                        },
                                                        "text2": {
                                                            "type": "RichText",
                                                            "id": "f_5b4ebddf-5220-4061-9454-f5f38da237c7",
                                                            "defaultValue": false,
                                                            "value": "\u003cp style=\"text-align: center;\"\u003e\u0026nbsp;\u003c\/p\u003e\u003cp style=\"text-align: center;\"\u003eWe will be relasing 10,000 BAYC exactly as the official collection\u003c\/p\u003e",
                                                            "backupValue": null,
                                                            "version": 1
                                                        }
                                                    }
                                                }],
                                                "inlineLayout": null
                                            }
                                        }
                                    }],
                                    "inlineLayout": "12"
                                }
                            }
                        }, {
                            "type": "BlockComponentItem",
                            "id": "f_22661e3c-443b-400d-894b-b14a137c8092",
                            "name": "rowBlock",
                            "components": {
                                "block1": {
                                    "type": "BlockComponent",
                                    "id": "9dda4699-9081-4949-abe8-c032fa2f5d74",
                                    "items": [{
                                        "type": "BlockComponentItem",
                                        "id": "c4a1470b-13a8-49eb-b673-68eff01b5c53",
                                        "name": "columnBlock",
                                        "components": {
                                            "block1": {
                                                "type": "BlockComponent",
                                                "id": "f_54f07349-84d1-4ec1-a30c-cd89a130b9bd",
                                                "items": [{
                                                    "type": "BlockComponentItem",
                                                    "id": "f_62403d3d-9769-4556-9a8c-41f63db99c94",
                                                    "defaultValue": true,
                                                    "name": "textBox",
                                                    "components": {
                                                        "button1": {
                                                            "type": "Button",
                                                            "id": "f_ee390312-a077-4bf9-8181-3672508d5054",
                                                            "defaultValue": true,
                                                            "text": "",
                                                            "url": "",
                                                            "new_target": null
                                                        },
                                                        "text1": {
                                                            "type": "RichText",
                                                            "id": "f_124209fa-d89e-4dff-baf9-c2854281c8ef",
                                                            "defaultValue": false,
                                                            "value": "\u003cp style=\"text-align: center;\"\u003e\u003cspan class=\"#(className)\" style=\"color:#ffffff;\"\u003e\u003cstrong\u003eHow to Buy ?\u003c\/strong\u003e\u003c\/span\u003e\u003c\/p\u003e",
                                                            "backupValue": null,
                                                            "version": 1
                                                        },
                                                        "text2": {
                                                            "type": "RichText",
                                                            "id": "f_88848684-4caf-4442-a2b9-277b3ed7cbac",
                                                            "defaultValue": false,
                                                            "value": "\u003cp style=\"text-align: center;\"\u003eBuying ArbiBAYC is very easy.\u003c\/p\u003e\u003cp style=\"text-align: center;\"\u003e\u0026nbsp;\u003c\/p\u003e\u003cp style=\"text-align: center;\"\u003eConnect your wallet and choose how many ArbiBAYC you want to buy (maximum 20 per tx). Each ArbiBAYC cost is 0.03 ETH.\u003c\/p\u003e",
                                                            "backupValue": null,
                                                            "version": 1
                                                        }
                                                    }
                                                }],
                                                "inlineLayout": null
                                            }
                                        }
                                    }],
                                    "inlineLayout": "12"
                                }
                            }
                        }],
                        "inlineLayout": "1"
                    }
                }
            }, {
                "type": "Slide",
                "id": "f_899914f5-f617-4af0-b2a0-a409ecbfd64d",
                "defaultValue": true,
                "template_id": null,
                "template_name": "process",
                "template_version": "beta-s6",
                "components": {
                    "slideSettings": {
                        "type": "SlideSettings",
                        "id": "f_7940d646-a98c-472e-adbc-8d1a22e32c46",
                        "defaultValue": true,
                        "show_nav": true,
                        "nameChanged": true,
                        "hidden_section": false,
                        "name": "Roadmap",
                        "sync_key": null,
                        "layout_variation": "horizontal"
                    },
                    "background1": {
                        "type": "Background",
                        "id": "f_108869b5-9f3a-4969-9b1a-b8a0fffb6373",
                        "defaultValue": false,
                        "url": "",
                        "textColor": "",
                        "backgroundVariation": "",
                        "sizing": "",
                        "userClassName": "",
                        "videoUrl": "",
                        "videoHtml": "",
                        "storageKey": null,
                        "storage": null,
                        "format": null,
                        "h": null,
                        "w": null,
                        "s": null,
                        "useImage": false,
                        "focus": null,
                        "backgroundColor": {
                            "id": "f_522bd472-d3c7-4920-94a8-62166fb2d6c6",
                            "themeColorRangeIndex": 4,
                            "type": "highlight2",
                            "value": "#030716"
                        }
                    },
                    "text1": {
                        "type": "RichText",
                        "id": "f_4dc257d9-ef86-491f-9d0e-ac1bdd19a054",
                        "defaultValue": false,
                        "value": "\u003cdiv\u003e\u003cdiv\u003e\u003cdiv\u003e\u003cp\u003e\u0026nbsp;\u003c\/p\u003e\u003ch2 class=\"s-title s-font-title\"\u003e\u003cspan class=\"#(className)\" style=\"color:#ffffff;\"\u003e\u003cstrong\u003e\u003cspan style=\"font-family: inherit; \"\u003eArbiBAYC Roadmap\u003c\/span\u003e\u003c\/strong\u003e\u003c\/span\u003e\u003c\/h2\u003e\u003c\/div\u003e\u003c\/div\u003e\u003c\/div\u003e",
                        "backupValue": null,
                        "version": 1
                    },
                    "text2": {
                        "type": "RichText",
                        "id": "f_e3d2f11b-2a87-414d-965a-345d7821ce06",
                        "defaultValue": true,
                        "value": "Ajoutez un sous-titre",
                        "backupValue": null,
                        "version": null
                    },
                    "repeatable1": {
                        "type": "Repeatable",
                        "id": "f_ab751960-283b-41c0-87fc-a916a50ea690",
                        "defaultValue": false,
                        "list": [{
                            "type": "RepeatableItem",
                            "id": "f_fb933b1a-b9c4-471d-b2df-990a29c0cbd2",
                            "defaultValue": true,
                            "components": {
                                "text1": {
                                    "type": "RichText",
                                    "id": "f_168f76d4-5f3f-4e60-9a0b-8c1d8e1729a4",
                                    "defaultValue": false,
                                    "value": "\u003cp\u003eQ3 2021\u003c\/p\u003e",
                                    "backupValue": null,
                                    "version": 1
                                },
                                "text2": {
                                    "type": "RichText",
                                    "id": "f_e6c25d64-6913-46d0-84eb-bf76f62166c0",
                                    "defaultValue": false,
                                    "value": "\u003ch4\u003eLaunch 10,000 ArbiBAYC\u003c\/h4\u003e\u003ch4\u003eInitial Marketing Campaign\u003cbr\u003eOnboard influencers\u003cbr\u003eOrganize first community benefits\u003c\/h4\u003e",
                                    "backupValue": null,
                                    "version": 1
                                }
                            }
                        }, {
                            "type": "RepeatableItem",
                            "id": "f_fca9f55a-35f8-4d56-8d6c-f253ca3c949f",
                            "defaultValue": true,
                            "components": {
                                "text1": {
                                    "type": "RichText",
                                    "id": "f_b0ca2f83-24b5-4e7a-a4b1-96cc52290fdd",
                                    "defaultValue": false,
                                    "value": "\u003cp\u003eQ4 2021\u003c\/p\u003e",
                                    "backupValue": null,
                                    "version": 1
                                },
                                "text2": {
                                    "type": "RichText",
                                    "id": "f_ceb1af1a-5ea9-4ed6-8f26-1a1148e63031",
                                    "defaultValue": false,
                                    "value": "\u003cp\u003e\u003cspan style=\"font-family: inherit; \"\u003eLaunch on Opensea L2\u003c\/span\u003e\u003c\/p\u003e\u003cp\u003eExpand community benefits\u003c\/p\u003e\u003cp\u003eRelease ArbiMutantBAYC\u003c\/p\u003e",
                                    "backupValue": null,
                                    "version": 1
                                }
                            }
                        }, {
                            "type": "RepeatableItem",
                            "id": "f_f95e03b9-7c9d-4034-b26a-85bf8e3699cc",
                            "defaultValue": true,
                            "components": {
                                "text1": {
                                    "type": "RichText",
                                    "id": "f_88c5e34b-40e0-46a3-b861-bacc1e529a4b",
                                    "defaultValue": false,
                                    "value": "\u003cp\u003eQ1 2022\u003c\/p\u003e",
                                    "backupValue": null,
                                    "version": 1
                                },
                                "text2": {
                                    "type": "RichText",
                                    "id": "f_6a5428e0-42e8-4de5-a501-02bc32457b32",
                                    "defaultValue": false,
                                    "value": "\u003cp\u003eArtists and influencers engagement\u003c\/p\u003e\u003cp\u003eCommunity benefits\u003c\/p\u003e",
                                    "backupValue": null,
                                    "version": 1
                                }
                            }
                        }],
                        "components": {
                            "text1": {
                                "type": "RichText",
                                "id": "f_3b2f2fc9-51f5-4322-8ad1-3977c1b4dd01",
                                "defaultValue": true,
                                "value": "Add Title",
                                "backupValue": null,
                                "version": null
                            },
                            "text2": {
                                "type": "RichText",
                                "id": "f_f4e8f900-3edf-4b5a-b6c7-0929206153d9",
                                "defaultValue": true,
                                "value": "Ajoutez un sous-titre",
                                "backupValue": null,
                                "version": null
                            }
                        }
                    }
                }
            }, {
                "type": "Slide",
                "id": "f_0cd6987b-404c-43b2-996c-78ebc0a9ebbc",
                "defaultValue": true,
                "template_id": null,
                "template_name": "icons",
                "components": {
                    "background1": {
                        "type": "Background",
                        "id": "f_b7229098-bf29-4c64-9380-e5ec50d3db80",
                        "defaultValue": false,
                        "url": "",
                        "textColor": "",
                        "backgroundVariation": "",
                        "sizing": "",
                        "userClassName": "",
                        "videoUrl": "",
                        "videoHtml": "",
                        "storageKey": null,
                        "storage": null,
                        "format": null,
                        "h": null,
                        "w": null,
                        "s": null,
                        "useImage": false,
                        "focus": null,
                        "backgroundColor": {
                            "themeColorRangeIndex": 4,
                            "type": "highlight2",
                            "value": "#030716",
                            "id": "f_ce51c193-94d7-4ce7-a10c-5b5fa64b277b"
                        }
                    },
                    "slideSettings": {
                        "type": "SlideSettings",
                        "id": "f_29d76a0e-0072-47f8-9a2d-113b5d2c440a",
                        "defaultValue": true,
                        "show_nav": true,
                        "nameChanged": true,
                        "hidden_section": false,
                        "name": "Stay connected",
                        "sync_key": null,
                        "layout_variation": "col"
                    },
                    "text1": {
                        "type": "RichText",
                        "id": "f_fe5096fe-d5c6-4baa-8f0a-ce0c53620573",
                        "defaultValue": false,
                        "value": "\u003cp\u003e\u003cspan class=\"#(className)\" style=\"color:#ffffff;\"\u003e\u003cstrong\u003eJoin us on Telegram\u003c\/strong\u003e\u003c\/span\u003e\u003c\/p\u003e",
                        "backupValue": null,
                        "version": 1
                    },
                    "text2": {
                        "type": "RichText",
                        "id": "f_472a0126-99ca-4b13-90e9-0f10d6db6b01",
                        "defaultValue": false,
                        "value": "",
                        "backupValue": null,
                        "version": 1
                    },
                    "repeatable1": {
                        "type": "Repeatable",
                        "id": "f_eb5c9a5c-81e5-4bc7-947e-74e2ba648c16",
                        "defaultValue": false,
                        "list": [{
                            "type": "RepeatableItem",
                            "id": "f_131d3690-7a94-4a5c-a97c-6ac8195b7c27",
                            "defaultValue": true,
                            "components": {
                                "image1": {
                                    "type": "Image",
                                    "id": "f_f854aa03-a77d-4e01-8868-4de69f520fc4",
                                    "defaultValue": true,
                                    "link_url": "http:\/\/t.me\/ArbiBAYC",
                                    "thumb_url": "!",
                                    "url": "!",
                                    "caption": "",
                                    "description": "",
                                    "storageKey": "4457359\/811658_945997",
                                    "storage": "s",
                                    "storagePrefix": null,
                                    "format": "png",
                                    "h": 40,
                                    "w": 40,
                                    "s": 2940,
                                    "new_target": true,
                                    "noCompression": false,
                                    "focus": null
                                },
                                "text1": {
                                    "type": "RichText",
                                    "id": "f_558893df-aa1f-4a7e-b943-a2c1e684d66b",
                                    "defaultValue": false,
                                    "value": "\u003cp\u003e\u003cstrong\u003eTelegram\u003c\/strong\u003e\u003c\/p\u003e",
                                    "backupValue": null,
                                    "version": 1
                                }
                            }
                        }],
                        "components": {
                            "image1": {
                                "type": "Image",
                                "id": "f_2d0d76e5-1d65-43f1-8ee8-cd0013b0a491",
                                "defaultValue": true,
                                "link_url": null,
                                "thumb_url": null,
                                "url": "\/\/uploads.strikinglycdn.com\/page\/images\/icons\/email-icon.png",
                                "caption": "",
                                "description": "",
                                "new_target": true
                            },
                            "text1": {
                                "type": "RichText",
                                "id": "f_ff009366-0daf-47a0-a1e8-27e3ed306c4f",
                                "defaultValue": true,
                                "value": "Ajoutez votre texte ici",
                                "backupValue": null,
                                "version": null
                            }
                        }
                    }
                }
            }],
            "title": "Home",
            "description": null,
            "uid": "dbf686b1-b23a-4561-a09c-aaefcd0a520e",
            "path": "\/home",
            "pageTitle": null,
            "pagePassword": null,
            "memberOnly": null,
            "buySpecificProductList": null,
            "pwdPrompt": null,
            "autoPath": true,
            "authorized": true
        }, {
            "type": "Page",
            "id": "f_3d42b41f-1dbb-4d0d-bfac-15fb3227280c",
            "defaultValue": null,
            "sections": [],
            "title": "Events",
            "description": null,
            "uid": "03799797-7a1b-49bd-a5b5-5e643771427d",
            "path": "\/events",
            "pageTitle": null,
            "pagePassword": null,
            "memberOnly": null,
            "buySpecificProductList": null,
            "pwdPrompt": null,
            "autoPath": true,
            "authorized": true
        }],
        "menu": {
            "type": "Menu",
            "id": "f_a2a8e5fc-1aa2-430f-80b1-775f972d618f",
            "defaultValue": null,
            "template_name": "navbar",
            "logo": null,
            "components": {
                "image1": {
                    "type": "Image",
                    "id": "b75f9c31-998c-4efe-a114-17e3656a1401",
                    "defaultValue": true,
                    "link_url": "",
                    "thumb_url": "!",
                    "url": "!",
                    "caption": "",
                    "description": "",
                    "storageKey": "4457359\/258621_599607",
                    "storage": "s",
                    "storagePrefix": null,
                    "format": "png",
                    "h": 300,
                    "w": 300,
                    "s": 54803,
                    "new_target": true,
                    "noCompression": false,
                    "focus": null
                },
                "image2": {
                    "type": "Image",
                    "id": "f_04c902e2-9e5c-4037-b715-1eed89c3b78f",
                    "defaultValue": true,
                    "link_url": "",
                    "thumb_url": "\/images\/icons\/transparent.png",
                    "url": "\/images\/icons\/transparent.png",
                    "caption": "",
                    "description": "",
                    "storageKey": null,
                    "storage": null,
                    "storagePrefix": null,
                    "format": null,
                    "h": null,
                    "w": null,
                    "s": null,
                    "new_target": true,
                    "noCompression": null,
                    "cropMode": null,
                    "focus": {}
                },
                "text1": {
                    "type": "RichText",
                    "id": "f_654173b3-cd1e-4cf9-82bf-b6794301e142",
                    "defaultValue": false,
                    "value": "\u003cp\u003e\u003cspan class=\"#(className)\" style=\"color:#ffffff;\"\u003e\u003cb\u003eArbiBAYC\u003c\/b\u003e\u003c\/span\u003e\u003c\/p\u003e",
                    "backupValue": null,
                    "version": 1
                },
                "background1": {
                    "type": "Background",
                    "id": "f_8ae7161d-ac4d-439d-b7f5-6aab8f91003a",
                    "defaultValue": true,
                    "url": "\/assets\/themes\/profile\/bg.jpg",
                    "textColor": "light",
                    "backgroundVariation": "",
                    "sizing": "cover",
                    "userClassName": null,
                    "linkUrl": null,
                    "linkTarget": null,
                    "videoUrl": null,
                    "videoHtml": null,
                    "storageKey": null,
                    "storage": null,
                    "format": null,
                    "h": null,
                    "w": null,
                    "s": null,
                    "useImage": null,
                    "noCompression": null,
                    "focus": {}
                },
                "text2": {
                    "type": "RichText",
                    "id": "f_7dc59986-9eed-4932-85d3-183a2aba463e",
                    "defaultValue": true,
                    "value": "Subtitle Text",
                    "backupValue": null,
                    "version": null
                },
                "button1": {
                    "type": "Button",
                    "id": "f_809c18ad-fe1d-405f-9738-4217e4a4cd17",
                    "defaultValue": false,
                    "text": "Connect wallet",
                    "link_type": null,
                    "page_id": null,
                    "section_id": null,
                    "color": "#507bf1",
                    "url": "",
                    "new_target": false
                },
                "image3": {
                    "type": "Image",
                    "id": "066df067-7ffa-4480-a40b-3425562f19d4",
                    "defaultValue": true,
                    "link_url": "",
                    "thumb_url": "!",
                    "url": "!",
                    "caption": "",
                    "description": "",
                    "storageKey": "4457359\/105944_226068",
                    "storage": "s",
                    "storagePrefix": null,
                    "format": "jpg",
                    "h": 300,
                    "w": 200,
                    "s": 43328,
                    "new_target": true,
                    "noCompression": false,
                    "focus": null
                }
            }
        },
        "footer": {
            "type": "Footer",
            "id": "f_027e0664-4457-4c60-85c1-3ce4d408a11c",
            "defaultValue": false,
            "socialMedia": null,
            "copyright": null,
            "components": {
                "socialMedia": {
                    "type": "SocialMediaList",
                    "id": "f_64dff20e-ab66-4242-aa84-7b8367b47566",
                    "defaultValue": false,
                    "link_list": [{
                        "type": "Facebook",
                        "id": "f_b757cc2d-36ce-4be5-b891-784c2b041338",
                        "defaultValue": false,
                        "url": "facebook.com\/strikingly",
                        "link_url": null,
                        "share_text": null,
                        "show_button": false,
                        "app_id": null
                    }, {
                        "type": "Twitter",
                        "id": "f_4ec3a32c-84fb-4fdd-b67a-29a1cd4b3ac1",
                        "defaultValue": false,
                        "url": "twitter.com\/strikingly",
                        "link_url": null,
                        "share_text": null,
                        "show_button": false
                    }, {
                        "type": "GPlus",
                        "id": "f_f8146c82-e3fc-4e20-8926-feb82b25d3d3",
                        "defaultValue": null,
                        "url": "",
                        "link_url": null,
                        "share_text": null,
                        "show_button": false
                    }, {
                        "type": "LinkedIn",
                        "id": "f_857e0e09-e602-4c13-b108-cab85f2b41a3",
                        "defaultValue": null,
                        "url": "",
                        "link_url": null,
                        "share_text": null,
                        "show_button": false
                    }, {
                        "type": "Instagram",
                        "id": "f_54cbe570-eae4-44dd-a6b1-d0ac1e8f2e55",
                        "defaultValue": null,
                        "url": "",
                        "link_url": null,
                        "share_text": null,
                        "show_button": false
                    }, {
                        "type": "YouTube",
                        "id": "f_b5e2784e-8837-45ac-a6d7-82131180d8dd",
                        "defaultValue": null,
                        "url": "",
                        "link_url": null,
                        "share_text": null,
                        "show_button": false
                    }, {
                        "type": "Pinterest",
                        "id": "f_cfcee7ff-894d-4b7f-9fc9-a9f2dfd7191e",
                        "defaultValue": null,
                        "url": "",
                        "link_url": null,
                        "share_text": null,
                        "show_button": false
                    }],
                    "button_list": [{
                        "type": "Facebook",
                        "id": "f_27d2f361-29c9-4565-aa1b-035d3c044712",
                        "defaultValue": false,
                        "url": "",
                        "link_url": "",
                        "share_text": "",
                        "show_button": false,
                        "app_id": 543870062356274
                    }, {
                        "type": "Twitter",
                        "id": "f_bd6c5b6f-7f93-41eb-abf1-bb1051de4773",
                        "defaultValue": false,
                        "url": "",
                        "link_url": "",
                        "share_text": "",
                        "show_button": false
                    }, {
                        "type": "GPlus",
                        "id": "f_e6d4ce6c-d2d2-45d8-8d25-e59a7c023473",
                        "defaultValue": null,
                        "url": "",
                        "link_url": "",
                        "share_text": "",
                        "show_button": true
                    }, {
                        "type": "LinkedIn",
                        "id": "f_dc1dea16-ee5b-4a54-b96a-d0ecb6af7edf",
                        "defaultValue": null,
                        "url": "",
                        "link_url": "",
                        "share_text": "",
                        "show_button": false
                    }, {
                        "type": "Pinterest",
                        "id": "f_94ed8e4c-62c3-4f55-bcae-d07c781ca7a4",
                        "defaultValue": null,
                        "url": "",
                        "link_url": null,
                        "share_text": null,
                        "show_button": false
                    }],
                    "list_type": "button"
                },
                "copyright": {
                    "type": "RichText",
                    "id": "f_669e8eaf-7e73-44dd-93a4-c50ddb9b215e",
                    "defaultValue": false,
                    "value": "\u003cp\u003e\u00a9 2019\u003c\/p\u003e",
                    "backupValue": null,
                    "version": 1
                },
                "background1": {
                    "type": "Background",
                    "id": "f_0defc920-8588-40c0-9d90-3d6b2cb1e671",
                    "defaultValue": false,
                    "url": "",
                    "textColor": "light",
                    "backgroundVariation": "",
                    "sizing": "cover",
                    "userClassName": "s-bg-white",
                    "linkUrl": null,
                    "linkTarget": null,
                    "videoUrl": "",
                    "videoHtml": "",
                    "storageKey": null,
                    "storage": null,
                    "format": null,
                    "h": null,
                    "w": null,
                    "s": null,
                    "useImage": null,
                    "noCompression": null,
                    "focus": {}
                },
                "text1": {
                    "type": "RichText",
                    "id": "f_a3c591b4-c81d-4c06-a309-4286e30734dc",
                    "defaultValue": null,
                    "value": "\u003cp\u003e\u003cstrong\u003eAbout Us\u003c\/strong\u003e\u003c\/p\u003e\u003cp\u003eOur Mission\u003c\/p\u003e\u003cp\u003eWe're Hiring!\u003c\/p\u003e",
                    "backupValue": null,
                    "version": null
                },
                "text2": {
                    "type": "RichText",
                    "id": "f_8708f473-5bd9-45b2-ac0a-316cb5fc41b2",
                    "defaultValue": false,
                    "value": "\u003cp\u003e\u003cstrong\u003eInformation\u003c\/strong\u003e\u003c\/p\u003e\u003cp\u003eLessons Schedule\u003c\/p\u003e\u003cp\u003eHelp \u0026amp; Support\u003c\/p\u003e",
                    "backupValue": null,
                    "version": 1
                },
                "text3": {
                    "type": "RichText",
                    "id": "f_7a26e1b8-33f4-4288-bf1e-6d300f4b14af",
                    "defaultValue": false,
                    "value": "\u003cp\u003e\u003cb\u003eContact\u003c\/b\u003e\u003c\/p\u003e\u003cp\u003e415-555-5555\u003c\/p\u003e\u003cp\u003einfo@company.com\u003c\/p\u003e",
                    "backupValue": null,
                    "version": 1
                },
                "image1": {
                    "type": "Image",
                    "id": "f_8d3681b0-3ea6-45b1-8167-522158b480a3",
                    "defaultValue": true,
                    "link_url": "",
                    "thumb_url": "\/images\/icons\/transparent.png",
                    "url": "\/images\/icons\/transparent.png",
                    "caption": "",
                    "description": "",
                    "storageKey": null,
                    "storage": null,
                    "storagePrefix": null,
                    "format": null,
                    "h": null,
                    "w": null,
                    "s": null,
                    "new_target": true,
                    "noCompression": null,
                    "cropMode": null,
                    "focus": {}
                }
            },
            "layout_variation": "vertical"
        },
        "submenu": {
            "type": "SubMenu",
            "id": "f_37ccca79-01d4-4974-a695-7f7b82a1eaf7",
            "defaultValue": null,
            "list": [],
            "components": {
                "link": {
                    "type": "Button",
                    "id": "f_000de008-d04d-40c5-ace8-332c32feb7d4",
                    "defaultValue": null,
                    "text": "Facebook",
                    "link_type": null,
                    "page_id": null,
                    "section_id": null,
                    "url": "http:\/\/www.facebook.com",
                    "new_target": true
                }
            }
        },
        "customColors": {
            "type": "CustomColors",
            "id": "f_d35970ff-fab0-4cef-a27f-e8b4bf8cae86",
            "defaultValue": null,
            "active": true,
            "highlight1": "#01040c",
            "highlight2": "#02040d"
        },
        "animations": {
            "type": "Animations",
            "id": "f_1e864d09-1899-4c92-98b3-d7c80ca2377e",
            "defaultValue": null,
            "page_scroll": "slide_in",
            "background": "none",
            "image_link_hover": "zoom_in"
        },
        "s5Theme": {
            "type": "Theme",
            "id": "f_247e5d2c-d437-4993-a487-1c633cb2e339",
            "defaultValue": null,
            "version": "10",
            "nav": {
                "type": "NavTheme",
                "id": "f_a7eefaef-c78a-4fe1-925d-f515062961c4",
                "defaultValue": null,
                "name": "topBar",
                "layout": "a",
                "padding": "small",
                "sidebarWidth": "medium",
                "topContentWidth": "section",
                "horizontalContentAlignment": "center",
                "verticalContentAlignment": "middle",
                "fontSize": "large",
                "backgroundColor1": "#020818",
                "highlightColor": null,
                "presetColorName": "customized",
                "itemColor": "#f6f7fb",
                "isTransparent": false,
                "isSticky": true,
                "showSocialMedia": true,
                "socialMedia": []
            },
            "section": {
                "type": "SectionTheme",
                "id": "f_4fc6197e-5182-4a82-a157-ca9ae223252b",
                "defaultValue": null,
                "padding": "normal",
                "contentWidth": "normal",
                "contentAlignment": "center",
                "baseFontSize": null,
                "titleFontSize": null,
                "subtitleFontSize": null,
                "itemTitleFontSize": null,
                "itemSubtitleFontSize": null,
                "textHighlightColor": "#667788",
                "baseColor": "",
                "titleColor": "",
                "subtitleColor": "#01040c",
                "itemTitleColor": "",
                "itemSubtitleColor": "#01040c",
                "textHighlightSelection": {
                    "type": "TextHighlightSelection",
                    "id": "f_3eb95297-3837-4734-b37d-9ff518043380",
                    "defaultValue": null,
                    "title": false,
                    "subtitle": true,
                    "itemTitle": true,
                    "itemSubtitle": true
                }
            },
            "firstSection": {
                "type": "FirstSectionTheme",
                "id": "f_db90f220-e55e-4a61-8251-f8e855dc7278",
                "defaultValue": null,
                "height": "full",
                "shape": "none"
            },
            "button": {
                "type": "ButtonTheme",
                "id": "f_78383a89-ed4d-4cda-9d68-f5c72825706d",
                "defaultValue": null,
                "backgroundColor": "#eaa75b",
                "shape": "rounded",
                "fill": "solid"
            }
        },
        "navigation": {
            "items": [{
                "type": "page",
                "id": "dbf686b1-b23a-4561-a09c-aaefcd0a520e",
                "visibility": true
            }, {
                "id": "03799797-7a1b-49bd-a5b5-5e643771427d",
                "type": "page",
                "visibility": true
            }],
            "links": []
        }
    },
    "pageMeta": {
        "user": {
            "membership": "pro20",
            "subscription_plan": "pro20_monthly",
            "subscription_period": "monthly",
            "is_on_trial": false,
            "id": 4457359,
            "enable_desktop_notifications": null,
            "canUseLiveChat": false
        },
        "guides": {
            "display_site_new_editor_modal": false
        },
        "ecommerceSettings": {
            "unreadOrdersCount": 0,
            "displayTax": true,
            "registration": "no_registration",
            "postOrderRedirection": {},
            "enableProductReview": false,
            "payment_gateways": {
                "stripe": false,
                "offline": false,
                "paypal": false,
                "midtrans": false,
                "alipay": false,
                "pingpp_wx_pub": false,
                "pingpp_wx_pub_qr": false,
                "pingpp_alipay_qr": false,
                "pingpp_alipay_wap": false,
                "wechatpay": false
            }
        },
        "portfolioSetting": true,
        "chatSettings": null,
        "connectedSites": [],
        "category": null,
        "s4_migration": {
            "is_migrated": false,
            "is_retired_theme": false,
            "has_custom_code": false
        },
        "page_groups": [],
        "slide_names": ["HOME", "ArbiBAYC", "Mint", "FAQ", "Roadmap", "Stay connected"],
        "theme": {
            "name": "s5-theme"
        },
        "theme_selection": {
            "id": 142,
            "theme_id": 59,
            "display_name": "My ABCs",
            "description": "",
            "is_new": false,
            "priority": 0,
            "thumb_image": "https://uploads.strikinglycdn.com/static/themes/my-abcs.jpg",
            "demo_page_permalink": "rutheckhoff",
            "data_page_permalink": "rutheckhoff",
            "created_at": "2019-07-03T10:39:44.438-07:00",
            "updated_at": "2019-12-08T18:29:34.384-08:00",
            "name": "My_ABCs",
            "is_control": true,
            "control_name": null,
            "locale": "en",
            "version": "v4",
            "tags": ["all"],
            "mobile_thumb_image": "",
            "platforms": [""],
            "required_membership": [""],
            "priority_automated": 554,
            "priority_b": 0,
            "theme_name": "s5-theme"
        },
        "connected_sites": [],
        "linkedin_app": false,
        "is_weitie_page": false,
        "canonical_locale_supported": true,
        "forced_locale": "fr",
        "china_optimization": false,
        "mobile_actions": {
            "phone": null,
            "sms": null,
            "location": null,
            "email": null,
            "version": "v2",
            "actions": []
        },
        "domain_connection": null,
        "public_url": "https:\/\/site-4457359-9149-5379.mystrikingly.com\/",
        "current_path": "\/",
        "rollouts": {
            "custom_code": true,
            "pro_sections": true,
            "pro_apps": true,
            "custom_form": false,
            "new_settings_dialog_feature": true,
            "google_analytics": true,
            "strikingly_analytics": true,
            "popup": null
        },
        "site_mode": "show",
        "password_protected": false,
        "google": {
            "enable_ga_universal": true,
            "analytics_tracker": null,
            "analytics_type": "universal",
            "site_checker": null
        },
        "facebook_pixel_id": null,
        "enable_site_search": false,
        "optimizely": {
            "project_id": null,
            "experiment_id": null
        },
        "splash_screen_color": "#ffffff",
        "id": 16650580,
        "permalink": "site-4457359-9149-5379",
        "created_at": "2021-08-30T06:12:29.353-07:00",
        "logo_url": "https:\/\/user-images.strikinglycdn.com\/res\/hrscywv4p\/image\/upload\/c_limit,fl_lossy,h_630,w_1200,f_auto,q_auto\/4457359\/258621_599607.png",
        "icon_url": "https:\/\/user-images.strikinglycdn.com\/res\/hrscywv4p\/image\/upload\/c_limit,fl_lossy,h_64,w_64,q_auto\/4457359\/258621_599607.png",
        "description": "Buy the first BAYC on Arbitrum",
        "name": "ArbiBAYC",
        "url_type": "subdomain_link",
        "icp_filing_number": "",
        "psb_filing_number": "",
        "social_media_config": {
            "url": "https:\/\/site-4457359-9149-5379.mystrikingly.com\/",
            "title": "ArbiBAYC",
            "image": "https:\/\/user-images.strikinglycdn.com\/res\/hrscywv4p\/image\/upload\/c_limit,fl_lossy,h_630,w_1200,f_auto,q_auto\/4457359\/258621_599607.png",
            "description": "Buy the first BAYC on Arbitrum",
            "fb_app_id": "138736959550286"
        },
        "keenio_config": {
            "keenio_project_id": "5317e03605cd66236a000002",
            "keenio_write_key": "efd460f8e282891930ff1957321c12b64a6db50694fd0b4a01d01f347920dfa3ce48e8ca249b5ea9917f98865696cfc39bc6814e4743c39af0a4720bb711627d9cf0fe63d5d52c3866c9c1c3178aaec6cbfc1a9ab62a3c9a827d2846a9be93ecf4ee3d61ebee8baaa6a1d735bff6e37b"
        },
        "show_strikingly_logo": false,
        "show_navigation_buttons": false,
        "social_media": null,
        "has_optimizely": false,
        "optimizely_experiment_id": null,
        "services": [],
        "strk_upvt": "Z2VTQUtLMWo2MnVHbjFRWkJEeW9PcEd1R0tkNVpxQm5PRU9VOWhMVHN4RFhBK3Jla0VCRDYxT0ppdXlnRnUzRWQ0STMrczNhSjQvWUxORjF5Y2VkTW5HT0VoVVhSUXcyRDArcG9zTzczbmYrUXlGSjNVMjE1c1dRQ2FQQ0VWZzhVbnVDWEpXbnFqaytZV2J0b1FSYytMT0RDRFdyeTFEVjUrYkFGdVI5ZEJVPS0tTUIyVHQzdFpmSnNaSXI3SGMvenpRUT09--c990167cb8f89ec973b20186cf405dc23ebe8749",
        "strk_ga_tracker": "UA-25124444-6",
        "google_analytics_tracker": null,
        "google_analytics_type": "universal",
        "exception_tracking": true,
        "ecommerce": {
            "seller_wechat_app_id": null,
            "has_set_payment_account": false
        }
    },
    "blogCollection": {
        "data": {
            "blog": {
                "id": 16650580,
                "blogSettings": {
                    "previewLayout": 1,
                    "migrate": true,
                    "mailchimpCode": null
                },
                "blogPosts": [],
                "wechatMpAccountId": null,
                "pagination": {
                    "blogPosts": {
                        "currentPage": 1,
                        "previousPage": null,
                        "nextPage": null,
                        "perPage": 3,
                        "totalPages": 0,
                        "totalCount": 0
                    }
                }
            }
        }
    },
    "ecommerceProductCollection": {
        "data": {
            "products": []
        }
    },
    "ecommerceCategoryCollection": {
        "data": {
            "categories": []
        }
    }
};
$S.blink = {
    "page": {
        "logo_url": "https:\/\/user-images.strikinglycdn.com\/res\/hrscywv4p\/image\/upload\/c_limit,fl_lossy,h_630,w_1200,f_auto,q_auto\/4457359\/258621_599607.png",
        "weitie_url": "http:\/\/site-4457359-9149-5379.weitie.co",
        "description": "Buy the first BAYC on Arbitrum",
        "name": "ArbiBAYC"
    },
    "conf": {
        "WECHAT_APP_ID": "wxd009fb01de1ec8b5"
    }
};
//]]>