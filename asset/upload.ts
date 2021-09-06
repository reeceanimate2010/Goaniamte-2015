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
	if (req.method != 'POST' || url.pathname != '/ajax/saveUserProp') return;
	new formidable.IncomingForm().parse(req, (e, f, files) => {
		const path = files.import.path, buffer = fs.readFileSync(path);
		const mId = loadPost.get(req).movieId;

		const name = files.import.name;
		const suffix = name.substr(name.lastIndexOf('.'));
		asset.saveLocal(buffer, mId, suffix);
		fs.unlinkSync(path);
		res.end();
	});
	return true;
}
