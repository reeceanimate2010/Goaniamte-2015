const fUtil = require("../misc/file");
const stuff = require("./info");
const http = require("http");

function toAttrString(table) {
	return typeof table == "object"
		? Object.keys(table)
				.filter((key) => table[key] !== null)
				.map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(table[key])}`)
				.join("&")
		: table.replace(/"/g, '\\"');
}
function toParamString(table) {
	return Object.keys(table)
		.map((key) => `<param name="${key}" value="${toAttrString(table[key])}">`)
		.join(" ");
}
function toObjectString(attrs, params) {
	return `<object id="obj" ${Object.keys(attrs)
		.map((key) => `${key}="${attrs[key].replace(/"/g, '\\"')}"`)
		.join(" ")}>${toParamString(params)}</object>`;
}

/**
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 * @param {import("url").UrlWithParsedQuery} url
 * @returns {boolean}
 */
module.exports = function (req, res, url) {
	if (req.method != "GET") return;
	const query = url.query;

	var attrs, params, title;
	switch (url.pathname) {
		case "/videos/": {
			title = "Player";
			attrs = {
				data: process.env.SWF_URL + "/player.swf",
				type: "application/x-shockwave-flash",
                                
				id: "Player",
                                width: "100%",
                                height: "100%",

                                align: "middle",
                                allowScriptAccess: "always",
                                allowFullScreen: "true",
                                wmode: "transparent",

                                hasVersion: "10.3",
				quality: "medium"
			};
			params = {
				flashvars: {
					movieOwner: "African+Vulture%E2%84%A2",
					movieOwnerId: "0uWOI2JiCdHU",
					movieId: "",
					movieLid: "0",
					movieTitle: "Test",
					movieDesc: "This+video+is+ment+for+testing+out+this+video+player.",
					userId: "",
					username:"", 
					uemail: "",
					ut: "-1",
					numContact: "",
					apiserver: "/",
					duration: "92",
					playcount: "0",
					thumbnailURL: "https://s3.amazonaws.com/fs.goanimate.com/files/thumbnails/movie/1963/7876963/20609517L.jpg",
					copyable: "0",
					isPublished: "0",
					ctc: "go",
					tlang: "en_US",
					is_private_shared: "1",
					autostart: "0",
					appCode: "go",
					is_slideshow: "0",
					originalId: "0zEt_fo4L-5k",
					is_emessage: "0",
					storePath: process.env.STORE_URL + "/<store>",
					clientThemePath: process.env.CLIENT_URL + "/<client_theme>",
					animationPath: process.env.SWF_URL + "/",
					isEmbed: "0",
					refuser: null,
					utm_source: null,
					uid: null,
					isTemplate: "0",
					showButtons: "1",
					chain_mids: "",
					averageRating: 5,
					ratingCount: "48",
					fb_app_url: "/",
					ad: 0,
					endStyle: 0,
					isWide: 0,
					pwm: 1,
					s3base: "https://s3.amazonaws.com/fs.goanimate.com/,https://assets.vyond.com/"},
				
				movie: process.env.SWF_URL + "/player.swf", // 'http://localhost/player.swf'
			};
			break;
		}

		default:
			return;
	}
	res.setHeader("Content-Type", "text/html; charset=UTF-8");
	Object.assign(params.flashvars, query);
	res.end(`
	<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<link rel="dns-prefetch" href="//josephcrosmanplays532.github.io/">
