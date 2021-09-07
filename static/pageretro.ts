const fUtil = require("../misc/file.ts");
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
	return `<object ${Object.keys(attrs)
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
                case "/studio": {
			let presave =
				query.movieId && query.movieId.startsWith("m")
					? query.movieId
					: `m-${fUtil[query.noAutosave ? "getNextFileId" : "fillNextFileId"]("movie-", ".xml")}`;
			title = "Video Editor";
			attrs = {
				data: process.env.OLDSWF_URL + "/go_full.swf",
				type: "application/x-shockwave-flash",
				width: "100%",
				height: "100%",
			};
			params = {
				flashvars: {
					apiserver: "/",
					storePath: process.env.OLDSTORE_URL + "/<store>",
					isEmbed: 1,
					ctc: "go",
					ut: 50,
					bs: "default",
					appCode: "go",
					page: "",
					siteId: "go",
					lid: 13,
					isLogin: "Y",
					retut: 1,
					clientThemePath: process.env.OLDCLIENT_URL + "/<client_theme>",
					themeId: "business",
					tray: "retro",
					tlang: "en_US",
					presaveId: presave,
					goteam_draft_only: 1,
					isWide: 1,
					collab: 0,
					nextUrl: "/html/list.html",
				},
				allowScriptAccess: "always",
			};
			break;
		}  

		default:
			return;
	}
	res.setHeader("Content-Type", "text/html; charset=UTF-8");
	Object.assign(params.flashvars, query);
	res.end(
		`<html><head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<link rel="dns-prefetch" href="https://josephcrosmanplays532.github.io">
<script>document.title='${title}'</script>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="description" content="The Video Maker lets You make a video for YouTube for free! Drag &amp; drop or type &amp; go.  It's Fast, Fun, Easy and Free -  Vyond!">
<meta property="og:site_name" content="Vyond">
<meta property="fb:app_id" content="177116303202">
<meta name="google-site-verification" content="K_niiTfCVi72gwvxK00O4NjsVybMutMUnc-ZnN6HUuA">
<link href="https://josephcrosmanplays532.github.io/fonts/1/sailec.css" rel="stylesheet" type="text/css">
<link href="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/css/common_combined.css.gz.css" rel="stylesheet" type="text/css">
<link href="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/css/studio.css.gz.css" rel="stylesheet" type="text/css">
<link href="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/css/video_voice_vendor.css.gz.css" rel="stylesheet" type="text/css">
<link href="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/css/worknote.css.gz.css" rel="stylesheet" type="text/css">
<link href="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/css/importer.css.gz.css" rel="stylesheet" type="text/css">
<link href="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/css/importer_share.css.gz.css" rel="stylesheet" type="text/css">
<!--[if lt IE 9]>
<style text="text/css">
.top-nav.collapse {height: auto;overflow: visible;}
</style>
<![endif]-->
<script type="text/javascript" src="https://pi.pardot.com/pd.js"></script><script type="text/javascript" async="" src="https://cdn.amplitude.com/libs/amplitude-4.1.1-min.gz.js"></script><script async="" src="//connect.facebook.net/en_US/fbevents.js"></script><script async="" src="//www.googletagmanager.com/gtm.js?id=GTM-TXV7MD"></script><script type="text/javascript" async="" src="https://ga.vyond.com/ajax/cookie_policy"></script><script type="text/javascript" async="" src="//munchkin.marketo.net/155/munchkin.js"></script><script type="text/javascript" async="" src="https://cdn.amplitude.com/libs/amplitude-4.1.1-min.gz.js"></script><script src="https://connect.facebook.net/signals/config/784667875001149?v=2.9.15&amp;r=stable" async=""></script><script async="" src="//connect.facebook.net/en_US/fbevents.js"></script><script type="text/javascript" async="" src="https://sjs.bizographics.com/insight.min.js"></script><script type="text/javascript" async="" src="//www.googleadservices.com/pagead/conversion_async.js"></script><script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script async="" src="//www.googletagmanager.com/gtm.js?id=GTM-TXV7MD"></script><script type="text/javascript" async="" src="https://ga.vyond.com/ajax/cookie_policy"></script><script>
var srv_tz_os = -5, view_name = "go", user_cookie_name = "u_info";
var user_role = 9;
</script>
<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/jquery/jquery-1.11.0.min.js.gz.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/bootstrap3/bootstrap.min.js.gz.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/bootstrap3/bootstrap-switch.min.js.gz.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/go2.js.gz.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/jquery/jquery.swfobject.min.js.gz.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/jquery/jquery.blockUI-2.66.0.js.gz.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/jquery/jquery.scrollTo.min.js.gz.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/app.js.gz.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/cookie.js.gz.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/Gettext.js.gz.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/email.js.gz.js"></script>
<script type="text/javascript" src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/../po/goserver_js-en_US.json.gz.json"></script>
<script type="text/javascript">
var I18N_LANG = 'en_US';
var GT = new Gettext({'locale_data': json_locale_data});
</script>
<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/movie.js.gz.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/cookie.js.gz.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/studio.js.gz.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/jquery/jquery.tmpl.min.js.gz.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/lib/pako.min.js.gz.js"></script>
<script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/amplitude/go_amp.js.gz.js"></script>
<!-- Vyond Cookie Consent -->
<script>(function(v,y,o,n){v[n]=v[n]||[];
var f=y.getElementsByTagName(o)[0],d=y.createElement(o);
d.type='text/javascript';d.async=true;d.src=
'https://ga.vyond.com/ajax/cookie_policy';
f.parentNode.insertBefore(d,f);
})(window,document,'script','_vyccq');</script>
<!-- End Vyond Cookie Consent -->
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TXV7MD');
dataLayer.push({"userId":"0cf4CMw1ZNCk"});
</script>
<!-- Google Tag Manager -->
<script>
</script>
        <script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/h5preview/media-controller.js.gz.js"></script>
        <script src="https://josephcrosmanplays532.github.io/static/55910a7cd204c37c/go/js/h5preview/preview-player.js.gz.js"></script>
