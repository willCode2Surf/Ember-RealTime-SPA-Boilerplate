/**
 * @author dwbrown
 */
App.templateController = Ember.ArrayController.extend({
	
	// loads the last default saved list
    content: null,
    selected: null,
    
   
    
    saveIfUpdates: function() {
      	
     	if (this.get("unsavedUpdatesPresent")) {
           	this.set("unsavedUpdatesPresent", false);
            ///App.Insured.saveAll();
       	}
    },
   
   
	loadTemplatesFromServer: function(applicationObj)   {
		
		// fire off a worker thread that will handle this task
	},
	
	loadTemplatesFromStorage: function(key)   {
		
		// grab from local storage
	},
	
	insertTemplate: function(templateObj) {
		// add template object 
		// handle routing, route definitions
		// compile and add to ember templates
		// make it cacheable
	},
	
	removeTemplate: function(templateObj) {
		// remove template object 
		// clean up and remove routing, route definitions
		// remove from ember TEMPLATES object
		// remove from and regroom the cache for best performance
	},
	
	previewTemplateOutput: function(templateObj) {
		//rendear and return the compiled output for the template obj
	}
});