<script>document.title='${title}'</script>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="title" content="Test - Joseph Animate 2021">
<meta name="description" content="Watch the video: Test by Joseph Animate 2021 on GoAnimate.">
<link rel="canonical" href="https://vyond2018.herokuapp.com/videos/?movieId=m-16">
<link rel="image_src" href="https://s3.amazonaws.com/fs.goanimate.com/files/thumbnails/movie/876/5682876/13801618.jpg">
<link rel="video_src" href="https://josephcrosmanplays532.github.io/player/swf/m-16">
<meta name="video_height" content="354">
<meta name="video_width" content="550">
<meta name="video_type" content="application/x-shockwave-flash">
<meta name="medium" content="video">
<meta property="og:type" content="article">
<meta property="og:title" content="election">
<meta property="og:description" content="">
<meta property="og:url" content="https://vyond2018.herokuapp.com/videos/?movieId=m-16">
<meta property="og:image" content="https://s3.amazonaws.com/fs.goanimate.com/files/thumbnails/movie/876/5682876/13801618L.jpg">
<meta property="og:video" content="https://josephcrosmanplays532.github.io/player/swf/m-16">
<meta property="og:video:height" content="354">
<meta property="og:video:width" content="550">
<meta property="og:video:type" content="application/x-shockwave-flash">
<link rel="alternate" type="application/json+oembed" href="https://josephcrosmanplays532.github.io/api/oembed?url=http%3A%2F%2Fgoanimate.com%2Fvideos%2F0-1BF1m2VKQA&amp;format=json">
<link rel="alternate" type="text/xml+oembed" href="https://josephcrosmanplays532.github.io/api/oembed?url=http%3A%2F%2Fgoanimate.com%2Fvideos%2F0-1BF1m2VKQA&amp;format=xml">
<meta name="twitter:card" content="player">
<meta name="twitter:title" content="Test - Joseph Animate 2021">
<meta name="twitter:description" content="Watch the video: Test by Joseph Animate 2021 on GoAnimate.">
<meta name="twitter:image:src" content="https://s3.amazonaws.com/fs.goanimate.com/files/thumbnails/movie/876/5682876/13801618L.jpg">
<meta name="twitter:player" content="https://josephcrosmanplays532.github.io/player/embed/m-16">
<meta name="twitter:player:height" content="349">
<meta name="twitter:player:width" content="620">
<meta property="og:site_name" content="GoAnimate">
<meta property="fb:app_id" content="177116303202">
<meta name="google-site-verification" content="K_niiTfCVi72gwvxK00O4NjsVybMutMUnc-ZnN6HUuA">
<link rel="alternate" href="https://web.archive.org/web/20160123121200/http://feeds.feedburner.com/GoAnimate" type="application/rss+xml" title="GoAnimate Blog">
<link rel="alternate" href="https://web.archive.org/web/20160123121200/http://feeds.feedburner.com/GoAnimate/WhatsNew" type="application/rss+xml" title="GoAnimate - Recently Released Content">
<link rel="alternate" href="https://web.archive.org/web/20160123121200/http://feeds.feedburner.com/GoAnimate/MostWatched" type="application/rss+xml" title="GoAnimate - Most Watched">
<link href="https://josephcrosmanplays532.github.io/fonts/5/font2015.css" rel="stylesheet" type="text/css">
<link href="https://josephcrosmanplays532.github.io/video-player-2015-files/common_combined.css" rel="stylesheet" type="text/css">
<link href="https://josephcrosmanplays532.github.io/video-player-2015-files/upsell_modals.css" rel="stylesheet" type="text/css">
<link href="https://josephcrosmanplays532.github.io/video-player-2015-files/watermark.css" rel="stylesheet" type="text/css">
<link href="https://josephcrosmanplays532.github.io/video-player-2015-files/video.css" rel="stylesheet" type="text/css">
<link href="https://josephcrosmanplays532.github.io/video-player-2015-files/videos.css" rel="stylesheet" type="text/css">
<link href="https://josephcrosmanplays532.github.io/video-player-2015-files/video_export.css" rel="stylesheet" type="text/css">
<link href="https://josephcrosmanplays532.github.io/video-player-2015-files/movie_license.css" rel="stylesheet" type="text/css">
<link href="https://josephcrosmanplays532.github.io/video-player-2015-files/video_voice_vendor.css" rel="stylesheet" type="text/css">
<link href="https://josephcrosmanplays532.github.io/video-player-2015-files/bootstrap-tokenfield.min.css" rel="stylesheet" type="text/css">
<link href="https://josephcrosmanplays532.github.io/video-player-2015-files/bootstrap-tokenfield-addon.css" rel="stylesheet" type="text/css">
<link href="https://josephcrosmanplays532.github.io/video-player-2015-files/worknote.css" rel="stylesheet" type="text/css">
<!--[if lt IE 9]>
<style text="text/css">
.top-nav.collapse {height: auto;overflow: visible;}
</style>
<![endif]-->
<script>
var srv_tz_os = -5, view_name = "go", user_cookie_name = "u_info";
</script>
<script src="https://josephcrosmanplays532.github.io/video-player-2015-files/common_combined.js"></script>
<script type="text/javascript" src="https://josephcrosmanplays532.github.io/video-player-2015-files/goserver_js-en_US.json"></script>
<script type="text/javascript">
var I18N_LANG = 'en_US';
var GT = new Gettext({'locale_data': json_locale_data});
</script>
<script src="https://josephcrosmanplays532.github.io/video-player-2015-files/jquery.ui.core.min.js"></script>
<script src="https://josephcrosmanplays532.github.io/video-player-2015-files/jquery.ui.widget.min.js"></script>
<script src="https://josephcrosmanplays532.github.io/video-player-2015-files/jquery.ui.position.min.js"></script>
<script src="https://josephcrosmanplays532.github.io/video-player-2015-files/jquery.ui.menu.min.js"></script>
<script src="https://josephcrosmanplays532.github.io/video-player-2015-files/jquery.ui.autocomplete.min.js"></script>
<script src="https://josephcrosmanplays532.github.io/video-player-2015-files/bootstrap-tokenfield.min.js"></script>
<script src="https://josephcrosmanplays532.github.io/video-player-2015-files/trial_upsell.js"></script>
<script src="https://josephcrosmanplays532.github.io/video-player-2015-files/moment.min.js"></script>
<script src="https://josephcrosmanplays532.github.io/video-player-2015-files/country-options.js"></script>
<script type="text/javascript" src="https://josephcrosmanplays532.github.io/video-player-2015-files/recaptcha_ajax.js"></script>
<!-- Google Tag Manager -->
<script>
    dataLayer = [];
    </script>
