const loadPost = require("../misc/post_body.ts");
const formidable = require("formidable");
const asset = require("./main.ts");
const http = require("http");
const fs = require("fs");

/**
 * @param {http.IncomingMessage} req
 * @param {http.ServerResponse} res
 * @param {import("url").UrlWithParsedQuery} url
 * @returns {boolean}
 */
module.exports = function (req, res, url) {
	if (req.method != "POST") return;
	switch (url.pathname) {
		case "/ajax/saveUserProp":
			formidable().parse(req, (_, fields, files) => {
				var [mId, mode, ext] = fields.params.split(".");
				switch (mode) {
					case "voiceover":
						mode = "voiceover";
						break;
					case "soundeffect":
						mode = "soundeffect";
						break;
					case "bgmusic":
						mode = "bgmusic";
						break;
					case "bg":
						mode = "background";
						break;
				}

				var path = files.import.path;
				var buffer = fs.readFileSync(path);
				asset.save(buffer, mId, mode, ext);
				fs.unlinkSync(path);
				delete buffer;
				res.end();
			});
			return true;
		case "/goapi/saveSound/":
			loadPost(req, res).then(([data, mId]) => {
				var bytes = Buffer.from(data.bytes, "base64");
				asset.save(bytes, mId, "voiceover", "ogg");
			});
			return true;
		case "/goapi/saveTemplate/":
			loadPost(req, res).then(([data, mId]) => {
				var body = Buffer.from(data.body_zip, "base64");
				res.end("0" + asset.save(body, mId, "starter", "xml"));
			});
			return true;
	}
};
