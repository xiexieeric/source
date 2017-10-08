var accountSid = ''; //enter your accountSid here
var authToken = ''; //enter you authToken here

var client = require('twilio')(accountSid, authToken);

client.calls.create({
  url: 'http://demo.twilio.com/docs/voice.xml', //enter your own url here
  to: '+17038513868',
  from: '+12402452818'
}, function(err, call) {
  if(err) {
    console.log(err);
  } else {
    console.log(call.sid);
  }
})