<noscript><iframe src="//www.googletagmanager.com/ns.html?id=GTM-TXV7MD" height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TXV7MD');</script>
<!-- Google Tag Manager -->
<script type="text/javascript">
    dataLayer.push({
        'event': 'loadUniversalAnalytics'
    });
        dataLayer.push({
            'event': 'create'
        });
dataLayer.push({
    'event': 'pageLoad'
});
</script>
<!-- Facebook TAG -->
<script>(function() {
    var _fbq = window._fbq || (window._fbq = []);
    if (!_fbq.loaded) {
        var fbds = document.createElement('script');
        fbds.async = true;
        fbds.src = '//connect.facebook.net/en_US/fbds.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(fbds, s);
        _fbq.loaded = true;
    }
    _fbq.push(['addPixelId', '689859554455701']);
})();
window._fbq = window._fbq || [];
window._fbq.push(['track', 'PixelInitialized', {}]);
</script>
<noscript><img height="1" width="1" alt="" style="display:none" src="https://www.facebook.com/tr?id=689859554455701&amp;ev=PixelInitialized"/></noscript>
<!-- Facebook TAG -->
<link href="https://plus.google.com/+goanimate" rel="publisher">
<!-- Start of goanimate Zendesk Widget script -->
<script>/*<![CDATA[*/window.zEmbed||function(e,t){var n,o,d,i,s,a=[],r=document.createElement("iframe");window.zEmbed=function(){a.push(arguments)},window.zE=window.zE||window.zEmbed,r.src="javascript:false",r.title="",r.role="presentation",(r.frameElement||r).style.cssText="display: none",d=document.getElementsByTagName("script"),d=d[d.length-1],d.parentNode.insertBefore(r,d),i=r.contentWindow,s=i.document;try{o=s}catch(c){n=document.domain,r.src='javascript:var d=document.open();d.domain="'+n+'";void(0);',o=s}o.open()._l=function(){var o=this.createElement("script");n&&(this.domain=n),o.id="js-iframe-async",o.src=e,this.t=+new Date,this.zendeskHost=t,this.zEQueue=a,this.body.appendChild(o)},o.write('<body onload="document._l();">'),o.close()}("//web.archive.org/web/20160123121200/http://assets.zendesk.com/embeddable_framework/main.js","goanimate.zendesk.com");/*]]>*/</script>
<!-- End of goanimate Zendesk Widget script -->
<script type="text/javascript">
  (function(t,e){var n=t.amplitude||{};var r=e.createElement("script");r.type="text/javascript";
  r.async=true;r.src="https://d24n15hnbwhuhn.cloudfront.net/libs/amplitude-2.8.0-min.gz.js";
  r.onload=function(){t.amplitude.runQueuedFunctions()};var s=e.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(r,s);var i=function(){this._q=[];return this};function o(t){
  i.prototype[t]=function(){this._q.push([t].concat(Array.prototype.slice.call(arguments,0)));
  return this}}var a=["add","append","set","setOnce","unset"];for(var u=0;u<a.length;u++){o(a[u]);
  }n.Identify=i;n._q=[];function c(t){n[t]=function(){n._q.push([t].concat(Array.prototype.slice.call(arguments,0)));
  }}var l=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","setGlobalUserProperties","identify"];
  for(var p=0;p<l.length;p++){c(l[p])}t.amplitude=n})(window,document);
