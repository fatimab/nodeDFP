//app/index.js
var http = require('http');
var url = require('url');
var isPremierDecomposition=require('./isPremierDecomposition.js');

var server = http.createServer(function (requete, reponse) {
		var urlpage = url.parse(requete.url).pathname;
		reponse.writeHead(200,{"Content-Type": "text/plain; charset=utf-8"});
		urlpage = urlpage.substring(1); // On prend ce qu'il y a après le / dans l'url
		isPremierDecomposition.decompositionPremier(parseInt(urlpage)); // On convertit la chaîne de caractères de l'url en int avant de la transmettre à la fonction
		reponse.end(urlpage);
});

server.listen(8888);
