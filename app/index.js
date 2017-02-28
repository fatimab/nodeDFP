var http = require('http');
var url = require('url');

var server = http.createServer(function (requete, reponse) {
		var urlpage = url.parse(requete.url).pathname;
		reponse.writeHead(200,{"Content-Type": "text/plain; charset=utf-8"});
		reponse.end("bye");
});

server.listen(8888);