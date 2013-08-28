/*
    Copyright (c) 2004-2013, The Dojo Foundation All Rights Reserved.
    Available via Academic Free License >= 2.1 OR the modified BSD license.
    see: http://dojotoolkit.org/license for details
*/

var http = require('http');
var fs = require('fs');
var connect = require('connect');
var zazloptimizer = require('zazloptimizer');

var resourcecdir = fs.realpathSync(__dirname+"/examples");
var port = process.env.PORT || 5000;

var optimizer = zazloptimizer.createConnectOptimizer(resourcecdir, true);
var app = connect()
	.use("/_javascript", optimizer)
	.use(connect.static(resourcecdir))
	.use(connect.static(zazloptimizer.getLoaderDir()));

var server = http.createServer(app).listen(port);

console.log("Zazl Demonstration Samples for Dojo running on port ["+port+"] examples ["+resourcecdir+"]");