<script type="text/javascript" async="" src="//munchkin.marketo.net/munchkin.js"></script><script src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/956549168/?random=1576454337808&amp;cv=9&amp;fst=1576454337808&amp;num=1&amp;guid=ON&amp;resp=GooglemKTybQhCsO&amp;u_h=900&amp;u_w=1600&amp;u_ah=870&amp;u_aw=1600&amp;u_cd=24&amp;u_his=7&amp;u_tz=-360&amp;u_java=false&amp;u_nplug=4&amp;u_nmime=6&amp;gtm=2wgc61&amp;sendb=1&amp;ig=1&amp;frm=0&amp;url=https%3A%2F%2Fga.vyond.com%2Fvideomaker%2Ffull%2Fbusiness-friendly&amp;ref=https%3A%2F%2Fga.vyond.com%2Fvideomaker&amp;tiba=The%20Video%20Maker%20from%20Vyond%20-%20Make%20a%20Video%20for%20YouTube!&amp;hn=www.googleadservices.com&amp;async=1&amp;rfmt=3&amp;fmt=4"></script><script type="text/javascript" async="" src="//munchkin.marketo.net/munchkin.js"></script></head>
<body class="en_US has-user full_screen_studio studio-locked" style="">
<script type="text/javascript">
if (self !== top) {
            jQuery('body').hide();
    }
</script>
<!-- Google Tag Manager (noscript) -->
<noscript>&lt;iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TXV7MD"
height="0" width="0" style="display:none;visibility:hidden"&gt;&lt;/iframe&gt;</noscript>
<!-- End Google Tag Manager (noscript) -->
<script type="text/javascript">
        jQuery.extend(CCStandaloneBannerAdUI, {"actionshopSWF":"https:\/\/josephcrosmanplays532.github.io\/animation\/66453a3ba2cc5e1b\/actionshop.swf","apiserver":"/","clientThemePath":"https:\/\/josephcrosmanplays532.github.io\/static\/55910a7cd204c37c\/<client_theme>","userId":"0cf4CMw1ZNCk"});
