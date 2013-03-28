/**
 * @author dustin brown (@willcode2surf) http://willcode2surf.com
 */


//  In the general concept, state manager is basically some object which manages states and the transitions between them, 
//  thus representing a finite state machine.


//  Let’s say we have our sweet Ember App which can be in a few states, initializing, discovery, loading, ready, etc. It begins it’s life as initialize and progresses through the , 
//  different states. We will create an ARMApp object and attatch this statemanager to the object.  Each object will have their own instance of the 
//  statemanager and can be transitioned between states as well as querying available states and the current state.

MySweetEmberApp.AppManager = Ember.StateManager.extend({
	// For debug and development you will want to turn this on and it will log all the states to the console
	enableLogging: true,
	// this is the initial state of the statemanager when it is instantiated.  Since this is property of an Ember Object this could
	// also be a computed property that used a function to determine what the initial state should be.
	initialState: "ready",
	// this is the default array of states
	states: {
		initialize: Ember.State.create({
			// each state has an enter and an exit hook.  additional statemanagement requirements can be tested, logged, etc {enter / exit}
			enter: function(stateManager) {
				console.log("MySweetEmberApp.AppManager" + " - " + " initialize BEGIN", new Date());
			},
			exit: function(stateManager) {
				console.log("MySweetEmberApp.AppManager" + " - " + " initialize EXIT", new Date());
			}
			// states can have nested states as well.  logic to validate state transitions can be added and states can be moved
			// through programatically.  This state does not have any nested states but they would be added here
		}),
		discovery: Ember.State.create({
			//
			enter: function() {
				// CLIENT DISCOVERY PHASE
				console.log("MySweetEmberApp.AppManager" + " - " + " discovery BEGIN", new Date());
			},
			exit: function() {
				// All Client Details Gathered, GEO Location, Type, Etc are good things to have grabbed
				console.log("MySweetEmberApp.AppManager" + " - " + " discovery EXIT", new Date());
			} 
		}),
		authentication: Ember.State.create({
			//
			enter: function() {

				// AUTHENTICATE THE USER
				console.log("MySweetEmberApp.AppManager" + " - " + " authentication BEGIN", new Date());
			},
			exit: function() {
				// USER AUTHENTICATED
				console.log("MySweetEmberApp.AppManager" + " - " + " authentication EXIT", new Date());
			} 
		}),
		stageTemplateData: Ember.State.create({
			enter: function() {

				// LOAD REMOTE TEMPLATES
				console.log("MySweetEmberApp.AppManager" + " - " + " stageTemplateData BEGIN", new Date());
			},
			exit: function() {
				// DONE LOADING TEMPLATES
				console.log("MySweetEmberApp.AppManager" + " - " + " stageTemplateData EXIT", new Date());
			} 
		}),
		stageUserData: Ember.State.create({
			enter: function() {

				// STAGE APPLICATION SPECIFICS BASED ON THE USER
				console.log("MySweetEmberApp.AppManager" + " - " + " stageUserData BEGIN", new Date());
			},
			exit: function() {
				// DONE WITH USER SCAFFOLDING
				console.log("MySweetEmberApp.AppManager" + " - " + " stageUserData EXIT", new Date());
			} 
		}),

		ready: Ember.State.create({
			enter: function() {
	
				// READY!
				MySweetEmberApp.advanceReadiness();
				console.log("MySweetEmberApp.AppManager" + " - " + " ready BEGIN", new Date());
			},
			exit: function() {
				// LEAVING READY STATE
				console.log("MySweetEmberApp.AppManager" + " - " + " ready EXIT", new Date());
			} 
		}),
		locked: Ember.State.create({
			enter: function() {

				// APP HAS BEEN LOCKED!  
				console.log("MySweetEmberApp.AppManager" + " - " + " locked BEGIN", new Date());
			},
			exit: function() {
				// APP LEAVING THE LOCKED STATE
				console.log("MySweetEmberApp.AppManager" + " - " + " locked EXIT", new Date());
			} 
		})	 
	}
});