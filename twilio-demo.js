const twilio = require('twilio');
let client = new twilio(accountSid, authToken);

client.messages.create({
    body: 'Hello from Node',
    to:   '+14155550000',     // your real-world cell number
    from: '+14155551111'      // your Twilio phone number
})
.then((message) => console.log(message.sid));