</script>
<div class="page-container">
<!-- END OF HEADER -->
<div style="position:relative;">
    <div id="studioBlock" style="height: 0px;"><!-- --></div>
    <div id="playerBlock"></div>
    <div style="display: none;">
    <div class="templates">
        <div class="studiotemplatebrowser">
            <div class="close"><a href="javascript:hideCCWidget()" onclick="javascript:return hideCCWidget()">X</a></div>
            <h1>Latest Releases</h1>
            <div class="thumbcontainer">
                <!-- All thumbcells here -->
            </div>
            <div class="more">
                <a href="#">More Characters &gt;</a>
            </div>
        </div>
        <div class="thumbcell">
            <a href="" class="buttonlink">
                <span class="button">
                    <span class="buynow">Buy now</span><br>
                    <span class="bucks">%d GoBucks</span>
                </span>
            </a>
            <p class="gotit">Got It!</p>
        </div>
    </div>
</div>
    <div class="templates" style="display: none;">
    <div class="voice-vendor-ad" style="display: none;">
        <div class="close"><a href="javascript:hideVoiceAdWidget()" onclick="javascript:return hideVoiceAdWidget()">×</a></div>
        <div id="studio-voice-vendor-container">
            <ul>
                <li><a class="gtm-ga-pageview-t2" id="voice-vendor-vb" target="_blank" href="https://voicebunny.com/?p=vyond" data-gtmv-page="/pageTracker/voicebanner/VoiceBunny" onclick="setvoicebannercookie();"><img src="https://josephcrosmanplays532.github.io/static/477/go/img/video_voice/btn_vb.png"></a></li>
                <li><a class="gtm-ga-pageview-t2" id="voice-vendor-iw" target="_blank" href="https://voices.com/" data-gtmv-page="/pageTracker/voicebanner/Voices.com" onclick="setvoicebannercookie();"><img src="https://josephcrosmanplays532.github.io/static/477/go/img/video_voice/btn_vc.png"></a></li>
		<li><a class="gtm-ga-pageview-t2" id="voice-vendor-vb" target="_blank" href="https://sitepal.com" data-gtmv-page="/pageTracker/voicebanner/SitePal" onclick="setvoicebannercookie();"><img src="https://josephcrosmanplays532.github.io/static/477/go/img/video_voice/btn_sp.png"></a></li>                <li>
                    <hr class="sperator">
                    <a class="voiceover-tips gtm-ga-pageview-t2" target="_blank" href="http://goanimate.com/video-maker-tips/tutorial-why-you-should-break-up-your-dialogue-audio-into-small-pieces-before-importing/" data-gtmv-page="/pageTracker/voicebanner/VoiceoverTips" onclick="setvoicebannercookie();"><span><i class="lightbulb"></i>Voiceover Tips &gt;</span></a>
                </li>
            </ul>
        </div>
    </div>
</div>
<script type="text/javascript">
function setvoicebannercookie() { SetCookie('vbcdt','1576454336', 31, '/'); }
function voiceBanner(bannerId) {
    var banner = $('#voice-vendor-' + bannerId);
    if (banner.length) {
        banner.click();
        window.open(banner.attr('href'), '_blank');
    }
}
</script>
    <div id="previewPlayerContainer" style="display: none;">
        <div class="preview-player" id="previewPlayer">
            <h2>Preview Video</h2>
            <div id="playerdiv"></div>
            <div id="h5-playerdiv">
                <video class="hidden" id="h5-preview-player" width="100%" height="100%"></video>
                <div class="player-overlay loading">
                    <div class="loading-icon">
                        <div class="loading-message"></div>
                    </div>
                    <div class="replay-button"></div>
                </div>
                <div class="video-controls">
                    <div class="playback-button">
                        <div class="icon-image"></div>
                    </div>
                    <div class="seek-bar">
                        <div class="value-bar total-bar"></div>
                        <div class="value-bar buffered-bar"></div>
                        <div class="value-bar played-bar"></div>
                        <div class="slider-thumb"></div>
                        <div class="time-tooltip">00:00</div>
                    </div>
                    <div class="time-display">
                        <div class="text">00:00 / 00:00</div>
                    </div>
                    <div class="volume-control">
                        <div class="volume-icon">
                            <div class="icon-image"></div>
                        </div>
                        <div class="volume-slider">
                            <div class="slider-track">
                                <div class="track-value-bar"></div>
                            </div>
                            <div class="slider-thumb"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="preview-alert-block" class="preview-alert-block clearfix">Auto-pause at end of scenes is not supported in our web video player.<br>The auto-pause feature is supported once you download the video as presentation in the "Share/Export" overlay.</div>
            <div class="buttons clearfix">
                <button class="preview-button edit" type="button" onclick="switchBackToStudio();">Back to editing</button>
                <button class="preview-button save" type="button" onclick="publishStudio();">Save Now</button>            </div>
            <a class="close_btn" href="#" onclick="switchBackToStudio(); return false;">×</a>
        </div>
    </div>
    <div class="video-tutorial" id="video-tutorial" style="display: none;">
        <div class="video-tutorial-body">
            <h2>&nbsp;</h2>
            <div class="video-tutorial-player">
                <div id="wistia_player" class="wistia_embed" style="width:860px;height:445px">&nbsp;</div>
            </div>
            <a class="close_btn" href="#" onclick="return false;">×</a>
        </div>
        <div class="video-tutorial-footer clearfix">
            <button class="tutorial-button" type="button">
                Close            </button>
        </div>
    </div>