var amplitudeConfig = {
    apiKey: '4c9fffdee3fb26c43dd66c70698c5a8f',
    userId: '',
    userEmail: ''
};
amplitude.init(
    amplitudeConfig.apiKey,
    null,
    {
        includeUtm: true,
        includeReferrer: true
    },
    amplitudeCallBack
);
function amplitudeCallBack() {
    var cookie_string = "amplitudeSessionId" + "=" + encodeURIComponent(amplitude.getSessionId());
    document.cookie = cookie_string;
}
if (amplitudeConfig.userId !== '') {
    amplitude.setUserId(amplitudeConfig.userId);
    amplitude.setUserProperties({
        email: amplitudeConfig.userEmail
    });
}
/**
 * UTM utility.
 */
var utmUtil = (function() {
    'use strict';
    var getUTMParameters;
    /**
     * Gets UTM parameters.
     *
     * @return {Object} A JSON object containing the properties source
     *                    (utm_source), medium (utm_medium), term (utm_term),
     *                    content (utm_content) and name (utm_campaign).
     */
    getUTMParameters = function() {
        var queryString = window.location.search.substring(1),
            parameters,
            parameterIndex,
            parametersCount,
            parameterPair,
            parameterName,
            parameterValue,
            parameterObject = {
                source: null,
                medium: null,
                term: null,
                content: null,
                name: null
            };
        // No query string at all.
        if (queryString === '') {
            return parameterObject;
        }
        parameters = queryString.split('&');
        parametersCount = parameters.length;
        for (parameterIndex = 0; parameterIndex < parametersCount; parameterIndex++) {
            parameterPair = parameters[parameterIndex].split('=');
            if (parameterPair.length !== 2) {
                continue;
            }
            parameterName = parameterPair[0];
            parameterValue = parameterPair[1];
            // Filter out non-UTM parameters.
            switch (parameterName) {
                case 'utm_source':
                    parameterObject.source = parameterValue;
                    break;
                case 'utm_medium':
                    parameterObject.medium = parameterValue;
                    break;
                case 'utm_term':
                    parameterObject.term = parameterValue;
                    break;
                case 'utm_content':
                    parameterObject.content = parameterValue;
                    break;
                case 'utm_campaign':
                    parameterObject.name = parameterValue;
                    break;
            }
        }
        return parameterObject;
    };
    return {
        getUTMParameters: getUTMParameters
    };
}());
</script>
<script src="https://josephcrosmanplays532.github.io/video-player-2015-files/go_amp.js"></script>
<script>
// Page view.
var utmParameters = utmUtil.getUTMParameters(),
loginStatus = AMPLITUDE_EVENT_PROPERTIES.NO;amplitudeTrackEvent(
    AMPLITUDE_EVENT.PAGE_VIEW,
    {
        page_url: window.location.toString(),
        login_status: loginStatus,
        utm_source: utmParameters.source,
        utm_medium: utmParameters.medium,
        utm_term: utmParameters.term,
        utm_content: utmParameters.content,
        utm_name: utmParameters.name,
        referral: document.referrer
    }
);
</script>
<!-- Google Knowledge Graph -->
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "VyondRemastered",
    "url": "https://vyondremastered1.herokuapp.com",
    "logo": "https://gawpstorage.s3.amazonaws.com/img/google_knowledge_graph_logo.jpg",
    "sameAs": [
        "https://www.facebook.com/GoAnimateInc",
        "https://twitter.com/GoAnimate",
        "https://www.linkedin.com/company/goanimate",
        "https://www.youtube.com/user/GoAnimate"
    ]
}
</script>
</head>
<body class="en_US">
<script type="text/javascript">
if (self !== top) {
            jQuery('body').hide();
    }
