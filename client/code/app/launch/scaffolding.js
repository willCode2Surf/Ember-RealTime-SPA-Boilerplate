/**
 * @author dwbrown
 */


// SIMPLE LOGGER OBJECT THAT WE CAN CREATE AND REGISTER WITH THE APPLICATION FOR INJECTION
App.Logger = Ember.Object.extend({
  log: function(message) {
    console.log(message);
  }
});

App.register('logger:main', App.Logger);

// ADDS ABILITY TO CALL .log("") and any other App.Logger functions on every model, view, and controller that the application creates.
//)
App.inject('model', 'logger', 'logger:main');
App.inject('view', 'logger', 'logger:main');
App.inject('controller', 'logger', 'logger:main');
  
App.Msg = Ember.Object.extend({
  log: function(message) {
    console.log(message);
  }
});
