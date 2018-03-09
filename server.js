var path = require('path');
var webpack = require('webpack');
var express = require('express');
var config = require('./webpack.config');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {publicPath: config.output.publicPath}));
app.use(require('webpack-hot-middleware')(compiler));

app.get('/', function(req, res, next) {
   res.sendFile(path.join(__dirname, 'index.html'));
});

//const sendHTMLPage = (req, res) => res.sendFile(path.join(__dirname, 'index.html'));
//app.use(sendHTMLPage)

const proxy = require('http-proxy-middleware');

var options = { target: "http://localhost:8080", changeOrigin: true};
app.use('/toggle-app/*', proxy(buildProxy('^/toggle-app/*'), options));

app.listen(3000, function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('Listening at http://localhost:3000/');
});

function buildProxy(url) {
  var filterApiProxy = function (pathname, req) {
    return pathname.match(url);
  }
  return filterApiProxy;
}