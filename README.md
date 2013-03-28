TO INSTALL, open a console and install all the node modules
npm install

This will install all the dependencies as well as launch the application when finished.

TO RUN, or if you are restarting the application then you can run from the command line
npm start or node app

Other command line support for dev/test/stage environments as well as unit testing, etc
npm test, npm dev, etc


ONCE the application is started you can begin viewing the app in your brower at:
https://localhost:2112

If liveReload is not disabled (it is enabled by default in this stack) then changes to any client code you make will
be picked up by the server and added to your browser.  This will cause a refresh.  CSS changes will not cause a refresh 
and will happen inline.

If you modify any code in the server portion then I would recommend manually restarting the node service when you are completed with all the server changes.
As an alternative, you can install [nodemon] which will monitor the server files and restart the node instance itself.  This was problematic for me in the dev
cycles but might be worth having run your stuff in production.  If node crashes for any reason it will start it back up for you.


### .jshintrc
This project uses [JSHint](http://www.jshint.com/) for
[linting](http://en.wikipedia.org/wiki/Lint_(software\)) to enforce coding
standards. These settings are stored as a dot file so that while developing you 
can connect up to your IDE as well as the build process.

### .gitignore
This project is managed with git. There are some files that don't
need to be checked into version control.
  
  * Development dependencies - specifically the node_modules folder should be excluded from checkins.
  * .project is an Aptana artifact, if you are not using Aptana then this file should not even exist.

