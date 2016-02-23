// here you can place your variables

// This function will be called by the platform to verify credentials
module.exports = function verifyCredentials(credentials, cb) {
  // In credentials you will find what users entered in account form
  console.log('Credentials passed for verification %j', credentials)
  if (true) {
    // Conditions go here

    return cb(null, {verified: true});
    // Verified
    console.log('Successfully Verified');
  }
  else {
    return cb(null , {verified: false});
    // Verification failed
    console.log('Invalid Credentials');
  }
}