</script>
<div id="fb-root"></div>
<script>
    window.fbAsyncInit = function() {
        FB.init({
            appId : '177116303202',
            cookie : true,
            status : true,
            xfbml : true,
            version : 'v2.1'
        });
    };
    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
</script>
<script type="text/javascript">
        jQuery.extend(CCStandaloneBannerAdUI, {"actionshopSWF":"https:\/\/web.archive.org\/web\/20160123121200\/http:\/\/lightspeed.goanimate.com\/animation\/4bd9a7c97397c789\/actionshop.swf","apiserver":"https:\/\/web.archive.org\/web\/20160123121200\/http:\/\/goanimate.com\/","clientThemePath":"https:\/\/web.archive.org\/web\/20160123121200\/http:\/\/lightspeed.goanimate.com\/static\/e15535186b40e6eb\/<client_theme>","userId":""});
</script>
<div class="page-container">
<nav class="navbar site-nav" role="navigation">
    <div class="container">
        <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
              </button>
            <a class="navbar-brand" href="/dashboard/videos" title="GoAnimate 2016">
                <img src="https://josephcrosmanplays532.github.io/static/477/go/img/business_video/home/logo.png" alt="GoAnimate">
            </a>
        </div>
        <ul class="nav site-nav-alert-nav hidden-xs">
            <li>
                <a href="/notifications" title="Notifications"><span class="glyph-pro glyph-bell"></span></a>
            </li>
        </ul>
        <div class="collapse navbar-collapse navbar-ex1-collapse">
            <ul class="nav navbar-nav navbar-right">
                <li class="dropdown">
                    <a class="dropdown-toggle" href="#" data-toggle="dropdown">Your Account <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="/student">Dashboard</a></li>
                        <li><a href="/dashboard/videos">Your Videos</a></li>
                        <li class="divider"></li>
                        <li><a href="/account">Account Settings</a></li>
                        <li><a href="/profile/you">Your Profile</a></li>
                        <li class="divider"></li>
                        <li><a class="logout-link" href="/logoff">Logout</a></li>
                    </ul>
                </li><li class="dropdown">
                    <a class="dropdown-toggle" href="#" data-toggle="dropdown">Explore <span class="caret"></span></a>
                    <ul class="dropdown-menu">
                        <li><a href="/students">Students</a></li>
                        <li><a href="/teachers">Teachers</a></li>
                        <li><a href="/videos">Videos</a></li>
                        <li><a href="/public_faq">FAQ</a></li>
                    </ul>
                </li>
                <li>
				<a class="hidden-sm hidden-md hidden-lg" href="/videomaker">Make a Video</a>
				<span class="site-nav-btn hidden-xs"><a class="btn btn-orange" href="/videomaker">Make a Video</a></span>
                </li>
            </ul>
        </div>
    </div>
