Ember.TEMPLATES['testobjects'] = Ember.Handlebars.compile('{{outlet}}<div class="modal">{{outlet modal}}</div>');
Ember.TEMPLATES['testobjects/index'] = Ember.Handlebars.compile(""+
"{{#view App.ModalView}}"+
"<div class='modal-header'><h1>TestObject page</h1></div>"+
"<div class='modal-body'>"+
"<ul>"+
	"{{#view App.ScrollView}}{{#each testobject in controller}}"+
	"<li>{{#linkTo 'testobject' testobject}}{{testobject.title}}{{/linkTo}}</li>"+
		"{{else}}"+
	"<li>No test objects yet! Why dont you add one.</li>"+
	"{{/each}}{{/view}}"+
"</ul></div>"+
	"<div class='modal-footer'>"+
	"{{#linkTo 'testobjects.new' class='btn' data-toggle='modal'}}Add testobject{{/linkTo}}"+
	"<a href='#testobjectModal' role='button' class='btn' data-toggle='modal'>Launch demo modal</a></div>"+
	"{{/view}}"+
	"<div id='testobjectModal' class='modal hide fade' tabindex='-1' role='dialog' aria-labelledby='testobjectModal' aria-hidden='true'>"+
		"<div class='modal-header'>"+
			"<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>"+
				"×"+
			"</button>"+
			"<h3 id='testobjectModal'>The first modal</h3>"+
		"</div>"+
		"<div class='modal-body'>"+
			"<a href='#testobjectModal2' role='button' class='btn' data-toggle='modal' data-backdrop='false'>Launch the inside modal</a>"+
			"<div id='testobjectModal2' class='modal hide ' tabindex='-1' role='dialog' aria-labelledby='testobjectModal2' aria-hidden='true'>"+
				"<div class='modal-header inside'>"+
					"<button type='button' class='close' data-dismiss='modal' aria-hidden='true'>"+
					"×"+
					"</button>"+
					"<h3>The second modal</h3>"+
			"</div>"+
			"<div class='modal-body inside'>"+
				"<p>One fine body…</p>"+
			"</div>"+
			"<div class='modal-footer inside'>"+
				"<a href='#testobjectModal' role='button' class='btn' data-dismiss='modal'>Back</a>"+
				"<button class='btn' data-dismiss='modal' aria-hidden='true'>Close</button>"+
				"<button class='btn'>Save changes</button>"+
			"</div>"+
		"</div>"+
	"</div>"+
		"<div class='modal-footer'>"+
			"<button class='btn' data-dismiss='modal' aria-hidden='true'>Close</button>"+
			"<button class='btn'>Save changes</button>"+
		"</div>"+
	"</div>");
Ember.TEMPLATES['testobject'] = Ember.Handlebars.compile(""+
	"{{#view App.ModalView}}"+
	"<div class='modal-header'><h1>{{title}}</h1></div>"+
	"<div class='modal-body'>{{body}}</div>"+
	"</br></br>"+	
	"<div class='modal-footer'>"+
	"<button class='btn'>{{#linkTo 'testobjects'}}Back{{/linkTo}}</button>"+
	"{{#linkTo 'testobject.edit' content class='btn'}}Edit{{/linkTo}}</div>"+	
	"<div class='modal'>{{outlet}}</div>"+
	"{{/view}}");
Ember.TEMPLATES['testobjects/form'] = Ember.Handlebars.compile(""+
"<div id='dmodal'>"+
	"<div class='modal-header'>"+		
		"<div class='button close btn-dismiss' {{action cancel content}}>"+
			"x"+
		"</div>"+
		"<h2 class='app-icon-large'>Enter your new lil object</h2>"+
		"<h5>Your title is: {{content.title}}</h5>"+
	"</div>"+
	"<div class='modal-body'>"+
		"<div class='control-group'><label class='control-label' for='testobject-title'>Title</label><div class='controls'>{{view Em.TextField elementId='testobject-title' valueBinding='content.title'}}</div></div>"+
		"<div class='control-group'><label class='control-label' for='testobject-body'>Body</label><div class='controls'>{{view Em.TextField elementId='testobject-body' valueBinding='content.body'}}</div></div>"+
	"</div>"+
	"<div class='modal-footer'>"+
		"<a class='btn btn-dark' href='javascript;:' {{action cancel content}}>Cancel</a>"+
		"<button class='btn btn-success' type='submit' {{action submit content}}>Save</button>"+
	"</div>"+
"</div>");
Ember.TEMPLATES['testobject/edit'] = Ember.Handlebars.compile(""+
"<div id='dmodal'>"+
	"<div class='modal-header'>"+
		"<div class='button close btn-dismiss' {{action cancel content}}>"+
			"x"+
		"</div>"+
		"<h2 class='app-icon-large'>Wow you made it to edit mode</h2>"+
		"<h5>{{content.title}}</h5>"+
	"</div>"+
	"<div class='modal-body'>"+
		"<div class='control-group'><label class='control-label' for='testobject-title'>Title</label><div class='controls'>{{view Em.TextField elementId='testobject-title' valueBinding='title'}}</div></div>"+
		"<div class='control-group'><label class='control-label' for='testobject-body'>Body</label><div class='controls'>{{view Em.TextField elementId='testobject-body' valueBinding='content.body'}}</div></div>"+
	"</div>"+
	"<div class='modal-footer'>"+
		"<a class='btn btn-dark' href='javascript;:' {{action cancel content}}>Cancel</a>"+
		"<button class='btn btn-success' type='submit' {{action submit content}}>Save</button>"+
	"</div>"+
"</div>");
//Ember.TEMPLATES['testobject/edit'] = Ember.Handlebars.compile("<!-- Modal --><div id='dModal' class='modal hide fade' tabindex='-1' role='dialog' aria-labelledby='dModalLabel' aria-hidden='true'><div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-hidden='true'>×</button><h3 id='myModalLabel'>{{title}}</h3></div><div class='modal-body'><!-- FORM --><form class='form-horizontal'><div class='control-group'><label class='control-label' for='inputEmail'>Title</label><div class='controls'>{{view Ember.TextField valueBinding='title'}}</div></div><div class='control-group'><label class='control-label' for='inputPassword'>Body</label><div class='controls'>{{view Ember.TextField valueBinding='body'}}</div></div></form></div><div class='modal-footer'><a class='btn btn-dark' href='javascript;:' {{action cancel content}}>Cancel</a><button class='btn btn-success' type='submit' {{action submit content}}>Save</button></div></div>");
//<!-- Modal --><div id='dModal' class='modal hide fade' tabindex='-1' role='dialog' aria-labelledby='dModalLabel' aria-hidden='true'><div class='modal-header'><button type='button' class='close' data-dismiss='modal' aria-hidden='true'>×</button><h3 id='myModalLabel'>{{title}}</h3></div><div class='modal-body'><!-- FORM --><form class='form-horizontal'><div class='control-group'><label class='control-label' for='inputEmail'>Title</label><div class='controls'>{{view Ember.TextField valueBinding='title'}}</div></div><div class='control-group'><label class='control-label' for='inputPassword'>Body</label><div class='controls'>{{view Ember.TextField valueBinding='body'}}</div></div></form></div><div class='modal-footer'><a class='btn btn-dark' href='javascript;:' {{action cancel content}}>Cancel</a><button class='btn btn-success' type='submit' {{action submit content}}>Save</button></div></div>