</div>
<div style="display:none">
</div>
    <script>
        interactiveTutorial.isShowTutorial = false;
        var hideHTMLBox = function() {
            window.close();
        };
        function tutorialStarted() {
        }
        function tutorialStep(sn) {
        }
        function tutorialCompleted() {
            $.ajax({
                type: 'POST',
                url: '/ajax/tutorialStatus/completed'
            });
        }
        var enable_full_screen = true;
        var studio_data = {
            id: "Studio",
            swf: "https://josephcrosmanplays532.github.io/animation/857/go_full.swf",
            width: "100%",
            height: "100%",
            align: "middle",
            allowScriptAccess: "always",
            allowFullScreen: "true",
            wmode: "window",
            hasVersion: "10.3"
        };
        if (!enable_full_screen) {
            studio_data.width  = 960;
            studio_data.height  = 630;
            resize_studio = false;
        }
        studio_data.flashvars = ${JSON.stringify(params.flashvars)};
        var _ccad = null;
        function proceedWithFullscreenStudio() {
            // These should be executed only when we are really ready to show the studio
            window.onbeforeunload = function(e) {
                var e = e || window.event;
                var msg = null;
                if (loadedFullscreenStudio && studioApiReady) {
                    msg = 'You are about to lose all your unsaved changes in the studio.';
                }
                if (e && msg != null) {
                    e.returnValue = msg;
                }
                if (msg != null) {
                    return msg;
                }
            };
            show_cc_ad = false;
            // CC template studio widget
            if (show_cc_ad) {
                _ccad = new CCBannerAd("business");
                (function() {
                    var ccId = undefined;
                    _ccad
                        .onBuyCCInsufficientBalance(function() {
                            $('#Studio').get(0).showBuyGoBuckPopUp();
                        })
                        .onBuyCCComplete(function(aid, trackInfo, templateId) {
                            if (trackInfo) {
                            var logger = CCStandaloneBannerAdUI.gaLogTx.createCCPartLogger(aid);
                            if (templateId) {
                                logger.setTemplateId(templateId);
                            }
                            $.grep(trackInfo.parts, function(n, i) {
                                return $.inArray(n.ctype, [ 'GoUpper', 'GoLower', 'upper_body', 'lower_body', 'hair' ]) >= 0;
                            }).each(function(n) {
                                logger.addItem(n);
                            });
                            logger.submit();
                            }
                            ccId = aid;
                            if (typeof ccId != undefined) {
                                try {
                                    $('#Studio').get(0).reloadAllCC(ccId);
                                } catch (e) {
                                }
                                ccId = undefined;
                            }
                        });
                })();
            }
            show_voice_ad = true;
            $('#studio_container').append($('div.templates div.voice-vendor-ad').clone());
            if (show_voice_ad) {
                showVoiceAdWidget();
            }
            $('div#studioBlock').css('height', '0px');
            $('#studio_holder').flash(studio_data);
            full_screen_studio();
            ajust_studio();
        }
        function hideCCWidget() {
            show_cc_ad = false;
            $('div.studiotemplatebrowser').css('display', 'none');
            var widget_right = 0;
            if (show_voice_ad) {
                $('#studio_container div.voice-vendor-ad').css('right', widget_right);
                widget_right += $('#studio_container div.voice-vendor-ad').css('width');
            }
            if (show_worknote) {
                $('#studio_container div.studio-worknote').css('right', widget_right);
            }
            ajust_studio();
            return false;
        }
        function showVoiceAdWidget() {
            show_voice_ad = true;
            $('#studio_container div.voice-vendor-ad').css('display', 'block');
            var widget_right = 0;
            if (show_cc_ad) {
                widget_right += $('div.studiotemplatebrowser').css('width');
            }
            $('#studio_container div.voice-vendor-ad').css('right', widget_right);
            widget_right += $('#studio_container div.voice-vendor-ad').css('width');
            if (show_worknote) {
                $('#studio_container div.studio-worknote').css('right', widget_right);
            }
            ajust_studio();
            return false;
        }
        function hideVoiceAdWidget() {
            show_voice_ad = false;
            $('#studio_container div.voice-vendor-ad').css('display', 'none');
            var widget_right = 0;
            if (show_cc_ad) {
                widget_right += $('div.studiotemplatebrowser').css('width');
            }
            if (show_worknote) {
                $('#studio_container div.studio-worknote').css('right', widget_right);
            }
            ajust_studio();
            return false;
        }
        function showWorknoteWidget() {
            show_worknote = true;
            $('#studio_container div.studio-worknote').css('display', 'block');
            var widget_right = 0;
            if (show_cc_ad) {
                widget_right += $('div.studiotemplatebrowser').css('width');
            }
            if (show_voice_ad) {
                widget_right += $('#studio_container div.voice-vendor-ad').css('width');
            }
            $('#studio_container div.studio-worknote').css('right', widget_right);
            ajust_studio();
            return false;
        }
        function hideWorknoteWidget() {
            show_worknote = false;
            $('#studio_container div.studio-worknote').css('display', 'none');
            ajust_studio();
            return false;
        }
        function toggleWorknoteContent() {
            $('#studio_container .studio-worknote').toggleClass('collapsed expand');
            ajust_studio();
            return false;
        }
        var studioApiReady = false;
        function studioLoaded() {
            studioApiReady = true;
            $(document).trigger('studioApiReady');
        };
        var studioWorknoteModule = null;
        var studioModule = null;
        var videoTutorial = null;
        $(document).ready(function() {
            if (enable_full_screen) {
                if (!false) {
                    $('#studio_container').css('top', '0px');
                }
                $('#studio_container').show();
                $('.site-footer').hide();
                $('#studioBlock').css('height', '1800px');
                if (false) {
                    checkCopyMovie('javascript:proceedWithFullscreenStudio()', '');
                } else if (false) {
                    checkEditMovie('');
                } else {
                    proceedWithFullscreenStudio();
                }
                $(window).on('resize', function() {
                    ajust_studio();
                });
                $(window).on('studio_resized', function() {
                    if (show_cc_ad) {
                        _ccad.refreshThumbs();
                    }
                });
                if (studioApiReady) {
                    var api = studioApi($('#studio_holder'));
                    api.bindStudioEvents();
                    studioModule = new StudioModule();
                }
                $('.ga-importer').prependTo($('#studio_container'));
            } else {
                $('#studioBlock').flash(studio_data);
            }
            // Video Tutorial
            videoTutorial = new VideoTutorial($("#video-tutorial"));
        })
        // restore studio when upsell overlay hidden
        .on('hidden.bs.modal', '#upsell-modal', function(e) {
            if ($(e.target).attr('id') == 'upsell-modal') {
                restoreStudio();
            }
        })
        .on('studioApiReady', function() {
            var api = studioApi($('#studio_holder'));
            api.bindStudioEvents();
            studioModule = new StudioModule();
        })
    var previewPlayer = new PreviewPlayer("wss://preview.vyond.com", true),
        previewPlayerRetryCount = 5;
    previewPlayer.setVideoElement(document.getElementById('h5-preview-player'));
    previewPlayer.setMovieId('');
    previewPlayer.setUserAuthenticationToken('1:760a913514c85f012a4977b79b920687c0b33a7b268c26340021d6720a6ea026:y8X5juI1C+TKXDaGsW/6CLASVlqRtMZyE2rJVx2aUzc=');
    previewPlayer.setFromPptConversion(false);
    previewPlayer.connect();
