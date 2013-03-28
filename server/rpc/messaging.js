exports.actions = function(req, res, ss, MySweetEmberApp){
	
	req.use('session');
	
	
  	// return list of actions which can be called publicly
  	return {
  		
  		messagingAvailable: function()
  		{
  			// IF AN RPC CALL CAN MAKE THIS THEN BY DEFAULT THE ANSWER IS GOING TO BE TRUE!
  			res(true);
  		},

    
    	broadcastAll: function(channel, message) {
    			ss.publish.all(channel, message);
    			console.log('BROADCASTALL', channel, message);
    			   	  
   		},
   		
   		subscribePrivateChannel: function(channel) {
   			req.session.channel.subscribe(channel); 
   		},
   		
   		unSubscribePrivateChannel: function(channel) {
   			req.session.channel.unsubscribe(channel); 
   		},
   		
   		resetPrivateChannels: function() {
   			req.session.channel.reset(); 
   		},
   		
   		listPrivateChannels: function() {
   			req.session.channel.list(); 
   			console.log("PRIVATE CHANNEL LIST", req.session.channel.list());
   		},
   		
   		broadcastAuthenticatedUser: function(channel, message) {
   			req.session.channel.list(); 
   			ss.publish.user(req.session.userId, channel, message);
   			//console.log("PRIVATE CHANNEL LIST", req.session.channel.list());
   		},
   		
   		broadcastPrivate: function(channel, message, payload) {
    			ss.publish.all(channel, message);
    			console.log('BROADCASTALL', channel, message);
    			   	  
   		}
   
  	}
}
