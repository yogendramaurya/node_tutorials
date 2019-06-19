Improved Development ::

NPM - package manager for javascript
------------------------------------------------------------
npm init    - provide startup new project and ask some query and create 
package.json file
------------------------------------------------------------
This generate json file like below
{
  "name": "nodejs-startup-tutorial",
  "version": "1.0.0",
  "description": "Complete Startup Steps",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "yogendra kumar",
  "license": "ISC"
}

you can config your own script as well within scripts object.

{
  "name": "nodejs-startup-tutorial",
  "version": "1.0.0",
  "description": "Complete Startup Steps",
  "main": "app.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node app.js"
  },
  "author": "yogendra kumar",
  "license": "ISC"
}

then you can run
npm start or npm run start instead of node app.js

------------------------------------------------------------
Install 3rd Party npm & packages
------------------------------------------------------------

npm install nodemon --save  (install as production )
npm install nodemon --save -dev (install as dev )
npm install nodemon --save -g (install as global not in this project )

Third-party Modules need to be installed (via npm install in the project folder) AND imported.

Example :

    // In terminal/ command prompt
    npm install --save express-session

    // In code file (e.g. app.js)
    const sessions = require('express-session');
------------------------------------------------------------
Nodemon - Great package to auto restart application while development
------------------------------------------------------------

Type of error
---------------
1 . Syntax Error
2 . Runtime Error
3 . Logical Error


Start Debug in nodejs in Visual Code
- > visual studio code : debug->start debugging or f5
view->Debug

Useful resources:

    More on debugging Node.js: https://nodejs.org/en/docs/guides/debugging-getting-started/

    Debugging Node in Visual Studio Code: https://code.visualstudio.com/docs/nodejs/nodejs-debugging