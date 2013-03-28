/**
 * @author dustin brown (@willcode2surf) http://willcode2surf.com
 */


var get = Ember.get, set = Ember.set, fmt = Ember.String.fmt, once = Ember.run.once, map = Ember.ArrayPolyfills.map, isNone = Ember.isNone;
var forEach = Ember.EnumerableUtils.forEach, classify = Ember.String.classify, merge = Ember.merge;


// USING GOOD OLD EMBER OBJECTS
MySweetEmberApp.User = Ember.Object.extend({
	
	userName: "",
	isSuper: true,
	isLoggedIn: true,
	currentGEOLocationCoordinates: ""
	
});



MySweetEmberApp.MyApp = Ember.Object.extend({
	
	name: "",
	version: "",
    redirect_uri: "",
    enabled: "",
    tokentype: "",
    client_id: "",
    accesstoken: "",
    
    init: function() {
    	this.set("stateManager", App.ARMAppManager.create());
    	this._super();
  	},
  	
  	initialized: function(){
  		return (this.rpcServerAvailable && this.pubSubMessagingAvailable && this.cacheServersAvailable);
  			
  	}.property('rpcServerAvailable', 'pubSubMessagingAvailable', 'cacheServersAvailable'),
  	
  	// checks for app status and health
  	rpcServerAvailable: function() {
  		// simple RPC call to see if the server is responding
  		return true;
  	},
  	
  	pubSubMessagingAvailable: function() {
  		// simple msg hook
  		
  		// post request to RPC for test message to be received
  		
  		// when it is received then return true
  		
  		return false;
  	},
  	
  	cacheServersAvailable: function(){
  		// simple call to RIAK status over RPC to make sure RIAK is OK
  		return true;
  	}
  	
  	
});

MySweetEmberApp.MyApplication = Ember.Object.extend({
  
  name: "the SPA app to date. dont blink.",
  version: "the best yet",
  isInitialized: function() {
  	if(!isRpcReady)
  		return false;
  	else if(!isRIAKReady)
  		return false;
  	else if(!isPubSubReady)
  		return false;
  	else
  		return true;
  },
  // these can be a series of whatever tests you need to accomplish for app to be in an initialized state
  isRpcReady: false,
  isRIAKReady: false,
  isPubSubReady: false,
  
  
  // initialize and create a state manager object
  init: function() {
    this.set("stateManager", MySweetEmberApp.AppManager.create());
    this._super();
  },
  
  
  
  
});

// USING GOOD OLD EMBERDATA v12
App.Address = DS.Model.extend({
	line_1: DS.attr('string'),
	line_2: DS.attr('string'),
	city: DS.attr('string'),
	zip_code: DS.attr('number'),
	state: DS.attr('string')
});

App.PhoneNumber = DS.Model.extend({
	type: DS.attr('string'),
	number: DS.attr('string')
});

App.EmailAddress = DS.Model.extend({
	type: DS.attr('string'),
	email: DS.attr('string')
});







