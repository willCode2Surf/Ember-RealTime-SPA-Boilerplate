/**
 * @author dustin brown (@willcode2surf) http://willcode2surf.com
 */


//  You can customize the behavior of a route by creating an Ember.Route subclass. 
//  For example, to customize what happens when your user visits /, create an App.IndexRoute
MySweetEmberApp.IndexRoute = Ember.Route.extend({
	
	
	renderTemplate: function() {
    		 
    		 var currState = MySweetEmberApp.armApplication.get("stateManager.currentState.name");
    		 
    		 //  THIS IS THE DEFAULT TEMPLATE/ROUTE THAT GETS LOADED FOR THE APPLICATION AND WE DON NOT WANT TO DISPLAY ANYTHING THAT IS NOT READY,
    		 //  WE CAN USE THE MySweetEmberApp.MyApplication's StateManager to determine if it is ok, OR, what we need to render TEMPLATE wise so that the statemanager reaches
    		 //  READY state
    		 if(currState == 'ready')
    		 {
    		 	// this.render will simply render the template associated with this Route, in this case INDEX
    		 	this.render();

    		 }
    		 else
    		 {
    		 	this.transitionTo(currState);
    		 }
    		 
   },
    
	//(If you don't explicitly define an IndexController, Ember.js will automatically generate one for you; NOW ISNT THAT SWEEEEET)
	setupController: function(controller){


	}
});