App.Router.map(function() {
	console.log("INITIALIZING TESTOBJECT ROUTES");
	this.resource('testobjects', {path: '/testobjects'}, function() {
    	this.route('new');
    	this.resource('testobject', {path: '/:testobject_id'}, function() {
      		this.route('edit');
    	});
	});
});


//App = Ember.Application.create()

// routing will output to console any route changes [DISABLE PRODUCTION]
//App.LOG_TRANSITIONS = true


// set up ember data to use fixture adapter


// models
// TestObject
App.TestObject = DS.Model.extend({
  title: DS.attr('string'),
  body: DS.attr('string')
});

//start with no testobjects
App.TestObject.FIXTURES = [ ];


// router handlers where not the default or needed
// go straight to testobject 
//App.IndexRoute = Ember.Route.extend({
//  redirect: this.transitionTo('testobjects')
//});

// alternatively you could set model in TestObjectRoute
// then use needs in TestObjectsIndexController
// but doing this for brevity
App.TestobjectsIndexRoute = Ember.Route.extend({
	
	model: function() {
		return App.TestObject.find();
	}	
});

// form mixin used by both new and edit
// mixin, so new and edit can use same template/view
App.TestobjectsFormable = Ember.Mixin.create({
  renderTemplate: function() {
  	this.render('testobjects/form', { outlet: 'modal' })
  },
  events:{
		cancel: function(testobject) {
			testobject.transaction.rollback();
			this.transitionTo('testobjects');
		},
		submit: function(testobject) {
			//# TODO: add validation handling
			testobject.get('store').commit();
			if (testobject.didCreate)
				this.transitionTo('testobjects');
		}
	}
});
		
		
// see mixins/TestObjectsFormable
App.TestobjectsNewRoute = Ember.Route.extend( App.TestobjectsFormable, {
	renderTemplate: function() {
  		this.render('testobjects/form', { outlet: 'modal' })
  },
	model: function() {
		return App.TestObject.createRecord();
	}
});

// see if this is better handled by needs in controller
// needs seems to work very nicely
App.TestobjectEditRoute = Ember.Route.extend({
	init: function(){
		console.log("TestobjectEditRoute called");
		//this.controllerFor("testobject").set('content', this.model);
	},
	renderTemplate: function() {
  		this.render('testobject/edit');
  },
  
	model: function(params)
	{
		console.log("LOADING MODEL", this.modelFor('testobject'));
		var testObjectObj = this.modelFor('testobject');
		console.log("ID:", testObjectObj.id);
		//testObjectObj = App.TestObject.find(params.testonject_id);
		return testObjectObj;
  },
   events:{
		cancel: function(testobject) {
			testobject.transaction.rollback();
			this.transitionTo('testobjects');
		},
		submit: function(testobject) {
			//# TODO: add validation handling
			testobject.get('store').commit();
			if (testobject.didCreate)
				this.transitionTo('testobjects');
		}
	},
	didInsertElement: function() {
		console.log("SHOW MODAL");
		$("#dModal").modal('show');
	},
	willDestroyElement: function(){
		console.log("HIDE MODAL");
		$("#dModal").modal('hide');//('hide');
	}
});

// App.TestObjectRoute route handler is implied

// views
// form view
App.TestobjectFormView = Em.View.extend({
	tagName: 'form',
	classNames: 'modal hide fade in form-custom-field-modal',
	didInsertElement: function() {
		console.log("SHOW MODAL");
		$("#dModal").modal('show');
	},
	willDestroyElement: function(){
		console.log("HIDE MODAL");
		$("#dModal").modal('hide');//('hide');
	}
});

App.ModalView = Ember.View.extend({
  layoutName: 'my_modal_layout',
});

App.ScrollView = Ember.View.extend({
  layoutName: 'my_scroll_listing',
});