</nav>
<!-- END OF HEADER -->
<div id="video-page">
<div class="video-top">
    <div class="container">
        <div class="row">
            <div class="col-sm-6 video-left">
                <div class="status-container">
                    <div class="vthumb-container">
                        <div class="vthumb">
                            <div class="vthumb-clip"><div class="vthumb-clip-inner"><span class="valign"></span><img src="https://s3.amazonaws.com/fs.goanimate.com/files/thumbnails/movie/876/5682876/13801618.jpg" alt="election"></div></div>
                        </div>
                    </div>
                    <div class="status public">
                        <span class="draft-text">Draft</span>
                        <span class="unlisted-text">Unlisted</span>
                        <span class="private-text">Private</span>
                        <span class="public-text">Public</span>
                    </div>
                </div>
                <div class="video-top-content clearfix">
                    <div class="pull-left video-info">
                        <h1>election</h1>
                        By <a href="https://josephcrosmanplays532.github.io/users/josephanimate2021" title="Joseph Animate 2021">Joseph Animate 2021</a>                     </div>
                    <div class="video-top-status">
                            </div>
                </div>
            </div>
            <div class="col-sm-6">
                <ul class="video-top-nav">
                        <li class="static"><a title="Views"><span class="icon views"></span> <span class="num">1</span></a></li>
                        </ul>
            </div>
        </div>
    </div>
</div>
<div class="video-main">
<div class="container">
        <div class="video-main-content">
            <div class="video-header clearfix noshow">
            </div>
            <div class="video-content">
                <div class="player-container">
<meta name="medium" content="video"/>
<div style="position:relative">
    <div id="playerdiv" align="center" style="width:620px;height:349px;">
        This content requires the Adobe Flash Player 10.3. <a href="https://get.adobe.com/flashplayer/">Get Flash</a>
    </div>
    </div>
<script type="text/javascript">
var playerApiReady = false;
function playerLoaded() {
    playerApiReady = true;
    jQuery(document).trigger('playerApiReady');
};
jQuery('#playerdiv').flash({
    id: "Player",
    swf: "https://josephcrosmanplays532.github.io/animation/414827163ad4eb60vyondlegacyremastered/player.swf",
    height: 349,
    width: 620,
    bgcolor: "#000000",
    scale: "exactfit",
    allowScriptAccess: "always",
    allowFullScreen: "true",
    wmode: "opaque",
    hasVersion: "10.3",
    flashvars: ${JSON.stringify(params.flashvars)}});
jQuery('#player-overlay-dismiss').click(function() {
    jQuery('#player-overlay').hide();
});
</script>
                </div>
            </div>
            <div class="video-actions">
                <span class="divider">|</span>
                <button class="btn btn-link" data-remote="/ajax/getMovieShare/m-16" data-action="video-share"><span class="glyph-pro glyph-share-alt"></span> &nbsp; Share</button>
                <span class="divider">|</span>
            </div>
            <input type="hidden" name="ct" value="b6g+xryOXfUISd24C+U5zQMowMIFfqBqCflgIjwtAY5DJfVBLDcqpqlaD2CgU9PQz9Zodxm5dqsQo6y8sv48crMDO3GJKFUPJ1QAIIOr6+xtroL4e4Ah0DhimbWbEDvB1+3AsiELrCE09kfNkL33iT4pggmRpDynOLALgqYDrkJ1HBXGQys41YivPhYFqnsmLgKL9aC0rVpPefvrIQZ_pO4FAT7UinOTe3o+4lmyKXoEppDvk="/>
