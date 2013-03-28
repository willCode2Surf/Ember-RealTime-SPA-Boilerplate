exports.actions = function(req, res, ss, MySweetEmberApp){
	
	req.use('session');
	
  // return list of actions which can be called publicly
  return {

    
    broadcast: function(clientToken, accountToken, message){
    	 
    	 // grab from riak
    	 console.log('BROADCAST FOR ACCOUNT: ' + accountToken);
    	 //ss.publish.all('new.notification', message); 
    }
   
  }
}
