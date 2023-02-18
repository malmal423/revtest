var httpProxy = require('http-proxy');
 
var proxy = httpProxy.createProxyServer({
 ws: true,
 target:"wss://w3.g3f8yehunoeu3byg.workers.dev/"
}).listen(80);

