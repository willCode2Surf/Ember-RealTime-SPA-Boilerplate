// This is the APP.JS file that is the entrypoint for the Node instance that starts the entire application stack
var http = require('http'),
	https = require('https'),
	fs = require('fs'),
    ss = require('socketstream'),
	url = require('url');
    
// RIAK is an awesome noSQL distributed storage solution that plays very nicely with Ember-Data as well folks
// var riak = require('nodiak').getClient("http", "RIAKATTACK1", 80);    


//!!! self sign cert for testing purposes
//!!! you will need to enable (uncomment this) if you want to support https!  
//!!! since https is already included as an NPM modules then you can use it whenever you want

var privateKey = fs.readFileSync('server-key.pem').toString();
var certificate = fs.readFileSync('server-cert.pem').toString();
var options = {
    key: privateKey,
    cert: certificate
};


//!!! SocketStream has built in messaging (pubsub) with configurable transport layers
//!!! REDIS has been the best pubsub engine I have seen yet and has not failed me, if you wanted
//!!! to use pubsub/messaging in your application stack then I highly recommend adding redis to your stack.
//ss.publish.transport.use('redis', {host: 'GO-REDIS-1', port: 6379});
//ss.publish.transport.use('redis', {host: 'localhost', port: 6379});



//!!! SocketStream will require at LEAST one main client defined.  I have found that I am able to split up and isolate multiple projects exposing
//!!! different types of endpoints within the application.  DRY DRY DRY, get it?  I will leave what I consider to be a must have secondary project 
//!!! below so you can begin DRY development too.
ss.client.define('main', {
  view: 'app.html',
  css:  ['bootstrap.min.css', 'bootstrap-responsive.min.css', 'bootstrap-editable.css', 'font-awesome.min.css', 'toggle-switch.css', 'custom.css','idangerous.swiper.css'],
  code: ['libs/jquery-1.9.1.min.js', 'libs/handlebars.js', 'libs/ember.js', 'libs/bootstrap.2.3.min.js','libs/moment.min.js','libs/lc.min.js','libs/meny.js','libs/idangerous.swiper-1.7.js','libs/ember-data.js','app'],
  tmpl: '*'
});

//!!! SocketStream loads all of the necessary portions of the codebase it takes to launch.  This is at a minimum.  Resources can be loaded at runtime as well from packages/compenents
//!!! the VIEW listed above is the "application" template, referred to by Ember and resides in client/views directory
//!!! the CSS files listed are used in the order given and reside in the /client/css directory
//!!! the code files are all loaded up at runtime and you will not have to include any script tags in your templates/views to pull these core resources into the application
//!!! the code files are used in the order provided as well and reside in the client/code/ directory.
//!!! the templates are exactly what they sound like, they reside in the client/templates directory.


//!!! SocketStream can handle top level routing for application specific instances.  This is a nice plus on top of application routing with just Ember as now we can hop
//!!! between various implementations for specific client types, TV's, iPads, Desktop, if we wanted to or switch to an admin panel, another app, etc.
//!!! here I am telling SocketStream to listen up on the default route and launch my main application that I defined above.
ss.http.route('/', function(req, res){
  res.serveClient('main');
});


//!!! This is the other client I have defined, running side by side, and both clients can talk to each other.  Notice I defined the client as 'data', established all of
//!!! the assets and gave it a route for SocketStream to monitor (/data/json).  This will fire off that request to a seperate Ember Application stack called dataapp.
//!!! dataapp can be found side by side to app in the client/code/dataapp directory.  The dataapp "application" is data.html, same directory as the sibling app.
/*
ss.client.define('data', {
  view: 'data.html',
  css:  ['bootstrap.min.css'],
  code: ['libs/jquery.min.js', 'libs/handlebars.js', 'libs/ember.js', 'libs/lc.js','dataapp'],
  tmpl: '*'
});

ss.http.route('/data/json', function(req, res){
  res.serveClient('data');
});
*/


//!!! SocketStream supports STYLUS as a code formatter, not using this currently but can be uncommented to do so
//ss.client.formatters.add(require('ss-stylus'));

//!!! SocketStream leverages serverside compiled templates.  I am using ember Use server-side compiled Hogan (Mustache) templates. Others engines available
ss.client.templateEngine.use('ember'); 

//!!! Minimize and pack assets if you type: SS_ENV=production node app.js
if (ss.env === 'production') 
	ss.client.packAssets();

//!!! SocketStream will monitor source code changes and dynamically refresh the new content.  It will also load CSS changes or new CSS files dynamically.
//!!! This can become VERY annoying sometimes, especially if your IDE is doing anything behind the scenes that makes your single page app refresh like a PUNK.
//!!! To make this stop, uncomment the client liveReload code below.  Notice, you will have to manually stop and restart your node instance to see the new changes that you added. 	
//ss.client.set({liveReload: false});

// Start web server in SSL mode 
 //var server = https.Server(options,ss.http.middleware);
 var server = http.Server(ss.http.middleware);

// Start web server in regular mode 
//var server = http.Server(ss.http.middleware);

// now that we have the server object ready to go, lets fire him up on this applications default port
server.listen(2112);
// blah blah blah
console.log("Thanks for using EmberJs Realtime Boilerplate v.1");
console.log("If you have questions or problems.....");
console.log("Hit me up on TWITTER @willcode2surf and i will gladly help fellow emberers out!");
console.log("Launch the application @");
console.log("https://localhost:2112");

//!!! This is more of a socketstream gotcha BUT you will can this data in the event that there is an unhandled error.  you can choose
//!!! to pubsub this out to someone who cares, log it to screen, send it your mom, idc, just no excuses!!
process.on('uncaughtException', function(e){
	console.log("UNCAUGHT APPLICATION EXCEPTION: " + e);
});

// Start SocketStream
ss.start(server);