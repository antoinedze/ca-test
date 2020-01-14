const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');
const querystring = require('querystring');

require.extensions['.js'] = (module, filename) => {
	module.exports = fs.readFileSync(filename, 'utf8');
};

const hostname = '127.0.0.1';
const port = 3000;
const root = './dist'; 

const app = require(path.resolve(root, 'index.html'));

const server = http.createServer((request, response) => {
	response.statusCode = 200;
	let foreignExtensions = {
		js: 'application/javascript'
	},
	parsedUrl = url.parse(request.url),
	parsedPath = path.parse(parsedUrl.pathname), 
	parsedQuery = querystring.parse(parsedUrl.query),
	requestFileExt = parsedPath.ext.slice(1),
	version = parsedQuery.v;
	if(Object.keys(foreignExtensions).includes(requestFileExt)){
		response.setHeader('Content-Type', foreignExtensions[requestFileExt]);
    let extFile = require(root + request.url);
		response.end(extFile);
	} else {
	  response.setHeader('Content-Type', 'text/html');
	  response.end(app);
	}
}).listen(port, hostname, () => {
	console.log(__dirname);
});