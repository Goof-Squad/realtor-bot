var SlackBot = require("slackbots");
    var channel = "general";

    var bot = new SlackBot({
        token: "xoxb-450841990886-449315733300-wTAbCRNDa7A3mTjZcXBitRva",
        name: "Slacky"
    });

    bot.on("start", function() {
        bot.postMessageToChannel(channel, "Hello world!");
        console.log("Hello world!");
    });