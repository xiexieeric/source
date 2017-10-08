var accountSid = 'AC0810ada4bde9751741eceebf74e3b462';
var authToken = '83c7a1972e0d72afb3b66a058e2bf7e4';

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