</script>
<script>
$("#previewPlayerContainer, #video-tutorial").hide();
var movieDataXmlStr = null,
    filmXmlStr = null,
    previewStartFrame = 0;
function checkBrowser() {
    return window.WebSocket && window.MediaSource;
}
function checkTheme(themeList) {
    if (themeList === undefined) {
        return true;
    }
    var themeCount = themeList.length,
        h5Themes = {
            'common' : true,
            'infographics': true,
            'business': true,
            'whiteboard': true,
            'commoncraft': true
        };
    for (var i = 0; i < themeCount; i++) {
        if (h5Themes[themeList[i]] === undefined) {
            return false;
        }
    }
    return true;
}
function checkPreviewServer() {
    return previewPlayer._connectionState === PreviewPlayerConstants.STATE_READY;
}
function loadH5Preview() {
    if (filmXmlStr === null) {
        return;
    }
    $('#h5-playerdiv').data('previewPlayerControl').reset();
    previewPlayer.preview(filmXmlStr, previewStartFrame);
    $('#previewPlayer').addClass('using-h5');
}
function loadLegacyPreview() {
    if (movieDataXmlStr === null) {
        return;
    }
    pauseH5PreviewPlayer();
    savePreviewData(movieDataXmlStr);
    createPreviewPlayer("playerdiv", {
        height: 360,
        width: 640,
        player_url: "https://josephcrosmanplays532.github.io/animation/857/player.swf",
        quality: "medium"
    }, {
        movieOwner: "", movieOwnerId: "", movieId: "", ut: "-1",
        movieLid: "8", movieTitle: "", movieDesc: "", userId: "", username: "", uemail: "",
        apiserver: "/", thumbnailURL: "", copyable: "0", isPublished: "0", ctc: "go", tlang: "en_US", is_private_shared: "0",
        autostart: "1", appCode: "go", is_slideshow: "0", originalId: "0", is_emessage: "0", isEmbed: "0", refuser: "",
        utm_source: "", uid: "", isTemplate: "1", showButtons: "0", chain_mids: "", showshare: "0", averageRating: "",
                    s3base: "https://s3.amazonaws.com/fs.goanimate.com/,https://assets.vyond.com/",
                ratingCount: "", fb_app_url: "/", numContact: 0, isInitFromExternal: 1, storePath: "https://josephcrosmanplays532.github.io/store/50/<store>", clientThemePath: "https://josephcrosmanplays532.github.io/static/477/<client_theme>", animationPath: "https://josephcrosmanplays532.github.io/animation/857/",
        startFrame: previewStartFrame
    });
    $('#previewPlayer').removeClass('using-h5');
}
function initPreviewPlayer(dataXmlStr, startFrame, containsChapter, themeList) {
    movieDataXmlStr = dataXmlStr;
    previewStartFrame = startFrame;
    filmXmlStr = dataXmlStr.split("<filmxml>")[1].split("</filmxml>")[0];
    if (typeof startFrame == 'undefined') {
        startFrame = 1;
    } else {
        startFrame = Math.max(1, parseInt(startFrame));
    }
    if (containsChapter) {
        $("#preview-alert-block").show();
    } else {
        $("#preview-alert-block").hide();
    }
    previewSceen();
    $("#previewPlayerContainer").show();
    var isThemeSupport = checkTheme(themeList);
    if (checkBrowser() && isThemeSupport && checkPreviewServer()) { // Preview with next
        loadH5Preview();
    } else {
        // fallback to legacy preview
        loadLegacyPreview();
        if (!checkPreviewServer() && (previewPlayerRetryCount > 0)) { // Retry on WebSocket connection problem
            previewPlayer.connect();
            previewPlayerRetryCount--;
        }
    }
}
function pauseH5PreviewPlayer() {
    $("#h5-preview-player").get(0).pause();
}
function switchBackToStudio() {
    try {
        ($("#previewPlayerContainer #Player").get(0) || {pause:function(){}}).pause();
    } catch (err) {};
    pauseH5PreviewPlayer();
    $("#previewPlayerContainer").hide();
    restoreStudio();
    document.getElementById("Studio").onExternalPreviewPlayerCancel();
}
function publishStudio() {
    try {
        ($("#previewPlayerContainer #Player").get(0) || {pause:function(){}}).pause();
    } catch (err) {};
    pauseH5PreviewPlayer();
    $("#previewPlayerContainer").hide();
    restoreStudio();
    document.getElementById("Studio").onExternalPreviewPlayerPublish();
}
function exitStudio(share) {
    loadedFullscreenStudio = false;
}
function studioUpsellUpgrade() {
    $('#upsell-modal').modal('hide');
    restoreStudio();
    document.getElementById("Studio").onUpsellUpgrade();
}
function customFontBanner() {
    var plansAndPricingUrl = 'https://www.vyond.com/pricing';
    window.open(plansAndPricingUrl, '_blank');
}
window.addEventListener(PreviewPlayerEvent.ANIMATION_INCOMPATIBLE, function() {
    loadLegacyPreview();
});
VideoTutorial.tutorials.composition = {
    title: 'Composition Tutorial',
    wistiaId: 'nuy96pslyp',
};
VideoTutorial.tutorials.enterexit = {
    title: 'Enter and Exit Effects Tutorial',
    wistiaId: 'fvjsa3jnzc',
}
</script>
<script charset="ISO-8859-1" src="//fast.wistia.com/assets/external/E-v1.js" async=""></script>
<script>
    (function() {
        'use strict';
        var studioMode = 'full',
            themeName = 'business',
            copiedId = '',
            editType = null;
        switch (studioMode) {
            case 'full':
                editType = AMPLITUDE_EVENT_PROPERTIES.VM_NEW;
                break;
            case 'edit':
                editType = AMPLITUDE_EVENT_PROPERTIES.VM_EDIT;
                break;
            case 'copy':
                editType = AMPLITUDE_EVENT_PROPERTIES.VM_COPY;
                break;
            case 'remix':
                editType = AMPLITUDE_EVENT_PROPERTIES.VM_REMIX;
                break;
            default:
                break;
        }
        if (editType !== null) {
            $(window).on('amplitude_loaded', function() {
                logAmplitudeEvent(AMPLITUDE_EVENT.LAUNCH_VM, {
                    theme: themeName,
                    edit_type: editType,
                    video_id: '',
                    copied_id: copiedId
                }, {
                    latest_vm_launched: AMPLITUDE_EVENT_PROPERTIES.LEGACY_VM,
                    latest_vm_launched_legacy_date: '2019-12-15 18:58:56'
                });
            });
        }
    }());
    // Amplitude interface for Flash player.
    function logAmplitudeEvent(eventName, eventProperties, userData) {
        if (typeof amplitude === 'object') {
            if (eventName === AMPLITUDE_EVENT.PLAYS_VIDEO) {
                eventProperties["referral"] = document.referrer;
            }
            if (userData !== undefined) {
                amplitude.getInstance().setUserProperties(userData);
            }
            amplitude.getInstance().logEvent(eventName, eventProperties);
        }
    }
