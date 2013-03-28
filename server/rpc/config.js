exports.actions = function(req, res, ss, AGRIX){
	
	req.use('session');
	
	var RiakSearch = require('nodiak').getClient("http", "node1-svr", 8080);  
    
    
	var AgenciesBucket =  RiakSearch.bucket('Agencies');
	var InsuredsBucket =  RiakSearch.bucket('Insureds');
	

  // return list of actions which can be called publicly
  return {

    
    getInitialLocalStorageConfig: function(name){
    	 
    	 // grab from riak
    	 console.log('FIND INSURED: ' + name)
    	  var query = {
    	  	q: name,
    	  	rows: 1000
    	  };
    	  	
    	  InsuredsBucket.search.solr(query, function(err, response) {
    	  	if (err) {
    	  		console.warn(err);
    	  	} else {
    	  		console.log(response.response.docs);
    	  		res(response.response.docs);
    		}
    	});
    },
    
    findAgency: function(name){
    	 
    	 // grab from riak
    	 console.log('FIND AGENCY: ' + name)
    	  var query = {
    	  	q: name,
    	  	rows: 1000
    	  };
    	  	
    	  AgenciesBucket.search.solr(query, function(err, response) {
    	  	if (err) {
    	  		console.warn(err);
    	  	} else {
    	  		console.log(response.response.docs);
    	  		callback(response.response.docs);
    		}
    	});
    },
    
    findAgencyDetail: function(agencyId){
    	 
    	 var my_keys = [agencyId];
    	 AgenciesBucket.objects.get(my_keys, { r: 1 }, function(err, obj) {
    	 	console.log(obj.data);
        	res(obj.data);
   	     });
    },
    
   
  }
}
