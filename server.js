var express = require('express'),
	app = express(),
	port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
	res.sendfile('./views/index.html')
});

app.listen(port);
console.log('App Assemble!');