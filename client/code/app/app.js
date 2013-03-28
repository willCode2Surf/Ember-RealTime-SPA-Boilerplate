/**
 * @author dustin brown (@willcode2surf) http://willcode2surf.com
 */

// CREATE THE EMBER APPLICATION OBJECT 
// first step in creating an Ember.js application is to make an instance of Ember.Application:
window.MySweetEmberApp = MySweetEmberApp = App = Ember.Application.create({
	// USE LOG TRANSITIONS FOR DEV AND TESTING BUT TURN THIS OFF IN PRODUCTION... db
	LOG_TRANSITIONS: true,
	// The application has received the ready/go, this will not happen if you have not turned app readiness back on...
	ready: function(){
		
				//On mobile devices, hide the address bar
				window.scrollTo(0);
				
				// THIS IS A GREAT PLACE TO MAKE RPC CALLS THAT WILL RETURN DATA AND POPULATE INITIAL SCAFFOLDING  
				console.log("FLYLIKEANEAGLE");
        },      
              
});


// This is a quick way to tell EMBER not to put the application into READY state until we are ready for that.  
MySweetEmberApp.deferReadiness();

// USE THE TOOLS THAT EMBER SHIPS WITH, CHECK OUT THE EMBER and EMBERDATA SOURCE FOR BEST PRACTICES
var get = Ember.get, set = Ember.set, fmt = Ember.String.fmt, once = Ember.run.once, map = Ember.ArrayPolyfills.map, isNone = Ember.isNone;
var forEach = Ember.EnumerableUtils.forEach, classify = Ember.String.classify, merge = Ember.merge;


//LOAD UP DATA STORES, BASE MODELS, AND THE APPLICATIONS STATEMANAGER 
require('/stores/store');
require('/models/application');
require('/states/armstatemanager');



MySweetEmberApp.armApplication = MySweetEmberApp.MyApplication.create({name: "the best damn app show period"});
// HERE WE WILL MAKE AN RPC CALL TO REQUEST APPLICATION INFO 
ss.rpc('app.getApplicationDetails', function(model){
			//Ember.set('MySweetEmberApp.InsuredResultsController.content', []); // ) = [];
			//console.log("APPLICATION DETAILS MODEL RETRIEVED", model.data);
			set('MySweetEmberApp.armApplication', MySweetEmberApp.MyApplication.create(model.data));
			
});

// SAMPLE way to represent a user
MySweetEmberApp.currentUser = MySweetEmberApp.User.create();

//@ EMBER INJECTION!  Check it out.
require('/launch/scaffolding');

//@ TEST OBJECTS FOR DEMO
require('/packages/testobjects');

//@ ROUTING 
require('/routers/application');










