// here you can place your variables
var Pipedrive = require('pipedrive');

// This function will be called by the platform to verify credentials
module.exports = function verifyCredentials(credentials, cb) {
  // In credentials you will find what users entered in account form
  console.log('Credentials passed for verification %j', credentials)
  var pipedrive = new Pipedrive.Client(credentials.apitoken);
  pipedrive.Currencies.getAll({}, function(error, result) {
  	if (error == null) {
	    return cb(null, {verified: true});
  	} else {
	  	return cb(error, {verified: false});
  	}
  });
}
