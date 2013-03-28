exports.actions = function(req, res, ss, AGRIX){
	
	
	var RiakEngine = require('nodiak').getClient("http", "node1-svr", 8080); 
	var clientvisit =  RiakEngine.bucket('ipadClientVisit');
	var clientgeo =  RiakEngine.bucket('yologeo');
	 
	
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
	
	return {
		
		// return a token specific for this client after device profile has been added
		visit: function(guid, dtime, datetime){
			
			
			//ss.publish.all('clientvisit.new',  "{ GUID:" + guid + "}");
			//ss.publish.all('notification', {id: 001, title: "LOG IN", message: "THIS IS YOUR ALERT MESSAGE: " + guid, type: "ALERT", read: false });
			var token_robj = clientvisit.object.new(guid, dtime);
			var objs = [token_robj];
			
			var ptoken_robj = RiakEngine.bucket(guid + '_visits').object.new(datetime,dtime);
			var pobjs = [ptoken_robj];
			
			clientvisit.objects.save(objs, function(errs, objs) {
    			//console.log(objs);
    			if(errs)
    				console.warn(errs);
    				
    			RiakEngine.bucket(guid + '_visits').objects.save(pobjs, function(errs, pobjs) {
    			//console.log(objs);
    			if(errs)
    				console.warn(errs);
    			
			});
    			
			});
			
			res("OK");

		},
		
		geo: function(position, clientToken, accountToken, applicationToken){
			
		
			var date = new Date()
			var ticks = date.getTime()
			
			//ss.publish.all('geo.new.entry',  "{ CLIENTGUID:" + clientToken + "}");
		
            
          console.log(ticks);
			console.log(position.coords.latitude);
			console.log(position.coords.longitude);
			
			var token_robj = clientgeo.object.new(ticks,{ "id": ticks, "client_guid": clientToken, "latitude": position.coords.latitude, "longitude": position.coords.longitude,"accuracy": position.coords.accuaracy, "altitude": position.coords.altitude,
            			  "altitude_accuracy": position.coords.altitudeAccuracy,"heading": position.coords.heading,"speed": position.coords.speed, "datetime": position.timestamp});
			
			//"latitude": position.coords.latitude, "longitude": position.coords.longitude,"accuracy": position.coords.accuaracy, "altitude": position.coords.altitude,
            	//		  "altitude_accuracy": position.coords.altitudeAccuracy,"heading": position.coords.heading,"speed": position.coords.speed, "datetime": position.timestamp ,"guids": clientToken }
			//var token_robj = clientgeo.object.new(guid, {"id": guid, "latitude": 'position.coords.latitude', "longitude": 'position.coords.longitude'});/*"accuracy": position.coords.accuaracy, "altitude": position.coords.altitude,
            //			  "altitude_accuracy": position.coords.altitudeAccuracy,"heading": position.coords.heading,"speed": position.coords.speed, "datetime": position.timestamp ,"guids": clientToken });
            //			  */
			//console.log("GEODATA"+token_robj);
			var objs = [token_robj];
			
			clientgeo.objects.save(objs, function(errs, objs) {
    			//console.log(objs);
    			if(errs)
    				console.warn("ERROR:  COULD NOT SAVE GEO INFO"+ errs);
    				
    			//RiakEngine.bucket(clientToken + '_geohits').objects.save(ticks,objs, function(errs, objs) {
    			//console.log(objs);
    			//if(errs)
    		//		console.warn(errs);
    			
			//});
    			
			});
			
			res("OK");

		}
  }
}