<script>
$('.video-actions').toggle($('.video-actions').find('.btn').length > 0);
</script>
            <div class="inside">
                <div class="video-social-share clearfix">
                    <div>
                        <div class="pull-left">
                            <div class="fb-like" data-href="https://vyond2018.herokuapp.com/videos/?movieId=m-16" data-send="true" data-layout="button_count" data-width="160" data-show-faces="false"></div>
                        </div>
                    </div>
                    <div style="width:70px">
                        <div class="pull-left">
                        <div class="g-plusone" data-size="medium" data-href="https://vyond2018.herokuapp.com/videos/?movieId=m-16"></div>
                        </div>
                    </div>
                    <div style="width:90px;">
                        <div class="pull-left">
                        <a href="https://twitter.com/share" class="twitter-share-button" data-url="https://vyond2018.herokuapp.com/videos/?movieId=m-16" data-hashtags="goanimate">Tweet</a>
                        </div>
                    </div>
		    <div style="width:90px;">
                        <div class="pull-left">
                        <a data-remote="/ajax/videoExport/youtube" src="/html/youtubelogo.png" data-action="video-share"></a>
                        </div>
                    </div>
                    <div>
                        <div class="pull-left">
                        <a data-pin-config="beside" href="//pinterest.com/pin/create/button/?url=http%3A%2F%2Fvyond2018.herokuapp.com%2Fvideos%2F%3FmovieId=m-16&amp;media=http%3A%2F%2Fs3.amazonaws.com%2Ffs.goanimate.com%2Ffiles%2Fthumbnails%2Fmovie%2F876%2F5682876%2F13801618L.jpg&amp;description=election" data-pin-do="buttonPin"><img src="//assets.pinterest.com/images/pidgets/pin_it_button.png"/></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="video-main-aside" id="player-aside"></div>
</div>
</div>
<div class="container main-container">
    <div class="row">
        <div class="col-md-8">
            <ul class="nav nav-tabs">
                <li class="active"><a href="#video-info" data-toggle="tab">More Info</a></li>
            </ul>
            <div class="tab-content">
                <div class="tab-pane active" id="video-info">
                    <p class="inside">Published on: 16 Nov 2012</p>
                    <p></p>
                </div>
            </div>
        </div>
        <div class="col-md-4 aside video-aside">
            <div></div><br>
        </div>
    </div>
</div>
</div>
<!-- modals -->
<script>
// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="//web.archive.org/web/20160123121200/http://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");
// Google Plus
(function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
})();
// Pinterest
(function(d){
  var f = d.getElementsByTagName('SCRIPT')[0], p = d.createElement('SCRIPT');
  p.type = 'text/javascript';
  p.async = true;
  p.src = '//assets.pinterest.com/js/pinit.js';
  f.parentNode.insertBefore(p, f);
}(document));
// constants defined for movie title prefix editing
var MOVIE_TITLE_PREFIX = '';
var MOVIE_TITLE = 'election';
var MOVIE_USERNAME = 'LindNel13';
var USER_USERNAME = '';var MOVIE_COLLAB_LOCK = false;
// Amplitude interface for Flash player.
function logAmplitudeEvent(eventName, eventProperties) {
    if (amplitude !== undefined) {
        if (eventName === AMPLITUDE_EVENT.PLAYS_VIDEO) {
            eventProperties["referral"] = document.referrer;
        }
        amplitude.logEvent(eventName, eventProperties);
    }
}
        amplitudeTrackEvent(
            AMPLITUDE_EVENT.WATCH_VIDEO,
            {
                video_id: '0-1BF1m2VKQA',
                owner: '0ebQWccvfxlY'
            }
        );
</script>
<script src="https://josephcrosmanplays532.github.io/video-player-2015-files/users.js"></script>
<script src="https://josephcrosmanplays532.github.io/video-player-2015-files/video.js"></script>
<script src="https://josephcrosmanplays532.github.io/video-player-2015-files/videos.js"></script>
<div id="video-share" class="modal" role="dialog" aria-hidden="true">
  <div class="modal-dialog"><div class="modal-content"></div></div>
