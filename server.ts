const env = Object.assign(process.env, require("./env"), require("./config"));

const http = require("http");
const chr = require("./character/redirect.ts");
const pmc = require("./character/premade.ts");
const chl = require("./character/load.ts");
const chs = require("./character/save.ts");
const cht = require("./character/thmb.ts");
const mvu = require("./movie/upload.ts");
const asu = require("./asset/upload.ts");
const stl = require("./static/load.ts");
const stc = require("./static/pagecc.ts");
const stp = require("./static/page.ts");
const asl = require("./asset/load.ts");
const asL = require("./asset/list.ts");
const ast = require("./asset/thmb.ts");
const mvl = require("./movie/load.ts");
const mvL = require("./movie/list.ts");
const mvm = require("./movie/meta.ts");
const mvs = require("./movie/save.ts");
const mvt = require("./movie/thmb.ts");
const thL = require("./theme/list.ts");
const thl = require("./theme/load.ts");
const tsv = require("./tts/voices.ts");
const tsl = require("./tts/load.ts");
const url = require("url");

const functions = [mvL, pmc, asl, chl, thl, thL, chs, cht, asL, tsl, chr, ast, mvm, mvl, mvs, mvt, tsv, asu, mvu, stc, stp, stl];

module.exports = http
	.createServer((req, res) => {
		try {
			const parsedUrl = url.parse(req.url, true);
			//if (!parsedUrl.path.endsWith('/')) parsedUrl.path += '/';
			const found = functions.find((f) => f(req, res, parsedUrl));
			console.log(req.method, parsedUrl.path);
			if (!found) {
				res.statusCode = 404;
				res.end();
			}
		} catch (x) {
			res.statusCode = 404;
			res.end();
		}
	})
	.listen(env.PORT || env.SERVER_PORT, console.log);
