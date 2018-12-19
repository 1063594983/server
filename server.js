var express = require('express');
var proxy = require('http-proxy-middleware');

var app = new express();

/*
app.use('/api/messages', proxy({
	target: 'http://timeline.infinitex.cn',
	changeOrigin: true
}));
*/
app.use('/', (req, res) => {
	res.end('hello');
})

app.listen(3000);