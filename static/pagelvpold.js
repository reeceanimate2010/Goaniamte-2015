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
		case "/go/movie/": {
			title = "Video Player - Vyond";
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
	res.end(
		`<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1"/>
<title>GoAnimate - Watch animation - matchstick puzzle</title>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/prototype/1.6.0.2/prototype.js"></script>
<script src="/static/go/js/go2.js"></script>
<script src="/static/go/js/swfobject.js"></script>
<script src="/static/go/js/comment.js"></script>
<script src="/static/go/js/gotabs.js"></script>
<script src="/static/go/js/movie.js"></script>
<script src="/static/go/js/gofan.js"></script>
<link href="/static/go/css/global.css" rel="stylesheet" type="text/css"/>
<link href="/static/go/css/movie.css" rel="stylesheet" type="text/css"/>
<link href="/static/go/css/star_rating.css" rel="stylesheet" type="text/css"/>

<script defer type="text/javascript" src="/static/go/js/pngfix.js"></script>

</head>
<body>

<!-- PAGE STRUCTURE -->
<div class="container">

    <!-- HEADER -->
    <div class="header">
        <div class="logo">
        	        	<a href="https://josephcrosmanplays532.github.io/go/">
        	        		<img id="gologo" alt="GoAnimate logo" src="/static/go/img/v2/go_logo_03.gif"/>
        	        	</a>
        	        </div>
        
        <div class="globalnav">
            <ul>
            	                <li><a href="https://josephcrosmanplays532.github.io">Joseph Animate Awesome Domain</a></li>
                <li><a href="https://vyondhosterremastered.000webhostapp.com">Vyond Hoster Remastered</a></li>
				                
            </ul>
        </div>
        
        <div class="search">
            <form name="searchForm" action="https://josephcrosmanplays532.github.io/go/searchresults" method="GET">
	        <div style="float:left;">
			<input type="text" name="criteria">
                </div>
	        <div id="searchButton">
	                <a href="#" onclick="document.searchForm.submit();">&nbsp;&nbsp;&nbsp;<span>Search GoAnimate</span>&nbsp;&nbsp;&nbsp;</a>
                </div>
	    </form>
	</div>
        
        <div class="topnav">
            <ul>
                <li class="create"><a href="https://josephcrosmanplays532.github.io/go/studio"></a></li>
                <li class="watch"><a href="https://josephcrosmanplays532.github.io/go/watch"></a></li>
                <li class="mingle"><a href="https://josephcrosmanplays532.github.io/go/mingle"></a></li>
	    </ul>
            <div class="gap"></div>
            <ul>
                <li class="contests"><a href="https://josephcrosmanplays532.github.io/go/contest"></a></li>
                <li class="help"><a href="https://josephcrosmanplays532.github.io/go/howdoesitwork"></a></li>
            </ul>
        </div>
    
	
	<!-- Top menu Ends -->
	<a name="skipmenu" display="none"></a>

	<div id="feedback_block" style="display:none;">
	                <div id="feedback" align="center" class="info">
		                		</div>
	</div>
    </div>
    <!-- END OF HEADER -->
    
    <!-- TODO: need feedback block in here somewhere -->

    <!-- MAIN CONTENT -->
    <div class="content">

        <div class="left">
	    <h1>matchstick puzzle</h1>
            <meta name="title" content="matchstick puzzle"/>
<meta name="description" content="see how smart you are"/>
<link rel="image_src" href="https://josephcrosmanplays532.github.io/files/thumbnails/movie/1543/127543/53657.jpg"/>
<div>
	<div id="playerdiv" align="center" style="width:550px;height:384px;">
  		This content requires the Macromedia Flash Player 9.0.28. <a href="https://josephcrosmanplays532.github.io/go/getflash/">Get Flash</a>
	</div>

	<div>	  
		<script type="text/javascript">
var playerApiReady = false;
function playerLoaded() {
    playerApiReady = true;
    jQuery(document).trigger('playerApiReady');
};
jQuery('#playerdiv').flash({
    id: "Player",
    swf: "https://josephcrosmanplays532.github.io/animation/66453a3ba2cc5e1bvyond/player.swf",
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
<!-- SHARING BUTTONS COMMENTED OUT FOR NOW WAITING FOR ALL BUTTONS TO BE ADDED
	        <div class="sharing_buttons">
	            <ul>
	                <li class="favorite"><a href="javascript:favoriteMovie(53657);"></a></li>
	                <li class="flag"><a href="javascript:flagMovie(53657);"></a></li>
	            </ul>
	        </div>
-->
	       
       		<div class="movie_rating">
    <div style="float:left;width:150px;"><span class="time" style="float:right;padding-top:2px;">11 ratings</span><div style="overflow:hidden;" onmouseover="loginToRate('ratingStars', 'ratingLogin');" onmouseout="hideLoginToRate('ratingStars', 'ratingLogin');">
   <div id="ratingStars">
		<ul class="star-rating">
		<li id="movie_53657_rating" class="current-rating" style="width:80px;">Currently 4.4545454545455/5 Stars.</li>
					<li><a class="one-star" href="#" onclick="javascript:postRating(53657, 1,'movie');return null;" title="Poor">1</a></li>
		<li><a class="two-stars" href="#" onclick="javascript:postRating(53657, 2,'movie');return null;" title="Nothing Special">2</a></li>
		<li><a class="three-stars" href="#" onclick="javascript:postRating(53657, 3,'movie');return null;" title="Worth Watching">3</a>&lt;/li`
	);
	return true;
};
