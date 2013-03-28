exports.actions = function(req, res, ss, MySweetEmberApp){

	req.use('session');
	
	function GUID ()
	{
    	var S4 = function ()
    	{
        	return Math.floor(
                	Math.random() * 0x10000 /* 65536 */
            	).toString(16);
    	};

		    return (
		            S4() + S4() + "-" +
		            S4() + "-" +
		            S4() + "-" +
		            S4() + "-" +
		            S4() + S4() + S4()
		        );
	};
	
	// PUBLIC API STUFF!
	return {
		
		authenticate: function(username, password, clientToken){
			
			console.log("Authenticating ... ");
			
			// try against our static un/pw for development
			var STusername = "tecmo";
			var STpassword = "ballers";
			
			if(username == 'tecmo'){
				
				// SET UP THE USER PROFILE AND SEND THEM TO THE RIGHT PLACE OVER PUBSUB ROUTE ALERT
				var udid = GUID(); 
				try{
					req.session.setUserId(udid);
				} catch(err)
				{
					console.log(err);
				}
				console.log(udid);
				console.log(req.session.userId);
				
				

				// Adding to store the token in the session
				req.session.token = udid;
				req.session.save();
				
				ss.publish.all('state',"state.loggedin");
				ss.publish.all('notice', { header: "Account Activity", message: "Logged In!", level: 3, read: false});
				ss.publish.all('notice', "DUSTIN SAYS YOLO");
			
				res(udid);
			}
			else {
				res(null);
			}
			
			
		},
		
		
		// Used by the client when an existing token is found in the local storage;
		// this token still needs to be checked for validity and made accessible
		// to the session object.
		checkToken : function(token) {

			// Check validity later
			var goodTokenOrUser = { isValidToken :  true };
			var badTokenOrUser  = { isValidToken :  false };
			
		
		},
		
		logout: function() {
			req.session.setUserId(null);
		}
  }
}
