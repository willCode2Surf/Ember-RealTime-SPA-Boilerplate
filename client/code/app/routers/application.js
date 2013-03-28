//  EMBER CREATES THE ROUTER FOR US WHEN WE CREATED THE APPLICATION
//  That said, now we need to identify some base routes that we can use as examples
//  to see how routing and transitions work as well as outlet intergration

//  EMBER has a location API option that can be configured for the router.  The router can 
//  be configured to use hashtag, location, or none as a mechanism for mapping url's out.
//  This is configured on the reopen function, this is implemented below

MySweetEmberApp.Router.reopen({
	//HASHCHANGE is the default and is the fastest way to do routing.  Since this is default we do not have to make
	//any changes to this method but if we wanted to use the browser HISTORY then we could uncomment the history.  If we didnt want any location API support
	//we can uncomment none.
	
	// The differences in these URL mapping approaches is easy to distinguish.  If we had a template for our contacts then here would be the ways those URLS would appear
	// HASHCHANGE URL:	  /#/contacts
	// LOCATION URL:	  /contacts
	
	// NOTE: you can tell the Router use the browser's history API
	//location: 'history'
	// NOTE: if you don't want the browser's URL to interact with your application at all, you can disable the location API entirely. This is useful for testing, or when you need to manage state with your Router, but temporarily don't want it to muck with the URL
	//location: 'none'
});

MySweetEmberApp.Router.map(function() {
	
	// There are two ways to handle basic routes.  The easiest approach is to let ember do the heavy lifting.  Define a route just by providing the template name and the router will listen for that URL and display the correct template when the handler is triggered. 
	// ex1.  this.route("contacts");  this would resolve to the URL /contacts
	
	// The second way is a nice display of the flexability we get with Ember and how we can DRY up our coding by using different paths for specific templates.  This approach we provide the initial template as we did the first time, BUT
	// now we get to provide an option that defines the path to listen for.  You will use both of these approaches often.  In the ex2 below, the router will display the TEMPLATE when the URL matches /PATHTOLISTENFOR  
	// ex2.  this.route("contacts", path: 'contactlist');
	
	// try both of these routes and see the same template rendeared on the client
	//this.route("contacts");
	//this.route("contacts", { path: 'contactlist' });
	
	// some base routes i like to bake in
	this.route("load", {path: 'loading'});
	this.route("splash");
	this.route("about");
	this.route("devsupport");
	this.route("initialize");
	this.route("admin");
	
	
	
	
  	this.resource('cepps', {path: '/cepps'}, function() {
    	this.route('new');
    	this.resource('cepp', {path: '/:cepp_id'}, function() {
      		this.route('edit');
    	});
  	});
	
	
	

});





Ember.TEMPLATES['items'] = Ember.Handlebars.compile('<div class="row-fluid"><div class="span10 offset1"><h1>items</h1>{{outlet}}</div></div>');
Ember.TEMPLATES['items/index'] = Ember.Handlebars.compile('{{#linkTo "items.new"}}NEW{{/linkTo}}<p>item list</p><ul>{{#each item in controller}}<li>{{#linkTo "item" item}}{{item.name}}{{/linkTo}}</li>{{/each}}</ul>');
Ember.TEMPLATES['item'] = Ember.Handlebars.compile('<p>this is item </p><hr>{{outlet}}');
Ember.TEMPLATES['item/index'] = Ember.Handlebars.compile('{{#linkTo "item.edit" controllers.item.content}} edit the item {{/linkTo}}{{item.name}} from item/edit');
Ember.TEMPLATES['item/edit'] = Ember.Handlebars.compile('<p>item/edit</p><form {{action save on="submit"}}><p><label for="name"> name </label><br>{{view Ember.TextField valueBinding="name" id="name"}}</p><p><button type="submit">Save</button></p></form>');



App.ItemsIndexController = Ember.ArrayController.extend();
App.ItemsIndexRoute = Ember.Route.extend({
  
  events: {
      doStuff: function(e) {
         alert("Do stuff");    
  	}
  },
  
  setupController: function(controller, model)
  {
  		controller.set('content', model);
  },
  
  model: function() {
  	
    return App.store.find(App.Item);
  }
});
App.ItemsNewRoute = Ember.Route.extend({

 
  renderTemplate: function() {
    this.render('item/edit', {controller: 'itemsNew'});
  },

  model: function() {
  	//console.log("creating record");
  	//var templateObj =  App.Template.createRecord();
    //console.log("NEWLYCREATEDTEMPLATOBJ", templateObj);
    var itemObj = App.store.createRecord(App.Item, { name: '(unnamed)' });
	App.store.commit();
    return itemObj;
  }
});

App.ItemIndexRoute = Ember.Route.extend({
  
  
  
  setupController: function(controller, model)
  {
  		controller.set('content', model);
  },
  
  model: function(params) {
  	//console.log(params);
  	var id = params.item_id;
  	var tempObj = App.store.find(App.Item, id);
  		
    return tempObj;
  }
});


App.ItemEditController = Ember.ObjectController.extend({

  needs: "item",
  save: function() {
  	console.log("SAVING ITEM");
    App.store.commit();
    
  }

});

App.ItemIndexController = Ember.ObjectController.extend({

 // needs: "item",
  save: function() {
  	console.log("SAVING ITEM");
    var response = App.store.commit();
    console.log("RESPONSE", response);
    
  }

});



// IF THERE IS SPECIFIC OVERRIDES FOR ROUTING BEHAVIOR, include the require here for those ROUTES
require('/routers/indexroute');

