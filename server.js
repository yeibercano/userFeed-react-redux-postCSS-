var express = require('express');
var path = require('path');
var httpProxy = require('http-proxy');
var publicPath = path.resolve(__dirname, 'src');
var fs = require('fs');
var morgan = require('morgan')

// We need to add a configuration to our proxy server,
// as we are now proxying outside localhost
var isProduction = process.env.NODE_ENV === 'production';
var port = isProduction ? process.env.PORT : 3000;

var proxy = httpProxy.createProxyServer({
  changeOrigin: true
});
var app = express();

//MIDDLEWARES
app.use(express.static(publicPath));
app.use(morgan('dev')); // use morgan to log requests to the console

// serve data.json
var data = path.resolve(__dirname, 'src', 'data', 'data.json') 
app.get('/feed', function(req, res) {
  fs.readFile(path.normalize(data), 'utf8', function (err,data) { 
    if (err) throw err;
    res.send(data); 
  });
});

/*
================================================================================================
EXPRESS SERVER WITH WEBPACK BELOW
================================================================================================
*/
// If you only want this for development, you would of course
// put it in the "if" block below

if (!isProduction) {
  var bundle = require('./server/compiler.js')
  bundle()
  app.all('/build/*', function (req, res) {
    proxy.web(req, res, {
        target: 'http://localhost:8080'
    })
  })
};

proxy.on('error', function(e) {
  console.log('Could not connect to proxy, please try again...')
});

app.get('*', function (request, response){
  response.sendFile(path.resolve(__dirname, 'src', 'index.html'))
})

app.listen(port, function () {
  console.log('Server running on port ' + port)
});