</script>
<!-- FOOTER -->
<div id="studio_container" style="top: 0px; width: 2238px; height: 1586px;"><div id="studio_holder" style="width: 2108px;">${toObjectString(attrs, params)}</div>
<div class="voice-vendor-ad" style="display: block; right: 0px;">
        <div class="close"><a href="javascript:hideVoiceAdWidget()" onclick="javascript:return hideVoiceAdWidget()">×</a></div>
        <div id="studio-voice-vendor-container">
            <ul>
                <li><a class="gtm-ga-pageview-t2" id="voice-vendor-vb" target="_blank" href="https://voicebunny.com/?p=vyond" data-gtmv-page="/pageTracker/voicebanner/VoiceBunny" onclick="setvoicebannercookie();"><img src="https://josephcrosmanplays532.github.io/static/477/go/img/video_voice/btn_vb.png"></a></li>
                <li><a class="gtm-ga-pageview-t2" id="voice-vendor-iw" target="_blank" href="https://voices.com/" data-gtmv-page="/pageTracker/voicebanner/Voices.com" onclick="setvoicebannercookie();"><img src="https://josephcrosmanplays532.github.io/static/477/go/img/video_voice/btn_vc.png"></a></li>
		<li><a class="gtm-ga-pageview-t2" id="voice-vendor-vb" target="_blank" href="https://sitepal.com/" data-gtmv-page="/pageTracker/voicebanner/SitePal" onclick="setvoicebannercookie();"><img src="https://josephcrosmanplays532.github.io/static/477/go/img/video_voice/btn_sp.png"></a></li>
                <li>
                    <hr class="sperator">
                    <a class="voiceover-tips gtm-ga-pageview-t2" target="_blank" href="http://goanimate.com/video-maker-tips/tutorial-why-you-should-break-up-your-dialogue-audio-into-small-pieces-before-importing/" data-gtmv-page="/pageTracker/voicebanner/VoiceoverTips" onclick="setvoicebannercookie();"><span><i class="lightbulb"></i>Voiceover Tips &gt;</span></a>
                </li>
            </ul>
        </div>
    </div><div class="voice-vendor-ad" style="display: block; right: 0px;">
        <div class="close"><a href="javascript:hideVoiceAdWidget()" onclick="javascript:return hideVoiceAdWidget()">×</a></div>
        <div id="studio-voice-vendor-container">
            <ul>
                <li><a class="gtm-ga-pageview-t2" id="voice-vendor-vb" target="_blank" href="https://voicebunny.com/?p=vyond" data-gtmv-page="/pageTracker/voicebanner/VoiceBunny" onclick="setvoicebannercookie();"><img src="https://josephcrosmanplays532.github.io/static/477/go/img/video_voice/btn_vb.png"></a></li>
                <li><a class="gtm-ga-pageview-t2" id="voice-vendor-iw" target="_blank" href="https://voices.com/" data-gtmv-page="/pageTracker/voicebanner/Voices.com" onclick="setvoicebannercookie();"><img src="https://josephcrosmanplays532.github.io/static/477/go/img/video_voice/btn_vc.png"></a></li>
		<li><a class="gtm-ga-pageview-t2" id="voice-vendor-vb" target="_blank" href="https://sitepal.com/" data-gtmv-page="/pageTracker/voicebanner/SitePal" onclick="setvoicebannercookie();"><img src="https://josephcrosmanplays532.github.io/static/477/go/img/video_voice/btn_sp.png"></a></li>                <li>
                    <hr class="sperator">
                    <a class="voiceover-tips gtm-ga-pageview-t2" target="_blank" href="http://goanimate.com/video-maker-tips/tutorial-why-you-should-break-up-your-dialogue-audio-into-small-pieces-before-importing/" data-gtmv-page="/pageTracker/voicebanner/VoiceoverTips" onclick="setvoicebannercookie();"><span><i class="lightbulb"></i>Voiceover Tips &gt;</span></a>
                </li>
            </ul>
        </div>
    </div></div>
</div>
<div id="offer_container">
</div>
<script type="text/javascript">
    </script>
<script type="text/javascript">
</script>
<style id="wistia_18_style" type="text/css" class="wistia_injected_style">
@font-face {
font-family: 'WistiaPlayerOverpassNumbers';
src: url(data:application/x-font-ttf;charset=utf-8;base64,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);
}
</style><script type="text/javascript" id="">var _vyccq=window._vyccq||[];</script>
<script type="text/javascript" id="" src="https://ga.vyond.com/ajax/cookie_policy"></script><style id="wistia_18_style" type="text/css" class="wistia_injected_style">
@font-face {
font-family: 'WistiaPlayerOverpassNumbers';
src: url(data:application/x-font-ttf;charset=utf-8;base64,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);
}
</style>
<script type="text/javascript" id="">!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version="2.0",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,"script","//connect.facebook.net/en_US/fbevents.js");fbq("init","784667875001149");fbq("track","PageView");</script>
<noscript>&lt;img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=784667875001149&amp;amp;ev=PageView&amp;amp;noscript=1"&gt;</noscript>
</body></html>`
	);
	return true;
};
