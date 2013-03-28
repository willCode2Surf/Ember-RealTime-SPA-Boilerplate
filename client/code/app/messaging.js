/**
 * @author dustin brown (@willcode2surf) http://willcode2surf.com
 */

App.Resource = Ember.Object.extend({
	init: function() {
    	this.set('stateManager', App.ResourceManager.create());
    	this._super();
  	},
  	
  	state: function(){
  		this.get('stateManager').name;
  	}	
});

App.ResourceManager = Ember.StateManager.extend({
	enableLogging: true,
	initialState: "unknown",
	states: {
		unknown: Ember.State.create(),
		ready: Ember.State.create(),
		polling: Ember.State.create(),
		unavailable: Ember.State.create()
	}
});

// SUBSCRIBE TO RESOURCE UPDATES
// A resource is an identifiable system, database, node, server that the application depends on to 
// operate fully.  Some examples are the RIAK Cluster, SQL Server, AUTHENTICATION System, Specific Services, etc

// listen for state updates, then determine which resource changed its state and needs to be updated accordingly
ss.event.on('state', function(payload, resource){
  
  // the payload will tell us which resource we are working with and the state to transition the resource into
  console.log('CLIENT APP RECEIVED NOTIFICATION OF A STATE CHANGE on the channel: ' + resource , payload);  
  console.log('IF THE RESOURCE NAME CAN BE WE SHOULD BE ABLE TO USE MySweetEmberApp.get(resource).set(payload.target, payload.value)');
  console.log('IF THE RESOURCE HAS A STATEMANAGER (WHICH IT FREAKING BETTER) ADD AN OBSERVER FOR SAID RESOURCE PROPERTY UPDATED BY THE PAYLOAD VALUE SHOULD TRIGGER AN EVENT');
  console.log('THIS WILL MAKE GLOBAL EVENTS AND FINE GRAIN EVENTS ABLE TO TAKE GLOBAL ACTION WHEN STATES ARE CHANGING');
  
});