</div>
<!-- FOOTER -->
<div class="site-footer">
    <div class="container">
        <div class="site-footer-nav row">
            <div class="col-sm-3">
                <div class="site-footer-nav-col">
                    <h4><span>About GoAnimate</span></h4>
                    <ul class="list-unstyled">
                        <li><a href="http://web.archive.org/web/20180307222818/https://goanimate.com/about">Who we are</a></li>
                        <li><a href="http://web.archive.org/web/20180307222818/https://resources.goanimate.com/careers/">Careers</a></li>
                        <li><a href="http://web.archive.org/web/20180307222818/https://goanimate.com/contactus">Contact Us</a></li>
                        <li><a href="http://web.archive.org/web/20180307222818/https://blog.goanimate.com/">Blog</a></li>
                        <li><a href="http://web.archive.org/web/20180307222818/https://press.goanimate.com/">Press</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="site-footer-nav-col">
                    <h4><span>GoAnimate Solutions</span></h4>
                    <ul class="list-unstyled">
                        <li><a href="http://web.archive.org/web/20180307222818/https://goanimate.com/business/videoplans?hook=footer_button.site">Plans and Pricing</a></li>
                        <li><a href="http://web.archive.org/web/20180307222818/https://goanimate.com/business/videoplans/federal?hook=footer_button.site">Plans for Federal Agencies</a></li>
                        <li><a href="http://web.archive.org/web/20180307222818/https://goanimate4schools.com/" target="_blank">GoAnimate for Schools</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="site-footer-nav-col">
                    <h4><span>Usage Guidelines</span></h4>
                    <ul class="list-unstyled">
                        <li><a href="http://web.archive.org/web/20180307222818/https://goanimate.com/termsofuse">Terms of Service</a></li>
                        <li><a href="http://web.archive.org/web/20180307222818/https://goanimate.com/privacy">Privacy Policy</a></li>
                        <li><a href="//web.archive.org/web/20180307222818/https://support.goanimate.com/hc/en-us/articles/202408574" target="_blank">Cancellation Policy</a></li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-3">
                <div class="site-footer-nav-col">
                    <h4>Getting Help</h4>
                    <ul class="list-unstyled">
                        <li><a href="http://web.archive.org/web/20180307222818/https://resources.goanimate.com/">Resources</a></li>
                        <li><a href="http://web.archive.org/web/20180307222818/https://support.goanimate.com/">Help Center</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <hr>
        <div class="row">
            <div class="col-sm-6">
                <div class="site-footer-socials-container">
                    Follow us on:
                    <ul class="site-footer-socials">
                        <li><a class="glyph-social glyph-facebook" href="http://web.archive.org/web/20180307222818/https://www.facebook.com/GoAnimateInc"><span class="sr-only">Facebook</span></a></li>
                        <li><a class="glyph-social glyph-twitter" href="http://web.archive.org/web/20180307222818/https://twitter.com/GoAnimate"><span class="sr-only">Twitter</span></a></li>
                        <li><a class="glyph-social glyph-linked-in" href="http://web.archive.org/web/20180307222818/https://www.linkedin.com/company/goanimate"><span class="sr-only">LinkedIn</span></a></li>
                        <li><a class="glyph-social glyph-google-plus" href="http://web.archive.org/web/20180307222818/https://plus.google.com/+goanimate"><span class="sr-only">Google+</span></a></li>
                        <li><a class="glyph-social glyph-youtube" href="http://web.archive.org/web/20180307222818/https://www.youtube.com/user/GoAnimate"><span class="sr-only">YouTube</span></a></li>
                    </ul>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="site-footer-copyright">
                    <img src="http://web.archive.org/web/20180307222818im_/https://d3v4eglovri8yt.cloudfront.net/static/f789d2b2551c1fb6/go/img/footer/logo_amazon.png" alt="AWS Partner Network">
                    &nbsp;&nbsp;&nbsp;
                    <div class="ga-copy">GoAnimate © 2015</div>
                </div>
            </div>
        </div>
    </div>
</div>
<div id="studio_container" style="display: none;">
    <div id="studio_holder"><!-- Full Screen Studio -->
        <div style="top: 50%; position: relative;">
            You can't use GoAnimate because Flash might be disabled. <a href="https://web.archive.org/web/20191022104022/https://get.adobe.com/flashplayer/">Enable Flash</a>.
        </div>
    </div>
</div>
</body>
</html>`
	);
	return true;
};
