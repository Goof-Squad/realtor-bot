var RtmClient = require('@slack/client').RtmClient;
var CLIENT_EVENTS = require('@slack/client').CLIENT_EVENTS;
var RTM_EVENTS = require('@slack/client').RTM_EVENTS;

var rtm = new RtmClient('xoxb-450841990886-449315733300-wTAbCRNDa7A3mTjZcXBitRva');
rtm.start();

let channel;
let bot;

rtm.on(CLIENT_EVENTS.RTM.AUTHENTICATED, (rtmStartData) => {
  for (const c of rtmStartData.channels) {
      if (c.is_member && c.name ==='jamiestestchannel') { channel = c.id }
  }
  console.log(`Logged in as ${rtmStartData.self.name} of team ${rtmStartData.team.name}`);
   
  bot = '<@' + rtmStartData.self.id + '>';
});

rtm.on(RTM_EVENTS.MESSAGE, function(message) {
    if (message.channel === channel)
        rtm.sendMessage("oof", message.channel);
});