/**
 * @author dustin brown (@willcode2surf) http://willcode2surf.com
 */

// This file automatically gets called first by SocketStream and must always exist


// Make 'ss' available to all modules and the browser console
window.ss = require('socketstream');
// could easily add additional node modules that ember can exploit like this as well.... take note

ss.server.on('disconnect', function(){
  console.log('SOCKET CONNECTION LOST');
});

ss.server.on('reconnect', function(){
  console.log('SOCKET CONNECTION ESTABLISHED');
});



ss.server.on('ready', function(){

  // Wait for the DOM to finish loading
  jQuery(function(){
    
    // APPLICATION LAUNCH POINT
    require('/app');
  });

});
