exports.actions = function(req, res, ss, MySweetEmberApp){
	
	req.use('session');
	
	
	var appInfo = {

		"name": "Best Damn App Period",
		"dev": "Dustin Brown @willCode2Surf",
		"target": "iOS",
		"build date": "3/22/13 12:01 PM",
		"info": "Latest BETA release"
		
	};

  // return list of actions which can be called publicly
  return {
	  	// take a single application identifier, then pull those details for RIAK, respond back over the wire (IF YOU ARE USING AWESOME RIAK)
	  	// for this demo it will simply be some fixture data
	  	getAppDetails: function(){
	    	 
		   res(appInfo);
		   
	   },
	   getApplicationDetails: function(){
	    	 
		   res(appInfo);
		   
	   }
	
  	}
}
